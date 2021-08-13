// Reciever
export class Light {
  luminosity: number = 0;
  lightOn: boolean = true; // As at first by default, light remains on
  redLightOn: boolean = false; // As at first by default, red light is not set
    
  public on(): string {
    this.lightOn = true;
    
    console.log(`Ligh is turned on`);
    return "on"; // Returning 'on' to indicate light is on and it will display on.png
  }
  
  public off(): string {
    this.lightOn = false;
    this.redLightOn = false; // When light if turned off, we turn the red light off too

    console.log(`Ligh is turned off`);
    return "off"; // Returning 'on' to indicate light is on and it will display off.png
  }
  
  public setRedLight(): string {
    // When light is on, only then red light can be set (as it is the same bulb) 
    if (this.lightOn == true) {
      this.luminosity = 0;
      this.redLightOn = true; // Setting the red light, and only then button increase or decrease will work

      console.log(`Red light is set`);
      return "red0"; // To indicate red light is set and it will display red/0.png
    }
    else {
      return "off"; // If light is off, red will not set. It will display off.png
    }
  }
  
  public increaseRedLight(): string {
    // If light is off, red will not set. It will display off.png
    if (this.lightOn == false) {
      return "off"; 
    }
    // If light is on, but red light is not set, it will not increase.
    else if (this.lightOn == true && this.redLightOn == false){
      return "on";
    }

    if (this.luminosity < 3 && this.redLightOn == true) { // Taking 3 as the highest luminosity
      this.luminosity++;  
    }
    
    console.log(`Luminosity of Red light increased`);
    return `red${ this.luminosity }`; // To indicate luminosity of red light and it will display red/${luminosity}.png accordingly
  }
  
  public decreaseRedLight(): string {
    // If light is off, red will not set. It will display off.png
    if (this.lightOn == false) {
      return "off"; 
    }
    // If light is on, but red light is not set, it will not increase.
    else if (this.lightOn == true && this.redLightOn == false){
      return "on";
    }

    if (this.luminosity > 0 && this.redLightOn == true) { // Taking 0 as the lowest luminosity
      this.luminosity--; 
    }
    
    console.log(`Luminosity of Red light decreased`);
    return `red${ this.luminosity }`; // To indicate luminosity of red light and it will display red/${luminosity}.png accordingly
  }
}

// Interface for the Command of the remote to control the light
export interface Command {
  executeCommand(): string;
}
  
export class TurnOnLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  public executeCommand(): string {
    return this.light.on();
  }
}
  
export class TurnOffLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  public executeCommand(): string {
    return this.light.off();
  }
}
  
export class SetRedLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  public executeCommand(): string {
    return this.light.setRedLight();
  }
}
  
export class IncreasedRedLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  public executeCommand(): string {
    return this.light.increaseRedLight();
  }
}
  
export class DecreasedRedLightCommand implements Command {
  light: Light;
  
  constructor(light: Light) {
    this.light = light;
  }
  
  public executeCommand(): string {
    return this.light.decreaseRedLight();
  }
}

// (Invoker) Remote to execute the commands
export class RemoteControl {
  command!: Command
  
  setCommand(command: Command) {
    this.command = command; // Which command needs to executed on the reciever.
  }
  
  public executeCommand(): string {
    return this.command.executeCommand(); // Executes that command.
  }
}