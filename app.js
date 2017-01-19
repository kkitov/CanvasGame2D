function init() {
    //Constants
    let moveSpeed = 10;
    let score = -1;



    let catImg = document.getElementById("theCat");
    let mouseImg = document.getElementById("theMouse");
    let cat ={x:400 , y:300};
    let mouse = {x:0,y:0};
    let ctx = document.getElementById('canvas').getContext('2d');
    ctx.font = '24px arial';

    window.addEventListener('keydown',kebdHandler);

    reset();
    draw();

    function update() {
       let x =(cat.x+145) - (mouse.x+74);
       let y = (cat.y+87) - (mouse.y+65);


        let distance = Math.sqrt((x*x) + (y*y));
        if(distance<270){
            reset();
        }
        console.log(distance);
        draw();
    }

    function reset() {
        score++;
        mouse.x = Math.round(Math.random() * 800);
        mouse.y = Math.round(Math.random() * 600);

    }
    function kebdHandler(event) {
        console.log(event.code);
        switch(event.code){
            case "ArrowLeft":
                cat.x-=moveSpeed;
                break;
            case "ArrowRight":
                cat.x+=moveSpeed;
                break;
            case "ArrowUp":
                cat.y-=moveSpeed;
                break;
            case "ArrowDown":
                cat.y+=moveSpeed;
                break;
        }
        update();
    }
    function draw() {
        ctx.clearRect(0,0,700,500);


        ctx.drawImage(mouseImg,mouse.x,mouse.y);
        ctx.drawImage(catImg,cat.x,cat.y);

        ctx.fillText(`Mice caught: ${score}`,10,20);

    }


}

init();

