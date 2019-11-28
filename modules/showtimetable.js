class ShowTimetable {
    constructor() {
        this.completeData
        this.getData()
        this.noOfDepartNaer
        this.noOfDepartJaeg
        this.noOfStations
        this.table = document.querySelector("#time-table")
    }


    getData() {
        fetch("timetable.json")
            .then((data) => data.json())
            .then((data) => {
                this.completeData = data
                this.setUpTimeTable()
            })
    }

    setUpTimeTable() {

        this.noOfStations = this.completeData.Stations.length;
        let times = this.completeData.Timetable.Naerum;

        times.forEach(time =>{
            
            let localtime = time;
            this.completeData.Stations.forEach(el => {

                localtime = localtime + el.MinutesFromNaerum;
                console.log(el.StationName)
                console.log("Arrive at: ", localtime)
                localtime++
                console.log("Depart at: ", localtime)
                console.log("***********************")
                
            })

            console.log("########## Another train! ##########")

        })

    }
}

export default ShowTimetable;

//          console.log(HHHHHHHH)