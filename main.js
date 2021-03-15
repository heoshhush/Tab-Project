const tab__buttons = document.querySelector('.tab__buttons');
const buttons = document.querySelectorAll('.tab__button')
const tabContents = document.querySelectorAll('.tabContent');
const historyTab = document.querySelector('.historyTab');

function onButtonClick(){
tab__buttons.addEventListener('click',(event) => {
    const target = event.target
    const id = target.dataset.id;
    if(id){
        btnGrayAll();
        targetBtnWhite(target);
        tabContents.forEach((elem) => {
            const elemId = elem.dataset.id;
            if(elemId === id){
                showTab(elem);
            } else if(elemId !== id){
                hideTab(elem);
            }
        })
    }
})
}

function btnGrayAll(){
    buttons.forEach((element) => {
        element.style.backgroundColor='lightgray';
    })
}
function targetBtnWhite(targetBtn){
    targetBtn.style.backgroundColor='white'
}
function showTab(tab){
    tab.classList.add('showingTab');
}
function hideTab(tab){
    tab.classList.remove('showingTab');
}


showTab(historyTab)
onButtonClick();

// point1) css, html 컨텐츠 사이즈 정확히 맞추기