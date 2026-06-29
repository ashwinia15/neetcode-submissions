class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    productExceptSelf(nums: number[]): number[] {
        const result = [];
        let i = 0, j = 0; 
        while(i < nums.length) {
            let skipVar = nums[i];
            let product = 1
            for(j = 0; j < nums.length; j++) {
                if(i != j){
                    product *= nums[j];
                } 
                
            }
            result.push(product);
            i++;
        }
        return result;
    }
}
