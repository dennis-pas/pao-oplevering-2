/**
 * @author sjoerdsprangers
 */

//MenuBar View Component Constructor
function ProductTableView(tableData) {
	
//create object instance, parasitic subclass of Observable
	var self = Ti.UI.createTableView({
		data: tableData,
		backgroundColor:'white',
		top: 0,
		rowHeight:128
	});
	
	return self;
};

module.exports = ProductTableView;