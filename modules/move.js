import Train from "./train.js";

//import Train from './modules/train.js'

class GetMoving {
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
        console.log(data)
        let noOfStations = data.Stations.length;

        let trainID = 1
        data.Timetable.Naerum.forEach(el => {
            new Train(data, el, trainID)
            trainID++
        })

    }


}

export default GetMoving;