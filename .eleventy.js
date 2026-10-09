const fs = require("fs");

module.exports = function (eleventyConfig) {

    // Don't process existing HTML files.
    // They will be copied unchanged below.
    eleventyConfig.ignores.add("**/*.html");


    // Copy existing website files unchanged
    const entries = fs.readdirSync(".", { withFileTypes: true });

    for (const entry of entries) {

        const name = entry.name;

        if (
            name === "_site" ||
            name === "_includes" ||
            name === "blog" ||
            name === "node_modules" ||
            name === ".git"
        ) {
            continue;
        }

        eleventyConfig.addPassthroughCopy(name);
    }

    // Copy blog/index.html as-is
    eleventyConfig.addPassthroughCopy("blog/index.html");

    // Blog collection
    eleventyConfig.addCollection("blog", function (collectionApi) {
        return collectionApi.getFilteredByGlob("content/blog/*.md");
    });


    return {
        dir: {
            input: ".",
            includes: "_includes",
            output: "_site"
        }
    };
};
