class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // 
    groupAnagrams(strs: string[]): string[][] {

        const hashMap = new Map();
        for(let i = 0; i < strs.length; i++) {
            const charKey = new Array(26).fill(0);
            for(let j = 0; j < strs[i].length; j++) {
                const val = strs[i][j].charCodeAt(0) - 97;
                charKey[val] += 1;
            }
            if(hashMap.has(charKey.join())) {
                let existingStr = hashMap.get(charKey.join());
                hashMap.set(charKey.join(), [...existingStr, strs[i]])
            } else {
                hashMap.set(charKey.join(), [strs[i]]);
            }
        }
        const result = [];
            for(let [key, value] of hashMap.entries()){
                result.push(value);
            }

            return result;
    }
}
