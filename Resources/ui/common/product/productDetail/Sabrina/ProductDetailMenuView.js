/**
 * @author sjoerdsprangers
 */

function ProductDetailMenuView(){

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
	
	
	//create 3D button
	//calls the 3dWindow
	var _3DButton = Ti.UI.createImageView({
		image: 'ui/common/img/3d/3DKnop.png',
		height: 30,
		right: '5%'
	});
	
	var backButton = Ti.UI.createImageView({
		image: 'ui/common/img/backButton.png',
		height: 30,
		
		left: '5%'
		
	});
	
	backButton.addEventListener('click', function(e){
		Ti.API.log('pressed');
		Ti.API.fireEvent('backButtonActive');
	});
	
	//create flexSpace
	flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
	});
	
	//create toolbar
	//button bar top
	var toolBar = Ti.UI.iOS.createToolbar({
		items:[backButton, label, flexSpace, _3DButton],
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
	
		//event listerner for the 3D button
	var WikitudeLicenseKey = "3yvVuGsUyHmMl2imYYIuxFx/GZRm/f3CfCimZD8QitPMn36ZHLzDoxVTspGb1km95Di7vo/xDCW3iCjB8rPFLUPbmrzyca5EdG2Jc9UstW5XjaHR2iohI7lQHX+zx46j6opFdM6stj3skdECMhXP89MWWpzDPQ/NshYGXZ91jj5TYWx0ZWRfX6/kGEHkC97qJANtQocSTNsaiCw6+s7mSaILGruwT02Rcv+MX318c/ZVrVwgwOlsZGVcMgj3GU6EmMp3vVdajDNCr/UVlN+Am01MnXPNHHmX9RfLrV5rSHoPnTFhlDJ0FRt6YSfo5g+6iL4TBzsUuu64FmJB/nJLa9ifR4ORlUO7kt9NO9k7yV4KLgVW4KYFNU7UPDIrRe8O5GvG8TM8XFzg4I1OhyNBvb8Nd7qLFwQV8WVWet2o2JO9rbcmoZlzDphvydfngzzfIXmJ1WUWayzf8riLgXqBpSwaZEZlHAAJgl3CGDYLT7CJppLukvy11MyHADUyBp/eqWyMidVLo05kKpRCM5hra84Sfzklw60RKE6frtAaQIuvhvGiHcQ/GTuLsQh9tArC4CC7/jCbqqKWKpWNKah1URqpoOYd810BZYm2YJYLsDjPjWG5fRBcxoNwqj5oBtRVlZk+e9DgTQ1N6jXQ0grulXaK1BEaB5f56Zc8UazEXtE=";
	
		_3DButton.addEventListener('click', function(e){
			var ARchitectWindow = require('/ui/common/wikitude/ARchitectWindow');

            var architectWindow = new ARchitectWindow(WikitudeLicenseKey, "IrAndGeo");
            if (architectWindow.isDeviceSupported()) {
                architectWindow.loadArchitectWorldFromURL("http://apishop.planatoffice.nl/ProductDimensional.aspx");
                //architectWindow.loadArchitectWorldFromURL("http://www.apptinity.com/DRIEDVIEWTEST/index.html");
                architectWindow.open();
            } else {
                alert('not supported');
            }
			
			/*var _3DWindow = require('ui/common/product/productDetail/3D/3DWindow');
			var Window3D = new _3DWindow();
			Window3D.open();*/
		});
	return self;
	
}

module.exports = ProductDetailMenuView;
