document.body.append(document.createElement('textarea'));
 document.body.append(document.createElement('button'));

 const submitButton = document.querySelector("button");
 const textArea = document.querySelector("textarea");
 submitButton.addEventListener("click", processVariables);

function processVariables()
{
    let snake_names_raw = textArea.value;
    let snake_names = snake_names_raw.split("\n");
    let camelNames = [];
    for (const snake_name of snake_names)
    {   
        let [firstWord, secondWord] = snake_name.split("_");
        firstWord = firstWord.toLowerCase();
        secondWord = secondWord.toLowerCase();

        secondWord = secondWord.replace(secondWord[0], 
            secondWord[0].toUpperCase());

        camelNames.push(`${firstWord}${secondWord}`.trim());
        console.log(camelNames[camelNames.length - 1].padEnd(20, " "), `✅`.repeat(camelNames.length))
    }
}

// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure