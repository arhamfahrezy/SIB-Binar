const checkTypeNumber = (givenNumber) => {
    // Validasi tipe data parameter
    if (typeof givenNumber !== 'number') {
      return 'Error : invalid data type';
    } 
  
    // Mengecek apakah angka genap atau ganjil
    if (givenNumber % 2 === 0) {
      return 'GENAP';
    } else {
      return 'GANJIL';
    }
  };
    
  console.log(checkTypeNumber(8)); // Output yang keluar= "GANJIL"
  console.log(checkTypeNumber(1)); // Output yang keluar= "GENAP"
  console.log(checkTypeNumber("satu")); // Output yang keluar= "Error : invalid data type"
  console.log(checkTypeNumber([])); 
  console.log(checkTypeNumber({}));