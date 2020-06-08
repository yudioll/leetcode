/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    if (Object.prototype.toString.call(nums) !== '[object Array]') {
        throw Error('nums must be a array')
    }
    let res = new Map()
    let len = nums.length
    for (let i = 0; i < len; i++) {
        if (res.has(target - nums[i])) {
            return [i,res.get(target - nums[i])]
        }
        res.set(nums[i],i)
    }
};

const twoSum2 = (array,target) => {
    let i = array.length
    while (i > 0) {
        let last = array.pop()
        if (array.indexOf(target - last) > -1) {
            return [array.length, array.indexOf(target-last)]
        }

        i--
    }
}
const ary = [3,2,4]
console.log(twoSum2(ary,6))