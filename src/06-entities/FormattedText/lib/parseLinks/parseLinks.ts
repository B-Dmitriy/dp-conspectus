export const parseLinks = (str: string): string => {
    if (str.length > 0) {
        const links = str.match(/\[.*\]\(.*\)/ig);

        if (links !== null && links.length) {
            links.forEach((link) => {
                let newLinkTitle = '';
                let newLinkHref = '';
                const linkTitle = link.match(/\[.+\]/ig);
                const linkHref = link.match(/\(.+\)/ig);
                if (linkTitle && linkHref) {
                    newLinkTitle = linkTitle[0].slice(1, -1)
                    newLinkHref = linkHref[0].slice(1, -1)


                    str = str.replace(link, `<a href=${newLinkHref}>${newLinkTitle}</a>`);
                }
            })
        }
        return str;
    }
    return str;
}
