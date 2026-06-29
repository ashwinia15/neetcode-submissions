class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // 
    groupAnagrams(strs: string[]): string[][] {

       
        const hashMap = new Map<string, string[]>();
        const result = [];
        for(let i = 0; i < strs.length; i++) {
            const charKey = new Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++) {
                const val = strs[i][j].charCodeAt(0) - 97;
                charKey[val] += 1;
            }
            if(hashMap.has(charKey.join())) {
                const existingVal = hashMap.get(charKey.join());
                hashMap.set(charKey.join(), [...existingVal, strs[i]]);
            } else {
                hashMap.set(charKey.join(), [strs[i]]);
            }
        }
        for(let [key, value] of hashMap.entries()) {
            result.push(value);
        }
        return result;
        
    }
}
