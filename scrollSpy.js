const navLinks = document.querySelectorAll('.nav-item')
const sections = [
    document.getElementById('hero'),
    document.getElementById('about'),
    document.getElementById('projects'),
    document.getElementById('contact-us')
]

document.addEventListener('scroll', () => {
    let onScreen = ''

    sections.forEach((section) => {
        if(pageYOffset >= section.offsetTop - section.clientHeight/3){
            onScreen = section.getAttribute('id')
        }
    })

    navLinks.forEach((item)=>{
        item.classList.remove('active')
        if(item.getAttribute('href') == '#' + onScreen){
            item.classList.add('active')
        }
    })
})