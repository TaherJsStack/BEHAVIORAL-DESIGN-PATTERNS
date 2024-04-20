interface ILightState {
    switchState(lightSwitch: LightSwitch): void;
}

class LightOn implements ILightState {
    public switchState(lightSwitch: LightSwitch): void {
        console.log('Light On');
        lightSwitch.setState(new LightOff());
    }
}

class LightOff implements ILightState {
    public switchState(lightSwitch: LightSwitch): void {
        console.log('Light Off');
        lightSwitch.setState(new LightOn());
    }
}


class LightSwitch {
    
    constructor(private lightState: ILightState) {}

    public setState(lightState: ILightState): void {
        this.lightState = lightState;
    }

    public press(): void {
        this.lightState.switchState(this);
    }

}



// client code
const lightSwitch = new LightSwitch(new LightOn());
lightSwitch.press();

lightSwitch.press();
lightSwitch.press();


