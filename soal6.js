function getAngkaTerbesarKedua(dataNumbers) {
    // Validasi input
    if (!Array.isArray(dataNumbers)) {
      throw new Error('Input harus berupa array');
    }
  
    // Cek apakah array memiliki lebih dari 1 elemen
    if (dataNumbers.length < 2) {
      throw new Error('Array harus memiliki minimal 2 elemen');
    }
  
    // Sorting array secara descending
    dataNumbers.sort(function(a, b) {
      return b - a;
    });
  
    // Mengambil angka terbesar kedua
    var angkaTerbesarKedua = dataNumbers[1];
  
    return angkaTerbesarKedua;
  }

  
  const dataAngka = [2,5,4,1,7,6]

  console.log(getAngkaTerbesarKedua(dataAngka))
  console.log(getAngkaTerbesarKedua(0))
  console.log(getAngkaTerbesarKedua())