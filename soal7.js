const dataPenjualanPakAldi = [
    {
      namaProduct : 'Sepatu Futsal Nike Vapor Academy 8',
      hargaSatuan: 760000,
      kategori : "Sepatu Sport",
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Black Brown High',
      hargaSatuan: 960000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 37,
    },
    {
      namaProduct : 'Sepatu Warrior Tristan Maroon High ',
      kategori : "Sepatu Sneaker",
      hargaSatuan: 360000,
      totalTerjual : 90,
    },
    {
      namaProduct : 'Sepatu Warrior Rainbow Tosca Corduroy',
      hargaSatuan: 120000,
      kategori : "Sepatu Sneaker",
      totalTerjual : 90,
    }
  ]

  function getTotalPenjualan(dataPenjualan) {
    // Validasi input
    if (!Array.isArray(dataPenjualan)) {
      throw new Error('Input harus berupa array');
    }
  
    // Inisialisasi variabel totalPenjualan
    var totalPenjualan = 0;
  
    // Looping dataPenjualan dan menambahkan totalTerjual ke totalPenjualan
    dataPenjualan.forEach(function(sepatu) {
      // Validasi bahwa totalTerjual adalah angka
      if (typeof sepatu.totalTerjual !== 'number') {
        throw new Error('Properti totalTerjual harus berupa angka');
      }
      totalPenjualan += sepatu.totalTerjual;
    });
  
    return totalPenjualan;
  }
  
  // Contoh pemanggilan function
  var totalPenjualan = getTotalPenjualan(dataPenjualanPakAldi);
  console.log(totalPenjualan);