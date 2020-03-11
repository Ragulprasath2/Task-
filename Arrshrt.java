import java.util.*;
class Arrshrt{
	public static void main(String[] args) {
		int arr[]={-1,-5,-3,-4,-2,0,1,2,3,5,4,6};
		int temp=0;
		Arrays.sort(arr,0,arr.length-1);

		for (int i=0;i<arr.length;i++)
		{
			System.out.println(arr[i]);
		}
	}
}