//import Data from './modules/getdata.js'
import GetMoving from './modules/move.js'
import GenerateButtons from './modules/generatebuttons.js'
import ShowTimetable from './modules/showtimetable.js'

// let data = new Data;
// let well = data.completeData;

// console.log(well)

getStarted()
setInterval(getStarted, 5000)

function getStarted() {
    new GetMoving;
}
new GenerateButtons;
new ShowTimetable;