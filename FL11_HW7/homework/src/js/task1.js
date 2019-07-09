let login = prompt('Enter your e-mail:');
let length1 = 6;
let length2 = 5;

if (login === '' || !login) {
  alert('Canceled');
} else {
  if (login.length < length1) {
    alert("I don't know any emails having name length less than 6 symbols");
  } else if (login === 'user@gmail.com' || login === 'admin@gmail.com') {
    let password = prompt('Enter your password:');
    if (login === 'user@gmail.com' && password === 'UserPass') {
      alert('Hello User!');
      if (confirm('Do you want to change your password?')) {
        let oldPass = prompt('Enter your old password:');
        if (login === 'user@gmail.com' && oldPass === password) {
          let newPass = prompt('Enter your new password:');
          if (newPass.length < length2) {
            alert('It’s too short password. Sorry.');
          } else {
            let newPassSubmit = prompt('Enter your new password again:');
            if (newPassSubmit === newPass) {
              alert('You have successfully changed your password.');
            } else {
              alert('You wrote the wrong password');
            }
          }
        } else {
          alert('Login or password is wrong');
        }
      } else {
        alert('You have failed the change.');
      }
    } else if (login === 'admin@gmail.com' && password === 'AdminPass') {
      alert('Hello Admin!');
      if (confirm('Do you want to change your password?')) {
        let oldPass = prompt('Enter your old password:');
        if (login === 'admin@gmail.com' && oldPass === password) {
          let newPass = prompt('Enter your new password:');
          if (newPass.length < length2) {
            alert('It’s too short password. Sorry.');
          } else {
            let newPassSubmit = prompt('Enter your new password again:');
            if (newPassSubmit === newPass) {
              alert('You have successfully changed your password.');
            } else {
              alert('You wrote the wrong password');
            }
          }
        } else {
          alert('Login or password is wrong');
        }
      } else {
        alert('You have failed the change.');
      }
    } else {
      alert('Wrong Password');
    }
  } else {
    alert('I dont know you');
  }
}
