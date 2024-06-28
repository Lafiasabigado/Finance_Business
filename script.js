const analysis = document.querySelector('.analysis')
const article1 = document.querySelector('.article1')

analysis.addEventListener('click', ()=>{
    if(article1.style.display === 'none')
    {
        article1.style.display = 'block'
    }
    else
    {
        article1.style.display = 'none'
    }
})