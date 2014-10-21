/**
 * @author sjoerdsprangers
 */
function OptionView(options, number/*, notav*/){
	
	var self = Ti.UI.createView({
		modal: true,
		top: '0%',
		zIndex: 2,
		height: '100%',
		opacity: 1
	});
	
	var tableData = [];
	var arr = options;
	var n = number;
	//var not = notav;
	
	
	for(var i = 0; i < arr.length; ++i){
		this.thisObject = arr[i];
		var newRow = Ti.UI.createTableViewRow({
			borderColor:'black',
			height: '10%',
			touchEnabled: false,
			color: 'gray',
			
		});
		
		/*var v = 0;
		for(var b = 0;b<not.length  || v != 1;b++){
			if(b == i){
				newRow.setTouchEnabled(false);
				newRow.setFont({Color: 'gray'});	
				v = 1;
			}else {
			
			}
		}*/
		//newRow.name = this.thisObject.name;
		
		var label = Ti.UI.createLabel({
			text: this.thisObject.name,
			center: 0,
			left: '5%',
		});
			var spec = this.thisObject.name;
		//	var nonarr = this.thisObject.not;
			
		newRow.addEventListener('click', function(e){
			//var spec = this.thisObject.name;
			var test = "test";
			Ti.API.fireEvent('clickedspec', {name: arr[e.index].name, number: n/*, nonarray: nonarr*/});
			Ti.API.fireEvent('closeOptionView');
		});
		
		
		newRow.add(label);
		tableData.push(newRow);
		
	}

	var productTableView = Ti.UI.createTableView({
		data: tableData,
		//backgroundColor:'white',
		separatorColor:'black',
		top: 0,
	});
	
	self.add(productTableView);
	
	return self;
};


module.exports = OptionView;