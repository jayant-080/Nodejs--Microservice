



export interface IEventConsumer{
    subscribe(callbaack:(message:any)=>void):void
}