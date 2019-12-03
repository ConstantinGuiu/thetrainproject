class Train {
    constructor(data, startMinute, trainID) {
        this.trainTakes = data.Stations
        this.actualMinute = moment().format('mm')
        this.startMinute = startMinute
        this.calculatedMinute = startMinute
        this.calculatedTime = startMinute
        this.trainID = trainID
        this.canvas = document.querySelector('#mini-train-canvas')
        this.createTrain()
    }

    createTrain() {
        let times = []
        let i = 1
        this.trainTakes.forEach(el => {
            times.push(el.MinutesFromNaerum)
        })

        let stationTime = []

        for (i = 0; i < times.length; i++) {
            this.calculatedTime = this.calculatedTime + times[i]
            stationTime.push(this.calculatedTime)
        }

        console.log(stationTime)

        while (i < times.length && this.calculatedMinute < this.actualMinute) {
            this.calculatedMinute += (times[i] + 1)
            i++
        }
        console.log(i, this.calculatedMinute)
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
        let distance = percentageToMove * id
        let train = document.querySelector(`#mini-train${trainID}`)
        train.style.marginLeft = `${distance}%`
    }
}

export default Train;


//    