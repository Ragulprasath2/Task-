func addtion (add: (Int , Int) -> ()){
        add(3,2)
}

addtion(add: {a,b in
        print(a+b)
})



func dif(_ a:Int ,_ b:Int  ,_ sub:()->()) {
    print(a-b)
}
dif(5,3)  {}


func prd(mult:()->(),_ a:Int,_ b:Int) {
    print(a*b)
}
prd(mult:({}), 4 , 2)



func startLetter(_ input : [String] , completion:((String)-> Void)){
//if (input.hasprefix("a")){ 
     completion("\(input) starts with a")
   // }
    
 }
 startLetter(["ajith","apple","dad"]){(name: String) in

 

 print(name)
 }
