var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
let queuelist=[];
let qc=0; 
let process=[];
let pc =0;
var complete=[];
let cc =0
function addProcessElement(processobj)
{
    pc=pc+1;
    let i = pc;
    //process add
    process.push(processobj)
  var process_li_cust = document.getElementById('process_ul');
  let li=document.createElement('li');
let t='process_li_'+i;
li.setAttribute('id',t);
var div= document.createElement('div');
let u='process_li_item_'+i;
div.setAttribute('id',u) 
var namediv = document.createElement('button');
let z ='process_cust_name_'+i;
namediv.setAttribute('id',z);
var itemdiv = document.createElement('div');
let y ='process_item_name_'+i;
div.setAttribute('id',y);
namediv.innerText=processobj.username;
itemdiv.innerText=processobj.drink; 
div.appendChild(namediv);
div.appendChild(itemdiv);
li.appendChild(div);
process_li_cust.appendChild(li); 
namediv.addEventListener('click',function(e){ 
var item = (String)(e.target.id);
var keylen = 'process_cust_name_'.length;
var itemindex = item.substring(keylen,item.length); 
var p = process[itemindex-1];
console.log(p);
const completeObj={
    
    drink:p.drink,
    username:p.username
}
//process add
addCompleteElement(completeObj);
// complete.push(processObj)
//queue remove
process[itemindex-1] = null;
var removeitem =document.getElementById('process_li_'+itemindex);
            removeitem.remove();
});
}
function addCompleteElement(completeObj)
{
    cc=cc+1;
    let i = cc;
    //process add
    complete.push(completeObj)
  var complete_li_cust = document.getElementById('complete_ul');
  let li=document.createElement('li');
let t='complete_li_'+i;
li.setAttribute('id',t);
var div= document.createElement('div');
let u='complete_li_item_'+i;
div.setAttribute('id',u) 
var namediv = document.createElement('button');
let z ='complete_cust_name_'+i;namediv.setAttribute('id',z);
var itemdiv = document.createElement('div');
let y ='complete_item_name_'+i;
div.setAttribute('id',y);
namediv.innerText=completeObj.username;
itemdiv.innerText=completeObj.drink; 
div.appendChild(namediv);
div.appendChild(itemdiv);
li.appendChild(div);
complete_li_cust.appendChild(li); 
namediv.addEventListener('click',function(e){ 
var item = (String)(e.target.id);
var keylen = 'complete_cust_name_'.length;
var itemindex = item.substring(keylen,item.length); 
// var p = complete[itemindex-1];
 //queue remove
complete[itemindex-1] = null;
var removeitem =document.getElementById('complete_li_'+itemindex);
            removeitem.remove();
});
}
const uname=document.getElementById("uname");
const dname=document.getElementById("dname");
const myForm=document.getElementById("myForm");
myForm.addEventListener("submit",store)
function store(e){
    e.preventDefault();
    const val_ref=uname.value;
    console.log(val_ref);
    const dri_ref=dname.value;
    console.log(dri_ref);
    const queobj={
      drink:dri_ref,
        username:val_ref
        
    }
    qc = qc+1;
    let i=qc;
    queuelist.push(queobj);
    console.log(queuelist);
    var queue_li_cust = document.getElementById('queue_ul');
    let li=document.createElement('li');
 let t='queue_li_'+i;
 li.setAttribute('id',t);
 var div= document.createElement('div');
 let u='queue_li_item_'+i;
 div.setAttribute('id',u) 
var namediv = document.createElement('button');
let z ='queue_cust_name_'+i;namediv.setAttribute('id',z);
var itemdiv = document.createElement('div');
let y ='queue_item_name_'+i;
div.setAttribute('id',y);
namediv.innerText=queobj.username;
itemdiv.innerText=queobj.drink; 
div.appendChild(namediv);
div.appendChild(itemdiv);
li.appendChild(div);
queue_li_cust.appendChild(li); 
namediv.addEventListener('click',function(e){ 
    var item = (String)(e.target.id);
    var keylen = 'queue_cust_name_'.length;
    var itemindex = item.substring(keylen,item.length); 
    var p = queuelist[itemindex-1];
    console.log(p);
    const processObj={
         
         drink:p.drink,
         username:p.username
        }   
        //queue remove
        // queuelist.splice(itemindex-1);
        queuelist[itemindex-1] = null;
        //add the element to process ul
        addProcessElement(processObj);
        //remove element li
        var removeitem =document.getElementById('queue_li_'+itemindex);
        removeitem.remove();
    });
}
    
    
    
        

        
    

    
 

