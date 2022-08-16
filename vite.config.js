import path from "path";
const isGitHubPages = true;
const folderName = path.basename(process.cwd()) + "/";
const mode = process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "/" + folderName : "/";

export default {
  root: "src",
  base,
  mode,
  publicDir: "../public",
  build: {
    outDir: "../dist",
    assetsDir: "./"
  }
};
