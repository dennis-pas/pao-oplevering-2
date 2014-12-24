/**
 * @author sjoerdsprangers
 */

function ProductDetailInfoView(){
	
	
	var self = Ti.UI.createView({
		height: '100%',
		top: '90%',
		backgroundColor: 'white',
		opacity: 0.8
	});
	
		//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	function ProductDetailDocumentContentView(){
		
		var DocumentView = require('ui/common/product/productDetail/DocumentView');
	
		var documentView = new DocumentView();
		
		var selfContent = Ti.UI.createView({
			height: '90%',
			top: '10%',
			backgroundColor: 'white',
			visible: false,
			
		});
		
	
	
		selfContent.add(documentView);
		
		
		// listeners -----------------------------------------------------
		
		Ti.API.addEventListener('infoBarSLIDEUP', function(e){
			selfContent.setVisible(true);
		});
		
		Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
			selfContent.setVisible(false);
		});
		
		return selfContent;
	}
	
	
	
//slider setup
	var slideBar = Ti.UI.createImageView({
		backgroundImage: 'ui/common/img/product/bureaustoel/SliderUpImgReduced.png',
		width: '100%',
		top: '0%',
		bottom: '80%',
		
	});
	
	self.add(slideBar);
	
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		self.setTop('0%');
		slideBar.setBackgroundImage('ui/common/img/product/bureaustoel/SliderDownImgReduced.png');
		slideBar.setBottom('90%');
		
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		self.setTop('80%');
		slideBar.setBackgroundImage('ui/common/img/product/bureaustoel/SliderUpImgReduced.png');
		slideBar.setBottom('80%');
	});	
	
	Ti.API.addEventListener('configBarSLIDEUP', function(e){
		self.setVisible(false);
	});
	
	Ti.API.addEventListener('configBarSLIDEDOWN', function(e){
		self.setVisible(true);
	});
	
	slideBar.addEventListener('swipe', function(e){
		if(e.direction == 'up')
		{
			Ti.API.fireEvent('infoBarSLIDEUP');
			
		} else if(e.direction == 'down')
		{
			Ti.API.fireEvent('infoBarSLIDEDOWN');
		}
		Ti.API.log('eerste view');
	});
	
	self.add(ProductDetailDocumentContentView());
	return self;
	
}

module.exports = ProductDetailInfoView;
