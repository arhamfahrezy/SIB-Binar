function changeWord(selectedText, changedText, text) {
    // Mengecek apakah selectedText terdapat dalam text
    if (text.includes(selectedText)) {
      // Mengganti selectedText dengan changedText menggunakan regular expression
      const change = new RegExp(selectedText, 'g');
      const textBaru = text.replace(change, changedText);
  
      return textBaru;
    } else {
      // Jika selectedText tidak ditemukan dalam text, return text asli
      return text;
    }
  }
    const kal1 = `Aku sangat mencintai kamu`
    const kal2 = `Gunung bromo besar`

    console.log(changeWord(`mencintai`,`membenci`,kal1))
    console.log(changeWord(`bromo`,`semeru`,kal2))