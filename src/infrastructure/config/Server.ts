import express from "express";
import { messageRouter } from "../../interfaces/routers/MessageRouter";

const app = express();
app.use(express.json());
app.use("/api", messageRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
