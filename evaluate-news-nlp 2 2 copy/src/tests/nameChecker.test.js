import { checkForName } from '../client/js/nameChecker';

describe('Testing the names functionality', () => {
    test('name for testing', () => {
        expect(checkForName('Archer')) === true;
        expect(checkForName('NtMuhd')) === false;

    });
})