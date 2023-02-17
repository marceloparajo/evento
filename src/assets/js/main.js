function toggleMenu() {
    const plazas = document.getElementById('menu-plazas');
    plazas.classList.toggle('active');
}

function toggleFtMenu() {
    const ftPlazas = document.getElementById('ft-plazas');
    ftPlazas.classList.toggle('active');
    if (ftPlazas.classList.contains("active")) {
        ftPlazas.classList.add('visible');
    } else {
        setTimeout(() => {
            ftPlazas.classList.remove('visible');
        }, "300")
    }
    const c = document.getElementsByClassName('jump-menu__item');
    for (var i = 0; i < c.length; i++) {
        c[i].addEventListener('click', () => {
            ftPlazas.classList.remove("active","visible");
        })
    }
}

function toggleCatMenu(e) {
    const modal = document.getElementById('modalmenu-' + e);
    modal.classList.toggle('active');
}

function toggleModuleContent(n) {
    const content = document.getElementById('module-content-' + n);
    content.classList.toggle('collapse');
}