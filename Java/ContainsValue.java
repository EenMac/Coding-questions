public class ContainsValue {
  public static boolean checker(String[] array, String value){
    for(String item: array){
        if(item == value){
            return true;
        }
    }
    return false;
  }

  public static void main(String[] value) {
      String[] array = {
          "James", "Josh", "Hanley"
      };
    //   returns false
      System.out.println(checker(array, "Alia"));
    //   returns true
    System.out.println(checker(array, "James"));
    
  }
}

