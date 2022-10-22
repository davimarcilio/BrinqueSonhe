const observer = new IntersectionObserver(entries => {
    entries.forEach(entrie => {
        if (entrie.intersectionRatio >= 1) {
            $(entrie.target).addClass('fadeIn');
        }
    })
    console.log($(entries[0].target));
}, {
    threshold: 1
})
Array.from(document.querySelectorAll('.abouttext')).forEach(element => {
    observer.observe(element)
})
