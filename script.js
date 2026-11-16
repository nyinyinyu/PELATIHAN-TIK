//1.pilih tombol berdasarkan ID-nya
cost tombolSapa = document.getElementById('sapaButton');
//2. tambahkan 'event listener' untuk aksi 'clik'
tombolSapa.addEventlistener('click', fuction() {
  //3. jalankan kode ini ketika tombol di-klik
  alert('hallo! Terimakasih sudah berkunjung!');
});
