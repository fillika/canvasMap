import { setCanvasSizeProperties, addDocumentListeners } from "./modules/base.js";
import drawHouse from "./modules/draw/drawHouse.js";

const CANVAS_ID = "canvas";

function init() {
    let canvas = document.getElementById(CANVAS_ID);
    let ctx = canvas.getContext("2d");
    
    setCanvasSizeProperties(canvas);
    addDocumentListeners(canvas);

    // todo draw depends on scale
    drawHouse(ctx);
}

init();