/**
 * 第一种解决方案-栈
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let muti = 0
    let res = ''
    let strAry = []
    let countAry = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] == '[') {
            countAry.push(muti)
            strAry.push(res)
            muti = 0
            res = ''
        } else if (s[i] == ']') {
            let tem = ''
            let count = countAry.pop()
            for (let j = 0; j < count; j++) {
                tem += res
            }
            res = strAry.pop() + tem
        } else if (s[i] >= '0' && s[i] <= '9') {
            muti = muti * 10 + (s[i] - '0')
        } else {
            res += s[i]
        }
    }
    return res
};

/**
 * 第二种解决方案-递归
 * @param {string} s
 * @return {string}
 */
var decodeString2 = function(s) {
    return dfs(s,0)
};

/**
 * @param {string} str 
 * @param {number} n 
 * @return {string}
 */
function dfs (s,n) {
    let i = n
    let res = ''
    let muti = 0
    while (i < s.length) {
        if (s[i] === '[') {
            let tem = dfs(s, i+1)
            let index = tem[0]
            let repeat = tem[1]
            for (let i = 0; i < muti; i++) {
                res += repeat                
            }
            i = index
            muti = 0
        } else if (s[i] == ']') {
            return [i,res]
        } else if (s[i] >= '0' && s[i] <= '9') {
            muti = muti * 10 + (s[i] - '0')
        } else {
            res += s[i]
        }
        i++
    }
    return res
}
const s = '"3[a]2[bc]"'
console.log(decodeString2(s))