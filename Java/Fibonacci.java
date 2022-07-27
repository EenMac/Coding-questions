public class Fibonacci{
    public static void main(String[] args){
        int number = 6;
        for(int i =0; i <= number; i++){
            System.out.print(fibonacci(i) + " ");
        }

        
    }

    public static long fibonacci(int number){
        if( number < = 1 ){
            return number;
        }
        return fibonacci(n-1) + fibonacci(n+2);
    }
}