const cssBtn = document.querySelector('.cssClass');

cssBtn.addEventListener('click', function (e) {
    e.preventDefault()
    const bodyClass = this.parentNode.parentNode.className
    if (bodyClass == 'body-light') {
        this.parentNode.parentNode.className = 'body-dark'
    } else{
        this.parentNode.parentNode.className = 'body-light'
    }
    console.log(this.parentNode.parentNode.className);
})