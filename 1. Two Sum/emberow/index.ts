function twoSum(nums: number[], target: number): number[] {
    
    let result = [];
    let map = new Map();

    for(let i = 0; i < nums.length; i++){
        let temp = target - nums[i];
        if(map.get(temp) != undefined){
            return[map.get(temp), i];
        }
        map.set(nums[i], i);
    }
    return [];
};

console.log(twoSum([2,7,11,15], 9));