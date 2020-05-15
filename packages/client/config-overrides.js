const {
    override,
    addBabelPlugin,
} = require("customize-cra");

module.exports = override(
    addBabelPlugin([
        "babel-plugin-root-import",
        {
            paths: [
                {
                    rootPathPrefix: "~",
                    rootPathSuffix: "src"
                },
                {
                    rootPathPrefix: "$",
                    rootPathSuffix: "src/assets"
                }
            ]
        }
    ]),
)