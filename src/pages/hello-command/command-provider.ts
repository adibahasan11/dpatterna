import {
    Light,

    Command,
    TurnOnLightCommand,
    TurnOffLightCommand,
    
    SetRedLightCommand,
    IncreasedRedLightCommand,
    DecreasedRedLightCommand,

    RemoteControl,
} from "patterns/command/command-light-remote"
  
let light = new Light();
let turnOnLight: Command = new TurnOnLightCommand(light);
let turnOffLight: Command = new TurnOffLightCommand(light);

let setRedLight: Command = new SetRedLightCommand(light);
let increaseRedLight: Command = new IncreasedRedLightCommand(light);
let decreaseRedLight: Command = new DecreasedRedLightCommand(light);

let remoteControl: RemoteControl = new RemoteControl();
  
var redLightOn = false;
  
export function LightRemoteCommands(command: string) {
    
    // Checking which button is pressed

    if (command == "on") {
        remoteControl.execute(turnOnLight);
    } 
    else if (command == "off") {
        remoteControl.execute(turnOffLight);
    }

    else if (command == "set-red-light") {
        redLightOn = true;
        remoteControl.execute(setRedLight);
    }

    else if (command == "increase" && redLightOn) {
        remoteControl.execute(increaseRedLight);
    }
    else if (command == "decrease" && redLightOn) {
        remoteControl.execute(decreaseRedLight);
    }

    return remoteControl.executeCommand();
}