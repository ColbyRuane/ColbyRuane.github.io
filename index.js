resumeBtn = document.getElementById('resume-button');

// script to fade elements into view
window.addEventListener('load', function() {
    const fadeGroup = document.querySelectorAll('.fade-into-view');
    fadeGroup.forEach(element => {
        element.classList.add('visible');
    });
});

resumeBtn.addEventListener('click', function(){
    window.open('data/Resume.pdf', '_blank');
})

