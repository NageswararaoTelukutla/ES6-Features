module.exports = (...args) => {
    var sum = args.reduce((x, value) => x + value, 0);
    return sum / args.length;
};
