const cssBtn = document.querySelector('.cssClass');

cssBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const bodyClass = this.parentNode.parentNode.className;
    const navBarClass = this.parentNode.className;
    if (bodyClass == 'body-light') {
        this.parentNode.parentNode.className = 'body-dark'
        this.parentNode.className = 'nav-bar-dark'
    } else{
        this.parentNode.parentNode.className = 'body-light'
        this.parentNode.className = 'nav-bar-light'
    }
    console.log(this.parentNode.parentNode.className);
})