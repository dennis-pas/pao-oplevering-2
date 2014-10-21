/**
 * @author sjoerdsprangers
 */

//MenuBar View Component Constructor
function HomeView() {
	
//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	});
	
	var webview = Titanium.UI.createWebView({url:'https://www.youtube.com/watch?v=lN09Z-6_Um4'});
	
	/*var win = Titanium.UI.currentWindow;
    var contentURL = 'http://movies.apple.com/media/us/ipad/2010/tours/apple-ipad-video-us-20100127_r848-9cie.mov';

    var activeMovie = Titanium.Media.createVideoPlayer({
        contentURL: contentURL,
        backgroundColor:'#111',
        movieControlMode:Titanium.Media.VIDEO_CONTROL_DEFAULT,
        scalingMode:Titanium.Media.VIDEO_SCALING_MODE_FILL
    });

 	win.add(activeMovie);
 	activeMovie.play();*/
	
	self.add(webview);
	
	return self;
};

module.exports = HomeView;
