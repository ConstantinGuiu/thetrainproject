class Train {
    constructor(data, startMinute) {
        this.trainTakes = data.Stations
        this.actualMinute = moment().format('mm')
        this.startMinute = startMinute
        this.calculatedMinute = startMinute
        this.createTrain()
    }

    createTrain() {
        let times = []
        let i = 1
        this.trainTakes.forEach(el => {
            times.push(el.MinutesFromNaerum)
        })

        while (i < times.length && this.calculatedMinute < this.actualMinute) {
            this.calculatedMinute += (times[i] + 1)
            i++
        }
        console.log(i, this.calculatedMinute)

        if(i>1){
            // train moving
        }
        else{
            // train in first station
        }

    }

    moveTrain(time, stationID) {
        let id = stationID - 1
        let station = time * id
        let train = document.querySelector('.mini-train-div')
        train.style.marginLeft = `${station}%`
    }
}

export default Train;





`<div class="mini-train-div">
    <img class="mini-train" src="images/lokaltog_02.svg">
</div>`