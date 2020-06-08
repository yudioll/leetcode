/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (typeof s !== 'string') {
        throw Error('s must be a string')
    }
    // 去掉所有空格
    let nstr = s.replace(/\s+/g,'')
    let len = nstr.length
    let min=0,mid=0,max=0
    let temStack = []
    for (let i = 0; i < len; i++) {
        if (nstr[i] === '(') {
            min++
            temStack.push(nstr[i])
        }
        if (nstr[i] === '[') {
            mid++
            temStack.push(nstr[i])
        }
        if (nstr[i] === '{') {
            max++
            temStack.push(nstr[i])

        }
        if (nstr[i] === ')') {
            if(min === 0) {
                return false
            } else {
                if ('(' != temStack.pop()) {
                    return false
                }
                min--
            }
        }
        if (nstr[i] === ']') {
            if(mid === 0) {
                return false
            } else {
                if ('[' != temStack.pop()) {
                    return false
                }
                mid--
            }
        }
        if (nstr[i] === '}') {
            if(max === 0) {
                return false
            } else {
                if ('{' != temStack.pop()) {
                    return false
                }
                max--
            }
        }
    }
    if (min === 0 && max === 0 && mid === 0) {
        return true
    }
    return false
};
console.log(isValid('([)]'))