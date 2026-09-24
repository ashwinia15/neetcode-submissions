class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        
        // Brute force Approach
        // iterate through the array and check first element with every other    element if same element occurs twice we have to return true. 
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] == nums[j]){
                    return true;
                }
            }
        }
        return false;
        // const hashSet = new Set<number>(nums);
        // if(hashSet.size != nums.length) {
        //     return true;
        // }

        // // for(let no of nums) {
        // //     if(hashSet.has(no)) {
        // //         return true
        // //     } else {
        // //         hashSet.add(no);
        // //     }
        // // }
        // return false;
    }
}
