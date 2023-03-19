export const parseHeaders = (str: string): string => {
    if (str.length > 0) {
        const headers = str.match(/###.*###/ig);

        if (headers && headers.length) {
            headers.forEach((header) => {
                str = str.replace(header, `<h3>${header.slice(3, -3)}</h3>`);
            });
        }
        return str;
    }
    return str;
};
