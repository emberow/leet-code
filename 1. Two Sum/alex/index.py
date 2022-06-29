from math import remainder
from typing import Dict, List

class Solution:
    '''
    Time complexity : O(n)
    Use hash map to save reminders, index pairs.
    If the current number exist in hash.
    return current number and hash[reminder]
    '''
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        hash: Dict[int, int]= {}

        for i in range(len(nums)):
            remainder = target - nums[i]
            if nums[i] in hash.keys():
                return [i, hash[nums[i]]]
            hash[remainder] = i