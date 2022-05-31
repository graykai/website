const generateColors = (e, colors, prefix, attribute) =>
    Object.keys(colors).reduce((acc, key) => {
        if (typeof colors[key] === 'string') {
            if (typeof attribute === 'string') {
                return {
                    ...acc,
                    [`${prefix}-${e(key)}`]: {
                        [`${attribute}`]: colors[key],
                    },
                };
            } else {
                const value = {}
                attribute.forEach(v => {
                    if (typeof v === "function") {
                        const result = v(colors[key]);
                        value[result[0]] = result[1];
                    } else {
                        return value[v] = colors[key];
                    }
                });
                return {
                    ...acc,
                    [`${prefix}-${e(key)}`]: value,
                };
            }
        }

        const newPrefix = `${prefix}-${e(key)}`
        const innerColors = generateColors(e, colors[key], newPrefix, attribute);

        return {
            ...acc,
            ...innerColors,
        };
    }, {});

module.exports = {
    contentBoxPlugin: function contentBoxPlugin({ e, addUtilities, matchUtilities, theme, variants }) {

        addUtilities({
            '.content-box': {
                borderWidth: "1px",
                borderStyle: "solid",
            }
        })

        addUtilities({
            '.block-text': {
                'text-stroke-width': '1px',
                '-webkit-text-stroke-width': "1px",
            }
        })

        const colors = theme('colors')
        const secondaryColorVariants = generateColors(e, colors, ".content-box-secondary-color", ["border-color", "color"])
        const primaryColorVariants = generateColors(e, colors, ".content-box-primary-color", "background-color")

        const blockVariants = generateColors(e, colors, ".block-text-color", [
            (value) => ["text-shadow", `${value} 0 3px 0`],
            "text-stroke-color", "-webkit-text-stroke-color"
        ])

        const halfToneVariants = generateColors(e, colors, ".half-tone", [
            (value) => ["text-shadow", `${value} 0 2px 0`]
        ])

        addUtilities(primaryColorVariants, variants("primaryColor"))
        addUtilities(secondaryColorVariants, variants("secondaryColor"))
        addUtilities(blockVariants, variants("blockColor"))
        addUtilities(halfToneVariants, variants("halfToneColor"))
    }
}