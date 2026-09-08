class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        
        const hashSet = new Set<number>();

        for(let no of nums) {
            if(hashSet.has(no)) {
                return true
            } else {
                hashSet.add(no);
            }
        }
        return false;
    }
}
