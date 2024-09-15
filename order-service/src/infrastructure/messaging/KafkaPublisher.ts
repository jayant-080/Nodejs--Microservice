import { KafkaClient, Producer } from "kafka-node";
import { IEventPublisher } from "../../application/ports/IEventPublisher";



export class KafkaEventPublisher implements IEventPublisher {

    private readonly producer:Producer


    constructor(client:KafkaClient){
        this.producer = new Producer(client)
    }
    async publish(topic: string, message: any): Promise<void> {
  
        const payloads = [{ topic, messages: JSON.stringify(message) }];
        await new Promise<void>((resolve, reject) => {
            this.producer.send(payloads, (err) => {
              if (err) reject(err);
              resolve();
            });
          });


    }





}