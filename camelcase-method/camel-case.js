String.prototype.camelCase=function(){
    if (this == "") return "";
    return this.split(' ')
    .map(s => `${s[0].toUpperCase()}${s.substring(1)}`)
    .join('');
};