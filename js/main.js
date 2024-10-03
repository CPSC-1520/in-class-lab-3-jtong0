// Enter your code below.
console.log ("js file linked");

let divJavascriptResources = document.getElementsByClassName("javascript-resources");
let btnJavascriptResources = document.getElementById("show-resources");
btnJavascriptResources.addEventListener('click', function()
{
    let dNone = document.querySelector('.d-none');
   // if (dNone){
    dNone.classList.remove('d-none');
    // } 
});

let linkContainer = document.querySelector('.javascript-resources');
linkContainer.addEventListener('mouseover',function(event)
{
    if (event.target.tagName === 'A')
    {   
        console.log(event.target.innerText);
        let parentDiv = event.target.parentElement;
        parentDiv.classList.add('fw-bold');
    }

});

linkContainer.addEventListener('mouseout',function(event)
{
    if (event.target.tagName === 'A')
    {   
        console.log(event.target.innerText);
        let parentDiv = event.target.parentElement;
        parentDiv.classList.remove('fw-bold');
    }

});

linkContainer.addEventListener('click',function(event)
{
    if (event.target.tagName === 'A')
    {   
        console.log(event.target.innerText);
        let parentDiv = event.target.parentElement;
        parentDiv.classList.add('fst-italic');
    }

});