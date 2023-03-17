const dataPenjualanNovel = [
    {
      idProduct: 'BOOK002421',
      namaProduk: 'Pulang - Pergi',
      penulis: 'Tere Liye',
      hargaBeli: 60000,
      hargaJual: 86000,
      totalTerjual: 150,
      sisaStok: 17,
    },
    {
      idProduct: 'BOOK002351',
      namaProduk: 'Selamat Tinggal',
      penulis: 'Tere Liye',
      hargaBeli: 75000,
      hargaJual: 103000,
      totalTerjual: 171,
      sisaStok: 20,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Garis Waktu',
      penulis: 'Fiersa Besari',
      hargaBeli: 67000,
      hargaJual: 99000,
      totalTerjual: 213,
      sisaStok: 5,
    },
    {
      idProduct: 'BOOK002941',
      namaProduk: 'Laskar Pelangi',
      penulis: 'Andrea Hirata',
      hargaBeli: 55000,
      hargaJual: 68000,
      totalTerjual: 20,
      sisaStok: 56,
    },
  ];
  
  

  function getInfoPenjualan(dataPenjualan) {
    // Validasi dataPenjualan
    if (!Array.isArray(dataPenjualan)) {
      return "Data harus berupa array";
    }
  
    // Hitung totalModal, totalKeuntungan, dan bukuTerlaris
    let totalModal = 0;
    let totalKeuntungan = 0;
    let bukuTerlaris = dataPenjualan[0];
    for (let i = 0; i < dataPenjualan.length; i++) {
      const { hargaBeli, hargaJual, totalTerjual } = dataPenjualan[i];
      const keuntungan = (hargaJual - hargaBeli) * totalTerjual;
      if (keuntungan > (bukuTerlaris.hargaJual - bukuTerlaris.hargaBeli) * bukuTerlaris.totalTerjual) {
        bukuTerlaris = dataPenjualan[i];
      }
      totalModal += hargaBeli * totalTerjual;
      totalKeuntungan += keuntungan;
    }
  
    // Hitung persentaseKeuntungan
    const persentaseKeuntungan = ((totalKeuntungan / totalModal) * 100).toFixed(2);
  
    // Format output totalModal dan totalKeuntungan ke dalam rupiah
    totalModal = totalModal.toLocaleString("id-ID");
    totalKeuntungan = totalKeuntungan.toLocaleString("id-ID");
  
    // Hitung penulisTerlaris
    const penulisTerlaris = dataPenjualan.reduce((acc, curr) => {
      if (!acc[curr.penulis]) {
        acc[curr.penulis] = 0;
      }
      acc[curr.penulis] += curr.totalTerjual;
      return acc;
    }, {});
  
    const sortedPenulisTerlaris = Object.entries(penulisTerlaris).sort((a, b) => b[1] - a[1]);
  
    // Kembalikan hasil
    return {
      totalModal: "Rp."+totalModal,
      totalKeuntungan: "Rp."+totalKeuntungan,
      bukuTerlaris: bukuTerlaris.namaProduk,
      penulisTerlaris: sortedPenulisTerlaris[0][0],
      persentaseKeuntungan: persentaseKeuntungan + "%",
    };
  }
  const dataPenjualan = getInfoPenjualan(dataPenjualanNovel);
  console.log(dataPenjualan);