/**
 * @author sjoerdsprangers
 */

function ProductDetailInfoView(){
	
	var DocumentView = require('ui/common/product/productDetail/DocumentView');
	
	var documentView = new DocumentView();
	
	var self = Ti.UI.createView({
		height: '100%',
		top: '90%',
		backgroundColor: 'white',
		opacity: 0.8
	});
	
	self.add(documentView);
	var test = Ti.UI.createLabel({
		text: 'Okamura Contessa van PLAN@OFFICE ontworpen door Okamura.',
		top: 50,
		left: 10,
		right: 10,
		font: { fontSize:10 }
	});
	
	var documentatieText = Ti.UI.createLabel({
		text: 'Brochure',
		top: 150,
		left: 10,
		right: 10,
		font: { fontSize:10 }
	});
	
	documentatieText.addEventListener('click', function() {
			var b = Titanium.UI.createButton({
				title: 'Close',
				width: 50,
				height: 40,
				top: 10,
				right: 0
			});
		
		
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
	
	var slideBar = Ti.UI.createView({
		height: '10%',
		top: '0%',
		bottom: '90%',
		backgroundColor: 'gray',
		opacity: 1,
		borderColor: 'black'
	});
	
	var SliderText = Ti.UI.createLabel({
		text: 'swipe omhoog',
	});
	
	self.add(documentatieText);
	self.add(test);
	slideBar.add(SliderText);
	self.add(slideBar);
	
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		self.setTop('0%');
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		self.setTop('90%');
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
