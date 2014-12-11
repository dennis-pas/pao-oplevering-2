/**
 * @author sjoerdsprangers
 */
function ChooseTableView(){
	var data = [];
	var array1 = 
	[
			{n: "leather", c: "zitting",o: [
				{n: "gray", c: "frame", o:[]},
				{n: "black", c: "frame", o:[]},
				{n: "white", c: "frame", o:[]}
			]},
			
			{n: "fabric", c: "zitting", o: [
				{n: "gray", c: "frame", o:[
					{n: "gray", c: "wielen",o:[]},
					{n: "darkwood",c: "wielen", o:[]},
					{n: "plainwood", c: "wielen",o:[]}
					]},
				{n: "black", c: "frame",o:[]},
				{n: "silver", c: "frame",o:[]}
			]},
			
			{n: "whool", c: "zitting", o: [
				{n: "gray", c: "frame",o:[]},
				{n: "darkwood", c: "frame",o:[]},
				{n: "plainwood", c: "frame",o:[]}
			]},
	];
	var self = Ti.UI.createTableView({
		top: "10%"
	});
	
	function leesArray(treearray){
		
		
		if(treearray.length > 0){
		var firstObject = treearray[0];
		
		var section = Ti.UI.createTableViewSection({
			headerTitle: firstObject.c
			});
			
			
			for(var i = 0; i < treearray.length; i++){
				this.arrayObject = treearray[i];
				var tableviewRow = Ti.UI.createTableViewRow({
					title: this.arrayObject.n
				});
				
				tableviewRow.addEventListener('click', function(e){
					Ti.API.log("u heeft gekozen voor " + arrayObject.n);
					leesArray(arrayObject.o);
				});
				section.add(tableviewRow);
				
			}
			
			data.push(section);
		}
	
	self.setData(data);
	}
	
	
	leesArray(array1);
	
	
	/*
	//kleueren rows
	var tableview1Row = Ti.UI.createTableViewRow({
		heigth: 100,
		title: "blauw"
	});
	
	
	var tableview2Row = Ti.UI.createTableViewRow({
		heigth: 100,
		title: "rood"
	});
	
	
	var tableview3Row = Ti.UI.createTableViewRow({
		heigth: 100,
		title: "geel"
	});
	
	//stof row
		var tableview4Row = Ti.UI.createTableViewRow({
		heigth: 100,
		title: "leer"
	});
	
	
	var tableview5Row = Ti.UI.createTableViewRow({
		heigth: 100,
		title: "stof"
	});
	
	
	var tableview6Row = Ti.UI.createTableViewRow({
		heigth: 100,
		title: "mesh"
	});
	
	var section = Ti.UI.createTableViewSection({
		headerTitle: "kleur"
	});
	
	var section2 = Ti.UI.createTableViewSection({
		headerTitle: "stof"
	});
	section.add(tableview1Row);
	section.add(tableview2Row);
	section.add(tableview3Row);
	
	section2.add(tableview4Row);
	section2.add(tableview5Row);
	section2.add(tableview6Row);
	
	data.push(section);
	data.push(section2);
	self.setData(data);

	*/
	return self;
	
}

module.exports = ChooseTableView;
