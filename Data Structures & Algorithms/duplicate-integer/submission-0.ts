class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const uniqueMap = new Map();
        for(let no of nums) {
            if(!uniqueMap.has(no)) {
                uniqueMap.set(no, no);
            } else {
                return true
            }
        }
        return false;
    }
}
