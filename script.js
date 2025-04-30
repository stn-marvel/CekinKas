const totalKas = 230000;
const semester1 = 110000;
const semester2 = 120000;

const dataKas = {
  1: { nama: "Ariana Kelita", dibayar: 135000 },
  2: { nama: "Ascendio Neo", dibayar: 20000 },
  3: { nama: "Audrey Visiona Saputri", dibayar: 95000 },
  4: { nama: "Bianca Camelia Kenzieta", dibayar: 120000 },
  5: { nama: "Brayden Vincetius Jonathan", dibayar: 140000 },
  6: { nama: "Clarissa Aurelia", dibayar: 110000 },
  7: { nama: "Darius Bonardy", dibayar: 85000 },
  8: { nama: "Demerri Veronika Kok", dibayar: 140000 },
  9: { nama: "Dorrein Isabela Latuputty", dibayar: 50000 },
  10: { nama: "Ecclesia Theoijovena Mavky", dibayar: 30000 },
  11: { nama: "Elva Artha Sagala", dibayar: 110000 },
  12: { nama: "Fanuel Azarya Widiatmoko", dibayar: 45000 },
  13: { nama: "Felicia Angelica Hardjono", dibayar: 30000 },
  14: { nama: "Gabriella Theresia Cordoviole Ananda Pury", dibayar: 60000 },
  15: { nama: "Hilary Zefanya Sitanggang", dibayar: 70000 },
  16: { nama: "Immanuel Tandike Yuan Purba", dibayar: 65000 },
  17: { nama: "Jesicca Rebecca Lumban Tobing", dibayar: 145000 },
  18: { nama: "Katarina Felixia Tantora", dibayar: 125000 },
  19: { nama: "Kenneth Immanuel Pateh", dibayar: 65000 },
  20: { nama: "Kenzie Aryasatya Kresna", dibayar: 230000 },
  21: { nama: "Luisa Novely Immanuel Sianipar", dibayar: 145000 },
  22: { nama: "Maria Sarisha Ozara Kenszasza", dibayar: 230000 },
  23: { nama: "Marvel Athala Bernardus", dibayar: 120000 },
  24: { nama: "Netanya Zipiya Ginting", dibayar: 120000 },
  25: { nama: "Nilsen Hizkia Soleman Bolang", dibayar: 120000 },
  26: { nama: "Noel Ghabriel Alexandro Mentang", dibayar: 230000 },
  27: { nama: "Petrus Eduardus Sutanto", dibayar: 135000 },
  28: { nama: "Raden Gregorius Nicky Evan Subagio", dibayar: 150000 },
  29: { nama: "Stanislaus Marvel Londar", dibayar: 220000 },
  30: { nama: "Stefano Jozeph Lantu", dibayar: 20000 },
  31: { nama: "Varaya Abigail Christy", dibayar: 65000 },
};

function cekKas() {
  const absen = document.getElementById("absen").value;
  const siswa = dataKas[absen];
  const output = document.getElementById("output");

  if (siswa) {
    const dibayar = siswa.dibayar;
    const persentase = Math.round((dibayar / totalKas) * 100);
    let keterangan = "";

    if (dibayar >= totalKas) {
      keterangan = "Mantap, udah lunas semua ye";
    } else if (dibayar >= semester1 && dibayar < totalKas) {
      keterangan = "Lunas semester 1";
    } else {
      keterangan = "Belum lunas semester 1";
    }

    document.getElementById("nama").textContent = siswa.nama;
    document.getElementById("dibayar").textContent = formatRupiah(dibayar);
    document.getElementById("harus").textContent = formatRupiah(totalKas - dibayar);
    document.getElementById("persentase").textContent = persentase;
    document.getElementById("keterangan").textContent = keterangan;
    output.classList.remove("hidden");
  } else {
    output.classList.remove("hidden");
    document.getElementById("nama").textContent = "Data tidak ditemukan";
    document.getElementById("dibayar").textContent = "-";
    document.getElementById("harus").textContent = "-";
    document.getElementById("persentase").textContent = "-";
    document.getElementById("keterangan").textContent = "Waduh, cek nomor absennya lagi deh. Ga usah pakai 0 di depan ya, error soalnya.";
  }
}

function formatRupiah(angka) {
  return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function copyLink() {
    const link = document.getElementById("linkWebsite");
    link.select();
    link.setSelectionRange(0, 99999); // Untuk mobile
    document.execCommand("copy");
    alert("URL berhasil disalin: " + link.value);
  }
  
