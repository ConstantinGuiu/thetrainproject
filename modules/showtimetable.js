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
                allTimes.push(localtime);
                localtime++

            })

        })

        console.log(allTimes)

        let columnCount = 0;
        stationsNJ.forEach(el => {
            let dataInRow = [];
            dataInRow.push(el.StationName);

            let columnLocalCount = columnCount
            while (columnLocalCount < allTimes.length) {
                dataInRow.push(allTimes[columnLocalCount]);
                columnLocalCount += 8;
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
}

export default ShowTimetable;

//          console.log(HHHHHHHH)