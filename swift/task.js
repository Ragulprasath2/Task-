
func check(_ x : Int, _ y : Int ) -> String
{
         var a = x
         var b = y
        if (a == 20 && b == 20) {return "both of them 20"}
        if ( a == 20 )
            {return "first is 20" }
        else if (b == 20)
            {return "second is 20" }
        else if (a + b == 20)
            {return "addtion is 20" }
         else
            { return "non of this have 20" }
}

print( check(0,20))