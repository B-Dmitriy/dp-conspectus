import {parseHeaders} from "./parseHeaders";

describe('parseHeaders', () => {
    test('correct string parsed', () => {
        const testString = '***Header***';

        expect(parseHeaders(testString)).toBe('<h3>Header</h3>');
    });

    test('correct string with "\\n" parsed', () => {
        const testString = '***\nHeader\n***';
        const resultTextNode = '***\nHeader\n***';

        expect(parseHeaders(testString)).toBe(`${resultTextNode}`);
    });

    test('incorrect strings parsed', () => {
        const testString = '***Header**';
        const testString2 = '**Header***';
        const testString3 = '***********';

        expect(parseHeaders(testString)).toBe(testString);
        expect(parseHeaders(testString2)).toBe(testString2);
        expect(parseHeaders(testString3)).toBe('<h3>*****</h3>');
    });

    test('empty string parsed', () => {
        expect(parseHeaders('')).toBe('');
    });
});
