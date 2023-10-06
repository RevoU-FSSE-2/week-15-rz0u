import pkg from "body-parser";

const { json, urlencoded } = pkg;
export default function applyBodyParser(app) {
  // Parse incoming request bodies in a middleware before your handlers, available under the req.body property
  app.use(json());
  app.use(urlencoded({ extended: true }));
}
