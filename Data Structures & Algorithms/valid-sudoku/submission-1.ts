class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
       const rows = new Map<number, Set<string>>();
    const cols = new Map<number, Set<string>>();
    const squares = new Map<string, Set<string>>();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const value = board[i][j];

            if (value === ".") continue;

            const key = `${Math.floor(i / 3)},${Math.floor(j / 3)}`;

            if (!rows.has(i)) rows.set(i, new Set());
            if (!cols.has(j)) cols.set(j, new Set());
            if (!squares.has(key)) squares.set(key, new Set());

            if (
                rows.get(i)!.has(value) ||
                cols.get(j)!.has(value) ||
                squares.get(key)!.has(value)
            ) {
                return false;
            }

            rows.get(i)!.add(value);
            cols.get(j)!.add(value);
            squares.get(key)!.add(value);
        }
    }

    return true;
}
}
