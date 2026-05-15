import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const port = Number(process.argv[2] || process.env.PORT || 4173);

const mimeTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".md", "text/markdown; charset=utf-8"]
]);

function safeTarget(url) {
  const pathname = decodeURIComponent(new URL(url, "http://localhost").pathname);
  const relativePath = pathname === "/" ? "index.html" : pathname.replace(/^\/+/, "");
  const target = path.resolve(root, relativePath);
  const relativeToRoot = path.relative(root, target);
  if (relativeToRoot.startsWith("..") || path.isAbsolute(relativeToRoot)) {
    return null;
  }
  return target;
}

const server = createServer(async (request, response) => {
  try {
    const target = safeTarget(request.url || "/");
    if (!target) {
      response.writeHead(403);
      response.end("Forbidden");
      return;
    }

    const info = await stat(target);
    const filePath = info.isDirectory() ? path.join(target, "index.html") : target;
    const ext = path.extname(filePath).toLowerCase();
    const file = await readFile(filePath);
    response.writeHead(200, {
      "Content-Type": mimeTypes.get(ext) || "application/octet-stream",
      "Cache-Control": "no-store"
    });
    response.end(file);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Chronicle Quest running at http://127.0.0.1:${port}`);
});
