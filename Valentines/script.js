

const crazyButtons = document.querySelectorAll('.btn-crazy');
const yes = document.querySelector('.yes');
const envelope = document.querySelector('.container')
const success = document.querySelector('.success');
const buttons = document.querySelector('.buttons');

function goCrazy() {
    const offsetLeft = Math.random() * (window.innerWidth - this.clientWidth);
    const offsetTop = Math.random() * (window.innerHeight - this.clientHeight);
    console.log(offsetLeft, offsetTop);
    this.style.top = offsetTop + 'px';
    this.style.left = offsetLeft + 'px';
}

crazyButtons.forEach(button => button.addEventListener('mouseenter', goCrazy));

envelope.addEventListener('mouseenter', function(){
    setTimeout(showButtons, 1000)});


success.addEventListener('click', reset)

function showButtons(){
    buttons.style.display = "flex"
}

function sheSaidYes(){
    success.style.display = "flex"
}

function reset(){
    window.location.reload();
}
