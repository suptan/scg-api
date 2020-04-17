'use strict'

/**
 * @returns {number[]}
 */
async function getSequences() {
    const nums = [0, 0, 5, 9, 15, 23, 0];
    let start = 0;
    let end = 0;
    const diffs = nums.map((n, i) => {
        if (n == 0) return 0;
        else end = i;

        const diff = n - nums[i - 1];

        if (i > 0 && diff != n) {
            if (start == 0) start = i;
            return diff;
        }

        return 0;
    });
    const sequence = diffs.map((n, i) => n == 0 ? 0 : diffs[i + 1] - n)
                        .find(n => n != 0);

    for (let i = start - 1; i >= 0; i--) {
        diffs[i] = diffs[i + 1] - sequence;
        nums[i] = nums[i + 1] - diffs[i + 1];
    }

    for (let i = end + 1; i < nums.length; i++) {
        diffs[i] = diffs[i - 1] + sequence;
        nums[i] = nums[i - 1] + diffs[i];
    }

    return Promise.resolve(nums);
};

module.exports = {
  getSequences,
};
