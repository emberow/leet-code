function find_subset(result: number[][], nums: number[], current: number[], begin: number) {
    // 把現在的子集複製一份推上去
    result.push(current.map(x => x));

    // 每次取一個數字，並與後面的子集做配對，這樣就不會有重複的子集了
    // 取玩之後再 pop 回去，並選擇下一個數字
    for (let i: number = begin; i < nums.length; ++i) {
        current.push(nums[i]);
        find_subset(result, nums, current, i+1);
        current.pop();
    }
}

function subsets(nums: number[]): number[][] {
    let result = [];
    find_subset(result, nums, [], 0);
    return result;
};