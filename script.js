// Database Mock / Simulasi Data Santri
const databaseSantri = {
  zidan: {
    nama: "Ahmad Zidan Al-Fatih",
    panggilan: "Ahmad Zidan",
    kelas: "8 Tahfidz A",
    musyrif: "Ustadz H. Abdullah, S.Pd.I",
    totalZiyadah: "6 Juz (Juz 25-30)",
    avatar: "AZ",
    mingguan: {
      "minggu-1": {
        ziyadah: "QS. Al-Mulk: 1-15",
        lancar: "Sangat Lancar",
        tajwid: "Mumtaz (A)",
        murojaah: "Juz 29 (Lancar)",
        tilawah: "12 Halaman",
        predikat: "Mumtaz",
      },
      "minggu-2": {
        ziyadah: "QS. Al-Mulk: 16-30",
        lancar: "Lancar",
        tajwid: "Jayyid Jiddan (B+)",
        murojaah: "Juz 28 (Cukup)",
        tilawah: "14 Halaman",
        predikat: "Jayyid Jiddan",
      },
      "minggu-3": {
        ziyadah: "QS. Al-Qalam: 1-25",
        lancar: "Sangat Lancar",
        tajwid: "Mumtaz (A)",
        murojaah: "Juz 27-28 (Lancar)",
        tilawah: "15 Halaman",
        predikat: "Mumtaz",
      },
      "minggu-4": {
        ziyadah: "QS. Al-Qalam: 26-52",
        lancar: "Sangat Lancar",
        tajwid: "Mumtaz (A)",
        murojaah: "Juz 29 (Lancar)",
        tilawah: "17 Halaman",
        predikat: "Mumtaz Istimewa",
      },
    },
    catatanMingguIni:
      "Ananda menunjukkan hafalan ziyadah yang sangat baik dan lancar. Namun perlu diperhatikan kembali tajwid pada hukum Mad Lazim di beberapa ayat terakhir.",
    berita: [
      {
        judul: "Apresiasi Tasmi' 1 Juz Sekali Duduk",
        tanggal: "28 Maret 2026",
        kategori: "Prestasi Tahfidz",
        isi: "Ahmad Zidan berhasil menyelesaikan setoran Tasmi' Juz 30 sekali duduk tanpa ada kesalahan mutqin di hadapan Ustadz Abdullah.",
        badgeBg: "bg-amber-100 text-amber-800",
      },
      {
        judul: "Santri Teladan Pekan Ini",
        tanggal: "21 Maret 2026",
        kategori: "Kedisiplinan",
        isi: "Terpilih sebagai santri paling aktif dalam menyetorkan murojaah harian tepat waktu selama bulan Ramadan.",
        badgeBg: "bg-emerald-100 text-emerald-800",
      },
    ],
  },
  fatimah: {
    nama: "Fatimah Az-Zahra",
    panggilan: "Fatimah",
    kelas: "9 Tahfidz B",
    musyrif: "Ustadzah Hajjah Maryam, S.Th.I",
    totalZiyadah: "12 Juz (Juz 19-30)",
    avatar: "FA",
    mingguan: {
      "minggu-1": {
        ziyadah: "QS. An-Naml: 1-20",
        lancar: "Sangat Lancar",
        tajwid: "Mumtaz (A)",
        murojaah: "Juz 20 (Lancar)",
        tilawah: "15 Halaman",
        predikat: "Mumtaz",
      },
      "minggu-2": {
        ziyadah: "QS. An-Naml: 21-45",
        lancar: "Sangat Lancar",
        tajwid: "Mumtaz (A)",
        murojaah: "Juz 21 (Lancar)",
        tilawah: "16 Halaman",
        predikat: "Mumtaz",
      },
      "minggu-3": {
        ziyadah: "QS. An-Naml: 46-75",
        lancar: "Lancar",
        tajwid: "Jayyid Jiddan (B+)",
        murojaah: "Juz 22 (Lancar)",
        tilawah: "18 Halaman",
        predikat: "Jayyid Jiddan",
      },
      "minggu-4": {
        ziyadah: "QS. An-Naml: 76-93",
        lancar: "Sangat Lancar",
        tajwid: "Mumtaz (A)",
        murojaah: "Juz 23 (Mutqin)",
        tilawah: "20 Halaman",
        predikat: "Mumtaz Istimewa",
      },
    },
    catatanMingguIni:
      "Fatimah sangat konsisten dalam menjaga kualitas suara dan tajwid tilawahnya. Capaian ziyadah bulan ini melampaui target pesantren.",
    berita: [
      {
        judul: "Khotmul Qur'an 10 Juz",
        tanggal: "29 Maret 2026",
        kategori: "Prestasi Besar",
        isi: "Fatimah Az-Zahra sukses merampungkan ujian verifikasi hafalan 10 juz dengan predikat nilai sempurna.",
        badgeBg: "bg-purple-100 text-purple-800",
      },
    ],
  },
  umar: {
    nama: "Muhammad Umar",
    panggilan: "Umar",
    kelas: "7 Tahfidz C",
    musyrif: "Ustadz Ahmad Fauzi, Lc.",
    totalZiyadah: "3 Juz (Juz 28-30)",
    avatar: "MU",
    mingguan: {
      "minggu-1": {
        ziyadah: "QS. Al-Waqiah: 1-30",
        lancar: "Lancar",
        tajwid: "Jayyid (B)",
        murojaah: "Juz 30 (Cukup)",
        tilawah: "10 Halaman",
        predikat: "Jayyid",
      },
      "minggu-2": {
        ziyadah: "QS. Al-Waqiah: 31-96",
        lancar: "Sangat Lancar",
        tajwid: "Jayyid Jiddan (B+)",
        murojaah: "Juz 30 (Lancar)",
        tilawah: "12 Halaman",
        predikat: "Jayyid Jiddan",
      },
      "minggu-3": {
        ziyadah: "QS. Ar-Rahman: 1-40",
        lancar: "Lancar",
        tajwid: "Jayyid Jiddan (B+)",
        murojaah: "Juz 29 (Lancar)",
        tilawah: "13 Halaman",
        predikat: "Jayyid Jiddan",
      },
      "minggu-4": {
        ziyadah: "QS. Ar-Rahman: 41-78",
        lancar: "Sangat Lancar",
        tajwid: "Mumtaz (A)",
        murojaah: "Juz 29-30 (Lancar)",
        tilawah: "15 Halaman",
        predikat: "Mumtaz",
      },
    },
    catatanMingguIni:
      "Ananda Umar mengalami peningkatan grafik hafalan yang sangat pesat dibandingkan bulan lalu. Pertahankan kedisiplinan setoran paginya.",
    berita: [
      {
        judul: "Juara Harapan 1 Tahfidz Antar Kelas",
        tanggal: "25 Maret 2026",
        kategori: "Lomba Internal",
        isi: "Muhammad Umar menunjukkan performa menghafal cepat dalam event Musabaqah Hifdzil Qur'an tingkat kelas 7.",
        badgeBg: "bg-blue-100 text-blue-800",
      },
    ],
  },
};

let currentSantriKey = "zidan";

// Fungsi untuk proses Login berdasarkan nama anak yang diinput
function handleLogin() {
  const inputElement = document.getElementById("input-nama-anak");
  const errorAlert = document.getElementById("login-error");

  if (!inputElement) return;

  const inputNama = inputElement.value.trim().toLowerCase();

  if (inputNama === "") {
    if (errorAlert) errorAlert.classList.remove("hidden");
    return;
  }

  // Cari kunci santri yang cocok berdasarkan input nama
  let foundKey = null;
  for (const key in databaseSantri) {
    const santri = databaseSantri[key];
    const namaLengkap = santri.nama.toLowerCase();
    const namaPanggilan = santri.panggilan.toLowerCase();

    if (
      namaLengkap.includes(inputNama) ||
      namaPanggilan.includes(inputNama) ||
      key.toLowerCase() === inputNama
    ) {
      foundKey = key;
      break;
    }
  }

  // Jika ditemukan, masuk ke aplikasi. Jika tidak, tampilkan pesan error.
  if (foundKey) {
    currentSantriKey = foundKey;
    if (errorAlert) errorAlert.classList.add("hidden");
    inputElement.value = ""; // Bersihkan input

    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("main-app").classList.remove("hidden");

    loadSantriData();
  } else {
    if (errorAlert) errorAlert.classList.remove("hidden");
  }
}

// Fungsi Keluar / Logout
function handleLogout() {
  document.getElementById("main-app").classList.add("hidden");
  document.getElementById("login-page").classList.remove("hidden");
}

// Memuat data santri ke dalam UI
function loadSantriData() {
  const data = databaseSantri[currentSantriKey];

  const parentNameEl = document.getElementById("sidebar-parent-name");
  if (parentNameEl) parentNameEl.innerText = `Wali dari ${data.panggilan}`;

  document.getElementById("header-santri-name").innerText = data.nama;
  document.getElementById("header-santri-class").innerText = data.kelas;
  document.getElementById("avatar-initial").innerText = data.avatar;

  document.getElementById("dash-greeting").innerText =
    `Ahlan wa Sahlan, Wali dari ${data.panggilan}`;
  document.getElementById("dash-musyrif").innerText = data.musyrif;
  document.getElementById("dash-total-ziyadah").innerText = data.totalZiyadah;
  document.getElementById("dash-catatan").innerText = data.catatanMingguIni;

  const minggu4 = data.mingguan["minggu-4"];
  document.getElementById("stat-ziyadah").innerText = minggu4.ziyadah;
  document.getElementById("stat-murojaah").innerText = minggu4.murojaah;
  document.getElementById("stat-tilawah").innerText = minggu4.tilawah;

  // Render Berita
  const beritaContainer = document.getElementById("berita-container");
  beritaContainer.innerHTML = "";
  data.berita.forEach((item) => {
    beritaContainer.innerHTML += `
            <div class="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-200 flex flex-col justify-between space-y-4">
                <div>
                    <div class="flex justify-between items-center mb-2">
                        <span class="text-[10px] font-bold px-2.5 py-1 rounded-full ${item.badgeBg}">${item.kategori}</span>
                        <span class="text-xs text-slate-400"><i class="fa-regular fa-calendar"></i> ${item.tanggal}</span>
                    </div>
                    <h4 class="font-bold text-slate-800 text-sm sm:text-base mb-1">${item.judul}</h4>
                    <p class="text-xs text-slate-600 leading-relaxed">${item.isi}</p>
                </div>
                <button onclick="alert('Ucapan apresiasi berhasil dikirim ke musyrif!')" class="w-full bg-slate-50 hover:bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-semibold py-2 rounded-xl transition">
                    <i class="fa-regular fa-heart"></i> Kirim Ucapan & Doa
                </button>
            </div>
        `;
  });

  renderRekapData();
}

// Render Data Rekap Mingguan berdasarkan Dropdown
function renderRekapData() {
  const selectMinggu = document.getElementById("select-minggu");
  if (!selectMinggu) return;

  const mingguVal = selectMinggu.value;
  const dataMinggu = databaseSantri[currentSantriKey].mingguan[mingguVal];

  document.getElementById("rekap-ziyadah-surah").innerText = dataMinggu.ziyadah;
  document.getElementById("rekap-ziyadah-lancar").innerText = dataMinggu.lancar;
  document.getElementById("rekap-ziyadah-tajwid").innerText = dataMinggu.tajwid;
  document.getElementById("rekap-murojaah").innerText = dataMinggu.murojaah;
  document.getElementById("rekap-tilawah").innerText = dataMinggu.tilawah;
  document.getElementById("rekap-predikat").innerText = dataMinggu.predikat;
}

// Navigasi Tab SPA (Mendukung Desktop & Mobile Bottom Nav)
function switchTab(tabName) {
  document.getElementById("tab-dashboard").classList.add("hidden");
  document.getElementById("tab-rekap").classList.add("hidden");
  document.getElementById("tab-berita").classList.add("hidden");

  // Reset tombol Desktop Sidebar
  ["dashboard", "rekap", "berita"].forEach((t) => {
    const btn = document.getElementById(`nav-${t}`);
    if (btn) {
      btn.className =
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition text-emerald-200 hover:bg-emerald-800 hover:text-white";
    }
  });

  // Reset tombol Mobile Bottom Nav
  ["dashboard", "rekap", "berita"].forEach((t) => {
    const mobBtn = document.getElementById(`mob-nav-${t}`);
    if (mobBtn) {
      mobBtn.className =
        "flex flex-col items-center py-1 px-3 text-emerald-300 hover:text-white";
    }
  });

  // Tampilkan tab aktif
  const targetTab = document.getElementById(`tab-${tabName}`);
  if (targetTab) targetTab.classList.remove("hidden");

  // Aktifkan style tombol Desktop Sidebar
  const activeBtn = document.getElementById(`nav-${tabName}`);
  if (activeBtn) {
    activeBtn.className =
      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition bg-emerald-800 text-amber-400";
  }

  // Aktifkan style tombol Mobile Bottom Nav
  const activeMobBtn = document.getElementById(`mob-nav-${tabName}`);
  if (activeMobBtn) {
    activeMobBtn.className =
      "flex flex-col items-center py-1 px-3 text-amber-400";
  }

  // Ubah judul header
  const titles = {
    dashboard: "Dashboard Perkembangan Hafalan",
    rekap: "Rekapitulasi Capaian Mingguan",
    berita: "Berita & Apresiasi Santri",
  };
  const headerTitle = document.getElementById("header-title");
  if (headerTitle) headerTitle.innerText = titles[tabName];
}

// Tambahan agar bisa tekan tombol "Enter" saat mengetik nama di input
document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("input-nama-anak");
  if (inputField) {
    inputField.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        handleLogin();
      }
    });
  }
});
