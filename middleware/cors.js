import cors from "cors";

const whitelist = [
  "https://euphonious-sunflower-737d63.netlify.app",
  "https://lucent-lollipop-3af732.netlify.app",
];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: "GET, POST, PUT, DELETE",
};

const customCors = (req, res, next) => {
  const requestUrl = req.get("origin");

  if (requestUrl === "https://euphonious-sunflower-737d63.netlify.app") {
    cors(corsOptions)(req, res, next);
  } else if (requestUrl === "https://lucent-lollipop-3af732.netlify.app") {
    cors({
      ...corsOptions,
      methods: "GET, POST",
    })(req, res, next);
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};

export default customCors;
