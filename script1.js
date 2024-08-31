//2次元スライダー
class Slider2d{

    constructor(id, func){

        this.element = document.getElementById(id);

        this.margin = 8;
        this.width = this.element.width;
        this.height = this.element.height;
        this.mouseIsPressed = false;
        this.mx = -1;
        this.my = -1;
        this.px = this.width / 2;
        this.py = this.height / 2;
        this.valuex = 0.5;
        this.valuey = 0.5;
        this.id = id;
        this.func = func;


        drawbackground(id, "#eeeeee");
        drawcircle(id, this.px, this.py, 10, "#0044ff");
        drawline(id, this.px, this.margin, this.px, this.height-this.margin, "#0044ff");
        drawline(id, this.margin, this.py, this.height-this.margin, this.py, "#0044ff");


        this.element.addEventListener("pointerdown",()=>{
            this.mouseIsPressed = true; 
        });

        document.addEventListener("pointerup",()=>{
            this.mouseIsPressed = false;
            this.mx = -1;
            this.my = -1;
        });

        
        
        document.addEventListener("touchmove", (event)=>{
            this.moveevent(event);
        });


        document.addEventListener("pointermove", (event)=>{
            this.moveevent(event);
        });
        
    }


    moveevent(event){
        
        let x,y;

        if(event.touches){
            x = event.touches[0].clientX - this.element.getBoundingClientRect().left;
            y = event.touches[0].clientY - this.element.getBoundingClientRect().top;
        }else{
            x = event.clientX - this.element.getBoundingClientRect().left;
            y = event.clientY - this.element.getBoundingClientRect().top;
        }
    
        if(this.mx!=-1 && this.my!=-1 && this.mouseIsPressed){
            this.px += x - this.mx;
            this.py += y - this.my;
            this.px = Math.max(Math.min(300-this.margin, this.px), this.margin);
            this.py = Math.max(Math.min(300-this.margin, this.py), this.margin);
            this.valuex = (this.px - this.margin) / (this.width - this.margin*2);
            this.valuey = 1 - (this.py - this.margin) / (this.height - this.margin*2);
            this.func();
        }
    
        drawbackground(this.id, "#eeeeee");
        drawcircle(this.id, this.px, this.py, 10, "#0044ff");
        drawline(this.id, this.px, this.margin, this.px, this.height-this.margin, "#0044ff");
        drawline(this.id, this.margin, this.py, this.height-this.margin, this.py, "#0044ff");
    
        if(this.mouseIsPressed){
            this.mx = x;
            this.my = y;
        }
    }

}


//通常スライダー
class Slider1d{

    constructor(id, func){

        this.element = document.getElementById(id);

        this.margin = 15;
        this.width = this.element.width;
        this.height = this.element.height;
        this.mouseIsPressed = false;
        this.mx = -1;
        this.my = -1;
        this.px = this.width / 2;
        this.py = this.height / 2;
        this.id = id;
        this.func = func;


        drawbackground(id, "#eeeeee");
        drawcircle(id, this.px, this.py, 10, "#0044ff");
        drawline(id, this.margin, this.py, this.width-this.margin, this.py, "#0044ff", 1);
        drawline(id, this.margin, this.py, this.px, this.py, "#0044ff", 6);


        this.element.addEventListener("pointerdown",()=>{
            this.mouseIsPressed = true; 
        });

        document.addEventListener("pointerup",()=>{
            this.mouseIsPressed = false;
            this.mx = -1;
            this.my = -1;
        });

        document.addEventListener("touchmove", (event)=>{
            this.moveevent(event);
        });


        document.addEventListener("pointermove", (event)=>{
            this.moveevent(event);
        });

    }


    moveevent(event){
        
        let x,y;

        if(event.touches){
            x = event.touches[0].clientX - this.element.getBoundingClientRect().left;
            y = event.touches[0].clientY - this.element.getBoundingClientRect().top;
        }else{
            x = event.clientX - this.element.getBoundingClientRect().left;
            y = event.clientY - this.element.getBoundingClientRect().top;
        }
    
        if(this.mx!=-1 && this.my!=-1 && this.mouseIsPressed){
            this.px += x - this.mx;
            this.px = Math.max(Math.min(this.width-this.margin, this.px), this.margin);
            this.value = (this.px - this.margin) / (this.width - this.margin*2);
            this.func();
        }
    
        drawbackground(this.id, "#eeeeee");
        drawcircle(this.id, this.px, this.py, 10, "#0044ff");
        drawline(this.id, this.margin, this.height/2, this.width-this.margin, this.height/2, "#0044ff", 1);
        drawline(this.id, this.margin, this.height/2, this.px, this.height/2, "#0044ff", 6);

        if(this.mouseIsPressed){
            this.mx = x;
            this.my = y;
        }
    }
}


//円スライダー
class SliderEn{

    constructor(id, func){

        this.element = document.getElementById(id);
        this.margin = 15;
        this.width = this.element.width;
        this.height = this.element.height;
        this.mouseIsPressed = false;
        this.mx = -1;
        this.my = -1;
        this.value = 0.6;
        this.px = this.width / 2;
        this.py = this.height / 2;
        this.radius = Math.min(this.width,this.height)/2-this.margin;
        this.id = id;
        this.func = func;


        drawbackground(id, "#eeeeee");
        drawcircle2(id, this.width/2, this.height/2, this.radius, "#0044ff");
        drawcircle(id, this.width/2 + this.radius*Math.cos(-this.value), this.height/2 + this.radius*Math.sin(-this.value), 10, "#0044ff");


        this.element.addEventListener("pointerdown",()=>{
            this.mouseIsPressed = true; 
        });

        document.addEventListener("pointerup",()=>{
            this.mouseIsPressed = false;
            this.mx = -1;
            this.my = -1;
        });

        this.element.addEventListener("touchmove", (event)=>{
            this.moveevent(event);
        });


        this.element.addEventListener("pointermove", (event)=>{
            this.moveevent(event);
        });
        
    }

    moveevent(event){

        let x,y;


        if(event.touches){
            x = event.touches[0].clientX - this.element.getBoundingClientRect().left;
            y = event.touches[0].clientY - this.element.getBoundingClientRect().top;
        }else{
            x = event.clientX - this.element.getBoundingClientRect().left;
            y = event.clientY - this.element.getBoundingClientRect().top;
        }

        if(this.mx!=-1 && this.my!=-1 && this.mouseIsPressed){
            this.value = - Math.atan2(y-this.height/2, x-this.width/2);
            this.func();
        }
    
        drawbackground(this.id, "#eeeeee");
        drawcircle2(this.id, this.width/2, this.height/2, this.radius, "#0044ff");
        drawcircle(this.id, this.width/2 + this.radius*Math.cos(-this.value), this.height/2 + this.radius*Math.sin(-this.value), 10, "#0044ff");

        if(this.mouseIsPressed){
            this.mx = x;
            this.my = y;
        }
    }


}


//円を描画（塗りつぶし）
function drawcircle(canvasid, x, y, r, col){
    const ctx1 = document.getElementById(canvasid).getContext("2d");
    ctx1.fillStyle = col;
    ctx1.beginPath();
    ctx1.arc(x,y,r,0,2*Math.PI);
    ctx1.fill();
}

//円を描画（輪郭線）
function drawcircle2(canvasid, x, y, r, col, lw=2){
    const ctx1 = document.getElementById(canvasid).getContext("2d");
    ctx1.strokeStyle = col;
    ctx1.lineWidth = lw;
    ctx1.beginPath();
    ctx1.arc(x,y,r,0,2*Math.PI);
    ctx1.stroke();
}

//線を描画
function drawline(canvasid, x1, y1, x2, y2, col, lw=2){
    const ctx1 = document.getElementById(canvasid).getContext("2d");
    ctx1.strokeStyle = col;
    ctx1.lineWidth = lw;
    ctx1.beginPath();
    ctx1.moveTo(x1,y1);
    ctx1.lineTo(x2,y2);
    ctx1.stroke();
}

//背景を描画
function drawbackground(canvasid, col){
    const canvas1 = document.getElementById(canvasid);
    const ctx1 = canvas1.getContext("2d");
    ctx1.fillStyle = col;
    ctx1.fillRect(0,0,canvas1.width, canvas1.height);
}


document.querySelectorAll('canvas').forEach(function(target) {  
    target.style.touchAction = 'none';
});


//スライダー出力値のラベル
const text1 = document.getElementById("text1");
const text2  =document.getElementById("text2");
const text3 = document.getElementById("text3");


//スライダーの生成　第1引数：キャンバス要素のid, 第2引数：スライダーを動かしたときの処理
let slider1 = new Slider2d("canvas1",()=>{
    text1.textContent = "スライダー出力値　x:"+slider1.valuex.toFixed(3) + ", y:" + slider1.valuey.toFixed(3);
});


let slider2 = new Slider1d("canvas2",()=>{
    text2.textContent = "スライダー出力値:　"+slider2.value.toFixed(3);
});


let slider3 = new SliderEn("canvas3",()=>{
    text3.textContent = "スライダー出力値（ラジアン）:　"+slider3.value.toFixed(3);
});




