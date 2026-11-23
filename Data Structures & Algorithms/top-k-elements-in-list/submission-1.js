class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = new Map();
  
        for (let num of nums) {
            freq.set(num, (freq.get(num) || 0) + 1);
        }

        const buckets = Array.from({ length: nums.length + 1 }, () => []);

        for (let [num, count] of freq) {
            buckets[count].push(num);
        }

        const result = [];

        for (let i = buckets.length - 1; i >= 0; i--) {
            for (let num of buckets[i]) {
            result.push(num);

            if (result.length === k) return result;
            }
        }

        return result;
    }
}