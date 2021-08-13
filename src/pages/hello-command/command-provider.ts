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
  
export function LightRemoteCommands(command: string) { 
    
    // Checking which button is pressed

    if (command == "on") {
        remoteControl.setCommand(turnOnLight);
    } 
    else if (command == "off") {
        remoteControl.setCommand(turnOffLight);
    }

    else if (command == "set-red-light") {
        remoteControl.setCommand(setRedLight);
    }

    else if (command == "increase") {
        remoteControl.setCommand(increaseRedLight);
    }
    else if (command == "decrease") {
        remoteControl.setCommand(decreaseRedLight);
    }

    return remoteControl.followCommand();
}