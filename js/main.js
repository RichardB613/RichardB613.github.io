// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});


// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});



document.querySelector('#send-mail').addEventListener('click', () => {
  let name = document.querySelector('#name')
  let email = document.querySelector('#email')
  let phone = document.querySelector('#phone')
  let message = document.querySelector('#message')

  if (name.value != "" && email.value != "" && phone.value != "" && message.value != "") {
    let body = `
      Name: ${name.value} 
      Email: ${email.value}
      Phone: ${phone.value}
      Message: "${message.value} " 
    `
    window.location = `mailto:info@oakclinicalsolutions.com?body=${body}`;
    name.value ="", email.value="", phone.value="", message.value=""
  } else {
    alert("All fields must be filled")
  }
})
