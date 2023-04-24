``` typescript
function removeElement(nums: number[], val: number): number {
    let rear = nums.length;
    for (let i = 0; i < rear; i++) {
        if (nums[i] == val) {
            nums[i] = nums[--rear];
            i--;
        }
    }
    return rear;
};
```