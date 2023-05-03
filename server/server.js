import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.use("/assets", express.static(__dirname + "/dist/assets"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const frontPort = 8081;
app.listen(frontPort, () => {
  console.log(`Server listening on http://localhost:${frontPort}`);
});
