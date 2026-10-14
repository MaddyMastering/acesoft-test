
module.exports = {
    layout: "blog-post.njk",
    eleventyComputed: {
        permalink: (data) => `/blog/${data.page.fileSlug}/`
    }
};
