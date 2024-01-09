const EventEmitter=require('events');

const event=new EventEmitter();

let defaultMaxListener=EventEmitter.defaultMaxListeners;
console.log(defaultMaxListener);

// set maxListener to 5 
event.setMaxListeners(5);
let maxListener= event.getMaxListeners();
console.log(maxListener);