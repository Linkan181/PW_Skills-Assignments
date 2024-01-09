const EventEmitter=require('events')

const event=new EventEmitter();

function eventHandler(){
    console.log("Event is triggered.");
}
event.on('myEvent',eventHandler)
event.emit("myEvent");

//Remove the event hander
event.removeListener('myEvent',eventHandler);
console.log("Event listener/Handler is removed")
event.emit('myEvent');    // Not have any error.........
