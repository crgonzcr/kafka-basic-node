import { Request, Response } from "express";
import { MessageService } from "../../application/services/MessageService";

export class MessageController {
  constructor(private messageService: MessageService) {}

  async sendMessage(req: Request, res: Response): Promise<void> {
    const { content } = req.body;
    await this.messageService.sendMessage(content);
    res.status(200).send({ message: "Message sent" });
  }
}
