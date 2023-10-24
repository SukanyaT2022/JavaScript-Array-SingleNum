// index of give first location - last index give last location


var nums = [2,2,1]
// var singleNumber = function(nums) {
    
    for (i=0; i<nums.length; i++) {
        console.log(nums.indexOf(nums[i]))
        if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])){
           
          document.write(nums[i])
        }
    }
     
//  };
//  singleNumber(nums)
 