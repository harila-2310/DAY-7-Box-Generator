// var boxOut=document.getElementById("top");
// var boxIn=document.getElementById("inner");
var button=document.getElementById("checkButton");
console.log(button);
var i=1;
var oldValue=0;
var button1=document.getElementById("button1");
button.onclick=()=>{
    
    let n=document.getElementById("textBox").value;
    console.log(n);
    n=parseInt(oldValue)+parseInt(n);
    for(i;i<=n;i++){
        var box=document.createElement('div');
        box.classList.add('myDiv');
        document.getElementById('inner').appendChild(box);
        box.innerHTML+=i;
        oldValue=document.getElementById('inner').lastElementChild.innerHTML;

    }

}
button1.onclick=()=>{
    document. location. reload();
}