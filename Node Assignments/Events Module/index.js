const EventEmitter =require('events');

const event= new EventEmitter();  // instance of EventEmitter class

event.on('subscribe',(data)=>{
    console.log(`Thanks for subscribing to ${data}`)
})



event.emit("subscribe", "College Wallah");