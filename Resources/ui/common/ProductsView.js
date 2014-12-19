/**
 * @author sjoerdsprangers
 */
//MenuBar View Component Constructor
function ProductsView(){
	
	
	//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	});
	
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var tableData = [];
	var total = 0;
	//var ProductTableView = require('ui/common/product/ProductTableView');
	

	//'http://apishop.planatoffice.nl/Data/Pictures/OverviewImages/49.jpg'
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/product/overview/bureau_stoelen_eerste_sfeer.png.png', text: 'Bureaustoelen', catergorie: 'Bureaustoel'},
				{ID: 2,imgurl: 'ui/common/img/product/overview/stoelen.png', text: 'Stoelen', catergorie: 'Stoelen'},
				{ID: 3,imgurl: 'ui/common/img/product/overview/bureaus.png', text: 'Bureaus', catergorie: 'Bureaus' },
				{ID: 4,imgurl: 'ui/common/img/product/overview/school.png', text: 'School', catergorie: 'School' },
				{ID: 5,imgurl: 'ui/common/img/product/overview/styling.png', text: 'Styling', catergorie: 'Styling' },
				{ID: 6,imgurl: 'ui/common/img/product/overview/welfare.png', text: 'Welfare', catergorie: 'Welfare'},
				{ID: 7,imgurl: 'ui/common/img/product/overview/privacy_solutions.png', text: 'Privacy', catergorie: 'Privacy'},
				];
				
	var Producten = {};
	
	for(var i = 0; i < arr.length; ++i){
		this.thisObject = arr[i];
		var newRow = Ti.UI.createTableViewRow({
		//	backgroundImage: this.thisObject.imgurl,
			selectedBackgroundColor:'white',
			borderColor: 'white',
			height: 128,
			width: 256
		});
		
		var fullImageBackGround = Ti.UI.createImageView({
  			image: this.thisObject.imgurl,
  			height: '100%',
  			width: '100%',
			left: 0,
			right: 0,
			top: 0
		});	
		
		newRow.add(fullImageBackGround);
		
		newRow.cat = this.thisObject.catergorie;
		
		function ImgBalkImageView(thisObject){
			
			//create object instance, parasitic subclass of Observable
			var self = Ti.UI.createImageView({
				backgroundImage:'ui/common/img/product/Balk.png',
				right: 0,
				top: 80,
				height: '25%',
				width: '55%'
				
			});
			
			var text = Ti.UI.createLabel({
				text: thisObject.text,
				color: 'white',
				font: {fontSize: 12, fontFamily: customFont},
				
			});
			
		
			self.add(text);
				
			return self;
		};
		
		module.exports = ImgBalkImageView;
		var imgBalk = new ImgBalkImageView(this.thisObject);
		
		newRow.addEventListener('click', function(e){
			if(e.row.cat == 'Bureaustoel'){// deze regel verwijderen zodra andere views gemaakt zijn voor de andere catergorien
			var productsDataVar = require('ui/common/product/cat/'+ e.row.cat);
			var productsData = new productsDataVar();
			self.add(productsData);
			//self.setVisible(false);
			//productsData.open();
			}
		});

		
		fullImageBackGround.add(imgBalk),
		tableData.push(newRow);
		
	}
	var productTableView = Ti.UI.createTableView({
		data: tableData,
		backgroundColor:'white',
		separatorColor: 'E6E6E6',
		top: 0,
		rowHeight:128
	});
	
	self.add(productTableView);
	
	
	
	return self;
};

module.exports = ProductsView;
