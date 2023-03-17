function getSplitName(fullName) {
    // Validasi tipe data parameter
    if (typeof fullName !== 'string') {
      throw new Error('Parameter harus berupa string!');
    }
  
    // Validasi jumlah kata pada nama lengkap
    const nameArray = fullName.trim().split(' ');
    if (nameArray.length > 3) {
      throw new Error('Nama lengkap tidak valid!');
    }
  
    // Deklarasi variabel untuk nama depan, tengah, dan belakang
    let firstName, middleName, lastName;
  
    // Set nama depan, tengah, dan belakang sesuai jumlah kata pada nama lengkap
    switch (nameArray.length) {
      case 1:
        firstName = nameArray[0];
        break;
      case 2:
        firstName = nameArray[0];
        lastName = nameArray[1];
        break;
      case 3:
        firstName = nameArray[0];
        middleName = nameArray[1];
        lastName = nameArray[2];
        break;
    }
  
    // Return object dengan properti firstName, middleName, dan lastName
    return {
      firstName,
      middleName,
      lastName
    };
  }

  console.log(getSplitName("Arham Akhmad Fachrezy"))
  console.log(getSplitName("Arham Fachrezy"))
  console.log(getSplitName("Arham"))
  console.log(getSplitName("Arham Akhmad Fachrezy reyna"))
  console.log(getSplitName(0))