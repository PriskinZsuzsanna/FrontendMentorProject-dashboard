//Varialbles
const workData = document.querySelector(".work-data");
const playData = document.querySelector(".play-data");
const studyData = document.querySelector(".study-data");
const exerciseData = document.querySelector(".exercise-data");
const socialData = document.querySelector(".social-data");
const selfcareData = document.querySelector(".selfcare-data");

const dataCards = document.querySelectorAll(".data-card")

const dailyBtn = document.querySelector("#daily-btn");
const weeklyBtn = document.querySelector("#weekly-btn");
const monthlyBtn = document.querySelector("#monthly-btn");
const btns = document.querySelector("#btns")

let workResult, playResult, studyResult, exerciseResult, socialResult, selfcareResult;

let workCurrentActiveNumber, workCurrentActiveHour, workCurrentPrevNumber, workCurrentPrevHour;

let playCurrentActiveNumber, playCurrentActiveHour, playCurrentPrevNumber, playCurrentPrevHour;

let studyCurrentActiveNumber, studyCurrentActiveHour, studyCurrentPrevNumber, studyCurrentPrevHour;

let exerciseCurrentActiveNumber, exerciseCurrentActiveHour, exerciseCurrentPrevNumber, exerciseCurrentPrevHour;

let socialCurrentActiveNumber, socialCurrentActiveHour, socialCurrentPrevNumber, socialCurrentPrevHour;

let selfcareCurrentActiveNumber, selfcareCurrentActiveHour, selfcareCurrentPrevNumber, selfcareCurrentPrevHour;



//Events
window.onload = getData();
btns.addEventListener("click", (e) => {

    active(e)

    workCurrentActiveNumber = document.querySelector(".work-data .active .h2")
    workCurrentActiveHour = document.querySelector(".work-data .active .hrs-h2")
    workCurrentPrevNumber = document.querySelector(".work-data .active .p")
    workCurrentPrevHour = document.querySelector(".work-data .active .hrs-p")
    hrHrs(workCurrentActiveNumber, workCurrentActiveHour, workCurrentPrevNumber, workCurrentPrevHour)

    playCurrentActiveNumber = document.querySelector(".play-data .active .h2")
    playCurrentActiveHour = document.querySelector(".play-data .active .hrs-h2")
    playCurrentPrevNumber = document.querySelector(".play-data .active .p")
    playCurrentPrevHour = document.querySelector(".play-data .active .hrs-p")
    hrHrs(playCurrentActiveNumber, playCurrentActiveHour, playCurrentPrevNumber, playCurrentPrevHour)

    studyCurrentActiveNumber = document.querySelector(".study-data .active .h2")
    studyCurrentActiveHour = document.querySelector(".study-data .active .hrs-h2")
    studyCurrentPrevNumber = document.querySelector(".study-data .active .p")
    studyCurrentPrevHour = document.querySelector(".study-data .active .hrs-p")
    hrHrs(studyCurrentActiveNumber, studyCurrentActiveHour, studyCurrentPrevNumber, studyCurrentPrevHour)

    exerciseCurrentActiveNumber = document.querySelector(".exercise-data .active .h2")
    exerciseCurrentActiveHour = document.querySelector(".exercise-data .active .hrs-h2")
    exerciseCurrentPrevNumber = document.querySelector(".exercise-data .active .p")
    exerciseCurrentPrevHour = document.querySelector(".exercise-data .active .hrs-p")
    hrHrs(exerciseCurrentActiveNumber, exerciseCurrentActiveHour, exerciseCurrentPrevNumber, exerciseCurrentPrevHour)

    socialCurrentActiveNumber = document.querySelector(".social-data .active .h2")
    socialCurrentActiveHour = document.querySelector(".social-data .active .hrs-h2")
    socialCurrentPrevNumber = document.querySelector(".social-data .active .p")
    socialCurrentPrevHour = document.querySelector(".social-data .active .hrs-p")
    hrHrs(socialCurrentActiveNumber, socialCurrentActiveHour, socialCurrentPrevNumber, socialCurrentPrevHour)

    selfcareCurrentActiveNumber = document.querySelector(".selfcare-data .active .h2")
    selfcareCurrentActiveHour = document.querySelector(".selfcare-data .active .hrs-h2")
    selfcareCurrentPrevNumber = document.querySelector(".selfcare-data .active .p")
    selfcareCurrentPrevHour = document.querySelector(".selfcare-data .active .hrs-p")
    hrHrs(selfcareCurrentActiveNumber, selfcareCurrentActiveHour, selfcareCurrentPrevNumber, selfcareCurrentPrevHour)

})



//Functions

function getData() {
    fetch("data.json")
        .then(response => response.json())
        .then((data) => {
            
            workResult = `
                <div class="data-content" id="daily">
                    <h2 id="daily-work-hours"><span class="h2">${data[0].timeframes.daily.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-daily-work-hours">Last day - <span class="p">${data[0].timeframes.daily.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content active" id="weekly">
                    <h2 id="weekly-work-hours"><span class="h2">${data[0].timeframes.weekly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-weekly-work-hours">Last week - <span class="p">${data[0].timeframes.weekly.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content" id="monthly">
                    <h2 id="monthly-work-hours"><span class="h2">${data[0].timeframes.monthly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-monthly-work-hours">Last month - <span class="p">${data[0].timeframes.monthly.previous}</span><span class="hrs-p"></span></p>
                </div>
        `
            workData.innerHTML = workResult;


            playResult = `
                <div class="data-content" id="daily">
                    <h2 id="daily-work-hours"><span class="h2">${data[1].timeframes.daily.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-daily-work-hours">Last day - <span class="p">${data[1].timeframes.daily.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content active" id="weekly">
                    <h2 id="weekly-work-hours"><span class="h2">${data[1].timeframes.weekly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-weekly-work-hours">Last week - <span class="p">${data[1].timeframes.weekly.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content" id="monthly">
                    <h2 id="monthly-work-hours"><span class="h2">${data[1].timeframes.monthly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-monthly-work-hours">Last month - <span class="p">${data[1].timeframes.monthly.previous}</span><span class="hrs-p"></span></p>
                </div>
        `
            playData.innerHTML = playResult;


            studyResult = `
                <div class="data-content" id="daily">
                    <h2 id="daily-work-hours"><span class="h2">${data[2].timeframes.daily.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-daily-work-hours">Last day - <span class="p">${data[2].timeframes.daily.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content active" id="weekly">
                    <h2 id="weekly-work-hours"><span class="h2">${data[2].timeframes.weekly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-weekly-work-hours">Last week - <span class="p">${data[2].timeframes.weekly.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content" id="monthly">
                    <h2 id="monthly-work-hours"><span class="h2">${data[2].timeframes.monthly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-monthly-work-hours">Last month - <span class="p">${data[2].timeframes.monthly.previous}</span><span class="hrs-p"></span></p>
                </div>
        `
            studyData.innerHTML = studyResult;


            exerciseResult = `
                <div class="data-content" id="daily">
                    <h2 id="daily-work-hours"><span class="h2">${data[3].timeframes.daily.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-daily-work-hours">Last day - <span class="p">${data[3].timeframes.daily.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content active" id="weekly">
                    <h2 id="weekly-work-hours"><span class="h2">${data[3].timeframes.weekly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-weekly-work-hours">Last week - <span class="p">${data[3].timeframes.weekly.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content" id="monthly">
                    <h2 id="monthly-work-hours"><span class="h2">${data[3].timeframes.monthly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-monthly-work-hours">Last month - <span class="p">${data[3].timeframes.monthly.previous}</span><span class="hrs-p"></span></p>
                </div>
        `
            exerciseData.innerHTML = exerciseResult;


            socialResult = `
                <div class="data-content" id="daily">
                    <h2 id="daily-work-hours"><span class="h2">${data[4].timeframes.daily.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-daily-work-hours">Last day - <span class="p">${data[4].timeframes.daily.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content active" id="weekly">
                    <h2 id="weekly-work-hours"><span class="h2">${data[4].timeframes.weekly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-weekly-work-hours">Last week - <span class="p">${data[4].timeframes.weekly.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content" id="monthly">
                    <h2 id="monthly-work-hours"><span class="h2">${data[4].timeframes.monthly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-monthly-work-hours">Last month - <span class="p">${data[4].timeframes.monthly.previous}</span><span class="hrs-p"></span></p>
                </div>
        `
            socialData.innerHTML = socialResult;


            selfcareResult = `
                <div class="data-content" id="daily">
                    <h2 id="daily-work-hours"><span class="h2">${data[5].timeframes.daily.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-daily-work-hours">Last day - <span class="p">${data[5].timeframes.daily.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content active" id="weekly">
                    <h2 id="weekly-work-hours"><span class="h2">${data[5].timeframes.weekly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-weekly-work-hours">Last week - <span class="p">${data[5].timeframes.weekly.previous}</span><span class="hrs-p"></span></p>
                </div>
                <div class="data-content" id="monthly">
                    <h2 id="monthly-work-hours"><span class="h2">${data[5].timeframes.monthly.current}</span><span class="hrs-h2"></span></h2>
                    <p id="prev-monthly-work-hours">Last month - <span class="p">${data[5].timeframes.monthly.previous}</span><span class="hrs-p"></span></p>
                </div>
        `
            selfcareData.innerHTML = selfcareResult;

            workCurrentActiveNumber = document.querySelector(".work-data .active .h2")
            workCurrentActiveHour = document.querySelector(".work-data .active .hrs-h2")
            workCurrentPrevNumber = document.querySelector(".work-data .active .p")
            workCurrentPrevHour = document.querySelector(".work-data .active .hrs-p")
            hrHrs(workCurrentActiveNumber, workCurrentActiveHour, workCurrentPrevNumber, workCurrentPrevHour)

            playCurrentActiveNumber = document.querySelector(".play-data .active .h2")
            playCurrentActiveHour = document.querySelector(".play-data .active .hrs-h2")
            playCurrentPrevNumber = document.querySelector(".play-data .active .p")
            playCurrentPrevHour = document.querySelector(".play-data .active .hrs-p")
            hrHrs(playCurrentActiveNumber, playCurrentActiveHour, playCurrentPrevNumber, playCurrentPrevHour)

            studyCurrentActiveNumber = document.querySelector(".study-data .active .h2")
            studyCurrentActiveHour = document.querySelector(".study-data .active .hrs-h2")
            studyCurrentPrevNumber = document.querySelector(".study-data .active .p")
            studyCurrentPrevHour = document.querySelector(".study-data .active .hrs-p")
            hrHrs(studyCurrentActiveNumber, studyCurrentActiveHour, studyCurrentPrevNumber, studyCurrentPrevHour)

            exerciseCurrentActiveNumber = document.querySelector(".exercise-data .active .h2")
            exerciseCurrentActiveHour = document.querySelector(".exercise-data .active .hrs-h2")
            exerciseCurrentPrevNumber = document.querySelector(".exercise-data .active .p")
            exerciseCurrentPrevHour = document.querySelector(".exercise-data .active .hrs-p")
            hrHrs(exerciseCurrentActiveNumber, exerciseCurrentActiveHour, exerciseCurrentPrevNumber, exerciseCurrentPrevHour)

            socialCurrentActiveNumber = document.querySelector(".social-data .active .h2")
            socialCurrentActiveHour = document.querySelector(".social-data .active .hrs-h2")
            socialCurrentPrevNumber = document.querySelector(".social-data .active .p")
            socialCurrentPrevHour = document.querySelector(".social-data .active .hrs-p")
            hrHrs(socialCurrentActiveNumber, socialCurrentActiveHour, socialCurrentPrevNumber, socialCurrentPrevHour)

            selfcareCurrentActiveNumber = document.querySelector(".selfcare-data .active .h2")
            selfcareCurrentActiveHour = document.querySelector(".selfcare-data .active .hrs-h2")
            selfcareCurrentPrevNumber = document.querySelector(".selfcare-data .active .p")
            selfcareCurrentPrevHour = document.querySelector(".selfcare-data .active .hrs-p")
            hrHrs(selfcareCurrentActiveNumber, selfcareCurrentActiveHour, selfcareCurrentPrevNumber, selfcareCurrentPrevHour)


        })
}



function hrHrs(currentNumber, currentHour, currentPrevNumber, currentPrevHour) {
    if (currentNumber.innerHTML > 1) {
        currentHour.innerHTML = "hrs"
    } else {
        currentHour.innerHTML = "hr"
    }

    if (currentPrevNumber.innerHTML > 1) {
        currentPrevHour.innerHTML = "hrs"
    } else {
        currentPrevHour.innerHTML = "hr"
    }
}


function active(e) {
    let btnItems = document.querySelectorAll(".btn")
    btnItems.forEach((btn) => {
        btn.classList.remove("white")
    })


    let workDatas = (document.querySelectorAll(".work-data .data-content"))
    let playDatas = (document.querySelectorAll(".play-data .data-content"))
    let studyDatas = (document.querySelectorAll(".study-data .data-content"))
    let exerciseDatas = (document.querySelectorAll(".exercise-data .data-content"))
    let socialDatas = (document.querySelectorAll(".social-data .data-content"))
    let selfcareDatas = (document.querySelectorAll(".selfcare-data .data-content"))


    function displayChoosenData(dataTopic) {

        dataTopic.forEach((dataContent) => {
            dataContent.classList.remove("active")
        })
        if (e.target.id == "daily-btn") {
            dataTopic[0].classList.add("active");
            e.target.classList.add("white");
        } else if (e.target.id == "weekly-btn") {
            dataTopic[1].classList.add("active");
            e.target.classList.add("white");
        } else {
            dataTopic[2].classList.add("active");
            e.target.classList.add("white");

        }

    }

    displayChoosenData(workDatas)
    displayChoosenData(playDatas)
    displayChoosenData(studyDatas)
    displayChoosenData(exerciseDatas)
    displayChoosenData(socialDatas)
    displayChoosenData(selfcareDatas)



}



