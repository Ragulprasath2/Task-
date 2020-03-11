import java.util.*;
class Srt{
	public static void main(String[] args) {
		int arr[]={-1,-5,-3,-4,-2,0,1,2,3,5,4};
		Arrays.sort(arr,0,arr.length-1);

		for (int i=0;i<arr.length/2;i++) 
		{
			for (int j=i+1;j<arr.length/2;j++) 
			{
				
				if (arr[i]<0) 
				{
					
				
					if(arr[i]%2!=0)
						{
							if(arr[j]>arr[i])
							{
								int temp=arr[i];
								arr[i]=arr[j];
								arr[j]=temp;
								
							}
						}



						if(arr[i]%2!=0)
						{
							if(arr[j]<arr[i])
							{
								int temp=arr[i];
								arr[i]=arr[j];
								arr[j]=temp;
							}
						}
				}
			}	
		}




		for (int i=arr.length/2;i<arr.length;i++) 
		{
			for (int j=i+1;j<arr.length;j++) 
			{
				if(arr[i]>0)
				{
					if(arr[i]%2!=0)
						{
							if(arr[j]>arr[i])
							{
								int temp=arr[j];
								arr[j]=arr[i];
								arr[i]=temp;
							}
						}


						if(arr[i]%2!=0)
						{
							if(arr[j]<arr[i])
							{
								int temp=arr[i];
								arr[i]=arr[j];
								arr[j]=temp;
							}
						}
				}
			}	
		}

		
		for (int i=0;i<arr.length;i++)
		{
			System.out.print(arr[i]+"   ");
		}

	}
}