'''
给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).
'''

class Solution:
    def threeSumClosest(self, nums, target):
        nums.sort()
        closest = None
        sums = None
        for i in range(len(nums)):
            # 跳过重复的元素
            if i == 0 or nums[i] > nums[i - 1]:
                j = i + 1
                k = len(nums) - 1
                while j < k:
                    sums = nums[i] + nums[j] + nums[k]
                    d = sums - target
                    if closest is None or abs(closest - target) > abs(sums - target):
                        closest = sums
                    if d == 0:
                        return target
                    elif d < 0:
                        j += 1
                    else:
                        k -= 1
        return closest

sol = Solution()
print(sol.threeSumClosest(nums=[-1,2,1,-4],target=1))
