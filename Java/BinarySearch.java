public class BinarySearch {
    public static int binarySearch(int[] numbers, int mark) {
        int max_num = numbers.length - 1;
        int min_num = 0;

        while (max_num > min_num){
            int target = (min_num + max_num) >>> 1;
            if (numbers[target] > mark){
                max_num = target - 1;
            } else if(numbers[target] < mark){
                min_num = target + 1;
            }else {
                return target;
            }
        }
        return - 1;
    }
    
        public static void main(String[] args){
        int [] numbers = {1, 5, 9, 4, 3, 8, 6};

        int chosenNumber = 8;
        int index = binarySearch(numbers, chosenNumber);
        if (index == -1){
            System.out.println(chosenNumber + "Number is not in our array");
        }else{
            System.out.println(chosenNumber + " is at index " + index);
        }
    }
}

