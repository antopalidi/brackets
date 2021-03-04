module.exports = function check(str, bracketsConfig) {
    for (let i = str.length; i >= 0; i--) {
        for (let k = 0; k < bracketsConfig.length; k++) {
            while (str.includes(bracketsConfig[k].join(''))) {
                str = str.replace(bracketsConfig[k].join(''), '');
            }
        }
    }
    return str === '' ? true : false;
}
