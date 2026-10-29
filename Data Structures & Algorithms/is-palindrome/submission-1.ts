class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const plainStr = s.toLowerCase().replace(/[^a-z0-9]/g, "");
        const reversedStr = plainStr.split("").reverse().join("");
        if(plainStr == reversedStr) {
            return true;
        }
        return false;
    }
}
