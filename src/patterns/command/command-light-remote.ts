// Reciever
export class Light {
  luminosity: number = 0;
    
  public on(): string {
    return "on";
  }
  
  public off(): string {
    return "off";
  }
  
  public setRedLight(): string {
    this.luminosity = 0;
    return "red0";
  }
  
  public increaseRedLight(): string {
    if (this.luminosity < 3) { // Taking 3 as the highest luminosity
      this.luminosity++;  
    }
    
    return `red${ this.luminosity }`;
  }
  
  public decreaseRedLight(): string {
    if (this.luminosity > 0) { // Taking 0 as the lowest luminosity
      this.luminosity--; 
    }
    
    return `red${ this.luminosity }`;
  }
}

// Command for the remote to control the light
export interface Command {
  executeCommand(): string;
}
  
export class TurnOnLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  executeCommand(): string {
    return this.light.on();
  }
}
  
export class TurnOffLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  executeCommand(): string {
    return this.light.off();
  }
}
  
export class SetRedLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  executeCommand(): string {
    return this.light.setRedLight();
  }
}
  
export class IncreasedRedLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  executeCommand(): string {
    return this.light.increaseRedLight();
  }}
  
export class DecreasedRedLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  executeCommand(): string {
    return this.light.decreaseRedLight();
  }
}

// (Invoker) Remote to execute the commands
export class RemoteControl {
  command: Command
  
  execute(command: Command) {
    this.command = command;
  }
  
  public executeCommand() {
    return this.command.executeCommand();
  }
}