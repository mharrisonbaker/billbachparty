console.log('Countdown clock script loaded');

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
  var emails = [
  'edsteinborn@gmail.com',
  'stetson.hallowell@gmail.com',
  'matthew.karlan@gmail.com',
  'rgcanning@gmail.com',
  'douglas.c.herling@gmail.com',
  'drewaterfield@gmail.com',
  'mbo5b1@gmail.com',
  'brendanekelley@gmail.com',
  'thomas.bennet@gmail.com',
  'adam.klopp@gmail.com',
  'michaeljledwith@gmail.com',
  'franciscoahoyos@gmail.com',
  'michael.barber06@gmail.com',
  'jesse.salai@gmail.com',
  'jcpeltier@gmail.com',
  'paxtonflesher@gmail.com',
  'tomgaunt@gmail.com',
  'michaeljameswest@gmail.com'
];
  if (emails.includes(email)) {
    window.location.href = 'second-page.html';
  } else {
    document.getElementById('error-message').style.display = 'block';
  }
});

