import { Consumer, KafkaClient } from "kafka-node";
import { IEventConsumer } from "../../application/ports/IEventConsumer";




export class KafkaConsumer implements IEventConsumer{

    private readonly consumer:Consumer
constructor(client:KafkaClient,topic:string){
    this.consumer = new Consumer(client, [{ topic, partition: 0 }], { autoCommit: true });

}

 subscribe(callback: (message: any) => void): void {
    this.consumer.on('message', (message) => {
      callback(JSON.parse(message.value.toString()));
    });
  }
    
}
