let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}


let siswa = [];

fetch('siswa.json')
  .then(response => response.json())
  .then(data => siswa = data);

function cekIuran() {
  const input = document.getElementById('absen').value.padStart(2, '0');
  const output = document.getElementById('output');
  const absen = parseInt(input);
  const siswaData = siswa.find(s => s.Absen === absen);
  if (!siswaData) {
    output.innerHTML = '<i></i> Data tidak ditemukan untuk absen ' + absen;
    return;
  }
  const bayar = siswaData.Bayar;
  const lunas1 = bayar >= 110000;
  const lunas2 = bayar >= 230000;
  let ket = '';
  if (lunas2) ket = 'Mantap! Lunas semua';
  else if (lunas1) ket = 'Lunas semester 1';
  else ket = 'Belum lunas semester 1';
  const sisa = 230000 - bayar;
  const persen = Math.min(100, Math.round((bayar / 230000) * 100));
  output.innerHTML = `
    <p><strong>Nama:</strong> ${siswaData.Nama}</p>
    <p><strong>Jumlah yang telah dibayar:</strong> Rp${bayar.toLocaleString('id-ID')}</p>
    <p><strong>Sisa yang harus dibayar:</strong> Rp${sisa.toLocaleString('id-ID')}</p>
    <p><strong>Persentase lunas:</strong> ${persen}%</p>
    <p><strong>Keterangan:</strong> ${ket}</p>
  `;
}

let chart;

fetch('siswa.json')
  .then(response => response.json())
  .then(data => {
    siswa = data;
    initChart();
    updateChart();
    updateKas();
  });

function initChart() {
  const ctx = document.getElementById('chart-lunas').getContext('2d');
  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Lunas', 'Belum Lunas'],
      datasets: [{
        data: [0, 0],
        backgroundColor: ['#00487a', '#f7d22c']
      }]
    }
  });
}

function updateChart() {
  const pilihan = document.getElementById('pilihan-diagram').value;
  let lunas = 0;

  if (pilihan === 'total') {
    lunas = siswa.filter(s => s.Bayar >= 230000).length;
  } else if (pilihan === 'semester1') {
    lunas = siswa.filter(s => s.Bayar >= 110000).length;
  } else {
    lunas = siswa.filter(s => s.Bayar >= 230000 - 110000).length;
  }

  chart.data.datasets[0].data = [lunas, siswa.length - lunas];
  chart.update();
}

function updateKas() {
  const pilihan = document.getElementById('pilihan-kas').value;
  const totalIuran = siswa.reduce((sum, s) => sum + s.Bayar, 0);
  const kasTotal = 1277000 + totalIuran; // Contoh nilai kas lain, bisa diganti sesuai kebutuhan

  let kas = 0;
  if (pilihan === 'iuran') {
    kas = totalIuran;
  } else if (pilihan === 'total') {
    kas = kasTotal;
  }

  document.getElementById('jumlah-kas').innerText = "Rp" + kas.toLocaleString('id-ID');
}