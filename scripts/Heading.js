
let notesTableHeaders = {
	"numSymbol": "#",
	"vidTitle": "Video Title",
	"timecode": "Timecode",
	"note": "Note"
}

const comments = document.getElementById("comments");
let videoTitleElement = document.getElementById("videoTitle");
let videoTitle = "";

let today = new Date();
document.getElementById('projectDate').innerHTML="Date: " + ('0' + (today.getMonth() + 1)).slice(-2) + "/" +  ('0' + today.getDate()).slice(-2) + "/" + today.getFullYear();

const changeTitle = document.getElementById("inputTitle");
const changeProducer = document.getElementById("inputProducer");
const changeTalent = document.getElementById("inputTalent");
const changeDate = document.getElementById("inputDate");

let updateFps = document.getElementById("fps");

const fpsBtn = document.getElementById("currentFPS");

fpsBtn.innerHTML = "Current FPS: " + String(fps);

let projectHeading = {
	"title": "Untitled Project",
	"producer": "Unnamed Producer",
	"talent" : "Unnamed Talent",
	"date" : "Date: " + ('0' + (today.getMonth() + 1)).slice(-2) + "/" +  ('0' + today.getDate()).slice(-2) + "/" + today.getFullYear()
};

function changeHeading(key,value="") {

	if (value.length > 0) {
		projectHeading[key] = value;
	}
	// document.getElementById(`${key}`).value = "";
	document.getElementById("inputTitle").value = "";
	document.getElementById("inputProducer").value = "";
	document.getElementById("inputTalent").value = "";
	document.getElementById("inputDate").value = "";

	localStorage.setItem('notesHeading', JSON.stringify(projectHeading));

	renderHeading();


function changeFPS(newFPS="") {
	    	if (newFPS) {
	    		fps = newFPS;
	    		fpsBtn.innerHTML = "Current FPS: " + String(fps);
	    		milli_to_FPS = (1000/fps).toFixed(2);
	    	} else {
	    		fps = 29.97;
	    		fpsBtn.innerHTML = "Current FPS: " + String(fps);
	    		milli_to_FPS = (1000/fps).toFixed(2);
	    	}
	    	fpsBtn.innerHTML = "Current FPS: " + String(fps);
	    	localStorage.setItem('savedFPS',fps);
	    	if (notesData.length > 0) {
	    		replaceTimecode();
	    	}
	    }
}

function newTitle(videoTitleInput="") {
	    	// console.log(videoTitle)
	    	videoTitle = videoTitleInput;
	    	newLap();
	    	document.getElementById("videoTitle").value = "";
	    	// videoTitleElement = document.getElementById("videoTitle");
	    	videoTitle = "";
	    	document.getElementById("videoTitle").focus();
	    };

function renderHeading() {
		document.getElementById("projectTitle").innerHTML="Project: " + String(projectHeading["title"]);
		document.getElementById("projectProducer").innerHTML="Producer: " + String(projectHeading["producer"]);
		document.getElementById("projectTalent").innerHTML="Onscreen Talent: " + String(projectHeading["talent"]);
		document.getElementById("projectDate").innerHTML="Project Date: " + String(projectHeading["date"]);
		}

function resetHeading() {
	projectHeading = {
	"title": "Untitled Project",
	"producer": "Unnamed Producer",
	"talent" : "Unnamed Talent",
	"date" : ('0' + (today.getMonth() + 1)).slice(-2) + "/" +  ('0' + today.getDate()).slice(-2) + "/" + today.getFullYear()
	};

	document.getElementById("inputTitle").value = "";
	document.getElementById("inputProducer").value = "";
	document.getElementById("inputTalent").value = "";
	document.getElementById("inputDate").value = "";

	console.log(projectHeading)
	localStorage.setItem('notesHeading', JSON.stringify(projectHeading));
	renderHeading();
}

