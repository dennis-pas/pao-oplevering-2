/**
 * @author sjoerdsprangers
 */

function ProductDetailInfoView(){
	
	/*var DocumentView = require('ui/common/product/productDetail/DocumentView');
	
	var documentView = new DocumentView();
	*/
	// create constructor
	var self = Ti.UI.createView({
		height: '100%',
		top: '93%',
		backgroundColor: 'white',
		opacity: 0.8
	});
	
	//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	//self.add(documentView);
	function ProductDetailDocumentContentView(){
		
		var selfContent = Ti.UI.createView({
			height: '98%',
			top: '20%',
		});
		
	// create tekst
	var test = Ti.UI.createLabel({
		text: 'Okamura Contessa van PLAN@OFFICE ontworpen door Okamura.',
		top: '0%',
		left: 10,
		right: 10,
		font: { fontSize:10 }
	});
	
	//create text
	var documentatieText = Ti.UI.createLabel({
		text: 'Brochure',
		top: '50%',
		left: 10,
		right: 10,
		font: { fontSize:10 }
	});
	
	// add 
	documentatieText.addEventListener('click', function() {
		
			var w = Titanium.UI.createWindow({
			  exitOnClose: true,
			  backgroundColor: 'white'
			});
			
			var webview = Titanium.UI.createWebView({url:'http://apishop.planatoffice.nl/Data/Documents/49-1.pdf'});
			w.add(webview);
			w.barColor = 'white';
			webview.add(b);
			b.addEventListener('click',function() {
				w.close();
			});
			w.open({ modal: true });
		});
		
		selfContent.add(test);
		selfContent.add(documentatieText);
		
		Ti.API.addEventListener('infoBarSLIDEUP', function(e){
			selfContent.setTop('10%');
		});
		
		Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
			selfContent.setTop('20%');
		});
	}
	//slider setup
	var slideBar = Ti.UI.createImageView({
		backgroundImage: 'ui/common/img/product/bureaustoel/SliderUpImgReduced.png',
		width: '100%',
		//left: '0%',
		//right: '0%',
		top: '0%',
		bottom: '80%',
		//opacity: 1,
		borderColor: 'black',
		
	});
	
	var SliderText = Ti.UI.createLabel({
		text: 'swipe omhoog',
		top: '5%',
		color: 'white',
		font: {
			fontFamily: customFont,
			fontSize: '15',
			}
		});
	
	//self.add(documentatieText);
	//self.add(test);
	//slideBar.add(SliderText);
	self.add(slideBar);
	
	//listeners --------------------------------------------------------------------
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		self.setTop('0%');
		slideBar.setBackgroundImage('ui/common/img/product/bureaustoel/SliderDownImgReduced.png');
		slideBar.setBottom('90%');
		SliderText.setTop('45%');
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		self.setTop('93%');
		slideBar.setBackgroundImage('ui/common/img/product/bureaustoel/SliderUpImgReduced.png');
		slideBar.setBottom('80%');
		SliderText.setTop('5%');
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
			SliderText.setText('Swipe omlaag');
			
		} else if(e.direction == 'down')
		{
			Ti.API.fireEvent('infoBarSLIDEDOWN');
			SliderText.setText('Swipe omhoog');
		}
		Ti.API.log('eerste view');
	});
	return self;
	
}

module.exports = ProductDetailInfoView;
