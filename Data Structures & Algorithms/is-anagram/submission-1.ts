class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    // if the length of string is different its not an anagram.
    // even if length 
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length) {
            return false;
        }
        const hashMap1 = new Map();
        const hashMap2 = new Map();
        for(let ch of s) {
            if(hashMap1.has(ch)){
                hashMap1.set(ch, hashMap1.get(ch) + 1)
            } else {
                hashMap1.set(ch, 1);
            }
        }
        for(let ch of t) {
            if(hashMap2.has(ch)){
                hashMap2.set(ch, hashMap2.get(ch) + 1)
            } else {
                hashMap2.set(ch, 1);
            }
        }
        for(let [ch, count] of hashMap1.entries()) {
            if(count != hashMap2.get(ch)){
                return false;
            }
        }
        return true;
    }
}
