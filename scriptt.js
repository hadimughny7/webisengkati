
            // JavaScript code to populate the invoice with transaction details
            const urlParams = new URLSearchParams(window.location.search);
            const tipeBarang = urlParams.get('tipe');
            const namaBarang = urlParams.get('nama');
            const hargaBarang = urlParams.get('harga');
            const jumlahBarang = urlParams.get('jumlah');
            const totalHargaBarang = urlParams.get('total');
            const alamatPengiriman = urlParams.get('alamat');
            const metodePengiriman = urlParams.get('pengiriman');

            document.getElementById('tipe').textContent = tipeBarang;
            document.getElementById('nama').textContent = namaBarang;
            document.getElementById('harga').textContent = hargaBarang;
            document.getElementById('jumlah').textContent = jumlahBarang;
            document.getElementById('totalHarga').textContent = totalHargaBarang;
            document.getElementById('alamat').textContent = alamatPengiriman;
            document.getElementById('pengiriman').textContent = metodePengiriman;
