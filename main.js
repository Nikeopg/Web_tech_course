s = "Andsirdaarrevarariarewbutovearrmararan"
sub_s = "re"


function testRegExp(s, sub_s) {
    var myPattern = new RegExp(sub_s, 'g');
    var result = s.match(myPattern);
    result = result.join(", ")
    console.log(result);
}


testRegExp(s, sub_s);