
var mainWrapper = document.getElementsByClassName("main-wrapper")[0];

var num = 20;
boxes = [];
for(var i=0; i<num; i++){
    var box = new Box();
    box.addClass("box");
//    box.element.innerHTML = i;
    box.appendTo(mainWrapper);
    boxes.push(box);

}

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

