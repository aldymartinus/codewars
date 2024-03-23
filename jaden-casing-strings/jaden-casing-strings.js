String.prototype.toJadenCase = function() {
    return this.toString()
    .split(' ')
    .map((s) => {
        return s[0].toUpperCase() + s.substring(1);
    })
    .join(' ');
};