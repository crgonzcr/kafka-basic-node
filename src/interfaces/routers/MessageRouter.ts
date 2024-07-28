import { Router } from "express";
import { KafkaMessageRepository } from "../../infrastructure/kafka/KafkaMessageRepository";
import { MessageService } from "../../application/services/MessageService";
import { MessageController } from "../controllers/MessageController";

const messageRouter = Router();
const messageRepository = new KafkaMessageRepository();
const messageService = new MessageService(messageRepository);
const messageController = new MessageController(messageService);

messageRouter.post("/messages", (req, res) => messageController.sendMessage(req, res));

export { messageRouter };
