import helmet from "helmet";

export default function (app) {
  // Use Helmet to set various security headers
  app.use(helmet());
}
