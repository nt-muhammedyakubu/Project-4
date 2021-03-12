import { submitHandler } from '../client/js/formHandler';

describe('Testing the submit functionality', () => {
    test('submit for testing', () => {
        expect(submitHandler).toBeDefined();
    });
})