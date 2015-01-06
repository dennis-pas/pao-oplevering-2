/**
 * @author sjoerdsprangers
 */

//MenuBar View Component Constructor
function InfoView() {
	
///create object instance, parasitic subclass of Observable
	var self = Ti.UI.createView({
		backgroundColor:'white',
		top: 70
	});
	this.view1 = Ti.UI.createView({
			
		});	
		
	
			this.contactLabel = Ti.UI.createLabel({
				text: "Route en contact",
				left: 40,
				top: 20,
				font: {	fontSize:22, fontWeight: 'bold'}
			});
	       	
	       	this.addressLabel = Ti.UI.createLabel({
				text: "Van Zandvlietplein 19, \n3077 AA, Rotterdam",
				left: 60,
				top: 65,
				font: {	fontSize:14}
			});
			
			this.addressImage2 = Ti.UI.createButton({
					image: "ui/common/img/navigatie.png",
					right: 30,
					top: 65,
					//width: 30,
					//heigth: 30
				});
				
	
			
			this.telefoonLabel = Ti.UI.createLabel({
				text: "010 - 4822247",
				left: 60,
				top: 113,
				font: {	fontSize:14}
			});
			
				this.telefoonImage = Ti.UI.createButton({
					image: "ui/common/img/telefoon.png",
					right: 30,
					top: 104
				});
			
			
			this.emailLabel = Ti.UI.createLabel({
				text: "info@planatoffice.nl",
				left: 60,
				top: 150,
				font: {	fontSize:14}
			});
			
			this.mailImage = Ti.UI.createButton({
					image: "ui/common/img/mail.png",
					right: 30,
					top: 145
				});
			
			
			this.websiteLabel = Ti.UI.createLabel({
				text: "www.planatoffice.nl",
				left: 60,
				top: 190,
				font: {	fontSize:14}
			});
	
			 var websiteImage = Ti.UI.createButton({
					image: "ui/common/img/web_pagina.png",
					right: 30,
					top: 185
				});        
	        
			this.aboutLabel = Ti.UI.createLabel({
				text: "Picture",
				left: 40,
				top: 230,
				font: {	fontSize:22, fontWeight: 'bold'}
			});
			
		
		
		

       	
            
		// create image background  
		this.imageBackground = Ti.UI.createImageView ({
			//backgroundColor: "black",    
			backgroundImage: 'ui/common/img/planAtOffice_bg2.png'
		});
		
		
		
		/*this.imageBackground.add(this.view1);
		this.view1.add(this.contactLabel);
		this.view1.add(this.addressLabel);
		this.view1.add(addressImage);
		this.view1.add(this.telefoonImage);
		this.view1.add(this.telefoonLabel);
		this.view1.add(this.emailLabel);
		this.view1.add(this.mailImage);
		this.view1.add(this.websiteLabel);
		this.view1.add(this.websiteImage);
		this.view1.add(this.aboutLabel);*/
		
		this.addressImage2.addEventListener("click", function(e) {
	     //   Gyro.APP.loadScreen("map");
	    });
	    
	    this.telefoonImage.addEventListener("click", function(e) {
	       // Titanium.Platform.openURL('tel:0031104822247');
	        var alert1 = Titanium.UI.createAlertDialog({
		      title:'Telefoneren', 
		      message:'Wilt u PLAN@OFFICE bellen?',
		      buttonNames: ['Ja', 'Annuleer'],
		      cancel:1
		    });
		    alert1.show();
		   	alert1.addEventListener('click', function(ev)
		    {
		    if (ev.index == 0) { // clicked "Yes"
		    	Titanium.Platform.openURL('tel:0031104822247');
		    }
		   });
	    });
	    
	    websiteImage.addEventListener("click", function(e) {
	    /*    var link = "http://www.planatoffice.nl"
	        Gyro.APP.loadScreen("webview2", {link:link,name:"Website"});*/
	    });
	    
	    
	    this.mailImage.addEventListener("click", function(e) {
		    var emailDialog = Ti.UI.createEmailDialog()
			emailDialog.subject = "Mail van uit app";
			emailDialog.toRecipients = ['info@planatoffice.com'];
			//emailDialog.messageBody = '<b>Appcelerator Titanium Rocks!</b>';
			//var f = Ti.Filesystem.getFile('cricket.wav');
			//emailDialog.addAttachment(f);
			emailDialog.open();
	    });
		
		this.imageBackground.add(this.view1);
		this.view1.add(this.contactLabel);
		this.view1.add(this.addressLabel);
		//this.view1.add(this.addressImage2);
		//this.view1.add(this.telefoonImage);
		this.view1.add(this.telefoonLabel);
		this.view1.add(this.emailLabel);
		//this.view1.add(this.mailImage);
		this.view1.add(this.websiteLabel);
		//this.view1.add(websiteImage);
		
		
		//this.view1.add(this.aboutLabel);

		

		self.add(this.imageBackground);
		//self.add(text1);
	
		return self;
};

module.exports = InfoView;
