class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const hashMap = new Map();
        const result = [];
        for(let no of nums) {
            if(hashMap.has(no)) {
                let freqCount = hashMap.get(no);
                freqCount += 1;
                hashMap.set(no, freqCount);
            }else {
                hashMap.set(no, 1);
            }
        }

        
        for(let [key, value] of hashMap.entries()){
            result.push([key, value]);
        }

        result.sort((a, b) => b[1] - a[1]);
        const finalArray = result.slice(0, k).map(pair => pair[0]);

        return finalArray;
    }
}
