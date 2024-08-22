
const button  = document.querySelector('#button');
const content = document.querySelector('#content');
const headers= document.querySelectorAll("[data-name='accordeon-title']")
const tabHeaders = document.querySelectorAll('[data-tab]')
const contentBoxes = document.querySelectorAll('[data-tab-content]')
const modalButtons = document.querySelectorAll('[data-modal-button]')
const modalClosebuttons = document.querySelectorAll('[data-modal-close]')
const allModals = document.querySelectorAll('[data-modal]')

/*Работа с блоком */

button.addEventListener('click', function () {

    if (content.classList.toggle('content-hidden')) {
        button.textContent = 'Открыть Блок'
    }else {
        button.textContent = 'Закрыть блок'
    }
});



/*Работа с Аккордеон*/

headers.forEach(function (item){
    item.addEventListener('click', showContent )
})

function showContent() {
    this.nextElementSibling.classList.toggle('hidden');
}


/* Работа с Табами */

tabHeaders.forEach( function (item){
    item.addEventListener('click', function(){

        contentBoxes.forEach(function (item){
            item.classList.add('hidden')
        });
        const contentBox = document.querySelector('#' + this.dataset.tab)
        contentBox.classList.remove('hidden');

    })
})



/* Работа с модальными окнами */

/* Кнопки открыть */

modalButtons.forEach( function (item){
    item.addEventListener('click', function(){
        const modalId = this.dataset.modalButton;
        const modal = document.querySelector('#' + modalId)
        modal.classList.remove('hidden')

        modal.querySelector('.modal-window').addEventListener('click', function (e){
            e.stopPropagation();
        });

    })
})

/* Кнопки закрть */

modalClosebuttons.forEach(function (item){
    item.addEventListener('click', function(){
        const modal = this.closest('[data-modal]')
        modal.classList.add('hidden')


    })
})

/* Закрьыие по fade-полю */

allModals.forEach(function (item){
    item.addEventListener('click', function(){
        this.classList.add('hidden')
    })
})





