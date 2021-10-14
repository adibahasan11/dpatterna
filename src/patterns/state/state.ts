export class Gate {
    state !: GateState

    constructor() {
        this.state = new CloseGateState(this); // Initial State of the Gate.
    }

    public enter(): String {
        return this.state.enter()
    }
    public payOk(): String {
        return this.state.payOk()
    }
    public payFailed(): String {
        return this.state.payFailed()
    }

    public changeState(state: GateState): void {
        this.state = state
    }
}

export interface GateState {
    enter(): String
    payOk(): String
    payFailed(): String
}

export class OpenGateState implements GateState {
    
    gate!: Gate
    constructor(gate: Gate) {
        this.gate = gate;
    } 
    
    public enter(): String {
        //let the user in
        this.gate.changeState(new CloseGateState(this.gate))
        return "closed"
    }
    public payOk(): String {
        this.gate.changeState(new OpenGateState(this.gate))
        return "open"        
    }
    public payFailed(): String {
        this.gate.changeState(new CloseGateState(this.gate))
        return "open"
    }
}

export class CloseGateState implements GateState {
    
    gate!: Gate
    constructor(gate: Gate) {
        this.gate = gate;
    } 
    
    public enter(): String {
        //let the user in
        this.gate.changeState(new CloseGateState(this.gate))
        return "closed"
    }
    public payOk(): String {
        this.gate.changeState(new OpenGateState(this.gate))
        return "open"
    }
    public payFailed(): String {
        this.gate.changeState(new CloseGateState(this.gate))
        return "closed"
    }
}