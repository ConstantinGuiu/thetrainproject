class Move {
    constructor() {
        this.getData()
    }


    getData() {
        fetch("timetable.json")
            .then((data) => data.json())
            .then((data) => {
                let stationsArr = data.Stations
                this.createMap(stationsArr)
                this.generateTrains(data);
            })
    }

    createMap(st) {
        let draw = document.querySelector("#train-line")
        draw.innerHTML = ''
        st.forEach(el => {
            draw.innerHTML = draw.innerHTML + `<div class="station">
            <div class="draw-st">
                <div class="station-point"></div>
                <div class="station-line"></div>
            </div>
            <p class="station-name">${el.StationName}</p>
        </div>`
        })
        let lastStation = document.querySelector('#train-line').lastChild
        lastStation.querySelector(".station-line").style.display = 'none'
        this.changeStationWidth(st.length)
    }

    changeStationWidth(st) {
        let station = document.querySelector('#train-line')
        let wdth = 40 / (st - 1)

        station.querySelectorAll(".station").forEach(el => {
            let element = el.querySelector('.station-line')
            el.style.width = `${wdth}vw`;
            element.style.width = `${wdth}vw`;
        })

        let lastStation = document.querySelector('#train-line').lastChild
        lastStation.style.width = '20px'
    }

    generateTrains(data) {
        let noOfStations = data.Stations.length; 
        let percentageToMove = 100 / (noOfStations-1)

        this.moveTrain(percentageToMove)
    }

    moveTrain(time){
        let id = 7
        let station = time*id
        let train = document.querySelector('.mini-train-div')
        train.style.marginLeft = `${station}%`
    }
}

export default Move;