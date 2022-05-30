function DecimalToBinary() // string decimal
{
    // 101 = 1 * 2**2 + 0 * 2**1 + 1 * 2**0
    // start from behind, add value multiplied by power of 2
    //alert("work");
    var decimal = document.getElementById("decimal-input").value;
    var multiplier = 1;
    var result = 0;
    
    for(var i = decimal.length - 1; i >= 0; i--) {
        result += decimal[i] * multiplier;
        multiplier *= 2;
    }

    document.getElementById("binary-result").textContent = result.toString();
}

