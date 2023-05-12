use map
```typescript
function singleNumber(nums: number[]): number {
    let myMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (myMap.has(nums[i])) {
            myMap.set(nums[i], 2);
        } else {
            myMap.set(nums[i], 1);
        }
    }
    for(let [key, val] of myMap) {
        if (val == 1) {
            return key;
        }
    }
};
```