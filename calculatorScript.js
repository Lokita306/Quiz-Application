let screen= document.getElementById('screen');
 buttons = document.querySelectorAll('button');
let screenValue='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
       buttonText = e.target.innerText;
       console.log('Button text is ', buttonText);
       if(buttonText == '×')
       {
           buttonText = '*';
           screenValue += buttonText;
           screen.value = screenValue;
       }
       else if (buttonText == 'C')
       {
        screenValue = "";
        screen.value = screenValue;
       }
       else if (buttonText == '=')
       {
        screen.value = eval(screenValue);
       }
       else if(buttonText == 'log' )
       {
        buttonText == 'log(';
          screen.value= Math.log(screenValue);
       }
       else if(buttonText == 'sin')
       {
          buttonText == 'sin(';
          screen.value= Math.sin(screenValue);
       }
       else if(buttonText == 'cos')
       {   
          buttonText == 'cos(';
          screen.value= Math.cos(screenValue);
       }
       else if(buttonText == 'tan')
       {
          buttonText == 'tan(';
          screen.value= Math.tan(screenValue);
       }
       else if(buttonText == 'exp')
       {
          buttonText == 'exp(';
          screen.value= Math.exp(screenValue);
       }
       else if(buttonText == 'x²')
       {
          screen.value= (screenValue * screenValue);
       }
       else if(buttonText == '√')
       {
          screen.value= Math.sqrt(screenValue);
       }
       else if(buttonText == 'DEL')
       {
          buttonText == 'DEL(';
          screen.value= screen.substring(0,screen.length-1);
       }
       else if(buttonText == 'exp')
       {
          buttonText == 'exp(';
          screen.value= Math.exp(screenValue);
       }
       else if(buttonText == 'E')
       {
          buttonText == 'E(';
          screen.value= Math.E(screenValue);
       }
       else if(buttonText == 'pow')
       {
         buttonText == 'pow(';
          screen.value= Math.PI(screenValue);
       }
      else
       {
        screenValue += buttonText;
        screen.value = screenValue; 
       }
       
    })
}