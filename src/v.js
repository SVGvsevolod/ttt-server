/**
 * Data validator
 * @param {string} a data
 * @returns {object}
 */
export default function v(a) {
    try {
        return JSON.parse(a)
    } catch (a) {
        return Object.create(null, {
            err: {
                enumerable: true,
                value: 'Data provided is invalid'
            }
        })
    }
}