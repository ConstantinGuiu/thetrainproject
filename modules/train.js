class Train {
    constructor(data, startMinute, trainID) {
        this.trainTakes = data.Stations
        this.actualMinute = moment().format('mm')
        this.startMinute = startMinute
        this.calculatedMinute = startMinute
        this.trainID = trainID
        this.canvas = document.querySelector('#mini-train-canvas')
        this.calculateTrains()
    }

    calculateTrains() {
        let times = []
        this.trainTakes.forEach(el => {
            times.push(el.MinutesFromNaerum)
        })

        this.createTrain(times)

    }

    createTrain(times) {

        let i = 1;
        while (i < times.length && this.calculatedMinute < this.actualMinute) {
            this.calculatedMinute += (times[i] + 1)
            i++
        }
        console.log(i, this.calculatedMinute)
        // let timp1 = moment(h) + ':' + this.calculatedMinute + ':' + 00;
        // let timp2 = moment(h) + ':' + moment(mm) + ':' + 00;
        // console.log(moment(timp1, 'hhmmss').fromNow())
        let stationID = i
        this.insertTrain(stationID)
    }

    insertTrain(stationID) {
        this.canvas.innerHTML = this.canvas.innerHTML + `<div class="mini-train-div" id="mini-train${this.trainID}">
        <img class="mini-train" src="images/lokaltog_02.svg">
    </div>`
        this.placeTrain(stationID, this.trainID)
    }

    placeTrain(stationID, trainID) {
        let noOfStations = this.trainTakes.length
        let percentageToMove = 100 / (noOfStations - 1)
        let id = stationID - 1
        let station = percentageToMove * id
        let train = document.querySelector(`#mini-train${trainID}`)
        train.style.marginLeft = `${station}%`
    }
}

export default Train;


//    



