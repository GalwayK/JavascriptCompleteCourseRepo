// Falsy values are values which are not false, but will be converted into a false value when we try to convert them into a boolean. They are: 

0;
"";
undefined;
null;
NaN;

if (0 || undefined || null || NaN || "")
{
    console.log("This is impossible.");
}
else 
{
    console.log("This will always execute.");
}
let money = 0;
if (money)
{
    console.log(`You have ${money} dollars. ` + "Don't spend it all.");
}
else 
{
    console.log(`You have no money. Get a job.`);
}

while (true)
{
    let username = prompt("Enter your name: ")

    if (username)
    {
        alert(`Nice to meet you ${username}!`);
        break;
    }
    else 
    {
        alert("Please enter your name!")
    }
}