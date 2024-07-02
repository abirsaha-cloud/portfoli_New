// Secroll Section Active
let Section_Item = document.querySelectorAll('section')

let Naviation_Item = document.querySelectorAll('nav a')

window.onscroll = () => {

    Section_Item.forEach(Sec_Item => {

        Window_Top = window.scrollY

        Sec_Top = Sec_Item.offsetTop - 160

        ID = Sec_Item.getAttribute('id')


        if (Window_Top > Sec_Top) {

            Naviation_Item.forEach(Nav_Link => {

                Nav_Link.classList.remove('active')

            })

            document.querySelector('nav a[href*="' + ID + '"]').classList.add('active')

        }

    })

    let header = document.querySelector('header')

    header.classList.toggle('sticky', window.scrollY > 120)

    Menu_Icon.classList.remove('bx-x')
    Nav_Bar.classList.remove('active')

}


// Toggle icon


let Menu_Icon = document.getElementById('menu-icon')

let Nav_Bar = document.querySelector('.navbar')

Menu_Icon.onclick = () => {

    Menu_Icon.classList.toggle('bx-x')
    Nav_Bar.classList.toggle('active')


}
