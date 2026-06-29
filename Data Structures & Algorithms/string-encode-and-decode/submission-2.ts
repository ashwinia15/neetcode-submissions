class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {

        let encodedString = "";
        for(let i = 0; i < strs.length; i++) {
            const strLen = strs[i].length;
            encodedString += strLen + "#" + strs[i]
        }
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        const decodedStrs = [];
        let start = 0, end;
        let i = 0;
        while(i < str.length) {
            let strCh = "";
            let charLen = "";
            let length;
            // find out length it can be of any digit.
            while(str[i] != "#") {
                charLen += str[i];
                i++;
            }
            start = i + 1;
            length = +charLen;
            end = start + (+length);
            for(let j = start; j < end; j++) {
                strCh += str[j];
            }
            decodedStrs.push(strCh)
            i = end;
        }
        return decodedStrs;
    }
}
