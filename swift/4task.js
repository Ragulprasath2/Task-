//4task
//1
func repl(_ con : String ,_ rlp : String ) -> String
{
        var fruit = ["apple", "mango", "blueberry", "orange"]
        
        if(fruit.contains(con) == true)
        {
                fruit[(fruit.firstIndex(of: con))!] = rlp
                
                return "now  \(con) replaced by \(rlp)"
        }

        else {return "no word like \(con)"}
}

print(repl("mango","jackfruit" ))


//2

func twoarry(_ array1 : [String] ,_ array2 : [String] ) -> [String]
{


let output = array1.filter(array2.contains)
return output
}

let fruit = ["apple", "mango", "blueberry", "orange"]
let veg = ["tomato", "potato", "mango", "blueberry"]

print( twoarry (fruit, veg))





//4
extension String {
    static func mr(_ name: inout String) {
        name = "Mr." + name
    }
}

var my = "ragul"
String.mr( &my)
print(my)

