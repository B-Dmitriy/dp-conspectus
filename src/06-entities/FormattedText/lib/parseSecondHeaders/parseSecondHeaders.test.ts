import { parseSecondHeaders } from './parseSecondHeaders';

describe('parseSecondHeaders', () => {
    test('correct string parsed', () => {
        const testString = '***Header***';

        expect(parseSecondHeaders(testString)).toBe('<h4>Header</h4>');
    });

    test('correct string with "\\n" parsed', () => {
        const testString = '***\nHeader\n***';
        const resultTextNode = '***\nHeader\n***';

        expect(parseSecondHeaders(testString)).toBe(`${resultTextNode}`);
    });

    test('incorrect strings parsed', () => {
        const testString = '***Header**';
        const testString2 = '**Header***';
        const testString3 = '***********';

        expect(parseSecondHeaders(testString)).toBe(testString);
        expect(parseSecondHeaders(testString2)).toBe(testString2);
        expect(parseSecondHeaders(testString3)).toBe('<h4>*****</h4>');
    });

    test('empty string parsed', () => {
        expect(parseSecondHeaders('')).toBe('');
    });
});
