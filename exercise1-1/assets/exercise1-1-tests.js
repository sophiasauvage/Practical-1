import { checkCanvasSize, getShapes, TestResults, checkShapes, 
    TestCircle} from "https://cdn.jsdelivr.net/gh/Supportive-IDE/p5js-testing-demo@latest/p5jsTestingLibrary.js";
/**
 * A hacky solution to wait for p5js to load the canvas. Include in all exercise test files.
 */
function waitForP5() {
    const canvases = document.getElementsByTagName("canvas");
    if (canvases.length > 0) {
        clearInterval(loadTimer);
        runTests(canvases[0]);
    }
}

async function runTests(canvas) {
    canvas.style.pointerEvents = "none";
    checkCanvasSize(500, 300);
    const c1 = new TestCircle(250, 150, 100) 
    const c2 = new TestCircle(150, 150, 100);
    const c3 = new TestCircle(350, 200, 100);
    const actual = getShapes();
    console.log(actual)
    checkShapes([c1, c2, c3], actual, false, false);

    
    const resultsDiv = document.getElementById("results");
    TestResults.display(resultsDiv);
}


const loadTimer = setInterval(waitForP5, 500);