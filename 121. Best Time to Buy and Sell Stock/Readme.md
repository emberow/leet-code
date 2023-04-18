
Initialize the variable `profit` to 0 and `lowestPrice` to the first price value, 
iterate over the `prices` array and compare the `profit` with different between `prices[i]` and the `lowestPrice`. if the difference is greater, update `profit`
Additionally, check if the current price is lower then `lowestPrice`, if this is true, update `lowestPrice`. 
The process continutes until all prices have been checked, and the maxiumn `profit` will be made.
```
function maxProfit(prices: number[]): number {
    let lowestPrice = prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if ( (prices[i] - lowestPrice) > profit) {
            profit = prices[i] - lowestPrice;
        }
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        }
    }
    return profit;
};
```