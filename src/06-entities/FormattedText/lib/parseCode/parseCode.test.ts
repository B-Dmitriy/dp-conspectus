import {parseCode} from "./parseCode";

describe('parseCode', () => {
    test('correct string parsed', () => {
        const testString = '```const x = 5;```';

        expect(parseCode(testString)).toBe('<pre>const x = 5;</pre>');
    });

    test('correct string with "\\n" parsed', () => {
        const testString = '```\nconst x = 5;\n```';
        const resultTextNode = '\nconst x = 5;\n';

        expect(parseCode(testString)).toBe(`<pre>${resultTextNode}</pre>`);
    });

    test('incorrect strings parsed', () => {
        const testString = '```const x = 5;``';
        const testString2 = '``const x = 5;```';
        const testString3 = '```````````';

        expect(parseCode(testString)).toBe(testString);
        expect(parseCode(testString2)).toBe(testString2);
        expect(parseCode(testString3)).toBe('<pre></pre>`````');
    });

    test('empty string parsed', () => {
        expect(parseCode('')).toBe('');
    });
});
