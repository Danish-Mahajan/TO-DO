const ul=document.querySelector('#todo');

// delete the todo 
 const spans=document.querySelectorAll('span');

 ul.addEventListener('click',function(e){
    const item=e.target;

    if(item.classList[0]==='span')
      e.target.parentElement.remove();
    
    if(item.classList[1]=='fa-trash')
      e.target.parentElement.parentElement.remove();
      
    e.stopPropagation();//stop bubbling effect
});


// strike through todo 
ul.addEventListener('click',function(e){
    const item=e.target;

    if(item.classList[0]==='li')
      e.target.classList.toggle('completed');//event delegation
});

// add new element in todo 
const btn=document.querySelector('.fa-plus');
const input=document.querySelector('input');

btn.addEventListener('click',function(){
    const value=input.value;

    // create html element 
    const newli=document.createElement('li');
    const span=document.createElement('span');
    const i=document.createElement('i');

    //add classes to i tag
    i.classList.add('fa');
    i.classList.add('fa-trash');
    newli.classList.add('li');// helps in delete the todo
    span.classList.add('span');// helps in delete the todo
    
    //append into each other
    span.append(i);
    newli.append(span);
    newli.append(value);
    ul.append(newli);
    input.value="";
});





