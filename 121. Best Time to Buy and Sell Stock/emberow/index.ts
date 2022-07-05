function maxProfit(prices: number[]): number {
    let result = 0;
    let minPrice = Number.MAX_VALUE;
    for(let i = 0; i < prices.length; i++){
        if(prices[i] < minPrice){
            minPrice = prices[i]
        }
        else if(prices[i] - minPrice > result){
            result = prices[i] - minPrice;
        }
    }
    return result;
};