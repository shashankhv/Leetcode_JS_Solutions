/**
 * Given an integer array nums (0-indexed) and two integers target and start,
 * find an index i such that nums[i] == target and abs(i - start) is minimized.
 * Note that abs(x) is the absolute value of x.
 *
 * Return abs(i - start).
 *
 * It is guaranteed that target exists in nums.
 *
 * Example 1:
 * Input: nums = [1,2,3,4,5], target = 5, start = 3
 * Output: 1
 * Explanation: nums[4] = 5 is the only value equal to target, so the answer is abs(4 - 3) = 1.
 *
 * Example 2:
 * Input: nums = [1], target = 1, start = 0
 * Output: 0
 * Explanation: nums[0] = 1 is the only value equal to target, so the answer is abs(0 - 0) = 0.
 *
 * Example 3:
 * Input: nums = [1,1,1,1,1,1,1,1,1,1], target = 1, start = 0
 * Output: 0
 * Explanation: Every value of nums is 1, but nums[0] minimizes abs(i - start), which is abs(0 - 0) = 0.
 *
 * Constraints:
 * - nums.length == n
 * - 1 <= n <= 1000
 * - 1 <= nums[i] <= 104
 * - 0 <= start < n
 * - target is in nums.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let lowest = [];
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] === target) {
            lowest.push(Math.abs(i - start));
        }
    }
    return Math.min(...lowest);
}
    // Time complexity: O(n), where n is the length of the input array nums.
    // Space complexity: O(k), where k is the number of occurrences of the target element in nums.


/**
 * @param {number[]} nums
 * @param {number} target
 * @param {number} start
 * @return {number}
 */
var getMinDistance = function(nums, target, start) {
    let minDistance = Infinity; // Initialize with a very large value

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            const distance = Math.abs(i - start); 
            minDistance = Math.min(minDistance, distance);  
        }
    }

    return minDistance;
};

// Time complexity: O(n), where n is the length of the input array nums.
// Space complexity: O(1), as we are using only a constant amount of space.





    