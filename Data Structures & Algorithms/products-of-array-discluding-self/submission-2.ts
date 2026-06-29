class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums: number[]): number[] {
       const  answer = [];
        let prefix = 1
        answer[0] = prefix;
        for(let i = 1; i < nums.length; i++) {
            answer[i] = prefix * nums[i - 1];
            prefix *= nums[i - 1];
        }
        let postfix = 1;
        for(let j = nums.length - 1; j >= 0; j--) {
            answer[j] *= postfix;
            postfix *= nums[j]
        }

        return answer;
    }
}
