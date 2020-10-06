let h, m, s, ms, lapCount, started, interval;
let fps, milli_to_FPS
let totalRunningTime;

function start(){
    if(started === false){
    	let curButton = document.getElementById("startbtn")
        curButton.innerHTML=" PAUSE ";
        curButton.style.color ="blue";
        curButton.style.fontWeight = "600";
        interval=setInterval(timer,10);
        started = true;
    }
    else{
        clearInterval(interval);
        let curButton = document.getElementById("startbtn")
        curButton.innerHTML=" RESUME ";
        curButton.style.color ="red";
        curButton.style.fontWeight = "600";
        started = false;
    }
}


function timer() {
	timecodeNew = String(h).padStart(2,'0')+":"+String(m).padStart(2,'0')+":"+String(s).padStart(2,'0')+","+String(Math.floor(ms/milli_to_FPS)).padStart(2,'0');
	document.getElementById("timer").innerHTML="Timecode: "+timecodeNew;
	totalRunningTime+=10;
	ms+= 10;
	if(ms === 1000){
        s+=1;
        ms=0;
    }
    
    if(s==60){
        m+=1;
        s=0;
    }

    if(m==60) {
    	h+= 1;
    	m=0;
    }

    localStorage.setItem("currentTime",timecodeNew)
}

function replaceTimecode() {
	    	let lapsarr=document.getElementById("lapTable").getElementsByClassName("lap");
	        let l=lapsarr.length;
	        // var ps=lapssect.getElementsByTagName("p");
			// const fullTable = document.querySelector('lapTable');
	        for(i=0; i<l; i+=1){
	        	rowData = notesData[i];

	        	let timecodeNew = String(rowData.h).padStart(2,'0')+":"+String(rowData.m).padStart(2,'0')+":"+String(rowData.s).padStart(2,'0')+":"+String(Math.floor(rowData.ms/milli_to_FPS)).padStart(2,'0');
	            const rowItem = document.querySelector(`[data_key='${rowData.data_key}']`);
	            if (rowItem) {
    				rowItem.cells[2].innerHTML = timecodeNew;
    			}
    			notesData[i].fps = fps;
    			notesData[i].milli_to_FPS = milli_to_FPS;
    			notesData[i].timecode = timecodeNew;
	        }
	        localStorage.setItem('notesItemsRef', JSON.stringify(notesData));

	        timer();
	    };

function resetTimer() {
			h = 0;
			m = 0;
			s = 0;
			ms = 0;
			lapCount = 1;
			started = false;
			totalRunningTime = 0;
			milli_to_FPS = (1000/fps).toFixed(2);
			document.getElementById("timer").innerHTML="Timecode: 00:00:00,00";
			let curButton = document.getElementById("startbtn")
			curButton.innerHTML=" START ";
			curButton.style.color ="black";
        	curButton.style.fontWeight = "400";

			started = false;
			clearInterval(interval);
			let timecodeNew = "00:00:00,00"
			localStorage.setItem("currentTime",timecodeNew)
		};


