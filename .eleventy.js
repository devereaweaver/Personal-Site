module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("assets/css"); // 👈 This tells Eleventy to copy the css folder
    eleventyConfig.addPassthroughCopy("assets/js");
    eleventyConfig.addPassthroughCopy("assets/images");
  };
  