class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const hashMap = new Map(); 

        for(let i = 0; i < nums.length; i++) {
            const rem = target - nums[i];
            if(hashMap.has(rem)) {
                return [i, hashMap.get(rem)];
            } else {
                hashMap.set(nums[i], i);
            }
        }
        
    }
}
