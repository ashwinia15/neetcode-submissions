class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */


    getHashMapStr(str, hashMap) {

        for(let ch of str) {
            if(hashMap.has(ch)) {
                let count = hashMap.get(ch);
                hashMap.set(ch, count + 1);
            } else {
                hashMap.set(ch, 1);
            }
        }
        return hashMap;

    }
    // if the length of string is different its not an anagram.
    // even if length 
    isAnagram(s: string, t: string): boolean {

        if(s.length !== t.length) {
            return false;
        }

        let sHashMap = new Map<string, number>();
        let tHashMap = new Map<string, number>();

        this.getHashMapStr(s, sHashMap)
        this.getHashMapStr(t, tHashMap)
        for(const [ch, count] of sHashMap.entries()) {
            if(tHashMap.get(ch) !== count) {
                return false;
            }
        }
        return true;
    }
}
