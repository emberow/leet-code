# Two Sum

## 暴力解法

把每一種組合都找出來就可以了

```Typescript
for (let i=0;i<nums.length;++i) { // 遍歷每個數字當第一個數字
    for (let j=i+1;j<nums.length;++j) { // 將 i 跟 i+1 以後的數字做組合
        if (nums[i] + nums[j] == target) { // 找到匹配的就回傳 (因為題目說可以假設只有 「一個」 答案)
            return [i, j];
        }
    }
}
return [];
```