function twoSum(nums: number[], target: number): number[] {
    const m = new Map();
    for (let i=0;i<nums.length;++i) {
        m.set(nums[i], i);
    }
    for (let i=0;i<nums.length;++i) {
        if (m.has(target - nums[i]) && m.get(target - nums[i]) > i) {
            return [i, m.get(target - nums[i])];
        }
    }
    return [];
};