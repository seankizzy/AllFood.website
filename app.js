const getElement = (selecto) => {

     const element = document.querySelector(selector);

     if (element) return element
     throw Error (
        `please double check there is no ${selector} class`
     )

}

const links = document.querySelector('.nav-links')


const navBtn = document.querySelector('.nav-btn')


navBtn.addEventListener('click', ()=>{
    links.classList.toggle('show-links')
})