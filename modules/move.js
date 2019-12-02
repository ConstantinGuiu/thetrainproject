class Move {
    constructor() {
        this.completeData
        this.getData()
    }


    getData() {
        fetch("timetable.json")
            .then((data) => data.json())
            .then((data) => {
                this.completeData = data
                this.consoleDTR()
            })
    }

    consoleDTR() {
        console.log(this.completeData)
        let stationsArr = this.completeData.Stations
        this.createMap(stationsArr)
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

        let wdth = 40/st

        console.log(wdth)

        station.querySelectorAll(".station").forEach(el => {
            let element = el.querySelector('.station-line')
            el.style.width = `${wdth}vw`;
            element.style.width = `${wdth}vw`;
        })

        let lastStation = document.querySelector('#train-line').lastChild
        lastStation.style.width = '20px'

    }
}

export default Move;