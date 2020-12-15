document.getElementById("button1").style.backgroundColor ="#F78181";
document.getElementById("button2").style.backgroundColor ="#82FA58";
document.getElementById("button3").style.backgroundColor ="#A9F5F2";
document.getElementById("button4").style.backgroundColor ="#F7FE2E";


document.getElementById("button1").onclick = function(){
    document.body.style.background = "#F78181"
};

document.getElementById("button2").onclick = function(){
    document.body.style.background = "#82FA58"
};

document.getElementById("button3").onclick = function(){
    document.body.style.background = "#A9F5F2"
};


let color = "#F7FE2E";
document.getElementById("button4").onclick = function(){
    switch (color){
        case "#F7FE2E":
            color = "#F78181";
            break;
        case "#F78181":
            color = "#82FA58";
            break;
        case "#82FA58":
            color = "#A9F5F2";
            break;
        case "#A9F5F2":
            color = "#F78181";
            break;
    }
    document.body.style.background = color;
};