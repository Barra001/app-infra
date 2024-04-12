import * as express from "express";
import { initEndpoints } from "./endpoints";
import cors from "cors";

// eslint-disable-next-line @typescript-eslint/no-floating-promises
(async (): Promise<void> => {
  const port = 3000;

  const app = express.default();

  app.use(
    cors({
      origin: "*",
      methods: ["GET", "POST", "PUT", "DELETE"],
      allowedHeaders: ["Content-Type", "Authorization"],
    })
  );

  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.setHeader(
      "Access-Control-Allow-Headers",
      "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    res.setHeader("Access-Control-Expose-Headers", "*");
    next();
  });

  app.use(express.json());
  app.use((await initEndpoints()));
  app.listen(port);

  console.log(`Main app started at http://localhost:${port}`);
})();
