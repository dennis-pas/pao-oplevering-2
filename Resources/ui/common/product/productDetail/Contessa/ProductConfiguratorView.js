/**
 * @author sjoerdsprangers
 */
function ProductConfiguratorView(Product){
	
	var array1 = 
	[
			{n: "leather", c: "zitting",o: [
				{n: "gray", c: "frame", o:[]},
				{n: "black", c: "frame", o:[]},
				{n: "white", c: "frame", o:[]}
			]},
			
			{n: "fabric", c: "zitting", o: [
				{n: "gray", c: "frame", o:[
					{n: "gray", c: "wielen",o:[]},
					{n: "darkwood",c: "wielen", o:[]},
					{n: "plainwood", c: "wielen",o:[]}
					]},
				{n: "black", c: "frame",o:[]},
				{n: "silver", c: "frame",o:[]}
			]},
			
			{n: "whool", c: "zitting", o: [
				{n: "gray", c: "frame",o:[]},
				{n: "darkwood", c: "frame",o:[]},
				{n: "plainwood", c: "frame",o:[]}
			]},
	];

	var self = Ti.UI.createView({
		height: '100%',
		top: '93%',
		backgroundColor: 'white',
		visible: false,
		opacity: 0.8
	});
	
	//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var ChooseTableView = require('ui/common/product/productDetail/Contessa/ChooseTableView');
	var chooseTableView = new ChooseTableView();
	self.add(chooseTableView);
	
	//slider setup
	var slideBarCon = Ti.UI.createImageView({
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
	
	//slideBarCon.add(SliderText);
	self.add(slideBarCon);
	
	//listeners --------------------------------------------------------------------
	Ti.API.addEventListener('configBarSLIDEUP', function(e){
		self.setTop('0%');
		slideBarCon.setBackgroundImage('ui/common/img/product/bureaustoel/SliderDownImgReduced.png');
		slideBarCon.setBottom('90%');
		SliderText.setTop('45%');
	});
		
	Ti.API.addEventListener('configBarSLIDEDOWN', function(e){
		self.setTop('93%');
		slideBarCon.setBackgroundImage('ui/common/img/product/bureaustoel/SliderUpImgReduced.png');
		slideBarCon.setBottom('80%');
		SliderText.setTop('5%');
	});	
	
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		self.setVisible(true);
	});
	
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		self.setVisible(false);
	});
	
	slideBarCon.addEventListener('swipe', function(e){
		if(e.direction == 'up')
		{
			Ti.API.fireEvent('configBarSLIDEUP');
			SliderText.setText('Swipe omlaag');
			
		} else if(e.direction == 'down')
		{
			Ti.API.fireEvent('configBarSLIDEDOWN');
			SliderText.setText('Swipe omhoog');
		}
		Ti.API.log('eerste view');
	});
	return self;
	
}

module.exports = ProductConfiguratorView;
