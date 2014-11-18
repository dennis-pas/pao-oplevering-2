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
		top: '90%',
		backgroundColor: 'white',
		visible: false,
		opacity: 0.8
	});
	
	var ChooseTableView = require('ui/common/product/productDetail/Contessa/ChooseTableView');
	var chooseTableView = new ChooseTableView();
	self.add(chooseTableView);
	
	
	
	//!!!!!!!!!!!!!!!!!!!!!!!!! slidebar !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
	var slideBarCon = Ti.UI.createView({
		height: '10%',
		top: '0%',
		bottom: '90%',
		backgroundColor: 'gray',
		borderColor: 'black'
	});
	
	var status = 'down';
	var SliderText = Ti.UI.createLabel({
		text: 'swipe omhoog',
	});
	
	slideBarCon.add(SliderText);
	self.add(slideBarCon);

	
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		self.setVisible(true);
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		self.setVisible(false);
	});	
	
	Ti.API.addEventListener('configBarSLIDEUP', function(e){
		self.setTop('0%');
	});
	
	Ti.API.addEventListener('configBarSLIDEDOWN', function(e){
		self.setTop('90%');
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
