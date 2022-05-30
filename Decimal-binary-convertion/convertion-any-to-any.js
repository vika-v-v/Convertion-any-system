function ConvertAnyToAny()
{
    var firstNum = document.getElementById("first-input").value;
    var firstSys = document.getElementById("first-system").value;
    var secondSys = document.getElementById("second-system").value;   
    // var secondNum = ?

    // check whether systems are > 1 and not equal
    if(firstSys != secondSys && parseInt(firstSys) > 1 && parseInt(secondSys) > 1) {
     
        // for example 2d to 16th - we convert 2d to 10th and then 10th to 16th
        if(parseInt(firstSys) < 10 && parseInt(secondSys) > 10) {
            firstNum = ConvertLowerToHigher(firstNum, parseInt(firstSys));
            firstSys = "10";
        }

        // for example 16th to 2d - we convert 16th to 10th and 10th to 2d
        if(parseInt(firstSys) > 10 && parseInt(secondSys) < 10) {
            firstNum = ConvertLowerToHigher(firstNum, parseInt(firstSys));
            firstSys = "10";
        }

        // now one of the systems is 10
        if(parseInt(firstSys) <= 10 && parseInt(secondSys) <= 10) {
            // if converting 2d to 10th f.e.
            if(parseInt(firstSys) < parseInt(secondSys)) 
                ConvertLowerToHigher(firstNum, parseInt(firstSys));

            // if converting 10th to 2d f.e.
            else
                ConvertHigherToLower(parseInt(firstNum), parseInt(secondSys));
        }
        else { //if one of the systems is more then 10, f.e. 16
            // if converting 10 th to 16th
            if(parseInt(firstSys) < parseInt(secondSys)) 
                ConvertHigherToLower(parseInt(firstNum), parseInt(secondSys)); 
            else
            // if cinverting 16 th to 10th
                ConvertLowerToHigher(firstNum, parseInt(firstSys));  
        }    
    }
}

function ConvertHigherToLower(number, newSystem) // both ints
{
    var numbers = {0:"0", 1:"1", 2:"2", 3:"3", 4:"4", 5:"5", 6:"6", 7:"7", 8:"8", 9:"9", 10:"A", 11:"B", 12:"C", 13:"D", 14:"E", 15:"F", 16:"G", 17:"H", 18:"I", 19:"J", 20:"K", 21:"L", 22:"M", 23:"N", 24:"O", 25:"P", 26:"Q", 27:"R", 28:"S", 29:"T", 30:"U", 31:"V", 32:"W", 33:"X", 34:"Y", 35:"Z"};

    // higher system doesn't mean bacause we have all the caracters already in the lower one
    
    var result = "";
    var current = "";

    while(number >= 1)
    {
        current = numbers[number % newSystem];
        result += current;
        number = Math.floor(number / newSystem);
    }
    
    document.getElementById("converted-any-system-result").textContent = "";
    
    for(var i = result.length - 1; i >= 0; i--) 
        document.getElementById("converted-any-system-result").textContent += result[i];
    
}

function ConvertLowerToHigher(number, systemOfTheNumer) // number - string, system - int
{
    
    var numbers = {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9, "A":10, "B":11, "C":12, "D":13, "E":14, "F":15};

    var multiplier = 1;
    var result = 0;

    for(var i = number.length - 1; i >= 0; i--) {
        result += numbers[number[i]] * multiplier;
        //alert(multiplier);
        multiplier *= systemOfTheNumer;
    }

    document.getElementById("converted-any-system-result").textContent = result.toString();

    return result;
}

