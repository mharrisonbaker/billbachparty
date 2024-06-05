const countdown = () => {
    const countDate = new Date('October 10, 2023 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.getElementById('timer').innerText = `${textDay} Days ${textHour} Hours ${textMinute} Minutes ${textSecond} Seconds`;
};

setInterval(countdown, 1000);


document.querySelector('button').addEventListener('click', function() {
  document.getElementById('email-dialog').style.display = 'block';
});

document.getElementById('email-submit').addEventListener('click', function() {
  var email = document.getElementById('email-input').value;
  var emails = {
    'edsteinborn@gmail.com': 'ed-steinborn.html',
    'stetson.hallowell@gmail.com': 'stetson-hallowell.html',
    'matthew.karlan@gmail.com': 'matt-karlan.html',
    // add other emails and corresponding pages here
  };
  if (emails.hasOwnProperty(email)) {
    window.location.href = emails[email];
  } else {
    alert('Invalid email');
  }
});

