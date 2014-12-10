/**
 * @author sjoerdsprangers
 */

function NewsDetailMenuView(){

	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'black',
		top: 0,
		bottom: '90%',
		//visible: false
	});
	
	//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
		//create Label label
	var label = Ti.UI.createLabel({
		text:'PLAN@OFFICE',
		color: '#ffffff',
		font: {fontFamily: customFont, fontSize: '25'},
		left: '40%'
	});
	
	var backButton = Ti.UI.createImageView({
		image: 'ui/common/img/backButton.png',
		height: 30,
		
		left: '5%'
		
	});
	
	backButton.addEventListener('click', function(e){
		Ti.API.log('pressed');
		Ti.API.fireEvent('backButtonActiveNews');
	});
	

	//create toolbar
	//button bar top
	var toolBar = Ti.UI.iOS.createToolbar({
		items:[backButton, label],
		top:0,
		left: -10,
		borderTop:false,
		borderBottom:false,
		barColor: 'Black',
		
	});
	
	self.add(toolBar);
	
	Ti.API.addEventListener('closeOptionView', function(e){
		toolBar.setVisible(true);
		self.setVisible(true);
		self.setHeight('100%');
		});
	
	Ti.API.addEventListener('openOptionView', function(e){
		self.setVisible(false);
		toolBar.setVisible(false);
		self.setHeight('0%');
		toolBar.setHeight('0%');
	});
	return self;
	
}

module.exports = NewsDetailMenuView;
