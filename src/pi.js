/**
 Bailey-Borwein-Plouffe digit-extraction algorithm for pi
 <https://en.wikipedia.org/wiki/Bailey%E2%80%93Borwein%E2%80%93Plouffe_formula#BBP_digit-extraction_algorithm_for_.CF.80>
 */
module.exports = {
    calcN: function (n) {
        var partial = function (d, c) {
            var sum = 0;

            // Left sum
            var k;
            for (k = 0; k <= d - 1; k++) {
                sum += (Math.pow(16, d - 1 - k) % (8 * k + c)) / (8 * k + c);
            }

            // Right sum. This converges fast...
            var prev = undefined;
            for (k = d; sum !== prev; k++) {
                prev = sum;
                sum += Math.pow(16, d - 1 - k) / (8 * k + c);
            }

            return sum;
        };

        /**
         JavaScript's modulus operator gives the wrong
         result for negative numbers. E.g. `-2.9 % 1`
         returns -0.9, the correct result is 0.1.
         */
        var mod1 = function (x) {
            return x < 0 ? 1 - (-x % 1) : x % 1;
        };

        var s = 0;
        s += 4 * partial(n, 1);
        s += -2 * partial(n, 4);
        s += -1 * partial(n, 5);
        s += -1 * partial(n, 6);

        s = mod1(s);
        return Math.floor(s * 16);
    }
};
