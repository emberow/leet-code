use hash map to store the values of expressions target-nums[i] and i as key and value, when iterating over the key in the hash map  return array [i, map.get(i)]
```
function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            return [i, map.get(nums[i])];
        }
        map.set(target-nums[i], i);
    }
};
```