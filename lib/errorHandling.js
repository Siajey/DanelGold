/**
 *
 * @param {*} e
 * @returns {string}
 * @function
 */
export function GetError(e) {
    return `Status: ${e.response.data.statusCode} -- ${e.response.data.message}`
}


