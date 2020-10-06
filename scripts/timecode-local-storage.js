document.addEventListener('DOMContentLoaded', () => {

		  const ref = localStorage.getItem('notesItemsRef');
		  const localFPS = localStorage.getItem('savedFPS');
		  const localTimecode = localStorage.getItem("currentTime");

		  if (ref.length > 0 && ref !== '[]') {

		    tableData = JSON.parse(ref);
		    notesData = tableData;

		   	renderNotes(tableData);

		   	timerData = tableData[tableData.length - 1];
		   	h = timerData.h;
		   	m = timerData.m;
		   	s = timerData.s;
		   	ms = timerData.ms;
		   	totalRunningTime = timerData.totalRunningTime;
		   	if(localFPS) {
		   		// fps = parseInt(localFPS, 10);
		   		fps = Number(localFPS)
		   	} else {
		   		fps = timerData.fps;
		   	}
		   	milli_to_FPS = timerData.milli_to_FPS;
		   	fpsBtn.innerHTML = "Current FPS: " + String(fps);
		   	lapCount = tableData.length + 1
	    	timecode = timerData.timecode;
	    	
	    	if (localTimecode) {
	    		document.getElementById("timer").innerHTML="Timecode: "+localTimecode;
	    	} else {
	    		document.getElementById("timer").innerHTML="Timecode: "+String(h).padStart(2,'0')+":"+String(m).padStart(2,'0')+":"+String(s).padStart(2,'0')+","+String(Math.floor(ms/milli_to_FPS)).padStart(2,'0');
	    	}
	    	
	    	clearInterval(interval);

	    	if (localTimecode === "00:00:00,00") {
	    		document.getElementById("startbtn").innerHTML=" START ";
	    	} else {
	    		document.getElementById("startbtn").innerHTML=" RESUME ";
	    	}
	        started = false;
	        console.log("Data loaded from localStorage")
		  } else {
		  	resetNotes();
		  }

		  const details = localStorage.getItem('notesHeading');

		  if (details) {
		  	projectHeading = JSON.parse(details);
		  	// for(var i = 0; i < details.length; i++) {
		  	// 	projectHeading[i] = details[i]
		  	// }
		  	// console.log(details)
		  	localStorage.setItem('notesHeading', JSON.stringify(projectHeading));
		  } else {
		  	resetHeading();
		  }

		  renderHeading();

		});