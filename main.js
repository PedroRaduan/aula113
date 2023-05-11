function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    cor_filtro = '';
}

function draw(){
    image(video, 0, 0, 640, 480);
    tint(cor_filtro); 
}

function tirar_foto(){
    save('img_filtro.png'); 
}
function aplicar_filtro(){
    cor_filtro = document.getElementById('cor').value;
}