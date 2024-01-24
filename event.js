const School = require ('./school');
const school = new School();

//register a listener for bellringing event

school.on('bellRing', ({period, text})=>{
    console.log(`We need to run because ${period} ${text}`);
});

school.startPeriod();
