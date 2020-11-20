const $toggle = document.getElementById('toggle');
const $navItems = document.getElementById('nav-items');
const $preview = document.getElementById('preview');
const $figures = document.querySelectorAll('#preview figure');
const $container = document.getElementById('container');

$toggle.addEventListener('click', () =>{
    $navItems.classList.toggle('hide-show')
})

$preview.addEventListener('click', (e) => {
    /* console.log(e.target.parentElement)
    console.log(e.target.getAttribute('src')) */

    $figures.forEach(figure => figure.classList.remove('active'));
    e.target.parentElement.classList.add('active');
    $container.style.backgroundImage = `url('${e.target.getAttribute('src')}')`
})