function validateForm(e) {
    e.preventDefault();
  
    var name = document.loginForm.Name.value;
    var password = document.loginForm.Password.value;
    var phoneNumber = document.loginForm.PhoneNumber.value;
  
    if (name.length == 0) {
      return alert('Name is required');
    }
  
    if (password.length < 5) {
      return alert('Password length should be more than 5');
    }
  
    if (phoneNumber.length != 8) {
      return alert('Phone number should be 8 characters');
    }
  
    // Submit the form if the validation is successful
    alert('Form validation successful!');
    // document.loginForm.submit();
  }
  
