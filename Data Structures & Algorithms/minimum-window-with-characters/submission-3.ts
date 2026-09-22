class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s: string, t: string): string {
        const winMap = new Map();
        const tMap = new Map();

        for(let c of t) {
            tMap.set(c, (1 + tMap.get(c)) || 0);
        }
        let have = 0, need = tMap.size;
        let res = [-1, -1], resLen = Infinity;
        let left = 0;
        for(let right = 0; right < s.length; right++) {
            let ch = s[right];
            winMap.set(ch, (1 + winMap.get(ch)) || 0);
            
            if(tMap.has(ch) && winMap.get(ch) == tMap.get(ch)) {
                have += 1;
            }

            while(have == need) {
                if((right - left + 1) < resLen) {
                    res = [left, right];
                    resLen = right - left + 1;
                }
                    // pop from the left of window
                    winMap.set(s[left], winMap.get(s[left]) - 1)
                    if(tMap.has(s[left]) && winMap.get(s[left]) < tMap.get(s[left])){
                        have -= 1;
                    } 
                    left += 1;
            }
        }
        let l=res[0], r=res[1];
        if(resLen != Infinity) {
            return s.slice(l, Number(r) + 1);
        } else {
            return "";
        }


    }
}
