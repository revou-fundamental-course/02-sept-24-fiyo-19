// Fungsi validasi konfirmasi untuk berbagai perhitungan
function validasiKonfirmasi(jenisPerhitungan) {
    // Menampilkan pesan konfirmasi dinamis berdasarkan jenis perhitungan
    var pesan = "Apakah Anda yakin ingin menghitung " + jenisPerhitungan + "?";
    var konfirmasi = confirm(pesan);
    
    if (konfirmasi) {
        // Jika user mengklik "Ya", lanjutkan ke perhitungan berdasarkan jenisPerhitungan
        if (jenisPerhitungan === 'luas segitiga') {
            hitungLuasSegitiga();
        } else if (jenisPerhitungan === 'keliling segitiga') {
            hitungKelilingSegitiga();
        } else if (jenisPerhitungan === 'keliling jajar genjang') {
            hitungKelilingJajarGenjang();
        } else if (jenisPerhitungan === 'luas jajar genjang') {
            hitungLuasJajarGenjang();
        } else {
            // Jika user mengklik "Tidak", batalkan perhitungan
            document.getElementById('prosesPerhitungan').innerHTML = "<p>Perhitungan " + jenisPerhitungan + " dibatalkan.</p>";
        }
    }
}

function hitungLuasSegitiga() {
    var alasLuasSegitiga = parseFloat(document.getElementById('alas-luas-segitiga').value);
    var tinggiLuasSegitiga = parseFloat(document.getElementById('tinggi-luas-segitiga').value);
    var luasLuasSegitiga = 0.5 * alasLuasSegitiga * tinggiLuasSegitiga;
    // document.getElementById('hasil').value = luasLuasSegitiga;

    // Validasi input - cek jika input kosong atau kurang dari atau sama dengan 0
    if (isNaN(alasLuasSegitiga) || alasLuasSegitiga <= 0) {
        prosesPerhitunganLuasSegitiga.innerHTML = "<p style='color: red;'>Masukkan nilai alas!</p>";
        return;
    }
    
    if (isNaN(tinggiLuasSegitiga) || tinggiLuasSegitiga <= 0) {
        prosesPerhitunganLuasSegitiga.innerHTML = "<p style='color: red;'>Masukkan nilai tinggi!</p>";
        return;
    }

    // Buat proses perhitungan step-by-step
    var prosesLuasSegitiga = `
        <h3>Proses Perhitungan:</h3>
        <p>L = 1/2 × a × t</p>
        <p>L = 1/2 × ${alasLuasSegitiga} × ${tinggiLuasSegitiga}</p>
        <p>L = 1/2 × ${alasLuasSegitiga * tinggiLuasSegitiga} = ${luasLuasSegitiga}</p>
        <p>Jadi, luas segitiga adalah: L = ${luasLuasSegitiga} cm²</p>
    `;

    // Tampilkan proses perhitungan ke halaman
    document.getElementById('prosesPerhitunganLuasSegitiga').innerHTML = prosesLuasSegitiga;
}

// Fungsi untuk menghitung keliling segitiga
function hitungKelilingSegitiga() {
    var sisiA = parseFloat(document.getElementById('sisi-a-keliling-segitiga').value);
    var sisiB = parseFloat(document.getElementById('sisi-b-keliling-segitiga').value);
    var sisiC = parseFloat(document.getElementById('sisi-c-keliling-segitiga').value);
    var prosesPerhitunganKelilingSegitiga = document.getElementById('prosesPerhitunganKelilingSegitiga');

    // Validasi input - cek jika input kosong atau kurang dari atau sama dengan 0
    if (isNaN(sisiA) || sisiA <= 0) {
        prosesPerhitunganKelilingSegitiga.innerHTML = "<p style='color: red;'>Masukkan nilai sisi A!</p>";
        return;
    }
    
    if (isNaN(sisiB) || sisiB <= 0) {
        prosesPerhitunganKelilingSegitiga.innerHTML = "<p style='color: red;'>Masukkan nilai sisi B!</p>";
        return;
    }

    if (isNaN(sisiC) || sisiC <= 0) {
        prosesPerhitunganKelilingSegitiga.innerHTML = "<p style='color: red;'>Masukkan nilai sisi C!</p>";
        return;
    }

    // Jika input valid, lakukan perhitungan
    var keliling = sisiA + sisiB + sisiC;

    // Buat proses perhitungan step-by-step
    var prosesKelilingSegitiga = `
        <h3>Proses Perhitungan:</h3>
        <p>K = a + b + c</p>
        <p>K = ${sisiA} + ${sisiB} + ${sisiC}</p>
        <p>K = ${keliling} cm</p>
    `;

    // Tampilkan proses perhitungan ke halaman
    prosesPerhitunganKelilingSegitiga.innerHTML = prosesKelilingSegitiga;
}

// Fungsi untuk menghitung keliling jajar genjang
function hitungKelilingJajarGenjang() {
    var alasKelilingJajarGenjang = parseFloat(document.getElementById('alas-keliling-jajar-genjang').value);
    var lebarKelilingJajarGenjang = parseFloat(document.getElementById('lebar-keliling-jajar-genjang').value);
    var prosesPerhitunganKelilingJajarGenjang = document.getElementById('prosesPerhitunganKelilingJajarGenjang');

    // Validasi input - cek jika input kosong atau kurang dari atau sama dengan 0
    if (isNaN(alasKelilingJajarGenjang) || alasKelilingJajarGenjang <= 0) {
        prosesPerhitunganKelilingJajarGenjang.innerHTML = "<p style='color: red;'>Masukkan nilai alas!</p>";
        return;
    }
    
    if (isNaN(lebarKelilingJajarGenjang) || lebarKelilingJajarGenjang <= 0) {
        prosesPerhitunganKelilingJajarGenjang.innerHTML = "<p style='color: red;'>Masukkan nilai sisi!</p>";
        return;
    }

    // Jika input valid, lakukan perhitungan
    var kelilingJajarGenjang = 2 * (alasKelilingJajarGenjang + lebarKelilingJajarGenjang);

    // Buat proses perhitungan step-by-step
    var prosesKelilingJajarGenjang = `
        <h3>Proses Perhitungan Keliling Jajar Genjang:</h3>
        <p>K = 2 × (a + b)</p>
        <p>K = 2 × (${alasKelilingJajarGenjang} + ${lebarKelilingJajarGenjang})</p>
        <p>K = 2 × ${alasKelilingJajarGenjang + lebarKelilingJajarGenjang} = ${kelilingJajarGenjang} cm</p>
    `;

    // Tampilkan proses perhitungan ke halaman
    prosesPerhitunganKelilingJajarGenjang.innerHTML = prosesKelilingJajarGenjang;
}

// Fungsi untuk menghitung luas jajar genjang
function hitungLuasJajarGenjang() {
    var alasLuasJajarGenjang = parseFloat(document.getElementById('alas-luas-jajar-genjang').value);
    var tinggiLuasJajarGenjang = parseFloat(document.getElementById('tinggi-luas-jajar-genjang').value);
    var prosesPerhitunganLuasJajarGenjang = document.getElementById('prosesPerhitunganLuasJajarGenjang');

    // Validasi input - cek jika input kosong atau kurang dari atau sama dengan 0
    if (isNaN(alasLuasJajarGenjang) || alasLuasJajarGenjang <= 0) {
        prosesPerhitunganLuasJajarGenjang.innerHTML = "<p style='color: red;'>Masukkan nilai alas!</p>";
        return;
    }
    
    if (isNaN(tinggiLuasJajarGenjang) || tinggiLuasJajarGenjang <= 0) {
        prosesPerhitunganLuasJajarGenjang.innerHTML = "<p style='color: red;'>Masukkan nilai tinggi!</p>";
        return;
    }

    // Jika input valid, lakukan perhitungan
    var luasJajarGenjang = alasLuasJajarGenjang * tinggiLuasJajarGenjang;

    // Buat proses perhitungan step-by-step
    var prosesLuasJajarGenjang = `
        <h3>Proses Perhitungan Luas Jajar Genjang:</h3>
        <p>L = a × t</p>
        <p>L = ${alasLuasJajarGenjang} × ${tinggiLuasJajarGenjang}</p>
        <p>L = ${luasJajarGenjang} cm²</p>
    `;

    // Tampilkan proses perhitungan ke halaman
    prosesPerhitunganLuasJajarGenjang.innerHTML = prosesLuasJajarGenjang;
}

// Fungsi untuk mereset input dan hasil perhitungan
function resetForm() {
    // Mengosongkan input pada form luas jajar genjang
    document.getElementById('alas-luas-jajar-genjang').value = '';
    document.getElementById('tinggi-luas-jajar-genjang').value = '';
    document.getElementById('prosesPerhitunganLuasJajarGenjang').innerHTML = '';

    // Mengosongkan input pada form keliling jajar genjang
    document.getElementById('alas-keliling-jajar-genjang').value = '';
    document.getElementById('lebar-keliling-jajar-genjang').value = '';
    document.getElementById('prosesPerhitunganKelilingJajarGenjang').innerHTML = '';

     // Mengosongkan input pada form luas segitiga
    document.getElementById('alas-luas-segitiga').value = '';
    document.getElementById('tinggi-luas-segitiga').value = '';
    document.getElementById('prosesPerhitunganLuasSegitiga').innerHTML = '';

      // Mengosongkan input pada form keliling segitiga
    document.getElementById('sisi-a-keliling-segitiga').value = '';
    document.getElementById('sisi-b-keliling-segitiga').value = '';
    document.getElementById('sisi-c-keliling-segitiga').value = '';
    document.getElementById('prosesPerhitunganKelilingSegitiga').innerHTML = '';
}

document.getElementById('pilihan').addEventListener('change', function() {
    var pilihan = this.value;

    // Sembunyikan semua section
    document.getElementById('operasi-luas-jajar-genjang').style.display = 'none';
    document.getElementById('operasi-keliling-jajar-genjang').style.display = 'none';
    document.getElementById('operasi-luas-segitiga').style.display = 'none';
    document.getElementById('operasi-keliling-segitiga').style.display = 'none';

    // Tampilkan section berdasarkan pilihan
    if (pilihan === 'option1') {
        document.getElementById('operasi-luas-segitiga').style.display = 'block';
    } else if (pilihan === 'option2') {
        document.getElementById('operasi-keliling-segitiga').style.display = 'block';
    } else if (pilihan === 'option3') {
        document.getElementById('operasi-luas-jajar-genjang').style.display = 'block';
    } else if (pilihan === 'option4') {
        document.getElementById('operasi-keliling-jajar-genjang').style.display = 'block';
    }
});
