function newLap(userComment="") {
	    	// if(started === true) {
	    		let data_key = Date.now();
    			timecode = String(h).padStart(2,'0')+":"+String(m).padStart(2,'0')+":"+String(s).padStart(2,'0')+","+String(Math.floor(ms/milli_to_FPS)).padStart(2,'0');

	    		const rowData = {
	    			totalRunningTime,
	    			data_key,
	    			lapCount,
	    			timecode,
	    			userComment,
	    			h,
	    			m,
	    			s,
	    			ms,
	    			fps,
	    			milli_to_FPS
	    		};
	    		// console.log(JSON.stringify(rowData));
	    		notesData.push(rowData);
	    		localStorage.setItem('notesItemsRef', JSON.stringify(notesData));
	    		document.getElementById("comments").value = "";
				document.getElementById("comments").focus();
	    		renderRow(rowData);
	    		lapCount += 1;
	    };

function deleteNote(key) {
	// Uncomment following line to pause timecode when a note is deleted:
	// start();
	var index = key.parentNode.parentNode.rowIndex;
	// console.log(String(index));
	var keyToDelete = notesData[index-1].data_key
	// console.log(keyToDelete);
	console.log("Deleting: \n\n" + JSON.stringify(notesData[index-1]));
	document.getElementById("lapTable").deleteRow(index);

	notesData = notesData.filter(item => item.data_key !== Number(keyToDelete));

	if (notesData.length < 1) {
		resetNotes();
		return;
	}

	for(var i = 0; i < notesData.length; i++){
		notesData[i].lapCount = i + 1
		// console.log(notesData[i].lapCount)
	}

	localStorage.setItem('notesItemsRef', JSON.stringify(notesData));

	lapCount = notesData.length + 1
	// var lastRow = notesData[notesData.length - 1];
	// totalRunningTime = lastRow.totalRunningTime;
	// h = lastRow.h;
	// m = lastRow.m;
	// s = lastRow.s;
	// ms = lastRow.ms;
	// fps = lastRow.fps;
	// milli_to_FPS = lastRow.milli_to_FPS;
	// timecode = lastRow.timecode;

	// document.getElementById("timer").innerHTML="Timecode: "+String(m).padStart(2,'0')+":"+String(s).padStart(2,'0')+":"+String(Math.floor(ms/milli_to_FPS)).padStart(2,'0');

	renderNotes(notesData);
};


function resetNotes() {
	console.log("resetting notes");
	// h = 0;
	// m = 0;
	// s = 0;
	// ms = 0;
	// lapCount = 1;
	started = false;
	fps = 29.97;
	// totalRunningTime = 0;
	// milli_to_FPS = (1000/fps).toFixed(2);
	resetTimer()
	fpsBtn.innerHTML = "Current FPS: " + String(fps);
	// document.getElementById("timer").innerHTML="Timecode: 00:00:00,00";
	// document.getElementById("startbtn").innerHTML=" START ";
	document.getElementById("fps").value = "";
	document.getElementById("comments").value = "";
	notesData = [];
	localStorage.setItem('notesItemsRef', JSON.stringify(notesData));
	// started = true;
	// start();

}

function reset(){
	var userReset = confirm("Reset Notes?")
	if (userReset == true) {
		let lapsarr=document.getElementById("lapTable").getElementsByClassName("lap");
        let l=lapsarr.length;
        // var ps=lapssect.getElementsByTagName("p");
        for(i=0; i<l; i+=1){
            lapTable.removeChild(lapsarr[0]);
        }
        notesData = [];
        localStorage.removeItem('notesItemsRef');

        clearInterval(interval);
        resetNotes();
        // resetHeading();
        renderHeading()
	}
    
    // document.getElementById("timer").innerHTML="Timecode: 00:00:00";
}



function renderNotes(data=notesData) {
	const savedFPS = localStorage.getItem('savedFPS');
	if (savedFPS) {
		fps = savedFPS;
	} else {
		fps = 29.97;
	}
	fpsBtn.innerHTML = "Current FPS: " + String(fps);
	if (data.length > 0) {
		data.forEach(t => {
		renderRow(t);
      	// console.log("content loaded:",t);
    	})
	} else {
		resetNotes();
	}
};

function renderRow(rowData) {
	
	const rowItem = document.querySelector(`[data_key='${rowData.data_key}']`);
	const fullTable = document.querySelector('#lapTable');

	let lapRow = document.createElement("tr");
	lapRow.setAttribute("class","lap");
	lapRow.setAttribute('data_key', rowData.data_key);
	lapRow.setAttribute('noteTime', rowData.totalRunningTime);

	let lapNum = document.createElement("td");
	lapNum.setAttribute("class","num");
	lapNum.innerHTML = rowData.lapCount;

	let lapLabel = document.createElement("td");
	lapLabel.setAttribute("class","lapText");
	let lapLblTxt = document.createTextNode(rowData.timecode);
	lapLabel.appendChild(lapLblTxt);

	// let lapTitle = document.createElement("td");
	// lapTitle.setAttribute("class","lapVideoTitle");
	// lapTitle.innerHTML = rowData.videoTitle;

	let lapComment = document.createElement("td");
	lapComment.setAttribute("class","lapComment");
	lapComment.innerHTML = rowData.userComment;

	let deleteColumn = document.createElement("td");
	deleteColumn.setAttribute("class","deleteColumn");

	let deleteButton = document.createElement("input");
	deleteButton.setAttribute("class","delete-button");
	deleteButton.setAttribute("type","button");
	deleteButton.setAttribute("value","Delete");
	deleteButton.setAttribute("onclick","deleteNote(this)")

	deleteColumn.appendChild(deleteButton);

	lapRow.appendChild(lapNum);
	// lapRow.appendChild(lapTitle)
	lapRow.appendChild(lapLabel);
	lapRow.appendChild(lapComment);
	lapRow.appendChild(deleteColumn);

	if (rowItem) {
		fullTable.replaceChild(lapRow, rowItem);
	} else {
		lapTable.appendChild(lapRow);
	}
};


