class ShowTimetable {
    constructor() {
        this.completeData
        this.getData()
        this.noOfDepartNaer
        this.noOfDepartJaeg
        this.table = document.querySelector("#table-body")
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

        let data = this.completeData;
        let stationsNJ = data.Stations;
        let timesFromNaerum = data.Timetable.Naerum;
        let allTimes = [];

        timesFromNaerum.forEach(time => {

            let localtime = time;
            data.Stations.forEach(el => {

                localtime = localtime + el.MinutesFromNaerum;
                localtime = this.check60(localtime);
                allTimes.push(localtime);
                localtime++

            })

        })

        //console.log(allTimes)

        let columnCount = 0;
        let noOfStations = stationsNJ.length
        stationsNJ.forEach(el => {
            let dataInRow = [];
            dataInRow.push(el.StationName);

            let columnLocalCount = columnCount
            while (columnLocalCount < allTimes.length) {
                dataInRow.push(allTimes[columnLocalCount]);
                columnLocalCount += noOfStations;
            }
            columnCount++;

            this.addRow(this.table, dataInRow, el.StationId)
        })


    }

    addRow(table, rowData, ID) {
        let toInsert = '<tr> \n'
        rowData.forEach(el => {
            toInsert = toInsert + `<td>${el}</td>`;
        })
        toInsert = toInsert + '</td>'
        table.innerHTML = table.innerHTML + toInsert;
    }

    check60(num){
        if (num >= 60){
            while (num >= 60){
                num -= 60
            }
            return num
        }
        else return num
    }
}

export default ShowTimetable;

//          console.log(HHHHHHHH)