const EventEmitter = require ('events');
const { setTimeout } = require('timers');
class School extends EventEmitter{
startPeriod(){
    console.log('Class Started');
    
    //raise event when bell rings
    //raise an event

    setTimeout(()=>{
        this.emit('bellRing', {
            period: 'first',
            text: 'period ended',
        });
    }, 2000);
}

}

module.exports= School;