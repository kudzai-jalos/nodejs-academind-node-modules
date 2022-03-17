import fs from "fs/promises";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const root = (req, res, next) => {
  fs.readFile("my-page.html", "utf-8")
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
  // res.sendFile(
  //   path.join(dirname(fileURLToPath(import.meta.url)), "my-page.html")
  // );
};

// export default root;
