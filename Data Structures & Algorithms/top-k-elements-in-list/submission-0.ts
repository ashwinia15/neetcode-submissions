class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashMap = new Map();
        for(let no of nums) {
            if(hashMap.get(no)) {
                let freqCount = hashMap.get(no);
                freqCount += 1;
                hashMap.set(no, freqCount);
            } else {
                hashMap.set(no, 1);
            }
        }
        const result = []
        const finalArray = []
        for(let [key, value] of hashMap.entries()) {
            result.push([key, value]);
        }
        result.sort((a, b) => b[1] - a[1]);
        for(let i = 0; i < k; i++) {
            finalArray.push(result[i][0])
        }
        return finalArray;
    }
}
