function Box() {
    
    this.width = 40;        //in px
    this.height= 40;
    
	
    var maxWidth = 900-this.width;
    var maxHeight = 500-this.height;
    var minWidth = 0;
    var minHeight = 0;
    
    
    this.x = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;
    this.y = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;
    
    
    this.element = document.createElement("div");
    
    this.element.style['left'] = this.x;
    this.element.style['top'] = 500 - this.y;
    
    this.element.style['width'] = this.width +'px';
    this.element.style['height'] = this.height +'px';
    
    this.speed=1;
    this.dirX=0;
    this.dirY=0;
    
    this.setPos = function(left, top){
        this.x = left;
        this.y = top;
        this.element.style['left'] = this.x;
        this.element.style['top'] = maxHeight - this.y;
    }
    
    this.setDir = function(dirX, dirY){
        this.dirX = dirX;
        this.dirY = dirY;
    }
    
    this.setSpeed = function(speed){
        this.speed = speed;
    }
 
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
        
        this.x += this.dirX*this.speed;
        this.y += this.dirY*this.speed;
        
        this.element.style['left'] = this.x+'px';
        this.element.style['top'] = maxHeight- this.y+'px';
        
        if(this.x>maxWidth){
			this.dirX=-1;
		
        }else if(this.x<minWidth){
			this.dirX=1;
		
        }else if(this.y>maxHeight){
			this.dirY=-1;
		
        }else if(this.y<minHeight){
			this.dirY=1;
		}
    }

	this.hitTest = function(box) {

        var x1 = box.x;
        var y1 = box.y;
        var width1 = box.width;
        var height1 = box.height;
        
		var x = this.x;
        var y = this.y;
        var width = this.width;
        var height = this.height;

		if (x <x1 + width1 && x + width > x1 && y<(y1 + height1) && (height + y)>y1) {
            // collision detected!
//        	console.log('collision');
            
            //checks collision from right side
            if((x+width)>=x1 && x<x1 && (y+height) > y1 && (y1+height1)>=y){
//                console.log('1');
                return 1;
            }
            
            //checks collision from bottom side
            else if((y+height)>=y1 && y<y1 && (x+width)>=x1 && x<(x1+width1)){
//                console.log('2');
                return 2;
            }
            
            //checks collision from top side
            else if((y1+height1)>=y && y1<y && (x+width)>=x1 && x<(x1+width1)){
//                console.log('3');
                return 3;
            }
               
            //checks collision from left side   
            else if((x1+width1)>=x && x>x1 && y<(y1 + height1) && (height + y)>y1){
//                console.log('4');
                return 4;
            }
	    } else {
	        // no collision
//	         console.log('no collision');
	    }
		
	}
}