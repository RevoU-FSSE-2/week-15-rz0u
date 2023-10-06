import applyHelmet from "./helmet.js";
import applyBodyParser from "./bodyParser.js";
import requestId from "./requestId.js";
import customCors from "./cors.js";

export default function applyMiddleware(app) {
  app.use(customCors);
  applyHelmet(app);
  app.use(requestId);
  applyBodyParser(app);
}
