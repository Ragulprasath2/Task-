protocol rag{
    func twonum(_ a : Int , _ b : Int)
}

class addtion : rag 
{   
    func twonum(_ a : Int , _ b : Int)
    {
        
        print(a+b)
    }
}

class sub : rag 
{
    func twonum(_ a : Int , _ b : Int)
    { print (a-b)}
}

class calc : sub {
   override func twonum(_ a : Int , _ b : Int)
    { 
    try {
    let div = (a/b) 
        print(div)
        }
        
        catch{ print (" cant div by zero")}
    }
    
}
var i = calc()
i.twonum(2,0)