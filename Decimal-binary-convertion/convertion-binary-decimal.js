function BinaryToDecimal()
{
    // 5 = 5%2 * 100 + (5\2)%2 * 10 + (5\2\2)%2 * 1
    // add reminder of the 2 to the string every time, then read visa versa
    //alert("work");
    var binary = parseInt(document.getElementById("binary-input").value);

    var result = "";
    var current = "";

    while(binary >= 1)
    {
        current = (binary % 2).toString();
        result += current;
        binary = Math.floor(binary / 2);
    }

    document.getElementById("decimal-result").textContent = "";
    
    for(var i = result.length - 1; i >= 0; i--) {
        document.getElementById("decimal-result").textContent += result[i];
    }

}