
var mainWrapper = document.getElementsByClassName("main-wrapper")[0];

var num = 8;
boxes = [];
for(var i=0; i<num; i++){
    var box = new Box();
    box.addClass("box");
//    box.element.innerHTML = i;
    box.appendTo(mainWrapper);
    boxes.push(box);

}

var angle = 20;
var speed = 3;
//angle = angle % 360;

//var quadrant = Math.ceil(angle/90);
//angle = angle % 90;

//console.log('quadrant: ',quadrant, 'angle: ',angle);
var dx;
var dy;
if(angle==90){
    dx=0;
    dy=1;
}else{
    var value = Math.tan(angle*Math.PI/180);    
    dx=1;
    dy = value;
}

console.log('dx: ',dx,' dy:',dy);


var box = new Box();
box.addClass("box");
box.element.innerHTML = "00"
//console.log(box);
box.changeDir(dx, dy);
box.changePos(0, 0);
box.changeSpeed(speed);
box.appendTo(mainWrapper);
boxes.push(box);


//var box = new Box();
//box.addClass("box");
//box.element.innerHTML = "01"
//console.log(box);
//box.changeDir(0, 0);
//box.changePos(0, 0);
//box.appendTo(mainWrapper);
//
//boxes.push(box);

setInterval(function(){
    for(var box in boxes){
        boxes[box].move();
        for(b in boxes){
            if(b!=box){
                var a = boxes[box].hitTest(boxes[b]);
                boxes[box].innerHTML = "";
                if(a==1){
                    //right
                    boxes[box].dirX=-1;
                    boxes[b].dirX=1;
                }else if(a==2){
                    //top
                    boxes[box].dirY=-1;
                    boxes[b].dirY=1;
                }else if(a==3){
                    //bottom
                    boxes[box].dirY=1;
                    boxes[b].dirY=-1;
                }else if(a==4){
                    //left
                    boxes[box].dirX=1;
                    boxes[b].dirX=-1;
                }
            }
        }
    }
},10);
//

