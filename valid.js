var isValid = function(s) {
    let close = []

    for (i in s) {
        if (s[i] === '(') {
            close.unshift(')')
        } else if (s[i] === '[') {
            close.unshift(']')
        } else if (s[i] === '{') {
            close.unshift('}')           
        } else if (s[i] === close[0]) {
            close.shift()
        } else if (s[i] === ')' || s[i] === ']' || s[i] === '}') {
            return false
        }
    }

    if (close.length === 0) {
        return true
    } else {
        return false
    }
};

let string = "[()]"
console.log(isValid(string))