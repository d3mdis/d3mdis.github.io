// Highlight logic

const sections = document.querySelectorAll('#about, #education, #skills');
const navBarLi = document.querySelectorAll('nav ul li');
const snap = document.querySelector('.snap');

snap.addEventListener('scroll', ()=> {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(snap.scrollTop+700 > sectionTop){
            current = section.getAttribute('id');
            
        }
    })
    navBarLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
})
