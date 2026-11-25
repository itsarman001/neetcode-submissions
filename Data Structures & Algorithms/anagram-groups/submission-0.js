class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagrams = new Map();

        for(let str of strs) {
            const key = str.split("").sort().join("");

            if(!anagrams.has(key)) anagrams.set(key, [])
            anagrams.get(key).push(str)
        }

        return Array.from(anagrams.values())
    }
}
