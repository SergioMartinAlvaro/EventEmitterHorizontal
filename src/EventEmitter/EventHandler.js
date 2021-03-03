// Control de toda la lógica

document.body.onkeydown = function(e){
    if(e.key === "ArrowRight") {
        window.EE.emit("SM:move-yoli");
        switch(window.escenario) {
            case "lavega-element":
                window.EE.emit("PAT:upF1");
                break;
            case "patones-element":
                window.EE.emit("VEG:upF1");
                break;
            case "segovia-element":
                window.EE.emit("SEG:upF1");
                break;
            case "barco-element":
                window.EE.emit("BAR:upF1");
                break;
            case "tenerife-element":
                window.EE.emit("TEN:upF1");
                break;
            case "oporto-element":
                window.EE.emit("OPO:upF1");
                break;
            case "asturias-element":
                window.EE.emit("AST:upF1");
                break;
            default:
        }
       // window.EE.emit("SM:move-ground");
        // Generar relieve
        // Disparar Sergio
        // Cambiar fondo
    }
};

window.EE.on("SM:completeTravel",() => {
    window.EE.emit("SM:changeBackground", {});
})

document.body.onkeyup = function(e) {
    window.EE.emit("SM:stop-yoli");
}

/*setInterval(function() {
    window.EE.emit("SM:move-ground");
}, 100)*/