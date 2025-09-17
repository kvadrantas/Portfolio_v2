// This is script for automatic social icons loads from external file
class Social {
    constructor(className, data) {
        this.data = data;
        this.className = className;
        this.render();
    }
    render() {
        let html = '';
        const socialDom = document.querySelector(`${this.className}`);
        for (const {status, icon, link, target} of this.data) {
            if (status === 'draft') continue;
            html += `<a href="${link}" class="${icon}" target="${target}"></a>\n`;
        }
        socialDom.innerHTML = html;
        // console.log(html);
    }
};

export { Social };
