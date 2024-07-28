import { MessageRepository } from "../../domain/repositories/MessageRepository";
import { Message } from "../../domain/models/Message";

export class MessageService {
  constructor(private messageRepository: MessageRepository) {}

  async sendMessage(content: string): Promise<void> {
    const message = new Message(content);
    await this.messageRepository.sendMessage(message);
  }
}
