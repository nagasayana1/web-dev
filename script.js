const buttons = document.querySelectorAll('.btns');

buttons[0].addEventListener('click', function() {
    const fileUrl = 'assets/resume.pdf'; 
    const fileName = 'resume.pdf'; 

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

buttons[1].addEventListener('click', function() {
    const linkedinUrl = "www.linkedin.com/in/aasuri68642216";
    window.open(linkedinUrl, '_blank');
});