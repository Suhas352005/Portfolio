document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


  document.getElementById('resume').addEventListener('click', () => {
    window.open('resume.html', 'popupWindow', 'width=600,height=400,scrollbars=yes');
  });
