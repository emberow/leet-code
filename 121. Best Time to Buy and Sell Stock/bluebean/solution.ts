function maxProfit(prices: number[]): number {
    let profit: number = 0;
    // 先假設自己以最高價買進
    let cheapest: number = 100000; 
    for (const price of prices) {
        // 採用更低的價格去買進
        if (price < cheapest) {
            cheapest = price;
            continue;
        }
        // 選擇可以獲得最多利潤的賣出時機
        profit = Math.max(profit, price - cheapest);
    }
    return profit;
};