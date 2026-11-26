class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;

        const prefix = [];
        const suffix = [];

        let product = 1;

        for (let i = 0; i < n; i++) {
            prefix[i] = product;
            product *= nums[i];
        }

        product = 1;

        for (let i = n - 1; i >= 0; i--) {
            suffix[i] = product;
            product *= nums[i];
        }

        const output = [];

        for (let i = 0; i < n; i++) {
            output[i] = prefix[i] * suffix[i];
        }

        return output;
    }
}
