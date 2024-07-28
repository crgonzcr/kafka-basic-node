import { MessageService } from "../src/application/services/MessageService";
import { MessageRepository } from "../src/domain/repositories/MessageRepository";
import { Message } from "../src/domain/models/Message";

// Clase mock que implementa MessageRepository
class MockMessageRepository implements MessageRepository {
  async sendMessage(message: Message): Promise<void> {
    console.log("Mock send message:", message.content);
  }
}

describe("MessageService", () => {
  it("should send a message", async () => {
    const mockRepo = new MockMessageRepository();
    const service = new MessageService(mockRepo);
    const spy = jest.spyOn(mockRepo, "sendMessage");

    await service.sendMessage("Hello, Kafka!");

    expect(spy).toHaveBeenCalledWith(new Message("Hello, Kafka!"));
  });
});
