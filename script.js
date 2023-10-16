let downBtn = document.getElementById('down-btn')
 let upBtn = document.getElementById('up-btn')
 downBtn.addEventListener('click',function(){
    let first = document.getElementById("first")
// console.log(first.children)
for(let i = first.children.length - 1 ; i >= 0 ; i--){
    console.log(first.children[i].children[0].checked)
   if(first.children[i].children[0].checked == true){
    first.children[i].children[0].checked = false
    let second = document.getElementById('second')
    second.appendChild(first.children[i])
   }
}

 })
    upBtn.addEventListener('click',function(){
    let second = document.getElementById("second")
// console.log(first.children)
for(let i = second.children.length - 1 ; i >= 0 ; i--){
    console.log(second.children[i].children[0].checked)
   if(second.children[i].children[0].checked == true){
    second.children[i].children[0].checked = false
    let first = document.getElementById('first')
    first.appendChild(second.children[i])
   }
}

 })