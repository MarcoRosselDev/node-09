const cssBtn = document.querySelector('.cssClass');


cssBtn.addEventListener('click', function (e) {
    const bodyClass = this.parentNode.parentNode.className;
    e.preventDefault()
    if (bodyClass == 'body-light') {
        this.parentNode.parentNode.className = 'body-dark'
        this.parentNode.className = 'nav-bar-dark'
    } else{
        this.parentNode.parentNode.className = 'body-light'
        this.parentNode.className = 'nav-bar-light'
    }
    console.log(this.parentNode.parentNode.className);
})