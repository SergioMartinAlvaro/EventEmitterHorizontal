// Control de toda la lógica

document.body.onkeydown = function(e){
    if(e.key === "ArrowRight") {
        window.EE.emit("SM:move-yoli");
       // window.EE.emit("SM:move-ground");
        // Generar relieve
        // Disparar Sergio
        // Cambiar fondo
    }
};

/*setInterval(function() {
    window.EE.emit("SM:move-ground");
}, 100)*/