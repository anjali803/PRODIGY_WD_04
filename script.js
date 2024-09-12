






// download resume
document.addEventListener('DOMContentLoaded', function () {
  const downloadButton = document.getElementById('download-resume');
  downloadButton.addEventListener('click', function () {
    const resumePath = 'Resume_Anjali_NV.pdf';
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'AnjaliResume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});


// send message
document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const sendMessageButton = document.getElementById('send-message');

  sendMessageButton.addEventListener('click', function () {
    // Replace 'YOUR_FORMSPREE_ENDPOINT' with your Formspree endpoint
    const formAction = 'https://formspree.io/f/xpzvaylw';

    contactForm.setAttribute('action', formAction);
    contactForm.setAttribute('method', 'POST');

    // Submit the form
    contactForm.submit();
  });
});



