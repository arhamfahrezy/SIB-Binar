const checkEmail = (email) => {
    // Validasi tipe data parameter
    if (typeof email !== 'string') {
      return 'Parameter harus berupa string';
    }
  
    // Pengecekan format email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexEmail.test(email) ? 'VALID' : 'INVALID';
  };
  console.log(checkEmail('johndoe@example.com')); // Output: "VALID"
  console.log(checkEmail('johndoe@.com')); // Output: "INVALID"
  console.log(checkEmail("satu"));
  console.log(checkEmail(123)); // Output: "Parameter harus berupa string"
  console.log(checkEmail());