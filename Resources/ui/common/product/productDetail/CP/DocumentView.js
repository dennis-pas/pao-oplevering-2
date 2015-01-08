/**
 * @author sjoerdsprangers
 */


function DocumentView(){
	
	var self = Ti.UI.createView({
		height: '47%',
		top: '13%',
		backgroundColor: 'black',
		opacity: 1,
	});
	
	var img = Ti.UI.createImageView({
		image: 'ui/common/img/documentView.png',
		height: '100%',
		top: '0%',
		width: '100%',
		opacity: 2
	});
	
	self.add(img);
	
	
	return self;
	
}

module.exports = DocumentView;
