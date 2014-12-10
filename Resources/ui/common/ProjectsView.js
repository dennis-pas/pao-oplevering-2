/**
 * @author sjoerdsprangers
 */

//MenuBar View Component Constructor
function ProjectsView(){
	
	
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 88
	});
	
	
	var tableData = [];
	var total = 0;
	//var ProductTableView = require('ui/common/product/ProductTableView');
	
	var customFont = 'Futura Lt';
	if(Ti.Platform.osname=='android'){
		customFont = 'Futura-Lt';
	}
	
	var db = Ti.Database.open('SqlPaoApp');
	var rows = db.execute('SELECT PID, Title, OverviewPicture, Description FROM Project');
	
	/*while (rows.isValidRow())
	{
		rows.fieldByName('Title');
	}*/
	var arr =	[	
				{ID: 1,imgurl: 'ui/common/img/Nieuws/49.jpg', text: 'Exclusieve samenwerking BAM'},
				{ID: 2,imgurl: 'ui/common/img/Nieuws/50.jpg', text: 'ARK 14'},
				{ID: 4,imgurl: 'ui/common/img/Nieuws/51.jpg', text: 'Orgatec'},
				];
	
		
	var Producten = {};
	
	//for(var i = 0; i < arr.length; ++i){
	while (rows.isValidRow())
	{
//		this.thisObject = arr[i];
		var newRow = Ti.UI.createTableViewRow({
			//http://apishop.planatoffice.nl/Data/Nieuws/OverviewItems/22.jpg
			//backgroundImage: "http://apishop.planatoffice.nl/" + rows.fieldByName('OverviewPicture'),
			selectedBackgroundColor:'white',
			borderColor: 'white',
			height: 128,
			width: 256
		});
		
		var imageFullBack = Ti.UI.createImageView({
			width: "100%",
			height: "98%",
			image: "http://apishop.planatoffice.nl/" + rows.fieldByName('OverviewPicture')
		});
		
		
		//newRow.cat = this.thisObject.catergorie;
		
		function ImgBalkImageView(test){
			
			//create object instance, parasitic subclass of Observable
			var self = Ti.UI.createImageView({
				backgroundImage:'ui/common/img/product/Balk.png',
				right: '0%',
				top: '60%',
				height: '25%',
				width: '55%'
				
			});
			
			var text = Ti.UI.createLabel({
				left: '5%',
				height: '100%',
				width: '90%',
				color: 'white',
				font: {fontSize: 12, fontFamily: customFont},
				text: test,
				
				
			});
			
			
			self.add(text);
				
			return self;
		};
		
		module.exports = ImgBalkImageView;
		
		var imgBalk = new ImgBalkImageView(rows.fieldByName('Title'));
		
		
		newRow.id = rows.fieldByName('PID');
		
		
		newRow.addEventListener('click', function(e){			
			var ProjectsDetailWindow = require("ui/common/Projects/ProjectsDetailWindow");
			var id = e.row.id;
			var projectsDetailWindow = new ProjectsDetailWindow(id);
			//self.add(productsData);
			//self.setVisible(false);
			projectsDetailWindow.open();
		});

		newRow.add(imageFullBack);
		imageFullBack.add(imgBalk),
		tableData.push(newRow);
		rows.next();
	}
	db.close();	
	//db.close();		
	var productTableView = Ti.UI.createTableView({
		data: tableData,
		backgroundColor:'white',
		separatorColor: 'white',
		top: 0,
		rowHeight:128
	});
	
	self.add(productTableView);
	
	
	
	return self;
};

module.exports = ProjectsView;
