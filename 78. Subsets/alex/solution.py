from typing import List

class Solution:
    '''
    O(2^n)
    1      2  3
    12 13  23
    123

    '''
    def __init__(self) -> None:
        self.ans: List[List[int]] = []

    def subsets(self, nums: List[int]) -> List[List[int]]:
        self._find_subsets(nums, [], 0)
        return self.ans

    def _find_subsets(self, nums: List[int], curr: List[int], curr_index: int) -> None:
        self.ans.append([ i for i in curr])
        while curr_index < len(nums):
            curr.append(nums[curr_index])
            self._find_subsets(nums, curr, curr_index + 1)
            curr.pop()
            curr_index += 1

s = Solution()
print(s.subsets([1,2,3]))