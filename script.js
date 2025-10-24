const avança = document.querySelectorAll('.bnt-proximo');

avança.forEach(button => {
    button.addEventListener('click', function(){
        const atual =document.querySelector('ativo');
        const proximopasso ='passo-' + this.getAttibute('data-proximo');

        atual.classList.remove('ativo');
        document. getElementById(proximopasso).classList.add('ativo');
    })
})