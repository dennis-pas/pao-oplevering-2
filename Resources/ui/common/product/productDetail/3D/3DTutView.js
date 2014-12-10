/**
 * @author sjoerdsprangers
 */
function TutView(){

	var timerFunction = require('ui/common/product/productDetail/3D/3dTutTimer');
	var timerfunction = new timerFunction;
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'black',
		top: 0,
		
	});
	
	//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var closebutton = Ti.UI.createButton({
		right: '5%',
		top: '5%',
		backgroundImage: 'ui/common/img/3d/close_button.png'
	});
	
	closebutton.addEventListener('click', function(e){
		Ti.App.fireEvent('closeTutview');
	});

	return self;
	
}

module.exports = tutView;
