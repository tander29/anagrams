document.getElementById("findButton").onclick = function() {
    // your code will go here ...

    var typedText = document.getElementById("input").value;

    function alphabetizeInput(a) {
        return a.toLowerCase().split("").sort().join("").trim();
       }

    //    function alphabetizeOutput(b) {
    //     return b.toLowerCase().split("").sort().join("").trim();
    //    }
       



    for(i=0; i < words.length; i++){
       if(alphabetizeInput(typedText) === alphabetizeInput(words[i]))
       
       {
            let div1 = document.createElement("div")
            document.body.appendChild(div1)
            let output = document.createTextNode(words[i])
            div1.appendChild(output)
       } else{}


    }




       console.log(typedText.length)
       console.log(words.length)




    









 }