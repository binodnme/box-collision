function BoxAnimation() {
    var maxWidth = 900-54;
    var maxHeight = 500-54;
    var minWidth = 0;
    var minHeight = 0;
    
	var boxes = [];
	var noOfBoxes = 2;
	var parent = document.getElementsByClassName("main-wrapper")[0];

	this.init = function() {
		for (var i=0; i<noOfBoxes; i++) {
			createBox();
		}
	}

	var createBox = function() {
		var box = new Box();
		box.addClass("box");
		box.appendTo(parent);
	}
    
    this.move = function(box){
        var style = window.getComputedStyle(box.element);
        var x = parseInt(style.getPropertyValue("left"))+box.dirX*box.speed;
        var y = parseInt(style.getPropertyValue("top"))+box.dirY*box.speed;
        
//        console.log('x:',x,' y:',y);
        box.element.style['left'] = x+'px';
        box.element.style['top'] = y+'px';
        
        if(x>=maxWidth){
			box.dirX=-1;
		
        }else if(x<=minWidth){
			box.dirX=1;
		
        }else if(y>=maxHeight){
			box.dirY=-1;
		
        }else if(y<=minHeight){
			box.dirY=1;
		}
    }
    
    
}