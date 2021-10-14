import {
    Gate,
    OpenGateState,
    CloseGateState
} from "patterns/state/state"

let gate = new Gate()

export function getState(message: string) {
    switch (message) {
      case "enter":
        return gate.enter();
  
      case "payOk":
        return gate.payOk();
  
      case "payFailed":
        return gate.payFailed();
      default:
        return "processing";
    }
  }