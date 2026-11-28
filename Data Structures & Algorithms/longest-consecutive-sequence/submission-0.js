class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let set = new Set(nums);

        let max = 0;
        for(let i of set) {
            if(!set.has(i - 1)) {
                let length = 1;
                while(set.has(i + length)) {
                    length++;
                }
            max = Math.max(max, length)
            }
        }
        return max;
    }
}
