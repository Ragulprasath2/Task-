class Task
{
	var myarray : [String]
	init(_ arr : [String])
	{
		myarray = arr
	}


	func repl(_ con : String ,_ rlp : String ) -> String
		{		        
		        if(myarray.contains(con) == true)
		        {	
						if let index =	myarray.firstIndex(of: con)
                        {
                            myarray[index] = rlp
                            
                            return "now  \(con) replaced by \(rlp)"
		                 }
                    return "some crash"
		        }

		        else {return "no word like \(con)"}
		}



	func twoarry(_ array1 : [String] ,_ array2 : [String] ) -> [String]
		{
			let output = array1.filter(array2.contains)
			return output
		}

	func ftrt(_ input : [String] , ch : (([String])-> ()))
		{
		    var near = input.filter{ $0.hasPrefix("a") == true }
		    ch(near)
		}


}
extension String 
		{
		   func mr(_ name : inout String) 
		    {
		    name = "Mr." + name
		    }
		}



//object creation and calling
	let fruit : [String] = ["apple","avacado","orange","pineapple","mango"]
	let veg = ["tomato", "potato", "mango", "blueberry"]

//object
var obj = Task(fruit)

//1
print(obj.repl("mango","jackfruit" ))

//2
print(obj.twoarry(fruit, veg))

//3
obj.ftrt(fruit) {
     (a_ltrs : [String] ) in  
    print(a_ltrs)
                }

//4
var my = "ragul"
my.mr(&my)
print(my)





