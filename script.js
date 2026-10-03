// Database Mock / Simulasi Data Santri
// Database Mock / Simulasi Data Santri (Berdasarkan Struktur Musyrif Terbaru)
const databaseSantri = {
    // === 1. UST. FADHIL ADZIM ===
    malik: {
        nama: "Malik Ibnu Dinar",
        panggilan: "Malik",
        kelas: "6 KMI",
        musyrif: "Ust. Fadhil Adzim",
        totalZiyadah: "30 Juz (Juz 1-30)",
        avatar: "M",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "Mumtaz (A)", murojaah: "Juz 29 (Lancar)", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "Mumtaz (A)", murojaah: "Juz 28 (Cukup)", tilawah: "14 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "Mumtaz (A)", murojaah: "Juz 27-28 (Lancar)", tilawah: "15 Halaman", predikat: "Mumtaz" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "Mumtaz (A)", murojaah: "Juz 29 (Lancar)", tilawah: "17 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "Juz 29-30 (Mutqin)", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz (A)", murojaah: "Juz 1-30", totalTilawah: "62 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Ananda Malik menunjukkan prestasi luar biasa dalam menyelesaikan Tasmi' 30 Juz." }
        },
        catatanMingguIni: "Ananda menunjukkan hafalan yang sangat baik dan lancar. Namun perlu diperhatikan kembali tajwid pada hukum Mad Lazim di beberapa ayat terakhir.",
        berita: [
            { judul: "Apresiasi Tasmi' 1 Juz Sekali Duduk", tanggal: "28 September 2026", kategori: "Prestasi Tahfidz", isi: "Berhasil menyelesaikan setoran Tasmi' Juz 30 sekali duduk tanpa ada kesalahan mutqin.", badgeBg: "bg-amber-100 text-amber-800" }
        ]
    },
    rifli: {
        nama: "Muhammad Rifli",
        panggilan: "Rifli",
        kelas: "6 KMI",
        musyrif: "Ust. Fadhil Adzim",
        totalZiyadah: "15 Juz (Juz 1-10 & 26-30)",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Hujurat: 1-10", lancar: "Lancar", tajwid: "Mumtaz (A)", murojaah: "Juz 29 (Lancar)", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-2": { ziyadah: "QS. Al-Hujurat: 11-18", lancar: "Sangat Lancar", tajwid: "Mumtaz (A)", murojaah: "Juz 30 (Lancar)", tilawah: "14 Halaman", predikat: "Mumtaz Istimewa" },
            "minggu-3": { ziyadah: "QS. Qaf: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28 (Lancar)", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Qaf: 26-45", lancar: "Sangat Lancar", tajwid: "Mumtaz (A)", murojaah: "Juz 27 (Lancar)", tilawah: "15 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Hujurat & Qaf", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz (A)", murojaah: "Juz 27-30", totalTilawah: "54 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Progres hafalan stabil dan bacaan tartilnya sangat baik." }
        },
        catatanMingguIni: "Pertahankan kedisiplinan setoran pagi dan tingkatkan murojaah mandiri di kamar.",
        berita: []
    },
    hilmy: {
        nama: "Hilmy Ilman A.",
        panggilan: "Hilmy",
        kelas: "5 KMI",
        musyrif: "Ust. Fadhil Adzim",
        totalZiyadah: "15 Juz (Juz 1-10 & 26-30)",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Waqiah: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Waqiah: 26-96", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Ar-Rahman: 1-35", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "14 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Ar-Rahman: 36-78", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Waqiah & Ar-Rahman", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Semangat menghafal meningkat drastis pada paruh kedua bulan." }
        },
        catatanMingguIni: "Fokus pada makhraj huruf hijaiyah yang mendekati sifat istifal.",
        berita: []
    },
    rendra: {
        nama: "Rendra Adlilla A.",
        panggilan: "Rendra",
        kelas: "5 KMI",
        musyrif: "Ust. Fadhil Adzim",
        totalZiyadah: "14 Juz (Juz 1-9 & 26-30)",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "QS. At-Taubah: 1-30", lancar: "Lancar", tajwid: "Jayyid (B)", murojaah: "Juz 30 (Mumtaz)", tilawah: "10 Halaman", predikat: "Jayyid" },
            "minggu-2": { ziyadah: "QS. At-Taubah: 31-96", lancar: "Sangat Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 29 (Mumtaz)", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-3": { ziyadah: "QS. At-Taubah: 97-129", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28 (Mumtaz)", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Yunus: 1-25", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 28-30 (Mumtaz)", tilawah: "15 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. At-Taubah & Yunus", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Ananda Rendra mengalami peningkatan grafik hafalan yang sangat pesat." }
        },
        catatanMingguIni: "Pertahankan kedisiplinan setoran paginya.",
        berita: [
            { judul: "Juara Harapan 1 Tahfidz Antar Kelas", tanggal: "25 September 2026", kategori: "Lomba Internal", isi: "Menunjukkan performa menghafal cepat dalam event Musabaqah Hifdzil Qur'an.", badgeBg: "bg-blue-100 text-blue-800" }
        ]
    },
    bilal: {
        nama: "Bilal Restu Permana",
        panggilan: "Bilal",
        kelas: "2 KMI",
        musyrif: "Ust. Fadhil Adzim",
        totalZiyadah: "3 Juz (Juz 28-30)",
        avatar: "B",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Anfal: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Anfal: 21-45", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Anfal: 46-75", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. At-Taubah: 1-20", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Anfal & At-Taubah", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "47 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Perkembangan sangat baik dan rajin mengikuti halaqah." }
        },
        catatanMingguIni: "Tingkatkan kelancaran pada ayat-ayat panjang.",
        berita: []
    },
    alfian: {
        nama: "Alfian Lisanush Shidqy",
        panggilan: "Alfian",
        kelas: "2 KMI",
        musyrif: "Ust. Fadhil Adzim",
        totalZiyadah: "2 Juz (Juz 29-30)",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Ibrahim: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Ibrahim: 21-52", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Hijr: 1-30", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "14 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Hijr: 31-99", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "16 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Ibrahim & Al-Hijr", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "55 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Sangat disiplin dan target hafalan tercapai sempurna." }
        },
        catatanMingguIni: "Pertahankan konsistensi setoran harian.",
        berita: []
    },

    // === 2. UST. SAKTI WIBOWO ===
    arziki: {
        nama: "Arziki Farrez Abyan",
        panggilan: "Arziki",
        kelas: "1 KMI",
        musyrif: "Ust. Sakti Wibowo",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "QS. An-Nahl: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. An-Nahl: 26-50", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "14 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. An-Nahl: 51-80", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. An-Nahl: 81-128", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "16 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. An-Nahl (Selesai)", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "55 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Berhasil merampungkan Surah An-Nahl dengan lancar." }
        },
        catatanMingguIni: "Tingkatkan ketelitian pada ayat-ayat mutasyabih.",
        berita: []
    },
    nazwar: {
        nama: "Nazwar Al Razfa Nugraha",
        panggilan: "Nazwar",
        kelas: "1 KMI",
        musyrif: "Ust. Sakti Wibowo",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Isra: 1-20", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-2": { ziyadah: "QS. Al-Isra: 21-49", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-3": { ziyadah: "QS. Al-Isra: 50-85", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 28", tilawah: "15 Halaman", predikat: "Mumtaz" },
            "minggu-4": { ziyadah: "QS. Al-Isra: 86-111", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "17 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Isra (Selesai)", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "57 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Prestasi hafalan sangat baik dan konsisten." }
        },
        catatanMingguIni: "Pertahankan semangat setoran pagi.",
        berita: []
    },
    reyhan: {
        nama: "Muhammad Reyhan Ulul Azmi",
        panggilan: "Reyhan",
        kelas: "1 KMI",
        musyrif: "Ust. Sakti Wibowo",
        totalZiyadah: "-",
        avatar: "M",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Kahfi: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Kahfi: 26-50", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Kahfi: 51-75", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Kahfi: 76-110", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Kahfi (Selesai)", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Berhasil menyelesaikan Surah Al-Kahfi tepat waktu." }
        },
        catatanMingguIni: "Perhatikan hukum bacaan ikhfa dan idgham.",
        berita: []
    },
    ibnuadam: {
        nama: "Ibnu Adam Alfirdaus",
        panggilan: "Ibnu",
        kelas: "1 KMI",
        musyrif: "Ust. Sakti Wibowo",
        totalZiyadah: "-",
        avatar: "I",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Maryam: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Maryam: 21-50", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Maryam: 51-75", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Maryam: 76-98", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Maryam (Selesai)", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "47 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Progres hafalan surat Maryam sangat baik." }
        },
        catatanMingguIni: "Tingkatkan murojaah juz awal.",
        berita: []
    },
    damma: {
        nama: "Damma Muhammad Hamzah",
        panggilan: "Damma",
        kelas: "5 KMI",
        musyrif: "Ust. Sakti Wibowo",
        totalZiyadah: "1 Juz (Juz 30)",
        avatar: "D",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Taha: 1-30", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Taha: 31-75", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Taha: 76-115", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Taha: 116-135", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Taha (Selesai)", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Sangat tekun dan disiplin dalam setoran." }
        },
        catatanMingguIni: "Pertahankan performa bacaan.",
        berita: []
    },
    barik: {
        nama: "Barik Akram Fausta",
        panggilan: "Barik",
        kelas: "1 KMI",
        musyrif: "Ust. Sakti Wibowo",
        totalZiyadah: "1 Juz (Juz 30)",
        avatar: "B",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Anbiya: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Anbiya: 26-60", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Anbiya: 61-90", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Anbiya: 91-112", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Anbiya (Selesai)", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Pencapaian sangat memuaskan bulan ini." }
        },
        catatanMingguIni: "Tingkatkan fokus pada makhraj huruf.",
        berita: []
    },

 // === 3. UST. LATHIF AZ ZAIN ===
    khairul: {
        nama: "Khairul Azzam M.",
        panggilan: "Khairul",
        kelas: "5 KMI",
        musyrif: "Ust. Lathif Az Zain",
        totalZiyadah: "7 Juz (Juz 1-2 & 26-30)",
        avatar: "K",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Hajj: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Hajj: 26-50", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "14 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Hajj: 51-78", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Mu'minun: 1-35", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Hajj & Al-Mu'minun", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "54 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Konsistensi setoran sangat baik." }
        },
        catatanMingguIni: "Pertahankan hafalan dengan murojaah rutin.",
        berita: []
    },
    taqia: {
        nama: "M. Taqia Akmal Firdaus",
        panggilan: "Taqia",
        kelas: "5 KMI",
        musyrif: "Ust. Lathif Az Zain",
        totalZiyadah: "7 Juz (Juz 1-2 & 26-30)",
        avatar: "T",
        mingguan: {
            "minggu-1": { ziyadah: "QS. An-Nur: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. An-Nur: 21-45", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. An-Nur: 46-64", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Furqan: 1-30", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. An-Nur & Al-Furqan", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Sangat bersemangat dalam menghafal." }
        },
        catatanMingguIni: "Tingkatkan ketelitian pada ayat mutasyabih An-Nur.",
        berita: []
    },
    zaki: {
        nama: "M. Zaki Alfarisi",
        panggilan: "Zaki",
        kelas: "5 KMI",
        musyrif: "Ust. Lathif Az Zain",
        totalZiyadah: "7 Juz (Juz 1-2 & 26-30)",
        avatar: "Z",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Asy-Syu'ara: 1-50", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Asy-Syu'ara: 51-110", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Asy-Syu'ara: 111-175", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Asy-Syu'ara: 176-227", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Asy-Syu'ara", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Tuntas Surah Asy-Syu'ara dengan baik." }
        },
        catatanMingguIni: "Perhatikan panjang pendek mad.",
        berita: []
    },
    zaidan: {
        nama: "Zaidan Hilmi Adzka Rahman",
        panggilan: "Zaidan",
        kelas: "5 KMI",
        musyrif: "Ust. Lathif Az Zain",
        totalZiyadah: "8 Juz (Juz 1-3 & 26-30)",
        avatar: "Z",
        mingguan: {
            "minggu-1": { ziyadah: "QS. An-Naml: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. An-Naml: 26-55", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. An-Naml: 56-85", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. An-Naml: 86-93", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. An-Naml", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Pencapaian stabil." }
        },
        catatanMingguIni: "Pertahankan semangat setoran pagi.",
        berita: []
    },
    azzam: {
        nama: "M. Azzam Hanif",
        panggilan: "Azzam",
        kelas: "5 KMI",
        musyrif: "Ust. Lathif Az Zain",
        totalZiyadah: "7 Juz (Juz 1-2 & 26-30)",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Qasas: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Qasas: 21-45", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Qasas: 46-75", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Qasas: 76-88", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Qasas", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "49 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Sangat rajin murojaah." }
        },
        catatanMingguIni: "Tingkatkan kelancaran.",
        berita: []
    },
    karimafa: {
        nama: "Karimafa Guruminda",
        panggilan: "Karimafa",
        kelas: "4 KMI",
        musyrif: "Ust. Lathif Az Zain",
        totalZiyadah: "7 Juz (Juz 1-2 & 26-30)",
        avatar: "K",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Ankabut: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Ankabut: 21-45", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Ankabut: 46-69", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Ar-Rum: 1-30", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Ankabut & Ar-Rum", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Prestasi sangat baik." }
        },
        catatanMingguIni: "Pertahankan konsistensi.",
        berita: []
    },
    althof: {
        nama: "Althof Hamdan Musthofa",
        panggilan: "Althof",
        kelas: "3 KMI",
        musyrif: "Ust. Lathif Az Zain",
        totalZiyadah: "4 Juz (Juz 27-30)",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Luqman: 1-15", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Luqman: 16-34", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. As-Sajdah: 1-15", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. As-Sajdah: 16-30", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Luqman & As-Sajdah", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "47 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Sangat disiplin." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    fauzan: {
        nama: "Fauzan Alghifary",
        panggilan: "Fauzan",
        kelas: "6 KMI",
        musyrif: "Ust. Lathif Az Zain",
        totalZiyadah: "11 Juz (Juz 1-6 & 26-30)",
        avatar: "F",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Ahzab: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Ahzab: 21-50", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Ahzab: 51-73", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Saba: 1-25", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Ahzab & Saba", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Progres sangat memuaskan." }
        },
        catatanMingguIni: "Pertahankan hafalan.",
        berita: []
    },

    // === 4. UST. ALIF DHIYAUL HAQ ===
    ibrahimovic: {
        nama: "M. Ibrahimovic",
        panggilan: "Ibrahimovic",
        kelas: "4 KMI",
        musyrif: "Ust. Alif Dhiyaul Haq",
        totalZiyadah: "6 Juz (Juz 1 & 26-30)",
        avatar: "I",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Fatir: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Fatir: 21-45", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "14 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Yasin: 1-40", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Yasin: 41-83", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "16 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Fatir & Yasin", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "55 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Semangat tinggi dalam menyetor hafalan." }
        },
        catatanMingguIni: "Tingkatkan kelancaran bacaan Yasin.",
        berita: []
    },
    adzfar: {
        nama: "Adzfar Raihan Zahiruddin",
        panggilan: "Adzfar",
        kelas: "5 KMI",
        musyrif: "Ust. Alif Dhiyaul Haq",
        totalZiyadah: "6 Juz (Juz 1 & 26-30)",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "QS. As-Saffat: 1-50", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. As-Saffat: 51-115", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. As-Saffat: 116-182", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Sad: 1-40", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. As-Saffat & Sad", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Prestasi sangat membanggakan." }
        },
        catatanMingguIni: "Pertahankan konsistensi tajwid.",
        berita: []
    },
    nizam: {
        nama: "Nizam Rayi Utomo",
        panggilan: "Nizam",
        kelas: "4 KMI",
        musyrif: "Ust. Alif Dhiyaul Haq",
        totalZiyadah: "6 Juz (Juz 1 & 26-30)",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Az-Zumar: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Az-Zumar: 26-55", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Az-Zumar: 56-75", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Ghafir: 1-25", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Az-Zumar & Ghafir", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Progres stabil." }
        },
        catatanMingguIni: "Perhatikan hukum idgham.",
        berita: []
    },
    abdurrahman: {
        nama: "M. Abdurrahman",
        panggilan: "Abdurrahman",
        kelas: "4 KMI",
        musyrif: "Ust. Alif Dhiyaul Haq",
        totalZiyadah: "6 Juz (Juz 1 & 26-30)",
        avatar: "M",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Ghafir: 26-50", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Ghafir: 51-85", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Fussilat: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Fussilat: 26-54", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Ghafir & Fussilat", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Tekun dan giat." }
        },
        catatanMingguIni: "Pertahankan performa.",
        berita: []
    },
    haikal: {
        nama: "Haikal Ilman Abdurrahman",
        panggilan: "Haikal",
        kelas: "3 KMI",
        musyrif: "Ust. Alif Dhiyaul Haq",
        totalZiyadah: "4 Juz (Juz 27-30)",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Asy-Syura: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Asy-Syura: 26-53", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Az-Zukhruf: 1-30", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Az-Zukhruf: 31-89", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Asy-Syura & Az-Zukhruf", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "49 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Sangat baik." }
        },
        catatanMingguIni: "Tingkatkan murojaah.",
        berita: []
    },
    khayru: {
        nama: "Khayru Dzaky Abdan R.",
        panggilan: "Khayru",
        kelas: "5 KMI",
        musyrif: "Ust. Alif Dhiyaul Haq",
        totalZiyadah: "4 Juz (Juz 27-30)",
        avatar: "K",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Ad-Dukhan: 1-59", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Jatsiyah: 1-37", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Ahqaf: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Ahqaf: 21-35", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Ad-Dukhan s.d Al-Ahqaf", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Luar biasa target bulanan tercapai." }
        },
        catatanMingguIni: "Pertahankan prestasi.",
        berita: []
    },
    mzaki: {
        nama: "M. Zaki Pratama",
        panggilan: "Zaki",
        kelas: "2 KMI",
        musyrif: "Ust. Alif Dhiyaul Haq",
        totalZiyadah: "1 Juz (Juz 30)",
        avatar: "Z",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Muhammad: 1-20", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Muhammad: 21-38", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Fath: 1-15", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Fath: 16-29", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Muhammad & Al-Fath", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "47 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Stabil." }
        },
        catatanMingguIni: "Perhatikan tajwid.",
        berita: []
    },
    fathra: {
        nama: "Fathra Masya A.",
        panggilan: "Fathra",
        kelas: "6 KMI",
        musyrif: "Ust. Alif Dhiyaul Haq",
        totalZiyadah: "9 Juz (Juz 1-4 & 26-30)",
        avatar: "F",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Hujurat: 1-9", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Qaf: 1-25", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Qaf: 26-45", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Adz-Dzariyat: 1-30", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Hujurat s.d Adz-Dzariyat", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Sangat baik." }
        },
        catatanMingguIni: "Pertahankan fokus.",
        berita: []
    },

    // === 5. UST. SYAHID ===
    gheits: {
        nama: "M Gheits Syauqi Imtiyazi",
        panggilan: "Gheits",
        kelas: "2 KMI",
        musyrif: "Ust. Syahid",
        totalZiyadah: "1 Juz (Juz 30)",
        avatar: "G",
        mingguan: {
            "minggu-1": { ziyadah: "QS. At-Tur: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. At-Tur: 26-49", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "14 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. An-Najm: 1-30", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. An-Najm: 31-62", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "16 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. At-Tur & An-Najm", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "55 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Disiplin hafalan sangat terjaga." }
        },
        catatanMingguIni: "Tingkatkan ketelitian.",
        berita: []
    },
    abyan: {
        nama: "Abyan Al-Zahir",
        panggilan: "Abyan",
        kelas: "3 KMI",
        musyrif: "Ust. Syahid",
        totalZiyadah: "3 Juz (Juz 27-30)",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Qamar: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Qamar: 26-55", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Ar-Rahman: 1-40", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Ar-Rahman: 41-78", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Qamar & Ar-Rahman", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Prestasi sangat baik." }
        },
        catatanMingguIni: "Pertahankan konsistensi.",
        berita: []
    },
    naufal: {
        nama: "Naufal Syan R",
        panggilan: "Naufal",
        kelas: "3 KMI",
        musyrif: "Ust. Syahid",
        totalZiyadah: "9 Juz (Juz 27-30)",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Waqiah: 1-25", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Waqiah: 26-96", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Hadid: 1-15", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Hadid: 16-29", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Waqiah & Al-Hadid", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Stabil dan rajin." }
        },
        catatanMingguIni: "Perhatikan tajwid.",
        berita: []
    },
    ahmadhunaif: {
        nama: "Ahmad Hunaif",
        panggilan: "Hunaif",
        kelas: "3 KMI",
        musyrif: "Ust. Syahid",
        totalZiyadah: "4 Juz (Juz 27-30)",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Mujadilah: 1-10", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Mujadilah: 11-22", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Al-Hasyr: 1-14", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Al-Hasyr: 15-24", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Mujadilah & Al-Hasyr", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "50 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Tekun." }
        },
        catatanMingguIni: "Pertahankan performa.",
        berita: []
    },
    fathir: {
        nama: "Fathir Zahy Absyar",
        panggilan: "Fathir",
        kelas: "3 KMI",
        musyrif: "Ust. Syahid",
        totalZiyadah: "4 Juz (Juz 27-30)",
        avatar: "F",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Mumtahanah: 1-7", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Mumtahanah: 8-13", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. Ash-Shaff: 1-7", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "13 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. Ash-Shaff: 8-14", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Mumtahanah & Ash-Shaff", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "49 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Baik." }
        },
        catatanMingguIni: "Tingkatkan murojaah.",
        berita: []
    },
    hamizan: {
        nama: "Hamizan Aiman Agustin",
        panggilan: "Hamizan",
        kelas: "3 KMI",
        musyrif: "Ust. Syahid",
        totalZiyadah: "3 Juz (Juz 28-30)",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "QS. Al-Jumu'ah: 1-11", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. Al-Munafiqun: 1-11", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "13 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. At-Taghabun: 1-9", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "12 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. At-Taghabun: 10-18", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "15 Halaman", predikat: "Mumtaz Istimewa" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. Al-Jumu'ah s.d At-Taghabun", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "51 Halaman", predikatBulan: "Mumtaz Istimewa", catatanBulan: "Sangat baik." }
        },
        catatanMingguIni: "Pertahankan prestasi.",
        berita: []
    },
    revan: {
        nama: "Revan Anggara Putra",
        panggilan: "Revan",
        kelas: "2 KMI",
        musyrif: "Ust. Syahid",
        totalZiyadah: "1 Juz (Juz 30)",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "QS. At-Talaq: 1-6", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 30", tilawah: "10 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-2": { ziyadah: "QS. At-Talaq: 7-12", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 29", tilawah: "12 Halaman", predikat: "Mumtaz" },
            "minggu-3": { ziyadah: "QS. At-Tahrim: 1-6", lancar: "Lancar", tajwid: "Jayyid Jiddan", murojaah: "Juz 28", tilawah: "11 Halaman", predikat: "Jayyid Jiddan" },
            "minggu-4": { ziyadah: "QS. At-Tahrim: 7-12", lancar: "Sangat Lancar", tajwid: "Mumtaz", murojaah: "Juz 30", tilawah: "14 Halaman", predikat: "Mumtaz" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "QS. At-Talaq & At-Tahrim", rataLancar: "Sangat Lancar", rataTajwid: "Mumtaz", murojaah: "Juz 28-30", totalTilawah: "47 Halaman", predikatBulan: "Mumtaz", catatanBulan: "Stabil." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
// === 6. USTD. Ghina ===
amandaKahalifah: {
        nama: "Amanda Kahalifah N F",
        panggilan: "Amanda",
        kelas: " 4 KMA", // Silakan sesuaikan jika perlu
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tetap semangat menghafal.",
        berita: []
    },
    ashilaMahira: {
        nama: "Ashila Mahira S",
        panggilan: "Ashila",
        kelas: "4 KMA",
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kedisiplinan setor.",
        berita: []
    },
    ayoendaDhiaul: {
        nama: "Ayoenda Dhiaul haq",
        panggilan: "ayoenda",
        kelas: "4 KMA",
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek bacaan.",
        berita: []
    },
    hasnaAlifia: {
        nama: "Hasna Alifia S",
        panggilan: "Hasna",
        kelas: "4 KMA",
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan konsistensi hafalan.",
        berita: []
    },
    khansaAiniya: {
        nama: "Khansa Ainiya S Z",
        panggilan: "Khansa",
        kelas: "4 KMA",
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "K",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Lebih teliti dalam makhraj.",
        berita: []
    },
    nauraSabiha: {
        nama: "Naura Sabiha",
        panggilan: "Naura",
        kelas: "4 KMA",
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan murojaah mandiri.",
        berita: []
    },
    salsabila: {
        nama: "Salsabila",
        panggilan: "Salsabila",
        kelas: "4 KMA",
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan tajwid dan kelancaran.",
        berita: []
    },
    syifaAzhari: {
        nama: "Syifa Azhari Zendhya R",
        panggilan: "Syifa",
        kelas: "4 KMA",
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan prestasi hafalan.",
        berita: []
    },
    babyRizwatul: {
        nama: "Baby Rizwatul M",
        panggilan: "Baby",
        kelas: " 5 KMA",
        musyrif: "Ustd. Ghina",
        totalZiyadah: "-",
        avatar: "B",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan fokus saat setor.",
        berita: []
    },

    // === 6. USTD. Istiqomah ===
    adindaRamadhani: {
        nama: "Adinda Ramadhani",
        panggilan: "Adinda",
        kelas: "5 KMA",
        musyrif: "Ustd. Istiqomah",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    dwikanajah: {
        nama: "Dwikanajah N A",
        panggilan: "Dwikanajah",
        kelas: "5 KMA",
        musyrif: "Ustd. Istiqomah",
        totalZiyadah: "-",
        avatar: "D",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kualitas hafalan.",
        berita: []
    },
    fadyaAubila: {
        nama: "Fadya Aubila Z",
        panggilan: "Fadya",
        kelas: "5 KMA",
        musyrif: "Ustd. Istiqomah",
        totalZiyadah: "-",
        avatar: "F",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan ritme setoran.",
        berita: []
    },
    nauraAlfia: {
        nama: "Naura Alfia M",
        panggilan: "Naura",
        kelas: "5 KMA",
        musyrif: "Ustd. Istiqomah",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek bacaan.",
        berita: []
    },
    putriAzzahro: {
        nama: "Putri Azzahro K",
        panggilan: "Putri",
        kelas: "5 KMA",
        musyrif: "Ustd. Istiqomah",
        totalZiyadah: "-",
        avatar: "P",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Lebih teliti saat menghafal ayat baru.",
        berita: []
    },
    nailiNurul: {
        nama: "Naili Nurul L E",
        panggilan: "Naili",
        kelas: "5 KMA",
        musyrif: "Ustd. Istiqomah",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan murojaah.",
        berita: []
    },
    haifaKhalda: {
        nama: "Haifa Khalda",
        panggilan: "Haifa",
        kelas: "6 KMA",
        musyrif: "Ustd. Istiqomah",
        totalZiyadah: "-",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan kelancaran.",
        berita: []
    },
    saskiaDianti: {
        nama: "Saskia Dianti",
        panggilan: "Saskia",
        kelas: "6 KMA",
        musyrif: "Ustd. Istiqomah",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },

    // === 6. USTD. Haura ===
    raishaYasmina: {
        nama: "Raisha Yasmina P",
        panggilan: "Raisha",
        kelas: "5 KMA",
        musyrif: "Ustd. Haura",
        totalZiyadah: "-",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kualitas bacaan.",
        berita: []
    },
    raishaMutia: {
        nama: "Raisha Mutia",
        panggilan: "Raisha",
        kelas: "5 KMA",
        musyrif: "Ustd. Haura",
        totalZiyadah: "-",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan hafalan.",
        berita: []
    },
    neishaHayati: {
        nama: "Neisha Hayati F",
        panggilan: "Neisha",
        kelas: "5 KMA",
        musyrif: "Ustd. Haura",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek.",
        berita: []
    },
    fathiaMisyari: {
        nama: "Fathia Misyari P",
        panggilan: "Fathia",
        kelas: "5 KMA",
        musyrif: "Ustd. Haura",
        totalZiyadah: "-",
        avatar: "F",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan fokus setoran.",
        berita: []
    },
    syafaSabrina: {
        nama: "Syafa Al-Sabrina",
        panggilan: "Syafa",
        kelas: "5 KMA",
        musyrif: "Ustd. Haura",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    syaimaNajmah: {
        nama: "Syaima Najmah",
        panggilan: "Syaima",
        kelas: "6 KMA",
        musyrif: "Ustd. Haura",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan hafalan.",
        berita: []
    },
    fatimahAzzahra: {
        nama: "Fatimah Az-zahra",
        panggilan: "Fatimah",
        kelas: "6 KMA",
        musyrif: "Ustd. Haura",
        totalZiyadah: "-",
        avatar: "F",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan murojaah.",
        berita: []
    },
    syahminaNimah: {
        nama: "Syahmina Ni'mah",
        panggilan: "Syahmina",
        kelas: "6 KMA",
        musyrif: "Ustd. Haura",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan kelancaran ayat.",
        berita: []
    },

    // === 6. USTD. Elva ===
husnaKamila: {
        nama: "Husna Kamila",
        panggilan: "Husna",
        kelas: "5 KMA",
        musyrif: "Ustd. Elva",
        totalZiyadah: "-",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kedisiplinan setoran.",
        berita: []
    },
    syifaSyakira: {
        nama: "Syifa Syakira",
        panggilan: "Syifa",
        kelas: "6 KMA",
        musyrif: "Ustd. Elva",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    reyhanaFatiha: {
        nama: "Reyhana Fatiha R",
        panggilan: "Reyhana",
        kelas: "6 KMA",
        musyrif: "Ustd. Elva",
        totalZiyadah: "-",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan hafalan dengan baik.",
        berita: []
    },
    // === 6. USTD. Fhia ===
    disaAida: {
        nama: "Disa Aida R",
        panggilan: "Disa",
        kelas: "6 KMA",
        musyrif: "Ustd. Fhia",
        totalZiyadah: "-",
        avatar: "D",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek ayat.",
        berita: []
    },
    jeyhanMaryam: {
        nama: "Jeyhan Maryam S H",
        panggilan: "Jeyhan",
        kelas: "6 KMA",
        musyrif: "Ustd. Fhia",
        totalZiyadah: "-",
        avatar: "J",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan fokus hafalan.",
        berita: []
    },
    sahilnyMudhia: {
        nama: "Sahilny Mudhia",
        panggilan: "Sahilny",
        kelas: "6 KMA",
        musyrif: "Ustd. Fhia",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan konsistensi setoran.",
        berita: []
    },
// === 6. USTD. dinda ===
balqis: {
        nama: "Balqis",
        panggilan: "Balqis",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "B",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tetap semangat menghafal.",
        berita: []
    },
    raisaDinda: {
        nama: "Raisa",
        panggilan: "Raisa",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    diyah: {
        nama: "Diyah",
        panggilan: "Diyah",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "D",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kualitas hafalan.",
        berita: []
    },
    naflah: {
        nama: "Naflah",
        panggilan: "Naflah",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan konsistensi.",
        berita: []
    },
    nafisah: {
        nama: "Nafisah",
        panggilan: "Nafisah",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek bacaan.",
        berita: []
    },
    sofyah: {
        nama: "Sofyah",
        panggilan: "Sofyah",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan murojaah mandiri.",
        berita: []
    },
    jahra: {
        nama: "Jahra",
        panggilan: "Jahra",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "J",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan kelancaran setoran.",
        berita: []
    },
    azzah: {
        nama: "Azzah",
        panggilan: "Azzah",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Lebih teliti saat menghafal.",
        berita: []
    },
    alfia: {
        nama: "Alfia",
        panggilan: "Alfia",
        kelas: "1 KMA",
        musyrif: "Ustd. Dinda",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan semangat.",
        berita: []
    },
    // === 6. USTD. Hanif ===
    safaPutri: {
        nama: "Safa Putri A",
        panggilan: "Safa",
        kelas: "2 KMA",
        musyrif: "Ustd. Hanif",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    salsabilaNadia: {
        nama: "Salsabila Nadia F",
        panggilan: "Salsabila",
        kelas: "2 KMA",
        musyrif: "Ustd. Hanif",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kualitas hafalan.",
        berita: []
    },
    hayaButsainah: {
        nama: "Haya Butsainah M",
        panggilan: "Haya",
        kelas: "2 KMA",
        musyrif: "Ustd. Hanif",
        totalZiyadah: "-",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan ritme setoran.",
        berita: []
    },
    ajengNawang: {
        nama: "Ajeng Nawang W",
        panggilan: "Ajeng",
        kelas: "2 KMA",
        musyrif: "Ustd. Hanif",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek bacaan.",
        berita: []
    },
    virgiaSiti: {
        nama: "Virgia Siti M",
        panggilan: "Virgia",
        kelas: "2 KMA",
        musyrif: "Ustd. Hanif",
        totalZiyadah: "-",
        avatar: "V",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Lebih teliti saat menghafal ayat baru.",
        berita: []
    },
    dhiyaFadidhotun: {
        nama: "Dhiya Fadidhotun N",
        panggilan: "Dhiya",
        kelas: "2 KMA",
        musyrif: "Ustd. Hanif",
        totalZiyadah: "-",
        avatar: "D",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan murojaah.",
        berita: []
    },
    jessicaZahra: {
        nama: "Jessica Zahra",
        panggilan: "Jessica",
        kelas: "2 KMA",
        musyrif: "Ustd. Hanif",
        totalZiyadah: "-",
        avatar: "J",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan kelancaran.",
        berita: []
    },
    // === 6. USTD. Humaira ===
    rismaPutri: {
        nama: "Risma Putri I",
        panggilan: "Risma",
        kelas: "3 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    salmaZhafirotunnisa: {
        nama: "Salma Zhafirotunnisa",
        panggilan: "Salma",
        kelas: "3 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kualitas bacaan.",
        berita: []
    },
    syifaRamadhani: {
        nama: "Syifa Ramadhani",
        panggilan: "Syifa",
        kelas: "3 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan hafalan.",
        berita: []
    },
    huwaidaKhilfi: {
        nama: "Huwaida Khilfi R A",
        panggilan: "Huwaida",
        kelas: "3 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek.",
        berita: []
    },
    arikaTsakira: {
        nama: "Arika Tsakira R",
        panggilan: "Arika",
        kelas: "2 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan fokus setoran.",
        berita: []
    },
    aqilahLiyana: {
        nama: "Aqilah Liyana A A",
        panggilan: "Aqilah",
        kelas: "2 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    salwaFatihatul: {
        nama: "Salwa Fatihatul F",
        panggilan: "Salwa",
        kelas: "3 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan hafalan.",
        berita: []
    },
    fajriyahZannatulmawa: {
        nama: "Fajriyah Zannatulma'wa",
        panggilan: "Fajriyah",
        kelas: "2 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "F",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan murojaah.",
        berita: []
    },
    sakinahBerlian: {
        nama: "Sakinah Berlian W",
        panggilan: "Sakinah",
        kelas: "3 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan kelancaran ayat.",
        berita: []
    },
    sumayyah: {
        nama: "Sumayyah",
        panggilan: "Sumayyah",
        kelas: "3 KMA",
        musyrif: "Ustd. Humaerah",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kedisiplinan setoran.",
        berita: []
    },
    // === 6. USTD. Novi ===
    claudiaSilviana: {
        nama: "Claudia Silviana",
        panggilan: "Claudia",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "C",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    desmairaParadibaningtyas: {
        nama: "Desmaira Paradibaningtyas",
        panggilan: "Desmaira",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "D",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan hafalan dengan baik.",
        berita: []
    },
    dindaLutfiatul: {
        nama: "Dinda Lutfiatul H",
        panggilan: "Dinda",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "D",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek ayat.",
        berita: []
    },
    fatimahAzzahra: {
        nama: "Fatimah Azzahra",
        panggilan: "Fatimah",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "F",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan fokus hafalan.",
        berita: []
    },
    kalilaRifda: {
        nama: "Kalila Rifda R",
        panggilan: "Kalila",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "K",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan konsistensi setoran.",
        berita: []
    },
    neishaMugnia: {
        nama: "Neisha Mugnia R",
        panggilan: "Neisha",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    zahrotulUlya: {
        nama: "Zahrotul Ulya",
        panggilan: "Zahrotul",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "Z",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kualitas bacaan.",
        berita: []
    },
    haniNurhayati: {
        nama: "Hani Nurhayati",
        panggilan: "Hani",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "H",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan hafalan.",
        berita: []
    },
    queenaRaihani: {
        nama: "Queena Raihani R",
        panggilan: "Queena",
        kelas: "3 KMA",
        musyrif: "Ustd. Novi",
        totalZiyadah: "-",
        avatar: "Q",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek.",
        berita: []
    },
    // === 6. USTD. Ani ===
    alyaNurfadilah: {
        nama: "Alya Nurfadilah",
        panggilan: "Alya",
        kelas: "4 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    khanisaNurAzmi: {
        nama: "Khanisa Nur Azmi",
        panggilan: "Khanisa",
        kelas: "4 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "K",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kualitas hafalan.",
        berita: []
    },
    najlaQonitah: {
        nama: "Najla Qonitah G",
        panggilan: "Najla",
        kelas: "4 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan ritme setoran.",
        berita: []
    },
    novitaPuspitasari: {
        nama: "Novita Puspitasari",
        panggilan: "Novita",
        kelas: "4 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "N",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan panjang pendek bacaan.",
        berita: []
    },
    refizahAmelia: {
        nama: "Refizah Amelia P",
        panggilan: "Refizah",
        kelas: "4 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Lebih teliti saat menghafal ayat baru.",
        berita: []
    },
    rizpiaNikayla: {
        nama: "Rizpia Nikayla N H",
        panggilan: "Rizpia",
        kelas: "4 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "R",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan murojaah.",
        berita: []
    },
    sitiSyafa: {
        nama: "Siti Syafa K",
        panggilan: "Siti",
        kelas: "4 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "S",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Pertahankan kelancaran.",
        berita: []
    },
    yuanNovita: {
        nama: "Yuan Novita",
        panggilan: "Yuan",
        kelas: "5 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "Y",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Perhatikan makhraj huruf.",
        berita: []
    },
    alika: {
        nama: "Alika",
        panggilan: "Alika",
        kelas: "4 KMA",
        musyrif: "Ustd. Ani",
        totalZiyadah: "-",
        avatar: "A",
        mingguan: {
            "minggu-1": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-2": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-3": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" },
            "minggu-4": { ziyadah: "-", lancar: "-", tajwid: "-", murojaah: "-", tilawah: "-", predikat: "-" }
        },
        bulanan: {
            "september-2026": { periode: "September 2026", ziyadah: "-", rataLancar: "-", rataTajwid: "-", murojaah: "-", totalTilawah: "-", predikatBulan: "-", catatanBulan: "Belum ada catatan." }
        },
        catatanMingguIni: "Tingkatkan kedisiplinan setoran.",
        berita: []
    }


};

let currentSantriKey = "malik";

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

    document.getElementById("dash-greeting").innerText = `Ahlan wa Sahlan, Wali dari ${data.panggilan}`;
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

    // Inisialisasi dropdown rekap saat santri dimuat
    const selectJenis = document.getElementById("select-jenis-rekap");
    if (selectJenis) {
        selectJenis.value = "mingguan";
    }
    toggleJenisRekap();
}

// Fungsi saat pilihan jenis rekap (Mingguan / Bulanan) diubah
function toggleJenisRekap() {
    const selectJenis = document.getElementById("select-jenis-rekap");
    const selectPeriode = document.getElementById("select-periode");
    
    if (!selectJenis || !selectPeriode) return;

    const jenis = selectJenis.value;
    selectPeriode.innerHTML = "";

    const santri = databaseSantri[currentSantriKey];

    if (jenis === "mingguan") {
        for (const mingguKey in santri.mingguan) {
            const opt = document.createElement("option");
            opt.value = mingguKey;
            opt.innerText = mingguKey.replace("-", " ke-").replace(/^\w/, c => c.toUpperCase());
            selectPeriode.appendChild(opt);
        }
    } else {
        for (const bulanKey in santri.bulanan) {
            const opt = document.createElement("option");
            opt.value = bulanKey;
            opt.innerText = santri.bulanan[bulanKey].periode;
            selectPeriode.appendChild(opt);
        }
    }
    renderRekapData();
}

// Render Data Rekap Mingguan atau Bulanan berdasarkan Dropdown
function renderRekapData() {
    const selectJenis = document.getElementById("select-jenis-rekap");
    const selectPeriode = document.getElementById("select-periode");
    const boxCatatanBulan = document.getElementById("box-catatan-bulan");
    
    if (!selectPeriode || selectPeriode.options.length === 0) return;

    const jenis = selectJenis ? selectJenis.value : "mingguan";
    const periodeVal = selectPeriode.value;
    const santriData = databaseSantri[currentSantriKey];

    if (jenis === "mingguan") {
        if (boxCatatanBulan) boxCatatanBulan.classList.add("hidden");
        
        document.getElementById("label-surah").innerText = "Surah / Ayat:";
        document.getElementById("label-lancar").innerText = "Kelancaran:";
        document.getElementById("label-tajwid").innerText = "Nilai Tajwid:";
        document.getElementById("label-murojaah").innerText = "Murojaah:";
        document.getElementById("label-tilawah").innerText = "Capaian Tilawah:";

        const dataMinggu = santriData.mingguan[periodeVal];
        if (dataMinggu) {
            document.getElementById("rekap-ziyadah-surah").innerText = dataMinggu.ziyadah;
            document.getElementById("rekap-ziyadah-lancar").innerText = dataMinggu.lancar;
            document.getElementById("rekap-ziyadah-tajwid").innerText = dataMinggu.tajwid;
            document.getElementById("rekap-murojaah").innerText = dataMinggu.murojaah;
            document.getElementById("rekap-tilawah").innerText = dataMinggu.tilawah;
            document.getElementById("rekap-predikat").innerText = dataMinggu.predikat;
        }
    } else {
        if (boxCatatanBulan) boxCatatanBulan.classList.remove("hidden");

        document.getElementById("label-surah").innerText = "Capaian Juz:";
        document.getElementById("label-lancar").innerText = "Rata-rata Kelancaran:";
        document.getElementById("label-tajwid").innerText = "Rata-rata Tajwid:";
        document.getElementById("label-murojaah").innerText = "Fokus Murojaah:";
        document.getElementById("label-tilawah").innerText = "Total Tilawah:";

        const dataBulan = santriData.bulanan[periodeVal];
        if (dataBulan) {
            document.getElementById("rekap-ziyadah-surah").innerText = dataBulan.ziyadah;
            document.getElementById("rekap-ziyadah-lancar").innerText = dataBulan.rataLancar;
            document.getElementById("rekap-ziyadah-tajwid").innerText = dataBulan.rataTajwid;
            document.getElementById("rekap-murojaah").innerText = dataBulan.murojaah;
            document.getElementById("rekap-tilawah").innerText = dataBulan.totalTilawah;
            document.getElementById("rekap-predikat").innerText = dataBulan.predikatBulan;
            
            const catatanBulanEl = document.getElementById("rekap-catatan-bulan");
            if (catatanBulanEl) catatanBulanEl.innerText = dataBulan.catatanBulan;
        }
    }
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
            btn.className = "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition text-emerald-200 hover:bg-emerald-800 hover:text-white";
        }
    });

    // Reset tombol Mobile Bottom Nav
    ["dashboard", "rekap", "berita"].forEach((t) => {
        const mobBtn = document.getElementById(`mob-nav-${t}`);
        if (mobBtn) {
            mobBtn.className = "flex flex-col items-center py-1 px-3 text-emerald-300 hover:text-white";
        }
    });

    // Tampilkan tab aktif
    const targetTab = document.getElementById(`tab-${tabName}`);
    if (targetTab) targetTab.classList.remove("hidden");

    // Aktifkan style tombol Desktop Sidebar
    const activeBtn = document.getElementById(`nav-${tabName}`);
    if (activeBtn) {
        activeBtn.className = "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition bg-emerald-800 text-amber-400";
    }

    // Aktifkan style tombol Mobile Bottom Nav
    const activeMobBtn = document.getElementById(`mob-nav-${tabName}`);
    if (activeMobBtn) {
        activeMobBtn.className = "flex flex-col items-center py-1 px-3 text-amber-400";
    }

    // Ubah judul header
    const titles = {
        dashboard: "Dashboard Perkembangan Hafalan",
        rekap: "Rekapitulasi Capaian Hafalan",
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