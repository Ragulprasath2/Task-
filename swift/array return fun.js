func minMax(array: [Int]) -> (min: Int, max: Int) 
{
    var currentMin = array[0]
    var currentMax = array[0]
    for value in array[1..<array.count]
     {
        if value < currentMin 
        { currentMin = value } 
        else if value > currentMax 
        { currentMax = value}
    }
    return (currentMin, currentMax)
}

var arr:[Int] = [1,3,6,9,2,0]
var minmax = minMax( array : arr)
print("\(minmax.min)  \(minmax.max)")