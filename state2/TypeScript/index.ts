interface ITool {
    onMouseDown(): void;
    onMouseUp(): void;  
}

class SelctionTool implements ITool {
 
    public onMouseUp(): void {
        console.log('Selection Tool mouse up');
    }
    public onMouseDown(): void {
        console.log('Selection Tool mouse down');
    }
}

class BrushTool implements ITool {
    public onMouseUp(): void {
        console.log('Brush Tool mouse up');
    }    
    public onMouseDown(): void {
        console.log('Brush Tool mouse down');
    }    
}

class EraserTool implements ITool {
    public onMouseUp(): void {
        console.log('Eraser Tool mouse up');
    }    
    public onMouseDown(): void {
        console.log('Eraser Tool mouse down');
    }    
}


class Canvas {
    // private tool!: ITool;

    constructor( private tool: ITool ) {}

    public setTool(tool: ITool): void {
        this.tool = tool;
    }

    public mouseDown(): void {
        this.tool.onMouseDown();
    }    
    public mouseUp(): void {
        this.tool.onMouseUp();
    }    
}

// client code
const canvas = new Canvas(new SelctionTool());
canvas.mouseDown();
canvas.mouseUp();

canvas.setTool(new BrushTool());
canvas.mouseDown();
canvas.mouseUp();

canvas.setTool(new EraserTool());
canvas.mouseDown();
canvas.mouseUp();




