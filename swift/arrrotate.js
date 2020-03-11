func lef (_ arry : [Int]) -> [Int]
{   var nwarr = arry
     nwarr.removeFirst()
    nwarr.append( arry.first!)
   
    
    return nwarr
}

print(lef ([11, 15, 13, 10, 45, 20]))