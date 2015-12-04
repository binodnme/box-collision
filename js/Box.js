function Box() {
    
    var maxWidth = 900-25;
    var maxHeight = 500-25;
    var minWidth = 0;
    var minHeight = 0;
    
    this.speed=1;
    this.dirX=1;
    this.dirY=1;
    
	this.element = document.createElement("div");
    this.element.style['left'] = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    this.element.style['top'] = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

	this.appendTo = function(parentElement) {
		parentElement.appendChild(this.element);
	}

	this.addClass = function(className) {
		this.element.setAttribute("class", 
			this.element.getAttribute("class") + " " + className);
	}

	this.removeClass = function(className) {
		
	}
    
    this.move = function(){
        var style = window.getComputedStyle(this.element);
        var x = parseInt(style.getPropertyValue("left"))+this.dirX*this.speed;
        var y = parseInt(style.getPropertyValue("top"))+this.dirY*this.speed;
        
//        console.log('x:',x,' y:',y);
        this.element.style['left'] = x+'px';
        this.element.style['top'] = y+'px';
        
        if(x>=maxWidth){
			this.dirX=-1;
		
        }else if(x<=minWidth){
			this.dirX=1;
		
        }else if(y>=maxHeight){
			this.dirY=-1;
		
        }else if(y<=minHeight){
			this.dirY=1;
		}
    }

	this.hitTest = function(box) {
        var el1 = box.element;
		var style1 = window.getComputedStyle(el1);
		var y1 = parseInt(style1.getPropertyValue('top'));
		var x1 = parseInt(style1.getPropertyValue('left'));
		var width1 = parseInt(style1.getPropertyValue('width'));
		var height1 = parseInt(style1.getPropertyValue('height'));
		// console.log('eltop: ',newElTop,' elLeft:',newElLeft);
		// console.log(parseInt(style1.getPropertyValue('border-radius')));

		var style = window.getComputedStyle(this.element);
		var y = parseInt(style.getPropertyValue('top'));
		var x = parseInt(style.getPropertyValue('left'));
		var width = parseInt(style.getPropertyValue('width'));
		var height = parseInt(style.getPropertyValue('height'));
		

		if (x <x1 + width1 && x + width > x1 && y<(y1 + height1) && (height + y)>y1) {
            // collision detected!
        	console.log('collision');
            
            //checks collision from right side
            if((x+width)>=x1 && x<x1 && (y+height) > y1 && (y1+height1)>=y){
                console.log('1');
                return 1;
            }
            
            //checks collision from bottom side
            if((y+height)>=y1 && y<y1 && (x+width)>=x1 && x<(x1+width1)){
                console.log('2');
                return 2;
            }
            
            //checks collision from top side
            if((y1+height1)>=y && y1<y && (x+width)>=x1 && x<(x1+width1)){
                console.log('3');
                return 3;
            }
               
            //checks collision from left side   
            if((x1+width1)>=x && x>x1 && y<(y1 + height1) && (height + y)>y1){
                console.log('4');
                return 4;
            }
	    } else {
	        // no collision
//	         console.log('no collision');
	    }
		
	}
}