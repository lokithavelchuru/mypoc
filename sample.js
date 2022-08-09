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
const queuelist=[];
const process=[];
const complete=[];
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
        username:val_ref,
        drink:dri_ref
    }
    queuelist.push(queobj);
    console.log(queuelist);
    var queue_ul = document.getElementById('queue_ul');
    var divEle = document.createElement('div');
    divEle.classList.add('row');
    var insideContent = `
    <ul>
    <li>${val_ref}</li>
    <li>${dri_ref}</li>
    </ul>
    `;
    divEle.innerHTML += insideContent;
    queue_ul.appendChild(divEle);
    queue_ul.addEventListener('click',remove);
    function remove(){
        alert("working");
        divEle.remove();
        var inProcessing = document.getElementById('inProcessing');
        var divEle2=document.createElement("div");
        divEle2.classList.add('row');
        inProcessing.appendChild(divEle);
    }
    inProcessing.addEventListener("click",f1);
    function f1(){
        alert("working");
        divEle.remove();
        var collect=document.getElementById("collect");
        collect.appendChild(divEle);


    }
}

