class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let str = s.split(" ").join("").replace(/[^a-zA-Z0-9]/g, "");
        let left = 0;
        let right = str.length - 1;
        for(let char of str) {
            if(str[left].toLowerCase() !== str[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
}
