/**
 * @author sjoerdsprangers
 */

function ProductImageViewerView(){

	
	var arr = [
	{ID: 1, url:'http://apishop.planatoffice.nl/Data/Pictures/DetailImages/49-1.jpg'},
	{ID: 2, url:'http://apishop.planatoffice.nl/Data/Pictures/DetailImages/49-2.jpg'},
	{ID: 2, url:'http://apishop.planatoffice.nl/Data/Pictures/DetailImages/49-3.jpg'},
	];
	
	var imgToView = arr[0];
	var placeOfPhoto = 0;
	var length = arr.length;
	var length = length - 1;
	var self = Ti.UI.createImageView({
		top: '0%',		
		bottom: '10%',
		width: '100%',
		height: '100%',
		//image: imgToView.url
	});
	
	var button3D = Ti.UI.createButton({
		backgroundColor: 'black',
		title: '3D',
		top: '15%',
		right: '15%'
	});
	
	var WikitudeLicenseKey = "3yvVuGsUyHmMl2imYYIuxFx/GZRm/f3CfCimZD8QitPMn36ZHLzDoxVTspGb1km95Di7vo/xDCW3iCjB8rPFLUPbmrzyca5EdG2Jc9UstW5XjaHR2iohI7lQHX+zx46j6opFdM6stj3skdECMhXP89MWWpzDPQ/NshYGXZ91jj5TYWx0ZWRfX6/kGEHkC97qJANtQocSTNsaiCw6+s7mSaILGruwT02Rcv+MX318c/ZVrVwgwOlsZGVcMgj3GU6EmMp3vVdajDNCr/UVlN+Am01MnXPNHHmX9RfLrV5rSHoPnTFhlDJ0FRt6YSfo5g+6iL4TBzsUuu64FmJB/nJLa9ifR4ORlUO7kt9NO9k7yV4KLgVW4KYFNU7UPDIrRe8O5GvG8TM8XFzg4I1OhyNBvb8Nd7qLFwQV8WVWet2o2JO9rbcmoZlzDphvydfngzzfIXmJ1WUWayzf8riLgXqBpSwaZEZlHAAJgl3CGDYLT7CJppLukvy11MyHADUyBp/eqWyMidVLo05kKpRCM5hra84Sfzklw60RKE6frtAaQIuvhvGiHcQ/GTuLsQh9tArC4CC7/jCbqqKWKpWNKah1URqpoOYd810BZYm2YJYLsDjPjWG5fRBcxoNwqj5oBtRVlZk+e9DgTQ1N6jXQ0grulXaK1BEaB5f56Zc8UazEXtE=";
	
		button3D.addEventListener('click', function(e){
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
		
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		button3D.setVisible(false);
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		button3D.setVisible(true);
	});	
	
	self.addEventListener('swipe', function(e){
		if(e.direction == 'left')
		{
			if( placeOfPhoto < length)
			{
				placeOfPhoto = placeOfPhoto + 1;
				imgToView = arr[placeOfPhoto];
			}
			else 
			{
				imgToView = arr[placeOfPhoto];
			}
		} else if(e.direction == 'right')
		{
			if (placeOfPhoto > 0)
			{
				placeOfPhoto = placeOfPhoto - 1;
				imgToView = arr[placeOfPhoto];
			} 
			else 
			{
				imgToView = arr[placeOfPhoto];
			}
		} else 
		{
			imgToView = arr[placeOfPhoto];	
		}
		self.setImage(imgToView.url);
	});
	
	self.add(button3D);
	return self;
	
}

module.exports = ProductImageViewerView;
