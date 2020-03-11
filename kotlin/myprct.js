//class mainn{
fun main() {
   val obj = mow()
    obj.simple()
    val ob = hello()
    ob.hi()
	}
//}

open class ragul {
    var n = "Mr.  welcome"
    open val a : Int = 23
    init { println(n)}    
    open fun simple(){ 
        print("$a")}
    }

open  class ovrrid : ragul() {
     override val a = 12
   override fun simple(){ println(super.a)
        print("$a")}
	}

class mow : ovrrid(){
    override fun simple () { println(super.a) }
}


abstract class hi {
     abstract fun hi() 
}

class hello :  hi () 
{
     override fun hi () { var r = "hi";println("hello $r")}
}