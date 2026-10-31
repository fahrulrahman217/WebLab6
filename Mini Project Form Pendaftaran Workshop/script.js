const form = document.getElementById("formWorkshop");

const nama = document.getElementById("nama");
const email = document.getElementById("email");
const sesi = document.getElementById("sesi");
const catatan = document.getElementById("catatan");

const hasil = document.getElementById("hasil");

// Menghitung karakter
catatan.addEventListener("input", function () {
  document.getElementById("hitungKarakter").textContent =
    catatan.value.length + "/200 karakter";
});

// Menampilkan sesi yang dipilih
sesi.addEventListener("change", function () {
  document.getElementById("pilihanSesi").textContent =
    "Sesi dipilih: " + sesi.value;
});

// Validasi nama
nama.addEventListener("input", function () {
  document.getElementById("errorNama").textContent =
    nama.value.trim().length < 3 && nama.value.length > 0
      ? "Nama minimal 3 karakter"
      : "";
});

// Validasi email
email.addEventListener("input", function () {
  document.getElementById("errorEmail").textContent =
    email.validity.valid || email.value === ""
      ? ""
      : "Format email tidak valid";
});

// Proses pendaftaran
form.addEventListener("submit", function (event) {
  event.preventDefault();

  let valid = true;

  document.getElementById("errorNama").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorSesi").textContent = "";

  if (nama.value.trim().length < 3) {
    document.getElementById("errorNama").textContent =
      "Nama minimal 3 karakter";
    valid = false;
  }

  if (!email.validity.valid || email.value.trim() === "") {
    document.getElementById("errorEmail").textContent =
      "Masukkan email yang valid";
    valid = false;
  }

  if (sesi.value === "") {
    document.getElementById("errorSesi").textContent =
      "Silakan pilih sesi workshop";
    valid = false;
  }

  if (valid) {
    hasil.className = "sukses";
    hasil.innerHTML =
      "Pendaftaran Berhasil!<br>" +
      "Nama: " +
      nama.value.trim() +
      "<br>" +
      "Email: " +
      email.value.trim() +
      "<br>" +
      "Sesi: " +
      sesi.value;
  } else {
    hasil.className = "gagal";
    hasil.textContent = "Pendaftaran gagal. Periksa kembali data Anda.";
  }
});

// Tombol reset
form.addEventListener("reset", function () {
  hasil.textContent = "";

  document.getElementById("errorNama").textContent = "";
  document.getElementById("errorEmail").textContent = "";
  document.getElementById("errorSesi").textContent = "";

  document.getElementById("pilihanSesi").textContent = "";

  document.getElementById("hitungKarakter").textContent = "0/200 karakter";
});
