
```typescript

function majorityElement(nums: number[]): number {
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let curNumCount: number;
        if (map.has(nums[i])) {
            curNumCount = map.get(nums[i]) + 1;
        } else {
            curNumCount = 1;
        }
        map.set(nums[i], curNumCount);
        if (curNumCount > nums.length / 2) {
            return nums[i];
        }
    }
};
```