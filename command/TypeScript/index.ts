interface ICommand {
    execute(): void;
    undo(): void;
}

class Light {
    on(): void {
        console.log('Light on');
    }
    off(): void {
        console.log('Light off');
    }
}

class LightOnCommand implements ICommand {
    
    constructor(
        private light: Light
    ) { 
        this.light = light; 
    }

    execute(): void {
        this.light.on();
    }

    undo(): void {
        this.light.off();
    }    
}

class LightOffCommand implements ICommand {

    constructor(
        private light: Light
    ) { 
        this.light = light; 
    }       

    execute(): void {
        this.light.off();
    }

    undo(): void {
        this.light.on();
    }    
}

class simpleRemoteControl {
    private currentCommand!: ICommand;
    private undoCommand!: ICommand;
    private commandQueue: ICommand[] = [];

    constructor() {
        this.commandQueue = [];
    }

    setCommand(command: ICommand): void {
        this.undoCommand = this.currentCommand;
        this.currentCommand = command;
        this.commandQueue.push(this.currentCommand);

    }

    buttonWasPressed(): void {
        if (this.commandQueue.length > 0) {
            const command = this.commandQueue.shift();
            command?.execute();
        }
    }

    undoButtonWasPressed(): void {
        this.undoCommand.undo();
    }

    hasCommands(): boolean {
        return this.commandQueue.length > 0;
    }

    
    showHistory(): void {
        this.commandQueue.forEach((command) => {
            console.log(`Command: ${command.constructor.name}`);
        })        
    }   

    clearHistory(): void {
        this.commandQueue = [];
    }



}



// client code 
const remote = new simpleRemoteControl();
const light = new Light();

remote.setCommand(new LightOnCommand(light));
remote.buttonWasPressed();
remote.setCommand(new LightOffCommand(light));
remote.buttonWasPressed();
remote.undoButtonWasPressed();
remote.showHistory();



