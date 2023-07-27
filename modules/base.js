function setCanvasSizeProperties(canvas) {
    let canvasRect = canvas.getBoundingClientRect();

    canvas.width = canvasRect.width;
    canvas.height = canvasRect.height;
}

function addDocumentListeners(canvas) {
    document.addEventListener("resize", setCanvasSizeProperties.bind(null, canvas));
}

export { setCanvasSizeProperties, addDocumentListeners };