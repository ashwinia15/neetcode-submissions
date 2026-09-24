class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        
        // Brute force Approach
        // iterate through the array and check first element with every other    element if same element occurs twice we have to return true. 
        // for(let i = 0; i < nums.length; i++) {
        //     for(let j = i + 1; j < nums.length; j++) {
        //         if(nums[i] == nums[j]){
        //             return true;
        //         }
        //     }
        // }
        // return false;

        // Optimized approach 
        // here we are repeating checking if the element is present twice through itrating the array instead we can simple use set and check if its there we can return true

        const seen = new Set();
        for(let i = 0; i < nums.length; i++) {
            if(seen.has(nums[i])) {
                return true
            } 
            seen.add(nums[i]);
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
