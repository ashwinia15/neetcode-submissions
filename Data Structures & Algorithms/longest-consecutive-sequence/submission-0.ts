class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const set = new Set(nums);
        let longCons = 0;
        let len = 0
        for(let no of nums) {
            if(!set.has(no - 1)) {
               len = 0;
               while(set.has(no + len) ) {
                    len += 1;
               }
               longCons = Math.max(len, longCons);
            }
        }

        return longCons;
    }
}
