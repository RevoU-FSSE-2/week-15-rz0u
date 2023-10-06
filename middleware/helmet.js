import helmet from "helmet";

export default function applyHelmet(app) {
  // Use Helmet to set various security headers
  app.use(helmet());
  app.use(
    helmet({
      frameguard: { action: "deny" },
      crossOriginEmbedderPolicy: true,
    })
  );
}
