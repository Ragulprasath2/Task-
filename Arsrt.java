import java.util.*;
class Arsrt{
	public static void main(String[] args) {
		int arr[]={-1,-5,-3,-4,-2,0,1,2,3,5,4,6};
		int left=0,right=arr.length-1,odd=0;
		while(left<right)
		{
			while(arr[left]%2!=0)
			{
				left++;
				odd++;
			}
			while(arr[right]%2==0&&left<right)
			{
				right--;
			}
			if (left<right)
			{
				int temp=arr[left];
				arr[left]=arr[right];
				arr[right]=temp;	
			}
		}
		Arrays.sort(arr,0,odd);
		Arrays.sort(arr,odd,arr.length-1);
		for (int i=0;i<arr.length;i++)
		{
			System.out.print(arr[i]+"   ");
		}
	}
}