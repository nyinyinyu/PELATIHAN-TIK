// 1.pilih tombol berdasarkan ID-nya
const tombolSapa = document.getElementById('sapaButton');
// 2. tambahkan 'event listener untuk aksi 'click'
tombolSapa.addEventlistener('click', function() {
  // 3. jalankan kode ini ketika tombol di-klik
  alert('Hallo! Terimakasih sudah berkunjung!');
});
