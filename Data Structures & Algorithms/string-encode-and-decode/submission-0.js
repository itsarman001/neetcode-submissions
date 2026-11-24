class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = "";
        const splitor = String.fromCharCode(257)

        for (let str of strs) {
            encodedStr += `${splitor}${str}`
        }

        return encodedStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const splitor = String.fromCharCode(257)
        return str.split(splitor).slice(1)
    }
}
