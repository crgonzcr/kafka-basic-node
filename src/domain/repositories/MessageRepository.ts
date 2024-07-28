import { Message } from "../models/Message";

export interface MessageRepository {
  sendMessage(message: Message): Promise<void>;
}
