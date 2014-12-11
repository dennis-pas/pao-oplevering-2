
function ProjectsDetailWindow(id) {
	//declare module dependencies
	
	var ProjectsDetailMenuView = require('ui/common/Projects/ProjectsMenuBarView');
	//construct UI
	var projectsDetailMenuView = new ProjectsDetailMenuView();
	var projectsId = id;
	var db = Ti.Database.open('SqlPaoApp');
	var rows = db.execute('SELECT PIDFK, PictureUrl FROM ProjectPictures where PIDFK =' + projectsId);
	
	var self = Ti.UI.createWindow({
		backgroundColor: 'white',
		top: 0,
		fullscreen: true
	});
	
	var labelId = Ti.UI.createLabel({
		text: "test " + id,
		left: 40,
		top: 100
	});
	
	self.hideNavBar();
	
	//self.add(newsDetailMenuView);
	//self.add(labelId);
	
	var totalView = Ti.UI.createView({
		backgroundColor:'white',
		top: 0,
		
		//visible: false
	});
	
	var totalView2  = Ti.UI.createScrollView({
		backgroundColor:'white',
		top: 0,
		width: '100%',
		height: '100%'
		//visible: false
	});
	
	var totalImage = Ti.UI.createImageView({
		image: "http://apishop.planatoffice.nl/Data/Nieuws/ItemPictures/21-1.jpg",
		width: '200%',
		height: '100%'
		
	});
	
	
	var img2Wrapper = Ti.UI.createScrollView({
    	top: "80%",
    	height: "20%",
    	width: "100%",
	});
	
	
	var descriptionView = Ti.UI.createView({
		top: "50%",
		height: "50%",
		backgroundColor: "#333",
		opacity: 0.8
	});
	
	var titleArticle = Ti.UI.createLabel({
		top: 5,
		left: 10,
		text: "PLAN@OFFICE sponsort",
		font: { fontSize:12 },
		color: "white"
	});
	
	var descriptionLabel = Ti.UI.createLabel({
		top: 20,
		left: 10,
		width: '90%',
		text: "PLAN@OFFICE sponsort PLAN@OFFICE sponsort PLAN@OFFICE sponsort PLAN@OFFICE sponsort PLAN@OFFICE sponsort PLAN@OFFICE sponsort PLAN@OFFICE sponsort ",
		font: { fontSize:8 },
		color: "white"
	});
	
	var hidden = 0;
	
	descriptionView.addEventListener('click', function(e){		
		if(hidden == 0)
		{
			descriptionView.hide();
			img2Wrapper.hide();
			hidden = 1;
		}else
		{
			descriptionView.show();
			img2Wrapper.show();
			hidden = 0;
		}
	});
	
	totalView2.addEventListener('click', function(e){	
		if(hidden == 0)
		{
			descriptionView.hide();
			img2Wrapper.hide();
			hidden = 1;
		}else
		{
			descriptionView.show();
			img2Wrapper.show();
			hidden = 0;
		}	
	});
	
	
	var left = 10;
	
	while(rows.isValidRow())
	{
		if(left == 10)
		{
			totalImage.setImage("http://apishop.planatoffice.nl/" + rows.fieldByName('PictureUrl'));
		}
		
		var image1 = Ti.UI.createImageView({
			top: 10,
	    	height: 75,
	    	width: 75,
	    	left: left,
	    	image: "http://apishop.planatoffice.nl/" + rows.fieldByName('PictureUrl')
	    	//backgroundColor: "black"
		});
		
		rows.url = rows.fieldByName('PictureUrl');
		
		image1.addEventListener('click', function(e){
			var url = e.source.image;
			totalImage.setImage(url); 
			var test = "ters";
		});
		
		left = left + 90;
	
		img2Wrapper.add(image1);
		rows.next();
	}
	
	db.close();	
	//totalView2
	//titleArticle
	totalView.add(totalView2);
	totalView2.add(totalImage);
	totalView.add(descriptionView);
	descriptionView.add(titleArticle);
	descriptionView.add(descriptionLabel);
	totalView.add(projectsDetailMenuView);
	totalView.add(img2Wrapper);
	self.add(totalView);
	Ti.API.addEventListener('backButtonActiveNews', function(e){
		self.close();
	});
	
	return self;
};


module.exports = ProjectsDetailWindow;