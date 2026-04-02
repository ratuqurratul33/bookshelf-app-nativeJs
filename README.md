# 📚 Bookshelf App

Aplikasi web sederhana untuk mengelola daftar buku menggunakan **JavaScript Native (Vanilla JS)** tanpa framework.

---

## 🚀 Fitur Utama
*  Menambahkan buku baru
*  Dua rak buku:

  * Belum selesai dibaca
  * Selesai dibaca
*  Memindahkan buku antar rak
*  Menghapus buku
*  Penyimpanan menggunakan localStorage (data tetap tersimpan)
*  Pencarian buku berdasarkan judul
*  Edit data buku

---

## 🧠 Teknologi yang Digunakan

Aplikasi ini dibuat menggunakan:

* HTML5
* CSS3 (diinject via JavaScript)
* JavaScript Native (Vanilla JS)
* Web Storage API (localStorage)

---

## 📦 Struktur Data Buku

Setiap buku disimpan dalam bentuk object:

```js
{
  id: number,
  title: string,
  author: string,
  year: number,
  isComplete: boolean
}
```

---

## ⚙️ Cara Menjalankan Project

### 🔹 Cara 1 (Recommended)

Menggunakan VS Code + Live Server:

1. Install extension **Live Server**
2. Klik kanan `index.html`
3. Pilih **Open with Live Server**

---

### 🔹 Cara 2 (Manual)

Buka file `index.html` langsung di browser:

```bash
open index.html
```

---

## 💾 Penyimpanan Data

Aplikasi menggunakan **localStorage**, sehingga:

* Data tidak hilang saat halaman direfresh
* Data hanya tersimpan di browser pengguna

---

## 📌 Catatan

* Tidak menggunakan framework (React, Vue, dll)
* Seluruh fitur dibuat menggunakan JavaScript Native
* Mengikuti standar submission Dicoding

---

## 📷 Preview

<img width="1913" height="904" alt="image" src="https://github.com/user-attachments/assets/678dcd63-cafa-4fde-824a-ed4db8ca89f9" />


---

