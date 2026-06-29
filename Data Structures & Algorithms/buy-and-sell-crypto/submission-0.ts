class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */

    maxProfit(prices: number[]): number {
        let maxProfit = 0;
        let minimumPrice = prices[0];
        let profitIfSoldToday = 0;
        for(let price of prices) {
            if(minimumPrice > price) {
                minimumPrice = price;
            } else {
                profitIfSoldToday = price - minimumPrice;
                if(profitIfSoldToday > maxProfit) {
                    maxProfit = profitIfSoldToday;
                }
            }
        }
        return maxProfit;
    }
}
