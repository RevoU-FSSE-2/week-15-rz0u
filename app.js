import express from "express";
import dotenv from "dotenv";
import { uuid } from "uuid";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// x-request-id
app.use((req, res, next) => {
  // Check if x-request-id is provided in the request headers
  const requestId = req.headers["x-request-id"] || uuid.v4();
  res.setHeader("x-request-id", requestId);
  next();
});

// CORS Whitelist
const whitelist = ["https://example1.com", "https://example2.com"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));

// Landing
app.get("/", (req, res) => {
  res.send("Simple API with CORS");
});

// Get
app.get("/get", (req, res) => {
  res.send("GET Method Example");
  // res.send({
  //   messages: "Here are the data",
  //   receipt,
  // });
});

// Post
app.post("/post", (req, res) => {
  res.send("POST Method Example");
  // console.log(req.body);

  // let receipt = {
  //   id: receipts[receipts.length - 1].id + 1,
  //   type: req.body.type,
  //   name: req.body.name,
  //   detail: req.body.detail,
  //   amount: req.body.amount,
  // };

  // receipts.push(receipt);

  // res.json({
  //   message: "success",
  //   receipts,
  // });
});

// Put
app.put("/put", (req, res) => {
  res.send("PUT Method Example");
  // const receiptId = parseInt(req.params.id, 10);
  // if (!Number.isNaN(receiptId)) {
  //   let updatedTransaction = req.body;

  //   const transactionIndex = receipts.findIndex(
  //     (item) => item.id === receiptId
  //   );

  //   if (transactionIndex !== -1) {
  //     receipts[transactionIndex] = {
  //       ...updatedTransaction,
  //       id: receiptId,
  //     };
  //     res.json({
  //       message: "Transaction updated successfully!",
  //       updatedTransaction: receipts[transactionIndex],
  //     });
  //   } else {
  //     res.status(400).json({
  //       message: "Failed to find the transaction :(",
  //     });
  //   }
  // } else {
  //   res.status(400).json({
  //     message: "Invalid transaction ID :(",
  //   });
  // }
});

// Delete (*ID*)
app.delete("/delete", (req, res) => {
  res.send("DELETE Method Example");
  // const receiptId = parseInt(req.params.id, 10);
  // if (!Number.isNaN(receiptId)) {
  //   const transactionIndex = receipts.findIndex(
  //     (item) => item.id === receiptId
  //   );
  //   if (transactionIndex !== -1) {
  //     const deletedTransaction = receipts.splice(transactionIndex, 1)[0];

  //     res.json({
  //       message: "Transaction deleted successfully!",
  //       deletedTransaction,
  //     });
  //   } else {
  //     res.status(400).json({
  //       message: "Failed to find the transaction :(",
  //     });
  //   }
  // } else {
  //   res.status(400).json({
  //     message: "Invalid transaction ID :(",
  //   });
  // }
});

// Not Found
app.get("*", (req, res) => {
  let body = `<h1>Error Page not found</h1>`;
  res.send(body);
});

// Port
app.listen(port, () => {
  console.log(`[server]: Server is running at localhost:${port}`);
});
