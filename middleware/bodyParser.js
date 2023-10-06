import { json, urlencoded } from "body-parser";

export default function (app) {
  // Parse incoming request bodies in a middleware before your handlers, available under the req.body property
  app.use(json());
  app.use(urlencoded({ extended: true }));
}
