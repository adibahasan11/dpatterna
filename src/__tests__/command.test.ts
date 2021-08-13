import { Light } from "patterns/command/command-light-remote";
import { LightRemoteCommands } from "pages/hello-command/command-provider";

describe('Command Pattern Test', () => {
    test('Red Light Increased', () => {
        let expected = new Light();
        let reality = LightRemoteCommands ("increase");
        expect(expected.increaseRedLight()).toEqual(reality);
    })
    test('Red Light Decreased', () => {
        let expected = new Light();
        let reality = LightRemoteCommands ("decrease");
        expect(expected.decreaseRedLight()).toEqual(reality);
    })
    test('Set Red Light', () => {
        let expected = new Light();
        let reality = LightRemoteCommands ("set-red-light");
        expect(expected.setRedLight()).toEqual(reality);
    })
    test('Turn On Light', () => {
        let expected = new Light();
        let reality = LightRemoteCommands ("on");
        expect(expected.on()).toEqual(reality);
    })
    test('Turn Off Light', () => {
        let expected = new Light();
        let reality = LightRemoteCommands ("off");
        expect(expected.off()).toEqual(reality);
    })
})