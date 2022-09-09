
    // FIRST TASK

    if (confirm('Ok: Continue || Cancel: Stop') == true) {
        document.body.style.display='block';
    } else {
        document.body.style.display='none';
    }
    

    // SECOND TASK
    
    if (prompt('Please, enter ur age: ')>=18) { 
        alert('You are old enough :D ');
        document.body.style.display='block'; 
    } 
    else { 
        alert( 'You are young ! '); 
        document.body.style.display='none'; 
    }


    // THIRD TASK

    function ChangeMode() {
    if (document.body.style.backgroundColor === "black")                                                                
    {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
     else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }
    }


// FOURTH TASK

function ButtonSubmit() {

    var input = document.getElementById('input').value;
    var text = document.getElementById('uname');
    text.innerHTML=input;

    time=input.slice(-3);
      
    if(time[0]==1){
        document.body.style.backgroundColor='yellow';  
        alert('Morning group');
    }
    else if(time[0]==2){
        
        document.body.style.backgroundColor='orange';
        alert('Afternoon group');
    }
    else if(time[0]==3){
        document.body.style.backgroundColor='blue';
        document.body.style.color='white';
        alert('Evening group')
    }
    else{
        document.body.style.backgroundColor='red';
        alert('There is no such group...!!!')
    }
}
