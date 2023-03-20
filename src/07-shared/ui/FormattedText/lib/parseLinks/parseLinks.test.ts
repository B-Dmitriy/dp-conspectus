import { parseLinks } from './parseLinks';

describe('parseCode', () => {
    test('correct string parsed', () => {
        const testString = '[Link]("https://url.com")';

        expect(parseLinks(testString)).toBe('<a href="https://url.com">Link</a>');
    });

    test('correct string with "\\n" parsed', () => {
        const testString = '\n[Link]("https://url.com")\n';
        const resultTextNode = '\n<a href="https://url.com">Link</a>\n';

        expect(parseLinks(testString)).toBe(`${resultTextNode}`);
    });

    test('incorrect strings parsed', () => {
        const testString = '[Link("https://url.com")';
        const testString2 = '[Link]"https://url.com")';
        const testString3 = 'Link]("https://url.com")';
        const testString4 = '[Link]\n("https://url.com")';

        expect(parseLinks(testString)).toBe(testString);
        expect(parseLinks(testString2)).toBe(testString2);
        expect(parseLinks(testString3)).toBe(testString3);
        expect(parseLinks(testString4)).toBe(testString4);
    });

    test('without link parsed', () => {
        const testString = '[Link]()';

        expect(parseLinks(testString)).toBe('[Link]()');
    });

    test('without title parsed', () => {
        const testString = '[]("https://url.com")';

        expect(parseLinks(testString)).toBe('[]("https://url.com")');
    });

    test('without title parsed', () => {
        const testString = '[]()';

        expect(parseLinks(testString)).toBe('[]()');
    });

    test('with []() title', () => {
        const testString = '[[]()]()';

        expect(parseLinks(testString)).toBe('<a href=)](>[]()</a>');
    });

    test('with []() href', () => {
        const testString = '[]([]())';

        expect(parseLinks(testString)).toBe('<a href=[]()>]([</a>');
    });

    test('empty string parsed', () => {
        expect(parseLinks('')).toBe('');
    });
});
