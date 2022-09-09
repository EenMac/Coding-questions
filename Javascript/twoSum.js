var twoSum = function(nums, target) {
    for(var i=0; i < nums.length; i++){
        for (var j=i+1; j < nums.length; i++){
            if (nums[i] + nums[j] == target){
                return [i, j]
            }
        }
    }
};

const array = [0, 1, 5, 7, 9, 20];

console.log(twoSum(array, 6));