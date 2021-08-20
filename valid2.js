var isValid = function(s) {
    let que = []

    for (i in s) {
        if (s[i] === ')' && que[0] === '(') {
            que.shift()
        } else if (s[i] === ']' && que[0] === '[') {
            que.shift()
        } else if (s[i] === '}' && que[0] === '{') {
            que.shift()
        } else {
            que.unshift(s[i])
        }
    }

    if (que.length === 0) {
        return true
    } else {
        return false
    }
};

let string = "[]{()}"
console.log(isValid(string))