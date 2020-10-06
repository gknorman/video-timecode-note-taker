
changeTitle.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("submit_title").click("title",changeTitle.value);
		document.getElementById("inputTitle").value = "";
		document.getElementById("inputTitle").focus();
	}
});

changeProducer.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("submit_producer").click("producer",changeProducer.value);
		document.getElementById("inputProducer").value = "";
		document.getElementById("inputProducer").focus();
	}
});

changeTalent.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("submit_talent").click("talent",changeTalent.value);
		document.getElementById("inputTalent").value = "";
		document.getElementById("inputTalent").focus();
	}
});

changeDate.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("submit_date").click("date",changeDate.value);
		document.getElementById("inputDate").value = "";
		document.getElementById("inputDate").focus();
	}
});


comments.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("submit").click();
		document.getElementById("comments").value = "";
		document.getElementById("comments").focus();
	}
});

// videoTitleElement.addEventListener("keyup", function(event) {
// 	if (event.keyCode === 13) {
// 		event.preventDefault();
// 		document.getElementById("submit_videoTitle").click();
// 		document.getElementById("videoTitle").value = "";
// 		document.getElementById("videoTitle").focus();
// 	}
// });


updateFps.addEventListener("keyup", function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
		document.getElementById("updateFpsBtn").click();
		document.getElementById("fps").value = "";
		document.getElementById("fps").focus();
	}
});