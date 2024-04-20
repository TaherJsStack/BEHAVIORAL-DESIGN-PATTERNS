interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(request: string): string | null;
}

abstract class AHandler implements IHandler {
    private nextHandler: IHandler | null = null;
    public setNext(handler: IHandler): IHandler {
        this.nextHandler = handler;
        return handler;
    }

    public handle(request: string): string | null {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}


class MonkeyHandler extends AHandler {
    public handle(request: string): string | null {
        if (request === 'Banana') {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

class SquirrelHandler extends AHandler {
    public handle(request: string): string | null {
        if (request === 'Nut') {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

class DogHandler extends AHandler {
    public handle(request: string): string | null {
        if (request === 'MeatBall') {
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}


function clientCode(handler: IHandler) {
    const foods = ['Nut', 'Banana', 'Cup of coffee'];
    for (const food of foods) {
        console.log(`Client: Who wants a ${food}?`);
        const result = handler.handle(food);
        if (result) {
            console.log(`  ${result}`);
        } else {
            console.log(`  ${food} was left untouched.`);
        }
    }
}


// client code
const handler1 = new DogHandler();
const handler2 = new SquirrelHandler();
const handler3 = new MonkeyHandler();

handler1.setNext(handler2).setNext(handler3);

clientCode(handler1);



