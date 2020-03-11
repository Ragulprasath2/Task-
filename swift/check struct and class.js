struct per{
    var id = 12
}

var in1 = per()
print(in1.id)
var in2 = in1
in2.id=11
print(in2.id)
print(in1.id)
print(in1 === in2)

