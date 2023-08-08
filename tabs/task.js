let tabs = [...document.querySelectorAll('.tab')]
let tabsContent = [...document.querySelectorAll('.tab__content')]

function getActiveIndex() {
    return [...document.querySelectorAll('.tab')].findIndex(el => el.classList.contains('tab_active'))
}

function changePosition(position) {
    let indexActive = getActiveIndex()

    tabs[indexActive].classList.remove('tab_active')
    tabsContent[indexActive].classList.remove('tab__content_active')

    tabs[position].classList.add('tab_active')
    tabsContent[position].classList.add('tab__content_active')
}

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        let indexChange = tabs.indexOf(tab)
        changePosition(indexChange)
    })
})