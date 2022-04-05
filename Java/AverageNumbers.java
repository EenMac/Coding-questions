public class AverageNumbers {
    public static void main(String[] args) {
        int[] numbers = new int[] { 10, 33, 47, 55, 24 };

        int sum = 0;
        for (int i = 0; i < numbers.length; i++)
            sum = sum + numbers[i];
        double average = sum / numbers.length;
        System.out.println(average);
    }
}