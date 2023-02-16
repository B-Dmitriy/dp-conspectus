export const parseCode = (str: string): string => {
    if (str.length > 0) {
        const codes = str.match(/```[\s\S]*?```/ig);
        if (codes && codes.length) {
            codes.forEach((code) => {
                str = str.replace(code, `<pre>${code.slice(3, -3)}</pre>`);
            })
        }
        return str;
    }
    return str;
}
