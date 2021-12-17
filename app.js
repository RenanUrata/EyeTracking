console.log(`it's working`);

const
    body = document.querySelector('body'),
    /**/
    appRoot = document.querySelector('.appRoot'),
    /****/
    container = document.querySelector('.container'),
    /******/
    title = document.querySelector('.title'),
    /******/
    target = document.querySelector('.target');

let animationList = ['side2side', 'top2bottom', 'circular', 'trackingHorizontal', 'trackingVertical'] //, 'circularRadius']
let selectedAnimation = 0;

appRoot.addEventListener('click', ev => {
    target.classList = 'target animateGS'
    title.classList = 'hide'
    console.log(selectedAnimation, animationList[selectedAnimation]);

    target.classList = 'target animateGS'
    target.classList.toggle(animationList[selectedAnimation])
    selectedAnimation++

    (selectedAnimation > -1 && selectedAnimation < animationList.length) ? -1: selectedAnimation = 0



    // if (selectedAnimation > -1 && selectedAnimation < 2) {
    //     target.classList = 'target animateGS'
    //     target.classList.toggle(animationList[selectedAnimation])
    //     selectedAnimation++
    // } else {
    //     target.classList = 'target animateGS'
    //     selectedAnimation = 0
    //     target.classList.toggle(animationList[2])
    // }


})