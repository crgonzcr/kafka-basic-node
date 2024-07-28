import {Kafka, Partitioners, Producer} from 'kafkajs';
import { MessageRepository } from '../../domain/repositories/MessageRepository';
import { Message } from '../../domain/models/Message';

export class KafkaMessageRepository implements MessageRepository {
  private kafka: Kafka;
  private producer: Producer;

  constructor() {
    this.kafka = new Kafka({
      clientId: 'my-app',
      brokers: ['localhost:9092']
    });
    this.producer = this.kafka.producer({
      createPartitioner: Partitioners.LegacyPartitioner
    });
  }

  async sendMessage(message: Message): Promise<void> {
    await this.producer.connect();
    await this.producer.send({
      topic: 'messages',
      messages: [
        { value: message.content }
      ],
    });
    await this.producer.disconnect();
  }
}
