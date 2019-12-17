class GenerateButtons {
    constructor() {
        this.timetableBtn = document.querySelector('#timetable-btn');
        this.liveMapBtn = document.querySelector('#livemap-btn');
        this.liveMap2Btn = document.querySelector('#livemap2-btn');
        this.timetableDiv = document.querySelector('#timetable-main-div');
        this.livemapDiv = document.querySelector('#livemap-main-div');
        this.livemap2Div = document.querySelector('#livemap2-main-div');
        this.switchDivs();
        // setting the display of to hide the live map div and only show the timetable one
        // and adding a class to the timetable button to show as it is selected
        this.livemapDiv.style.display = "none";
        this.timetableBtn.classList.add("nav-btn-selected");

        // TO REMOVE:
        this.liveMapBtn.click()
    }

    switchDivs(){
        this.timetableBtn.addEventListener("click", () =>{
            // setting the style to show and hide divs with timetable and live map
            // and adding and removing classes from buttons to make them show which one is selected
            this.timetableDiv.style.display = "block";
            this.livemapDiv.style.display = "none";
            this.livemap2Div.style.display = "none";
            this.timetableBtn.classList.add("nav-btn-selected");
            this.liveMapBtn.classList.remove("nav-btn-selected");
            this.liveMap2Btn.classList.remove("nav-btn-selected");
        })
        
        this.liveMapBtn.addEventListener("click", () =>{
            // same things as above
            this.timetableDiv.style.display = "none";
            this.livemapDiv.style.display = "block";
            this.livemap2Div.style.display = "none";
            this.timetableBtn.classList.remove("nav-btn-selected");
            this.liveMapBtn.classList.add("nav-btn-selected");
            this.liveMap2Btn.classList.remove("nav-btn-selected");
        })
        
        this.liveMap2Btn.addEventListener("click", () =>{
            // same things as above
            this.timetableDiv.style.display = "none";
            this.livemapDiv.style.display = "none";
            this.livemap2Div.style.display = "block";
            this.timetableBtn.classList.remove("nav-btn-selected");
            this.liveMapBtn.classList.remove("nav-btn-selected");
            this.liveMap2Btn.classList.add("nav-btn-selected");
        })
    }

}

export default GenerateButtons;