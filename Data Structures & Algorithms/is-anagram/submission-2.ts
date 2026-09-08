class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // if the length of string is different its not an anagram.
    // even if length 
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length) {
            return false;
        }

        const sHashMap = new Map<string, number>();
        const tHashMap = new Map<string, number>();

        for(let ch of s) {
            if(sHashMap.has(ch)) {
                let count = sHashMap.get(ch);
                sHashMap.set(ch, count + 1);
            } else {
                sHashMap.set(ch, 1);
            }
        }

         for(let ch of t) {
            if(tHashMap.has(ch)) {
                let count = tHashMap.get(ch);
                tHashMap.set(ch, count + 1);
            } else {
                tHashMap.set(ch, 1);
            }
        }

        for(const [ch, count] of sHashMap.entries()) {
            if(tHashMap.get(ch) !== count) {
                return false;
            }
        }
        return true;
    }
}
