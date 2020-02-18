function isPangram(string) {
    var regex = /([a-z])(?!.*\1)/ig;
    return (string.match(regex) || []).length === 26;
}

module.exports=isPangram;