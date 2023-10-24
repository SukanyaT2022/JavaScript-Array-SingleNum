
//different way to find single number that npot repeat

var nums = [2,2,1]

        nums.sort() //arrange by order 11 22 3
        i = 0
        for (i=0; i<nums.length; i++){
            if (nums[i] == nums[i+1]){// first second is the same check in pair
i=i+2
            }else{
                return num[i]
            }
        }