	/**
 * @author sjoerdsprangers
 */

function Bureaustoel(){
	
	var self = Ti.UI.createView({
		modal: true,
		
	});
	
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var tableData = [];
	
	//var ProductTableView = require('ui/common/product/ProductTableView');
	

	
	var arr =	[	
				{ID: 1,imgurl: 'http://apishop.planatoffice.nl/Data/Pictures/OverviewImages/49.jpg', name: 'Contessa', buyable: 1},
				{ID: 2,imgurl: 'http://apishop.planatoffice.nl/Data/Pictures/OverviewImages/51.jpg', name: 'CP', buyable: 1, },
				{ID: 3,imgurl: 'http://apishop.planatoffice.nl/Data/Pictures/OverviewImages/50.jpg', name: 'Sabrina', buyable: 1, },
				];
	
	for(var i = 0; i < arr.length; ++i){
		this.thisObject = arr[i];
		var newRow = Ti.UI.createTableViewRow({
		//	backgroundImage: this.thisObject.imgurl,
			selectedBackgroundColor:'white',
			borderColor:'white',
			height: 128,
			width: 256
		});
		
		
		var fullImageBackGround = Ti.UI.createImageView({
  			image: this.thisObject.imgurl,
  			height: '100%' ,
  		//	width: '100%',
			left: 0,
			top: 0
		});	
		newRow.add(fullImageBackGround);
		newRow.name = this.thisObject.name;
		
		function ImgBalkImageView(thisObject){
			
			//create object instance, parasitic subclass of Observable
			var self = Ti.UI.createImageView({
				backgroundImage:'ui/common/img/product/Balk.png',
				right: 0,
				top: 80,
				height: '25%',
				width: '55%'
				
			});
			
			var name = Ti.UI.createLabel({
				text: thisObject.name,
				color: 'white',
				font: {fontSize: 12, fontFamily: customFont},
				
			});
			var buyable = thisObject.buyable;
			if(buyable == 1)
			{		
			var BuyableFlag = Ti.UI.createImageView({
				image: 'ui/common/img/product/BuyableFlag.png',
				height: '100%',
				right: -61
			});
			}else{
				var BuyableFlag = Ti.UI.createImageView({
					image: 'none'
				});
			}
			self.add(BuyableFlag);
			self.add(name);
				
			return self;
		};
		
		module.exports = ImgBalkImageView;
		var imgBalk = new ImgBalkImageView(this.thisObject);
		checker = this.thisObject.name;
		Ti.API.log('begin');
		if(checker == 'Contessa'){
			newRow.addEventListener('click', function(e){
			var productsDataVar = require('ui/common/product/productDetail/Contessa/ProductDetailWindow');
			var productsData = new productsDataVar();
			Ti.API.log('hij is bij de contessa');
			productsData.open();
		});
		} else if(checker =='CP'){
			newRow.addEventListener('click', function(e){
			var productsDataVar = require('ui/common/product/productDetail/CP/ProductDetailWindow');
			var productsData = new productsDataVar();
			Ti.API.log('hij is bij de CP');
			productsData.open();
		});
		} else if(checker == 'Sabrina'){
			newRow.addEventListener('click', function(e){
			var productsDataVar = require('ui/common/product/productDetail/Sabrina/ProductDetailWindow');
			var productsData = new productsDataVar();
			Ti.API.log('hij is bij de Sabrina');
			productsData.open();
		});
		}else{
			Ti.API.log('sjoerd kijk je code na want dit moet niet kunnen');
		}
		fullImageBackGround.add(imgBalk),
		tableData.push(newRow);
		
	}
	var productTableView = Ti.UI.createTableView({
		data: tableData,
		backgroundColor:'white',
		separatorColor:'E6E6E6',
		top: 0,
	});
	
	self.add(productTableView);
	
	Ti.App.addEventListener('resetproducten', function(data){
		Titanium.API.log('listen 1');
		self.setVisible(false);
	});
	
	return self;
};

module.exports = Bureaustoel;
