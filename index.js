
function scuberGreetingForFeet(dist){
  let msg;
  if(dist<=400){
    msg = 'This one is on me!';
  }
  else if(2000 < dist && dist < 2500){
    msg = 'I will gladly take your thirty bucks.';
  }
  else if(dist>2500){
    msg = 'No can do.';
  }
  return msg
}


function ternaryCheckCity(city){
  let isNYC = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return isNYC
}

function switchOnCharmFromTip(tip) {
  let greeting;
  switch(tip) {
    case 'generous':
   greeting = "Thank you so much.";
   break;
    case 'not as generous':
      greeting = "Thank you.";
      break;
     default: 
     greeting ="Bye.";
  }
return greeting
}