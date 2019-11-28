class Data {
    constructor() {
        this.completeData = this.getData()
        console.log(this.completeData)
    }

    getData() {
        fetch("timetable.json")
            .then((data) => {
                return data.json()
            })
            .then((data) => {
                this.completeData = data;
            })
    }
}

export default Data;