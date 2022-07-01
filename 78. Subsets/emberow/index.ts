function subsets(nums: number[]): number[][] {
    let result:number[][] = [];
    let curNums:number[] = [];
    getSubsets(result, nums, curNums, 0);
    return result;
};

// result:結果
// nums:題目一開始的數字集合
// curNums:目前的數字集合
// cur:目前數到哪個數字
function getSubsets(result: number[][], nums: number[], curNums: number[], cur: number){
    let copy = curNums.map(x => x);
    result.push(copy);
    // console.log(curNums)
    for(let i = cur; i < nums.length; i ++){
        curNums.push(nums[i]);
        getSubsets(result, nums, curNums, i+1)
        curNums.pop();
    }
}

console.log(subsets([1,2,3]));