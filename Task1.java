import java.util.*;
class Task1
{
	public static void main(String[] args) 
	{
		Scanner sc=new Scanner(System.in);
		List<String>li=new ArrayList<String>();
		//List<String>li1=new ArrayList<String>();
		System.out.println("enter the Number of operation to do");
		int n=sc.nextInt();
		sc.nextLine();
		String arr[]=new String[n];
		for (int i=0;i<n;i++) 
		{
			arr[i]=sc.nextLine();		
		}

		for (int i=0;i<arr.length;i++)
		{
			
				String newarr[]=arr[i].split(" ");
				String str=newarr[0];
				int ch=0;
				if(str.equals("get")){ch=1;}
				else if(str.equals("add")){ch=2;} 
				else if(str.equals("count")){ch=3;} 
				else if(str.equals("remove")){ch=4;} 

				switch (ch)
				{
				case 1:
						System.out.println(li.contains(newarr[1]));
						break;

				case 2:
						if(li.contains(newarr[1])==true)
							{System.out.println("this name is exist");}
						else
							{
								li.add(newarr[1]);
								System.out.println("true");
							}
						break;
				case 3:
						System.out.println(li.size());
						break;
				case 4:
						li.remove(0);
						System.out.println(li);

				}

		}

	}
}