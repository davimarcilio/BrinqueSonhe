const observer = new IntersectionObserver(entries => {
    // console.log(entries);
    Array.from(entries).forEach(entrie => {
        if (entrie.intersectionRatio >= 1) {
            $(entrie.target).addClass('fadeIn');
            $(entrie.target).addClass('slide-top');
        }
    })
}, {
    threshold: 1
})
Array.from(document.querySelectorAll('.fadeInText')).forEach(element => {
    observer.observe(element)
})
const observerTitle = new IntersectionObserver(entries => {
    // console.log(entries);
    Array.from(entries).forEach(entrie => {
        if (entrie.intersectionRatio >= 0.5) {
            $(entrie.target).addClass('fadeIn');
            $(entrie.target).addClass('text-pop-up-top');
        }
    })
}, {
    threshold: .5
})
Array.from(document.querySelectorAll('.uptext')).forEach(element => {
    observerTitle.observe(element)
})
const observerCards = new IntersectionObserver(entries => {
    // console.log(entries);
    Array.from(entries).forEach(entrie => {
        if (entrie.intersectionRatio >= 1) {
            $(entrie.target).addClass('fadeIn');
            $(entrie.target).addClass('slide-left');
        }
    })
}, {
    threshold: 1
})
Array.from(document.querySelectorAll('.cardSlide')).forEach(element => {
    observerCards.observe(element)
})
const observerNavBar = new IntersectionObserver(entries => {
    if (entries[0].intersectionRatio <= 0.5) {
        $('.navbar').css({
            'background': 'rgba(126, 38, 241, 1)', 'transition': 'all .5s', 'box-shadow': '0px 11px 15px -3px rgba(0,0,0,0.51)',
            '-webkit-box-shadow': '0px 11px 15px -3px rgba(0,0,0,0.51)',
            '-moz-box-shadow': '0px 11px 15px -3px rgba(0,0,0,0.51)'
        });
    } else {
        $('.navbar').css({
            'background': 'rgba(0, 0, 0, 0)', 'transition': 'all .5s', 'box-shadow': 'unset',
            '-webkit-box-shadow': 'unset',
            '-moz-box-shadow': 'unset'
        });
    }

}, {
    threshold: .5
})
observerNavBar.observe(document.querySelector('#canvas-shapes'))