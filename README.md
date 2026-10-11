# Taskboard

React + Vite asosidagi Kanban vazifalar boshqaruvi.

## Imkoniyatlar
- Vazifa qo'shish, tahrirlash, o'chirish
- Ustunlar orasida sudrab o'tkazish (drag & drop)
- Qidiruv va muhimlik bo'yicha filtr
- Muddat, teglar, kechikkan vazifalar belgisi
- Ma'lumotlar `localStorage` da saqlanadi
- JSON eksport, progress ko'rsatkichi, qorong'i rejim (tizim sozlamasi bo'yicha)

## Ishga tushirish
```bash
npm install
npm run dev
```

## Struktura
```
src/
  App.jsx            # asosiy holat va mantiq
  components/        # Card, Column, TaskModal, Toolbar
  hooks/             # useLocalStorage
  data/seed.js       # ustunlar va boshlang'ich ma'lumot
```

## GitHub'ga yuklash
```bash
git init && git add . && git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/taskboard.git
git push -u origin main
```
# pul
