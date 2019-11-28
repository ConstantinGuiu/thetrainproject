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
        //console.log(this.completeData)
    }
}

export default Move;