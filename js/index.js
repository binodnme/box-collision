//var angle = 45;
//var speed = 0;

var mainWrapper = document.getElementsByClassName("main-wrapper")[0];


var ms = 0;
var intervalId;
mainWrapper.onmousedown = function(){
    ms=0;
    intervalId = window.setInterval(function(){
        ms++;
        var speed = Math.ceil(ms/50);
        document.getElementById('speed').value = speed;
        if(ms>=500){
            window.clearInterval(intervalId);
        }
    },2);
}

mainWrapper.onmouseup = function(e){
    window.clearInterval(intervalId);
    var speed = Math.ceil(ms/50);
    var x = parseInt(e.pageX-mainWrapper.offsetLeft);
    var y = parseInt(500-e.pageY-mainWrapper.offsetTop);
    var angle = Math.round(Math.atan(y/x)*180/Math.PI);
    document.getElementById('angle').value = angle;
    document.getElementById('speed').value = speed;
    setBox(angle, speed);
}

mainWrapper.onmousemove = function(e){
    var x = parseInt(e.pageX-mainWrapper.offsetLeft);
    var y = parseInt(500-e.pageY-mainWrapper.offsetTop);
    var angle = Math.round(Math.atan(y/x)*180/Math.PI);
    document.getElementById('angle').value = angle;
}

mainWrapper.onmouseout = function(){
    
}

var num = 8;
boxes = [];
for(var i=0; i<num; i++){
    var box = new Box();
    box.addClass("box");
    box.appendTo(mainWrapper);
    boxes.push(box);

}


var box = new Box();
box.addClass("box");
box.element.innerHTML = "00"
//console.log(box);
//box.setDir(dx, dy);
box.setPos(0, 0);
//box.setSpeed(speed);
box.appendTo(mainWrapper);
boxes.push(box);

setInterval(function(){
    for(var box in boxes){
        boxes[box].move();
        for(b in boxes){
            if(b!=box && (boxes[box].dirX!=0 || boxes[box].dirY!=0)){
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




function setBox(angle, speed){
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
    
    box.setDir(dx,dy);
    box.setSpeed(speed);
}

function setCondition(){
    var angle = parseInt(document.getElementById('angle').value);
    var speed = parseInt(document.getElementById('speed').value);
    if(angle==NaN) angle=45;
    if(speed==NaN) speed=1;
    
    if(angle>90 || speed >10){
        var p = document.createElement('p');
        p.innerHTML = "wrong input value";
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(p);
    }else{
       setBox(angle, speed); 
    }

}



