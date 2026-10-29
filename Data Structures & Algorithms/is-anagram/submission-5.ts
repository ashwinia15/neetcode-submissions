class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */


    // getHashMapStr(str, hashMap) {


    //     // for(let ch of str) {
    //     //     if(hashMap.has(ch)) {
    //     //         let count = hashMap.get(ch);
    //     //         hashMap.set(ch, count + 1);
    //     //     } else {
    //     //         hashMap.set(ch, 1);
    //     //     }
    //     // }
    //     // return hashMap;

    // }
    // if the length of string is different its not an anagram.
    // even if length 
    isAnagram(s: string, t: string): boolean {
    
    // brute force approach
    // first need to check if the both strings length are equal
    // iterate and compare every character of the string

  if(s.length != t.length) {
    return false;
  }

  const count =  new Array(26).fill(0);
  for(let i = 0; i < s.length; i++) {
    count[s.charCodeAt(i) - 97]++;
    count[t.charCodeAt(i) - 97]--;
  }
  return count.every(freq => freq == 0);


    //     if(s.length !== t.length) {
    //         return false;
    //     }

    //     let sHashMap = new Map<string, number>();
    //     let tHashMap = new Map<string, number>();

    //     this.getHashMapStr(s, sHashMap)
    //     this.getHashMapStr(t, tHashMap)
    //     for(const [ch, count] of sHashMap.entries()) {
    //         if(tHashMap.get(ch) !== count) {
    //             return false;
    //         }
    //     }
    //     return true;
    }
}
