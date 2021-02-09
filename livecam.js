const LiveCam = require('livecam');

const webcam_server = new LiveCam({

// address and port of the webcam UI
	'ui_addr' : '192.168.43.39',
	'ui_port' : 11000,

// address and port of the webcam Socket.IO server
	// this server broadcasts GStreamer's video frames
	// for consumption in browser side.
	'broadcast_addr' : '192.168.43.39',
	'broadcast_port' : 12000,

	// address and port of GStreamer's tcp sink
	'gst_tcp_addr' : '192.168.43.39',
	'gst_tcp_port' : 10000,	

	'start' : function() {
		console.log('Webcam server started!');
	}
});

webcam_server.broadcast();

