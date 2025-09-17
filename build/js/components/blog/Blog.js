class Blog {
    constructor(data) {
        this.data = data;
        this.render();
    }
    render() {
        const blogDOM = document.getElementById('blog');
        let html = "";
        let index = 0;

        for (const blog of this.data) {
            index++;
            const {
                status,
                photoName,
                photoAlt,
                buttonText,
                buttonLink,
                titleText,
                titleLink,
                paragraph,
                authorPhotoName,
                authorPhotoAlt,
                author,
                date
                } = blog;

                if (status != 'published') continue;
                if (index === 1 || index % 3 === 1) {
                    html += `<div class="blog-row">`;                    
                }

                html += `<div class="blog-container col-12 col-lg-4">
                        <img src="./img/blog/${photoName}" alt="${photoAlt}">
                        <a href="${buttonLink}" class = "blog-button" target="_blank">
                            ${buttonText}
                        </a>
                        <div class="blog-content">
                            <a href="${titleLink}" target="_blank">
                                <h2 class="blog-title">
                                    ${titleText}
                                </h2>
                            </a>
                            <p class="blog-paragraph">
                                ${paragraph}
                            </p>
                            <div class="blog-info">
                                <div class="thumbnail">
                                    <img src="./img/testimonial/${authorPhotoName}" alt="${authorPhotoAlt}">
                                </div>
                                <div class="person">
                                ${author} | ${date}
                                </div>
                                </div>
                            </div>
                        </div>`;
                        
                        if (index % 3 === 0) {
                            html += `</div>`;
                            html += '<div class="print-spacer2"></div>';
                        } 
                    }
                    blogDOM.innerHTML += html;
    }
};

export { Blog };
