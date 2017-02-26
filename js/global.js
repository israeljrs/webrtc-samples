window.addEventListener('load', function() {
	var btn1 = document.getElementById('btn1');
	var video = document.getElementById('myCam');
	var vgaConstraints = {
	  video: {width: {exact: 640}, height: {exact: 480}}
	};
	function gotStream(mediaStream) {
	  window.stream = mediaStream; // stream available to console
	  video.srcObject = mediaStream;
	};
	btn1.addEventListener('click', function() {
		navigator.mediaDevices.getUserMedia(vgaConstraints)
		  	.then(gotStream)
		  	.catch(function(e) {
		    	var message = 'getUserMedia error: ' + e.name;
		    	alert(message);
		    	console.log(message);
		});
	});
});