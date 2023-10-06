import cors from "cors";

const whitelist = [
  "https://contohSiteA.com",
  "https://contohSiteB.com",
  "http://localhost:3001",
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

  if (requestUrl === "http://localhost:3002") {
    cors(corsOptions)(req, res, next);
  } else if (requestUrl === "http://localhost:3001") {
    cors({
      ...corsOptions,
      methods: "GET, POST",
    })(req, res, next);
  } else {
    res.status(403).json({ message: "Access denied" });
  }
};

export default customCors;
