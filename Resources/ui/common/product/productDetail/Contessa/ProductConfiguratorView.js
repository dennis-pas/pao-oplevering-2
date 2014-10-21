/**
 * @author sjoerdsprangers
 */
function ProductConfiguratorView(Product){

	var label1 = Ti.UI.createLabel({
		text: 'Frame kleur',
		top: '12%',
		left: '5%',
		font: { fontSize:10 }
	});
	
	var label2 = Ti.UI.createLabel({
		text: 'Body kleur',
		top: '22%',
		left: '5%',
		font: { fontSize:10 }
	});

	var textField1 = Ti.UI.createTextField({
		top: '15%',
		left: '5%',
		width: '40%',
		height: '5%',
		editable: false,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var textField2 = Ti.UI.createTextField({
		top: '25%',
		left: '5%',
		width: '40%',
		height: '5%',
		editable: false,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var textField3 = Ti.UI.createTextField({
		top: '35%',
		left: '5%',
		width: '40%',
		height: '5%',
		editable: false,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	
	var textField4 = Ti.UI.createTextField({
		top: '45%',
		left: '5%',
		width: '40%',
		height: '5%',
		editable: false,
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED
	});

	//todo:
	//text voor omhoog en omlaag swipen goed zetten
	// var en adders goed op de juiste plek neerzetten voor mooie code + documentatie
	
	var self = Ti.UI.createView({
		height: '100%',
		top: '90%',
		backgroundColor: 'white',
		visible: false,
		opacity: 0.8
	});
	/*
	var spec = {}
	var spec = {name:'long'}
	*/

	var array2 = [{name:'Zwart'},{name:'Grijs'}];
	/*var array3 = [{name:'long'},{name:'middle'},{name:'short'}, {name:'none'}];
	var array4 = [{name:'long'},{name:'middle'},{name:'short'}, {name:'none'}];
	var array5 = [{name:'long'},{name:'middle'},{name:'short'}, {name:'none'}];
	*/
	var array1 = 
	[
	{name:'Gepolijst'},
	{name:'Zilver'},
	{name:'Zwart'}
	];
	
	
	
	//var nonarr = [[]];
	//var testnonarr = [1,2];
	textField1.addEventListener('click', function(e){
		var options = array1;
		var arrNumber = 1;
		var OptionView = require ('ui/common/product/productDetail/Contessa/OptionView');
		//var notav = nonarr[0];
		var optionView = new OptionView(options, arrNumber/*, testnonarr*/);
		self.add(optionView);
		self.setTop('0%');
		Ti.API.fireEvent('openOptionView');
		Ti.API.addEventListener('closeOptionView', function(e){
			//optionView.setVisible(false);
		//	optionView.close();
			self.remove(optionView);
		});
	});
	
	textField2.addEventListener('click', function(e){
		var options = array2;
		var arrNumber = 2;
		var OptionView = require ('ui/common/product/productDetail/Contessa/OptionView');
		//var notav = nonarr[1];
		var optionView = new OptionView(options, arrNumber/*, testnonarr*/);
		self.add(optionView);
		self.setTop('0%');
		Ti.API.fireEvent('openOptionView');
		Ti.API.addEventListener('closeOptionView', function(e){
			
			self.remove(optionView);
		});
	});
	
	self.add(textField1);
	self.add(textField2);
	
	Ti.API.addEventListener('clickedspec', function(data){
		var name = data.name;
		var number = data.number;
		var notarray = data.nonarray;
			if(number == 1){
				textField1.setValue(name);
				//nonarr.splice(0,1, 'notarray');
			} else if(number == 2){
				textField2.setValue(name);
				//nonarr.splice(1,1, 'notarray');
			}
	});
	
	var optionView1 = Ti.UI.createView({
		
	});

		var optionBox2 = Titanium.UI.createOptionDialog({
		title: 'choose',
		options: array2,
		cancel: array2.length - 1,
		
	});
	
	/*	var optionBox3 = Titanium.UI.createOptionDialog({
		title: 'choose',
		options: array3,
		cancel: array3.length - 1,
		
	});
	
		var optionBox4 = Titanium.UI.createOptionDialog({
		title: 'choose',
		options: array4,
		cancel: array4.length - 1,
		
	});*/
	
	/* werkt nog niet(zoals te zien), moeten kijken naar hoe de variabelen gaan werken zonder dat er een nieuwe view wordt aangemaakt.
	 * variablen staan allemaal in dezelfde view dus moet echt een andere naam hebben om te kunnen onderscheiden
	 */
	var spaceTop = '10%';
	var spaceLeft = '5%';
	
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
	self.add(label1);
	
	self.add(label2);
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
