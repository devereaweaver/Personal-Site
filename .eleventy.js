module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css"); // 👈 This tells Eleventy to copy the css folder
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addPassthroughCopy("images/");
  };
  