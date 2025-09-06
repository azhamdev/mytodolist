const inputTugas = document.querySelector('#inputTugas')

const daftarTugas = document.querySelector('#daftarTugas')

function tambahTugas() {
  if (inputTugas.value === "") {
    alert("Input gak boleh kosong wooyy! 😖😖😖😖😖")
  }

  // 1. Buat Elemen list (li) baru
  const li = document.createElement('li')
  li.textContent = inputTugas.value

  // 2. Buat Tombol Hapus (span)
  const tombolHapus = document.createElement('span')
  tombolHapus.textContent = "Delete"
  tombolHapus.onclick = function () {
    daftarTugas.removeChild(li)
  }

  // Tambahkan event untuk menandai selesai
  li.onclick = function (event) {
    if (event.target !== tombolHapus) {
      li.classList.toggle('selesai')
    }
  }

  li.appendChild(tombolHapus);
  daftarTugas.appendChild(li);

  inputTugas.value = ''
}



inputTugas.addEventListener('keyup', function (event) {
  if (event.key === 'Enter') {
    tambahTugas()
  }
})