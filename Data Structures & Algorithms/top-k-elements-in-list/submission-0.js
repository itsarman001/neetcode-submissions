class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
        for(let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const freqEntries = [...freq]
        freqEntries.sort((a, b) =>(b[1] - a[1]))

        const sortedArray = freqEntries.map(([value, freq]) => value)

        return sortedArray.slice(0, k)
    }
}
