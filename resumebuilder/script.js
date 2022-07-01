function addnewskillbutton(){
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('skillfield');
    newnode.classList.add('mt-2');
    newnode.setAttribute('placeholder','What are you good at??');
    
    let skillob=document.getElementById('sk');
    let ref=document.getElementById('skilladdbutton');
    skillob.insertBefore(newnode,ref);
}
function addnewwebutton(){
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('wefield');
    newnode.classList.add('mt-2');
    newnode.setAttribute('placeholder','What are your work experiences like projects,internships etc??');
    
    let weob=document.getElementById('we');
    let ref=document.getElementById('weaddbutton');
    weob.insertBefore(newnode,ref);
}
function addnewedbutton(){
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('edfield');
    newnode.classList.add('mt-2');
    newnode.setAttribute('placeholder','Enter Your Education details');
    
    let edob=document.getElementById('ed');
    let ref=document.getElementById('edaddbutton');
    edob.insertBefore(newnode,ref);
}
function addnewinbutton(){
    let newnode=document.createElement('textarea');
    newnode.classList.add('form-control');
    newnode.classList.add('infield');
    newnode.classList.add('mt-2');
    newnode.setAttribute('placeholder','What are your interests??');
    
    let weob=document.getElementById('in');
    let ref=document.getElementById('inaddbutton');
    weob.insertBefore(newnode,ref);
}
function textLength(value){
    var minLength = 50;
    if(value.length < minLength) return false;
    return true;
 }

//generate resume
function generateresume(){
    let nameField=document.getElementById('namefield').value;
    let nameob=document.getElementById('nameT');
    nameob.innerHTML=nameField;
    document.getElementById('contactT').innerHTML=document.getElementById('contactfield').value;
    document.getElementById('adressT').innerHTML=document.getElementById('adressfield').value;
    let mailob=document.getElementById('mailfield').value;
    document.getElementById('mail').innerHTML=mailob;
    let linkedob=document.getElementById('linkedfield').value;
    document.getElementById('linked').innerHTML=linkedob;
    let email=document.getElementById('mail');
    email.setAttribute('href',`mailto:${mailob}`);
    let linkin=document.getElementById('linked');
    linkin.setAttribute('href',linkedob);
    document.getElementById('obT').innerHTML=document.getElementById('obfield').value;
    let wes=document.getElementsByClassName('wefield');
    let str="";
    for(let e of wes){
        str+= `<li> ${e.value} </li>`;
    }
    document.getElementById('wet').innerHTML=str;
    let eds=document.getElementsByClassName('edfield');
    let st="";
    for(let e of eds){
        st+=`<li> ${e.value} </li>`;
    }
    document.getElementById('edt').innerHTML=st;
    let skills=document.getElementsByClassName('skillfield');
    let s="";
    for(let e of skills){
        s+= `<li> ${e.value} </li>`;
    }
    document.getElementById('skillt').innerHTML=s;
    let inter=document.getElementsByClassName('infield');
    let st1="";
    for(let e of inter){
        st1+= `<li> ${e.value} </li>`;
    }
    document.getElementById('int').innerHTML=st1;
    document.getElementById('resume-form').style.display="none";
    document.getElementById('resume-template').style.display="block";
}
function printresume(){
    window.print();
}
