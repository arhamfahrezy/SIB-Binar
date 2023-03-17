function isValidPassword(givenPassword) {
    // Validasi tipe data parameter
    if (typeof givenPassword !== 'string') {
      return false;
    }
    
    // Cek panjang password
    if (givenPassword.length < 8) {
      return false;
    }
    
    // Cek apakah terdapat huruf besar, huruf kecil, dan angka
    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasNumber = false;
    
    for (let i = 0; i < givenPassword.length; i++) {
      if (givenPassword[i] >= 'A' && givenPassword[i] <= 'Z') {
        hasUpperCase = true;
      } else if (givenPassword[i] >= 'a' && givenPassword[i] <= 'z') {
        hasLowerCase = true;
      } else if (givenPassword[i] >= '0' && givenPassword[i] <= '9') {
        hasNumber = true;
      }
    }
    
    return hasUpperCase && hasLowerCase && hasNumber;
  }

  console.log(isValidPassword(`Naruto12`))
  console.log(isValidPassword(`Naruto12.com`))
  console.log(isValidPassword(`201111045@mhs.stiki.ac.id`))
  console.log(isValidPassword(0))
  console.log(isValidPassword())