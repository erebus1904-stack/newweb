import http from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { basename, dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = resolve(fileURLToPath(new URL(".", import.meta.url)));
const root = basename(scriptDir) === "_private" ? dirname(scriptDir) : scriptDir;
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8"
};

const securityHeaders = {
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
};

function resolvePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0]);
  if (cleanPath === "/_private" || cleanPath.startsWith("/_private/")) {
    return "";
  }
  const requested = cleanPath === "/" ? "/index.html" : cleanPath;
  const fullPath = resolve(normalize(join(root, requested)));
  return fullPath.startsWith(root) ? fullPath : join(root, "index.html");
}

http
  .createServer((req, res) => {
    const filePath = resolvePath(req.url || "/");
    if (!existsSync(filePath) || statSync(filePath).isDirectory()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8", ...securityHeaders });
      res.end("Not found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": types[extname(filePath)] || "application/octet-stream",
      ...securityHeaders
    });
    createReadStream(filePath).pipe(res);
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`PassGrid preview running at http://127.0.0.1:${port}`);
  });
