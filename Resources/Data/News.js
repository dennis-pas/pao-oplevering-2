function News() {
	
};


News.prototype.importOverview = function() {
    var urlCheck = "http://apishop.planatoffice.nl/allNieuws.aspx";
    
 				var bool = false;
				var xhrCheck = Ti.Network.createHTTPClient({
					    onload: function(e) {
							  	//if(isIos){
						        	xhrCheck.setRequestHeader("Content-Type", "application/xml");
						        //}
						        var xml = this.responseXML;
						        
							    var items = xml.documentElement.getElementsByTagName("NieuwsItem");
							    var itemVersionCheck = xml.documentElement.getElementsByTagName("Versie");
							    var db = Ti.Database.open('SqlPaoApp');
							    var curVersionArray = db.execute('SELECT versie FROM VersieNews;');
							    
							    var newVersion = itemVersionCheck.item(0).getElementsByTagName("Versie").item(0).text;
							    var newId = itemVersionCheck.item(0).getElementsByTagName("Versie").item(0).text;
							    var curVersion;
							
								var arrayResults = [];
								
								// gave error
							   //db.close();
							    
							  	while (curVersionArray.isValidRow())
							    {
							    	//Ti.API.info(" test  " + curVersionArray.fieldByName('versie'));
							    	arrayResults.push(curVersionArray.fieldByName('versie'));
							    	curVersion = curVersionArray.fieldByName('versie');
							    	curVersionArray.next();
							    }
							   	var test = "test";
							   	var nNewVersion = parseInt(newVersion);
							    if(curVersion != nNewVersion)
							    {
							    	db.execute('delete from News where NID > -1;');
							    	for (var i=0;i<items.length;i++) {  	
											var ID = items.item(i).getElementsByTagName("ID").item(0).text;
											var titel = items.item(i).getElementsByTagName("Title").item(0).text;
											var op = items.item(i).getElementsByTagName("OverviewPicture").item(0).text;
											var description = items.item(i).getElementsByTagName("Description").item(0).text;
											var pictures = items.item(i).getElementsByTagName("Picture");
											for(var f =0; f< pictures.length;f++ )
											{
												var picture = pictures.item(f).text;
												var test3= "test";
												var test4= "test";
												db.execute('INSERT INTO NewsPictures (NIDFK, PictureUrl) VALUES(' + ID + ',"' + picture + '");');
											}
											
											var test1 = "test";
											var test2 = "test";
											db.execute('INSERT INTO News (Title, OverviewPicture, Description) VALUES("' + titel + '","' + op  + '","' + description + '");');			  		
									    }
					 				    db.execute('UPDATE VersieProduct set versie = ' + newVersion + ' where id = 1');
									    db.close();
							    }				       
								    },
								    onerror: function(e) {
								        // this function is called when an error occurs, including a timeout
								        Ti.API.debug(e.error);
								        alert('Geen internet verbinding mogelijk.');
							    	},
							    	timeout:30000  /* in milliseconds */
								});
								xhrCheck.open("GET", urlCheck);
								xhrCheck.send();
};

module.exports = News;