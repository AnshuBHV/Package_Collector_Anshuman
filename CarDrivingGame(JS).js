let frame = 1;
let cPos = "";
let level = 1;
let win = false;

let createImage = function(src, title,xcoord,ycoord) {
    let img = new Image();
    img.src = src;
    img.alt = title;
    img.title = title;
    img.left = xcoord;
    img.top = ycoord;

    return img;
};

function startGame(){
    animate();
}

let a;

//This is the function that decides where to push the control in the entire program.
function animate(){
    a = requestAnimationFrame(animate);

    //This is the list of all the function that the function can pass the control to.
    drawEnv();
    drawRoad(frame);
    drawPlayerVan();
    if (win === false){
        if (level === 1){
            level1();
        } else if (level === 2){
            level2();
        } else if (level === 3){
            level3();
        } else if (level === 4){
            level4();
        } else if (level === 5){
            level5();
        } else if (level === 6){
            level6();
        }

        if (frame === 1) {
            checkCollisionF1();
        } else if (frame === 2){
            checkCollisionF2();
        } else if (frame === 3){
            checkCollisionF3();
        } else if (frame === 4){
            checkCollisionF4();
        } else if (frame === 5){
            checkCollisionF5();
        } else {
            checkCollisionF6();
        }
    }
    else {
        winningScreen();
    }
}

function stopAnimation(){
    cancelAnimationFrame(a);
}

function drawRoad(frame){
    let ctx = document.getElementById("canvas1").getContext("2d");
    let i;
    // Road map of frame 1 of the game. ------------------------------------------------
    if (frame === 1){
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 200, window.innerWidth, 300);

        ctx.fillRect(400, 0, 400, window.innerHeight);

        ctx.fillRect(1200, 0, 400, window.innerHeight);

        ctx.fillStyle = "#ffffff";
        for (i = 10; i < window.innerWidth; i = i + 50){
            ctx.fillRect(i, 346, 30, 8);
        }
        for (i = 10; i < window.innerHeight; i = i + 50){
            ctx.fillRect(596, i, 8, 30);
            ctx.fillRect(1396, i, 8, 30);
        }
    }
    if (frame === 2){
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 200, window.innerWidth, 300);

        ctx.fillRect(400, 0, 400, 500);

        ctx.fillRect(1200, 0, 400, 500);

        ctx.fillStyle = "#ffffff";
        for (i = 10; i < window.innerWidth; i = i + 50){
            ctx.fillRect(i, 346, 30, 8);
        }
        for (i = 10; i < window.innerHeight; i = i + 50){
            ctx.fillRect(596, i, 8, 30);
            ctx.fillRect(1396, i, 8, 30);
        }
    }
    if (frame === 3){
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, window.innerWidth, 300);

        ctx.fillRect(0, 350, window.innerWidth, 300);

        ctx.fillRect(400, 0, 400, window.innerHeight);

        ctx.fillRect(1200, 0, 400, window.innerHeight);

        ctx.fillStyle = "#ffffff";
        for (i = 10; i < window.innerWidth; i = i + 50){
            ctx.fillRect(i, 146, 30, 8);
            ctx.fillRect(i, 496, 30, 8);
        }
        for (i = 10; i < window.innerHeight; i = i + 50){
            ctx.fillRect(596, 146 + i, 8, 30);
            ctx.fillRect(1396, 146 + i, 8, 30);
        }
    }
    if (frame === 4){
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 200, window.innerWidth, 300);

        ctx.fillRect(400, 0, 400, 500);

        ctx.fillRect(1200, 0, 400, 500);

        ctx.fillStyle = "#ffffff";
        for (i = 10; i < window.innerWidth; i = i + 50){
            ctx.fillRect(i, 346, 30, 8);
        }
        for (i = 10; i < window.innerHeight; i = i + 50){
            ctx.fillRect(596, i, 8, 30);
            ctx.fillRect(1396, i, 8, 30);
        }
    }
    if (frame === 5){
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, 1600, 300);

        ctx.fillRect(0, 350, 800, 300);

        ctx.fillRect(1200, 0, 400, window.innerWidth);

        ctx.fillRect(400, 350, 400,350);

        ctx.fillStyle = "#ffffff";
        for (i = 10; i < 1404; i = i + 50){
            ctx.fillRect(i, 146, 30, 8);
        }
        for (i = 10; i < 604; i = i + 50){
            ctx.fillRect(i, 496, 30, 8);
        }
        for (i = 10; i < window.innerHeight; i = i + 50){
            ctx.fillRect(596, 486 + i , 8, 30);
            ctx.fillRect(1396, 136 + i, 8, 30);
        }
    }
    if (frame === 6){
        ctx.fillStyle = "#000000";
        ctx.fillRect(1200, 0, 800, 300);

        ctx.fillRect(400, 350, 1600, 300);

        ctx.fillRect(1200, 0, 400, window.innerWidth);

        ctx.fillRect(400, 350, 400,350);

        ctx.fillStyle = "#ffffff";
        for (i = 10; i < window.innerWidth; i = i + 50){
            ctx.fillRect(586 + i, 496, 30, 8);
            ctx.fillRect(1386 + i, 146, 30, 8);
        }
        for (i = 10; i < window.innerHeight; i = i + 50){
            ctx.fillRect(596, 486 + i , 8, 30);
            ctx.fillRect(1396, 136 + i, 8, 30);
        }
    }
}

function drawEnv(){
    let ctx = document.getElementById("canvas1").getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}

let playerVan = createImage("resources/clear_van_image_up.png", "playerVan", 1435, 490);
let vanWidth = 135;
let vanHeight = 210;

function drawPlayerVan(){
    let ctx = document.getElementById("canvas1").getContext("2d");
    ctx.drawImage(playerVan, playerVan.left, playerVan.top, vanWidth, vanHeight);
}

let gift1 = createImage("resources/gift_box.png", "gift1", 1260, 30);
function level1(){
    let ctx = document.getElementById("canvas1").getContext("2d");
    document.getElementById("levelTitle").style.visibility = "visible";
    if (frame === 5){
        ctx.drawImage(gift1, gift1.left, gift1.top, 80, 80);

        if (gift1.left + 80 > playerVan.left && gift1.left < playerVan.left + vanWidth &&
        gift1.top + 80 > playerVan.top && gift1.top < playerVan.top + vanHeight){
            level = 2;
            document.getElementById("levelTitle").innerText = "Level 2";
            gift1.left = 2500;
        }
    }
}
let gift2 = createImage("resources/gift_box.png", "gift2", 1260, 30);
function level2(){
    let ctx = document.getElementById("canvas1").getContext("2d");
    if (frame === 2){
        ctx.drawImage(gift2, gift2.left, gift2.top, 80, 80);

        if (gift2.left + 80 > playerVan.left && gift2.left < playerVan.left + vanWidth &&
            gift2.top + 80 > playerVan.top && gift2.top < playerVan.top + vanHeight){
            level = 3;
            document.getElementById("levelTitle").innerText = "Level 3";
            gift2.left = 2500;
        }
    }
}
let gift3 = createImage("resources/gift_box.png", "gift3", 1260, 30);
function level3(){
    let ctx = document.getElementById("canvas1").getContext("2d");
    if (frame === 4){
        ctx.drawImage(gift3, gift3.left, gift3.top, 80, 80);

        if (gift3.left + 80 > playerVan.left && gift3.left < playerVan.left + vanWidth &&
            gift3.top + 80 > playerVan.top && gift3.top < playerVan.top + vanHeight){
            level = 4;
            document.getElementById("levelTitle").innerText = "Level 4";
            gift3.left = 2500;
        }
    }
}
let gift4 = createImage("resources/gift_box.png", "gift4", 1260, 30);
function level4(){
    let ctx = document.getElementById("canvas1").getContext("2d");
    if (frame === 6){
        ctx.drawImage(gift4, gift4.left, gift4.top, 80, 80);

        if (gift4.left + 80 > playerVan.left && gift4.left < playerVan.left + vanWidth &&
            gift4.top + 80 > playerVan.top && gift4.top < playerVan.top + vanHeight){
            level = 5;
            document.getElementById("levelTitle").innerText = "Level 5";
            gift4.left = 2500;
        }
    }
}
let gift5 = createImage("resources/gift_box.png", "gift5", 1260, 30);
function level5(){
    let ctx = document.getElementById("canvas1").getContext("2d");
    if (frame === 3){
        ctx.drawImage(gift5, gift5.left, gift5.top, 80, 80);

        if (gift5.left + 80 > playerVan.left && gift5.left < playerVan.left + vanWidth &&
            gift5.top + 80 > playerVan.top && gift5.top < playerVan.top + vanHeight){
            level = 6;
            document.getElementById("levelTitle").innerText = "Level 6";
            gift5.left = 2500;
        }
    }
}
let gift6 = createImage("resources/gift_box.png", "gift6", 1260, 30);
function level6(){
    let ctx = document.getElementById("canvas1").getContext("2d");
    if (frame === 1){
        ctx.drawImage(gift6, gift6.left, gift6.top, 80, 80);

        if (gift6.left + 80 > playerVan.left && gift6.left < playerVan.left + vanWidth &&
            gift6.top + 80 > playerVan.top && gift6.top < playerVan.top + vanHeight){
            gift6.left = 2500;
            win = true;
        }
    }
}

function winningScreen() {
    let ctx = document.getElementById("canvas1").getContext("2d");

    ctx.fillStyle="#3d8911";   //sets the fill color (neon green)
    ctx.fillRect(0,0, window.innerWidth, window.innerHeight);

    ctx.fillStyle = "#ffffff";
    ctx.font = "50px Algerian";
    ctx.fillText("You Win", 930, 300);
    ctx.fillText("That Was a Great Game", 730, 400);
}

function checkCollisionF1(){
    if (400 > playerVan.left && 0 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 220;
    }
    if (1200 > playerVan.left && 800 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 635;
        playerVan.top = 220;
    }
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1435;
        playerVan.top = 220;
    }
    if (400 > playerVan.left && 0 < playerVan.left + vanWidth && 700 > playerVan.top && 500 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 220;
    }
    if (1200 > playerVan.left && 800 < playerVan.left + vanWidth && 700 > playerVan.top && 500 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1235;
        playerVan.top = 220;
    }
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 700 > playerVan.top && 500 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1435;
        playerVan.top = 220;
    }

    if (playerVan.left < 0){
        frame = 2;
        playerVan.left = 2000;
    }
    if (playerVan.top < 0){
        frame = 3;
        playerVan.top = 700 - vanWidth;
    }
    if (playerVan.left > 2000){
        frame = 4;
        playerVan.left = 0;
    }
    if (playerVan.top + vanHeight > 700){
        playerVan.top = 700 - vanHeight;
    }
}
function checkCollisionF2(){
    if (400 > playerVan.left && 0 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 220;
    }
    if (1200 > playerVan.left && 800 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 635;
        playerVan.top = 220;
    }
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1435;
        playerVan.top = 220;
    }
    if (2000 > playerVan.left && 0 < playerVan.left + vanWidth && 700 > playerVan.top && 500 < playerVan.top + vanHeight) {
        alert("You Crashed");
        playerVan.left = 935;
        playerVan.top = 220;
    }

    if (playerVan.left < 0){
        playerVan.left = 0;
    }
    if (playerVan.top < 0){
        frame = 6;
        playerVan.top = 700;
    }
    if (playerVan.left > 2000){
        frame = 1;
        playerVan.left = 0;
    }
}
function checkCollisionF3(){
    if (400 > playerVan.left && 0 < playerVan.left + vanWidth && 350 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 20;
    }
    if (1200 > playerVan.left && 800 < playerVan.left + vanWidth && 350 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 935;
        playerVan.top = 20;
    }
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 350 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1435;
        playerVan.top = 20;
    }
    if (400 > playerVan.left && 0 < playerVan.left + vanWidth && 700 > playerVan.top && 650 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 370;
    }
    if (1200 > playerVan.left && 800 < playerVan.left + vanWidth && 700 > playerVan.top && 650 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 935;
        playerVan.top = 370;
    }
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 700 > playerVan.top && 650 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1435;
        playerVan.top = 370;
    }

    if (playerVan.left < 0){
        frame = 6;
        playerVan.left = 2000;
    }
    if (playerVan.top < 0){
        playerVan.top = 0;
    }
    if (playerVan.left > 2000){
        frame = 5;
        playerVan.left = 0;
    }
    if (playerVan.top > 700){
        frame = 1;
        playerVan.top = 0;
    }
}
function checkCollisionF4(){
    if (400 > playerVan.left && 0 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 220;
    }
    if (1200 > playerVan.left && 800 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 635;
        playerVan.top = 220;
    }
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 200 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1435;
        playerVan.top = 220;
    }
    if (2000 > playerVan.left && 0 < playerVan.left + vanWidth && 700 > playerVan.top && 500 < playerVan.top + vanHeight) {
        alert("You Crashed");
        playerVan.left = 935;
        playerVan.top = 220;
    }

    if (playerVan.left < 0){
        frame = 1;
        playerVan.left = 2000;
    }
    if (playerVan.top < 0){
        frame = 5;
        playerVan.top = 700;
    }
    if (playerVan.left + vanWidth > 2000){
        playerVan.left = 2000 - vanWidth;
    }
}
function checkCollisionF5(){
    if (400 > playerVan.left && 0 < playerVan.left + vanWidth && 700 > playerVan.top && 650 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 370;
    }
    if (1000 > playerVan.left && 0 < playerVan.left + vanWidth && 350 > playerVan.top && 325 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 370;
    }
    if (1000 > playerVan.left && 800 < playerVan.left + vanWidth && 700 > playerVan.top && 325 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 370;
    }
    if (1200 > playerVan.left && 0 < playerVan.left + vanWidth && 325 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1235;
        playerVan.top = 20;
    }
    if (1200 > playerVan.left && 1000 < playerVan.left + vanWidth && 700 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1235;
        playerVan.top = 20;
    }
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 700 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1235;
        playerVan.top = 20;
    }

    if (playerVan.left < 0){
        frame = 3;
        playerVan.left = 2000;
    }
    if (playerVan.top < 0){
        playerVan.top = 0;
    }
    if (playerVan.left > 2000){
        playerVan.left = 2000 - vanWidth;
    }
    if (playerVan.top > 700){
        frame = 4;
        playerVan.top = 0;
    }
}
function checkCollisionF6(){
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 700 > playerVan.top && 650 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1435;
        playerVan.top = 370;
    }
    if (2000 > playerVan.left && 1600 < playerVan.left + vanWidth && 350 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1435;
        playerVan.top = 320;
    }
    if (1200 > playerVan.left && 800 < playerVan.left + vanWidth && 700 > playerVan.top && 650 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 935;
        playerVan.top = 370;
    }
    if (400 > playerVan.left && 0 < playerVan.left + vanWidth && 700 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 435;
        playerVan.top = 370;
    }
    if (1200 > playerVan.left && 400 < playerVan.left + vanWidth && 350 > playerVan.top && 300 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 935;
        playerVan.top = 370;
    }
    if (1200 > playerVan.left && 1000 < playerVan.left + vanWidth && 300 > playerVan.top && 0 < playerVan.top + vanHeight){
        alert("You Crashed");
        playerVan.left = 1235;
        playerVan.top = 20;
    }

    if (playerVan.left < 0){
        playerVan.left = 0;
    }
    if (playerVan.top < 0){
        playerVan.top = 0;
    }
    if (playerVan.left > 2000){
        frame = 3;
        playerVan.left = 0;
    }
    if (playerVan.top > 700){
        frame = 2;
        playerVan.top = 0;
    }
}

//Keypress Event code
$(document).keydown(function(event){  //jQuery code to recognize a keydown event
    let keycode = (event.keyCode ? event.keyCode : event.which);

    //left arrow
    if(keycode === 37){
        playerVan.src = "resources/clear_van_image_left.png";
        playerVan.left -= 20;
        vanWidth = 210;
        vanHeight = 135;
        cPos = "left";
    }

    //up arrow
    if(keycode === 38){
        playerVan.src = "resources/clear_van_image_up.png";
        playerVan.top -= 20;
        vanWidth = 135;
        vanHeight = 210;
        cPos = "up";
    }

    //right arrow
    if(keycode === 39){
        playerVan.src = "resources/clear_van_image_right.png";
        playerVan.left += 20;
        vanWidth = 210;
        vanHeight = 135;
        cPos = "right";
    }

    //down arrow
    if(keycode === 40){
        playerVan.src = "resources/clear_van_image_down.png";
        playerVan.top += 20;
        vanWidth = 135;
        vanHeight = 210;
        cPos = "down";
    }
});