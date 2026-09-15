(function injectStyles() {
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@300;400;500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --ink:      #1a1209;
      --paper:    #f5f0e8;
      --cream:    #ede8dc;
      --amber:    #c8862a;
      --amber-lt: #e8a840;
      --rust:     #b84c2a;
      --teal:     #2a7a6a;
      --teal-lt:  #3ca88c;
      --shadow:   rgba(26,18,9,.14);
      --radius:   12px;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background-color: var(--paper);
      background-image:
        repeating-linear-gradient(0deg, transparent, transparent 27px, rgba(200,134,42,.08) 28px),
        repeating-linear-gradient(90deg, transparent, transparent 27px, rgba(200,134,42,.04) 28px);
      color: var(--ink);
      min-height: 100vh;
    }

    header {
      background: var(--ink);
      color: var(--paper);
      padding: 1.6rem 2rem;
      display: flex;
      align-items: center;
      gap: 1rem;
      box-shadow: 0 4px 20px var(--shadow);
      position: sticky;
      top: 0;
      z-index: 100;
    }
    header::before {
      content: '📚';
      font-size: 2rem;
    }
    header h1 {
      font-family: 'Playfair Display', serif;
      font-size: 1.8rem;
      letter-spacing: .04em;
    }

    main {
      max-width: 1100px;
      margin: 0 auto;
      padding: 2.5rem 1.5rem 4rem;
      display: grid;
      grid-template-columns: 360px 1fr;
      grid-template-rows: auto auto;
      gap: 1.8rem;
    }

    main > section:nth-child(1) { grid-column: 1; grid-row: 1; }
    main > section:nth-child(2) { grid-column: 1; grid-row: 2; }
    main > section:nth-child(3) { grid-column: 2; grid-row: 1; }
    main > section:nth-child(4) { grid-column: 2; grid-row: 2; }

    @media (max-width: 768px) {
      main { grid-template-columns: 1fr; grid-template-rows: auto; }
      main > section { grid-column: 1 !important; grid-row: auto !important; }
    }

    section {
      background: #fff;
      border-radius: var(--radius);
      padding: 1.8rem;
      box-shadow: 0 2px 12px var(--shadow), 0 0 0 1px rgba(200,134,42,.12);
      transition: box-shadow .2s;
    }
    section:hover { box-shadow: 0 6px 24px var(--shadow), 0 0 0 1px rgba(200,134,42,.2); }

    section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      color: var(--amber);
      border-bottom: 2px solid var(--cream);
      padding-bottom: .7rem;
      margin-bottom: 1.4rem;
    }

    form div {
      display: flex;
      flex-direction: column;
      gap: .3rem;
      margin-bottom: 1rem;
    }

    label {
      font-size: .78rem;
      font-weight: 500;
      text-transform: uppercase;
      letter-spacing: .06em;
      color: #888;
    }

    input[type="text"],
    input[type="number"] {
      border: 1.5px solid var(--cream);
      border-radius: 8px;
      padding: .55rem .85rem;
      font-family: 'DM Sans', sans-serif;
      font-size: .95rem;
      background: var(--paper);
      color: var(--ink);
      outline: none;
      transition: border-color .2s, box-shadow .2s;
    }
    input:focus {
      border-color: var(--amber);
      box-shadow: 0 0 0 3px rgba(200,134,42,.15);
    }

    form div:has(input[type="checkbox"]) {
      flex-direction: row;
      align-items: center;
      gap: .6rem;
    }
    input[type="checkbox"] {
      width: 18px;
      height: 18px;
      accent-color: var(--amber);
      cursor: pointer;
    }

    button {
      font-family: 'DM Sans', sans-serif;
      font-size: .85rem;
      font-weight: 500;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      padding: .5rem 1rem;
      transition: all .18s;
      display: inline-flex;
      align-items: center;
      gap: .4rem;
    }

    #bookFormSubmit {
      width: 100%;
      background: var(--ink);
      color: var(--paper);
      padding: .75rem;
      font-size: .95rem;
      border-radius: 8px;
      margin-top: .4rem;
      justify-content: center;
    }
    #bookFormSubmit:hover { background: var(--amber); color: #fff; transform: translateY(-1px); box-shadow: 0 4px 14px rgba(200,134,42,.35); }

    #searchSubmit {
      background: var(--ink);
      color: var(--paper);
      padding: .55rem 1.2rem;
      align-self: flex-end;
    }
    #searchSubmit:hover { background: var(--amber); }

    #searchBook {
      display: flex;
      gap: .8rem;
      align-items: flex-end;
    }
    #searchBook div { flex: 1; margin-bottom: 0; }

    [data-testid="bookItem"] {
      background: var(--paper);
      border: 1.5px solid var(--cream);
      border-radius: var(--radius);
      padding: 1.1rem 1.2rem;
      margin-bottom: 1rem;
      transition: transform .18s, box-shadow .18s;
      position: relative;
    }
    [data-testid="bookItem"]:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px var(--shadow);
      border-color: rgba(200,134,42,.3);
    }

    [data-testid="bookItemTitle"] {
      font-family: 'Playfair Display', serif;
      font-size: 1.05rem;
      margin-bottom: .3rem;
      color: var(--ink);
    }

    [data-testid="bookItemAuthor"],
    [data-testid="bookItemYear"] {
      font-size: .82rem;
      color: #777;
      margin-bottom: .15rem;
    }

    [data-testid="bookItem"] > div {
      display: flex;
      gap: .5rem;
      margin-top: .9rem;
      flex-wrap: wrap;
    }

    [data-testid="bookItemIsCompleteButton"] {
      background: var(--teal);
      color: #fff;
      font-size: .78rem;
    }
    [data-testid="bookItemIsCompleteButton"]:hover { background: var(--teal-lt); transform: translateY(-1px); }

    [data-testid="bookItemDeleteButton"] {
      background: transparent;
      color: var(--rust);
      border: 1.5px solid var(--rust);
      font-size: .78rem;
    }
    [data-testid="bookItemDeleteButton"]:hover { background: var(--rust); color: #fff; }

    [data-testid="bookItemEditButton"] {
      background: transparent;
      color: var(--amber);
      border: 1.5px solid var(--amber);
      font-size: .78rem;
    }
    [data-testid="bookItemEditButton"]:hover { background: var(--amber); color: #fff; }

    .empty-state {
      text-align: center;
      padding: 2rem 1rem;
      color: #bbb;
      font-size: .9rem;
    }
    .empty-state span { display: block; font-size: 2.4rem; margin-bottom: .5rem; }

    .modal-overlay {
      position: fixed;
      inset: 0;
      background: rgba(26,18,9,.55);
      backdrop-filter: blur(3px);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 999;
      animation: fadeIn .18s;
    }
    @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }

    .modal-box {
      background: #fff;
      border-radius: 16px;
      padding: 2rem;
      width: min(420px, 94vw);
      box-shadow: 0 20px 60px rgba(0,0,0,.25);
      animation: slideUp .22s;
    }
    @keyframes slideUp { from { transform: translateY(20px); opacity: 0 } to { transform: translateY(0); opacity: 1 } }

    .modal-box h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.3rem;
      color: var(--amber);
      margin-bottom: 1.4rem;
    }
    .modal-box div { display: flex; flex-direction: column; gap: .3rem; margin-bottom: 1rem; }
    .modal-actions { flex-direction: row !important; justify-content: flex-end; gap: .8rem; margin-top: .6rem; }

    .btn-save {
      background: var(--ink);
      color: #fff;
      padding: .55rem 1.4rem;
    }
    .btn-save:hover { background: var(--amber); }

    .btn-cancel {
      background: transparent;
      border: 1.5px solid var(--cream);
      color: #888;
      padding: .55rem 1.2rem;
    }
    .btn-cancel:hover { border-color: var(--rust); color: var(--rust); }

    .toast {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      background: var(--ink);
      color: var(--paper);
      padding: .75rem 1.3rem;
      border-radius: 8px;
      font-size: .88rem;
      box-shadow: 0 8px 24px var(--shadow);
      z-index: 9999;
      animation: toastIn .25s forwards;
    }
    @keyframes toastIn { from { opacity:0; transform:translateY(12px) } to { opacity:1; transform:translateY(0) } }
    @keyframes toastOut { to { opacity:0; transform:translateY(12px) } }

    .book-count {
      display: inline-block;
      background: var(--amber);
      color: #fff;
      font-size: .7rem;
      font-weight: 700;
      border-radius: 99px;
      padding: .1rem .55rem;
      margin-left: .5rem;
      vertical-align: middle;
    }
  `;
  document.head.appendChild(style);
})();

let books = [];

function saveData() {
  localStorage.setItem('books', JSON.stringify(books));
}

function loadData() {
  const data = localStorage.getItem('books');
  if (data) books = JSON.parse(data);
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => {
    t.style.animation = 'toastOut .3s forwards';
    setTimeout(() => t.remove(), 300);
  }, 2000);
}

function updateCounts() {
  const inc = books.filter(b => !b.isComplete).length;
  const com = books.filter(b => b.isComplete).length;
  document.querySelectorAll('section h2').forEach(h2 => {
    h2.querySelectorAll('.book-count').forEach(el => el.remove());
    const txt = h2.textContent;
    if (txt.includes('Belum selesai')) {
      const badge = document.createElement('span');
      badge.className = 'book-count';
      badge.textContent = inc;
      h2.appendChild(badge);
    } else if (txt.includes('Selesai dibaca') && !h2.closest('section').querySelector('form')) {
      const badge = document.createElement('span');
      badge.className = 'book-count';
      badge.textContent = com;
      h2.appendChild(badge);
    }
  });
}

function createBookEl(book) {
  const el = document.createElement('div');
  el.setAttribute('data-bookid', book.id);
  el.setAttribute('data-testid', 'bookItem');
  el.innerHTML = `
    <h3 data-testid="bookItemTitle">${book.title}</h3>
    <p data-testid="bookItemAuthor">Penulis: ${book.author}</p>
    <p data-testid="bookItemYear">Tahun: ${book.year}</p>
    <div>
      <button data-testid="bookItemIsCompleteButton">
        ${book.isComplete ? '↩ Belum selesai dibaca' : '✓ Selesai dibaca'}
      </button>
      <button data-testid="bookItemDeleteButton">🗑 Hapus Buku</button>
      <button data-testid="bookItemEditButton">✏ Edit Buku</button>
    </div>
  `;
  el.querySelector('[data-testid="bookItemIsCompleteButton"]')
    .addEventListener('click', () => toggleBook(book.id));
  el.querySelector('[data-testid="bookItemDeleteButton"]')
    .addEventListener('click', () => deleteBook(book.id));
  el.querySelector('[data-testid="bookItemEditButton"]')
    .addEventListener('click', () => openEditModal(book.id));
  return el;
}

function renderBooks(list) {
  const source = list !== undefined ? list : books;
  const incomplete = document.getElementById('incompleteBookList');
  const complete = document.getElementById('completeBookList');
  incomplete.innerHTML = '';
  complete.innerHTML = '';

  const incBooks = source.filter(b => !b.isComplete);
  const comBooks = source.filter(b => b.isComplete);

  if (incBooks.length === 0) {
    incomplete.innerHTML = '<div class="empty-state"><span>📖</span>Belum ada buku di rak ini</div>';
  } else {
    incBooks.forEach(b => incomplete.appendChild(createBookEl(b)));
  }

  if (comBooks.length === 0) {
    complete.innerHTML = '<div class="empty-state"><span>✅</span>Belum ada buku yang selesai dibaca</div>';
  } else {
    comBooks.forEach(b => complete.appendChild(createBookEl(b)));
  }

  updateCounts();
}

function toggleBook(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;
  book.isComplete = !book.isComplete;
  saveData();
  renderBooks();
  showToast(book.isComplete ? '📗 Buku dipindah ke Selesai dibaca' : '📘 Buku dipindah ke Belum selesai');
}

function deleteBook(id) {
  if (!confirm('Hapus buku ini?')) return;
  books = books.filter(b => b.id !== id);
  saveData();
  renderBooks();
  showToast('🗑 Buku berhasil dihapus');
}

const form = document.getElementById('bookForm');
const isCompleteCheckbox = document.getElementById('bookFormIsComplete');
const submitBtn = document.getElementById('bookFormSubmit');

isCompleteCheckbox.addEventListener('change', () => {
  const span = submitBtn.querySelector('span');
  span.textContent = isCompleteCheckbox.checked ? 'Selesai dibaca' : 'Belum selesai dibaca';
});

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const title = document.getElementById('bookFormTitle').value.trim();
  const author = document.getElementById('bookFormAuthor').value.trim();
  const year = Number(document.getElementById('bookFormYear').value);
  const isComplete = isCompleteCheckbox.checked;

  const newBook = { id: new Date().getTime(), title, author, year, isComplete };
  books.push(newBook);
  saveData();
  renderBooks();
  form.reset();
  submitBtn.querySelector('span').textContent = 'Belum selesai dibaca';
  showToast('📚 Buku berhasil ditambahkan!');
});

const searchForm = document.getElementById('searchBook');
const searchInput = document.getElementById('searchBookTitle');

searchForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const keyword = searchInput.value.toLowerCase().trim();
  if (!keyword) { renderBooks(); return; }
  const filtered = books.filter(b => b.title.toLowerCase().includes(keyword));
  renderBooks(filtered);
  showToast('🔍 Ditemukan ' + filtered.length + ' buku');
});

searchInput.addEventListener('input', function () {
  if (!this.value) renderBooks();
});

function openEditModal(id) {
  const book = books.find(b => b.id === id);
  if (!book) return;

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal-box">
      <h3>✏ Edit Buku</h3>
      <div>
        <label>Judul</label>
        <input type="text" id="editTitle" value="${book.title}" required />
      </div>
      <div>
        <label>Penulis</label>
        <input type="text" id="editAuthor" value="${book.author}" required />
      </div>
      <div>
        <label>Tahun</label>
        <input type="number" id="editYear" value="${book.year}" required />
      </div>
      <div style="flex-direction:row;align-items:center;gap:.6rem">
        <input type="checkbox" id="editIsComplete" ${book.isComplete ? 'checked' : ''} />
        <label style="text-transform:none;font-size:.9rem;">Selesai dibaca</label>
      </div>
      <div class="modal-actions">
        <button class="btn-cancel" id="editCancel">Batal</button>
        <button class="btn-save" id="editSave">Simpan</button>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);

  overlay.querySelector('#editCancel').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  overlay.querySelector('#editSave').addEventListener('click', () => {
    const title = overlay.querySelector('#editTitle').value.trim();
    const author = overlay.querySelector('#editAuthor').value.trim();
    const year = Number(overlay.querySelector('#editYear').value);
    const isComplete = overlay.querySelector('#editIsComplete').checked;
    if (!title || !author || !year) return;
    book.title = title;
    book.author = author;
    book.year = year;
    book.isComplete = isComplete;
    saveData();
    renderBooks();
    overlay.remove();
    showToast('✅ Buku berhasil diperbarui!');
  });
}

loadData();
renderBooks();
