const inputs = document.querySelectorAll('input');

function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add('focus');
}

function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ''){
        parent.classList.remove('focus');
    }
}

function toggleMenu(){
    let nav = document.querySelector('.nav');
    let toggle = document.querySelector('.toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

inputs.forEach(input =>{
    input.addEventListener('focus', focusFunc);
    input.addEventListener('blur', blurFunc);
});