

let para1 = document.getElementById('para1');
let btn = document.getElementById('btn')
btn.addEventListener('click', revealForm);


function hideText() {
  para1.classList.add('hidden');
}
function revealForm(){
  para1.classList.remove('hidden')
}
