// script.js
const urlParams = new URLSearchParams(window.location.search);
const tipeBarang = urlParams.get('tipe');

const tipeElemen = document.getElementById('tipe');
const namaElemen = document.getElementById('nama');
const hargaElemen = document.getElementById('harga');
const jumlahElemen = document.getElementById('jumlah');
const totalHargaElemen = document.getElementById('totalHarga');
const pengirimanElemen = document.getElementById('pengiriman');

let harga = 0;

function showTransactionInfo() {
  tipeElemen.textContent = tipeBarang;
  if (tipeBarang === 'Mouse') {
    namaElemen.textContent = 'Logitech G502 Lightspeed Wireless Mouse Gaming';
    harga = 566000;
  } else if (tipeBarang === 'Keyboard') {
    namaElemen.textContent = 'Razer Huntsman Quartz Gaming Keyboard';
    harga = 2699000;
  } else if (tipeBarang === 'Mic') {
    namaElemen.textContent = 'HyperX QuadCast - USB Microphone (Black-Red) - Red Lighting';
    harga = 429000;
  } else if (tipeBarang === 'Headset') {
    namaElemen.textContent = 'Headphone Gaming Kingston HyperX Cloud II - Headset Hyper X';
    harga = 3820000;
  } else if (tipeBarang === 'Mouse Pad') {
    namaElemen.textContent = 'TaffGO Gaming Mouse Pad XL Peta Dunia + LED RGB 400 x 900 mm - GMS-WT5 - Black';
    harga = 57200;
  } else if (tipeBarang === 'Speaker') {
    namaElemen.textContent = 'Razer Nommo Chroma Speakers Review!';
    harga = 1299999;
  } else {
    namaElemen.textContent = 'Nama Barang';
    harga = 0;
  }

  hargaElemen.textContent = 'Rp. ' + formatNumber(harga);
  // Set nilai awal jumlah dan total harga
  jumlahElemen.value = 1;
  calculateTotal();
}

function formatNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function calculateTotal() {
  const jumlah = parseInt(jumlahElemen.value);
  const pengiriman = pengirimanElemen.value;

  // Menghitung total harga
  let totalHarga = harga * jumlah;

  totalHargaElemen.textContent = 'Rp. ' + formatNumber(totalHarga);
}

function checkout() {
  const jumlah = document.getElementById('jumlah').value;
  const alamat = document.getElementById('alamat').value;

  // Redirect ke halaman checkout.html dengan mengirimkan data transaksi sebagai parameter
  window.location.href = `checkout.html?tipe=${tipeBarang}&nama=${namaElemen.textContent}&harga=${harga}&jumlah=${jumlah}&total=${totalHargaElemen.textContent}&alamat=${alamat}&pengiriman=${pengirimanElemen.value}`;
}

showTransactionInfo();
