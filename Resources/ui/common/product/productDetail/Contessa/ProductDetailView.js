/**
 * @author sjoerdsprangers
 */

function ProductDetailView(){

	var ProductImageViewerView = require('ui/common/product/productDetail/Contessa/ProductImageViewerView');
	var ProductDetailInfoView = require('ui/common/product/productDetail/Contessa/ProductDetailInfoView');
	var ProductConfiguratorView = require('ui/common/product/productDetail/Contessa/ProductConfiguratorView');
	
	var productImageViewerView = new ProductImageViewerView();
	var productDetailInfoView = new ProductDetailInfoView();
	var productConfiguratorView = new ProductConfiguratorView();

	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: '10%',
	});
	
	//settings for font
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	var test = Ti.UI.createLabel({
		text: 'test voor window dinges in dit gele scherm'
	});
	
//	self.add(test);

	self.add(productImageViewerView);
	self.add(productDetailInfoView);
	self.add(productConfiguratorView);
	
	Ti.API.addEventListener('infoBarSLIDEUP', function(e){
		
	});
		
	Ti.API.addEventListener('infoBarSLIDEDOWN', function(e){
		
	});	
	
	Ti.API.addEventListener('configBarSLIDEUP', function(e){
		
	});
	
	Ti.API.addEventListener('configBarSLIDEDOWN', function(e){
		
	});
	
	Ti.API.addEventListener('closeOptionView', function(e){
		self.setTop('10%');
		});
	
	Ti.API.addEventListener('openOptionView', function(e){
		self.setTop('0%');
	});
	return self;
}
module.exports = ProductDetailView;
