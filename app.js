import express from "express";
import dotenv from "dotenv";
import { receipts } from "./data";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Landing
app.get("/", (req, res) => {
  res.send("Simple API with CORS");
});

// Get
app.get("/data", (req, res) => {
  res.send({
    messages: "Here are the data",
    receipt,
  });
});

// Post
app.post("/transactions", (req, res) => {
  console.log(req.body);

  let receipt = {
    id: receipts[receipts.length - 1].id + 1,
    type: teq.body.type,
    name: req.body.name,
    detail: req.body.detail,
    amount: req.body.amount,
  };

  receipts.push(receipt);

  res.json({
    message: "success",
    receipts,
  });
});

// Put
app.put("/transactions/:id", (req, res) => {
  const receiptId = parseInt(req.params.id, 10);
  if (!Number.isNaN(receiptId)) {
    let updatedTransaction = req.body;

    const transactionIndex = receipts.findIndex(
      (item) => item.id === receiptId
    );

    if (transactionIndex !== -1) {
      receipts[transactionIndex] = {
        ...updatedTransaction,
        id: receiptId,
      };
      res.json({
        message: "Transaction updated successfully!",
        updatedTransaction: receipts[transactionIndex],
      });
    } else {
      res.status(400).json({
        message: "Failed to find the transaction :(",
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid transaction ID :(",
    });
  }
});

// Delete (*ID*)
app.delete("/transactions/:id", (req, res) => {
  const receiptId = parseInt(req.params.id, 10);
  if (!Number.isNaN(receiptId)) {
    const transactionIndex = receipts.findIndex(
      (item) => item.id === receiptId
    );
    if (transactionIndex !== -1) {
      const deletedTransaction = receipts.splice(transactionIndex, 1)[0];

      res.json({
        message: "Transaction deleted successfully!",
        deletedTransaction,
      });
    } else {
      res.status(400).json({
        message: "Failed to find the transaction :(",
      });
    }
  } else {
    res.status(400).json({
      message: "Invalid transaction ID :(",
    });
  }
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
