# Rusookh (رسوخ) - Quran Hifz Tracker 📖

**Rusookh** is a smart, offline-first Progressive Web App (PWA) designed to help users track their Quranic memorization and daily revision. The tracking algorithm is strictly based on the **Alhusoon Alkhamsa (الحصون الخمسة)** methodology, ensuring a structured and highly effective approach to Hifz.

🌐 **[Live Demo: Play with the App Here](https://ziyadabouelenin.github.io/rusookh/)**

---

## 🌟 Features (المميزات)

* **Smart Daily Plan (خطة اليوم الذكية):** Automatically generates a daily routine balancing Near Revision (المراجعة القريبة) and Far Revision (المراجعة البعيدة). Overdue hizbs are always prioritized. Far revision uses a continuous sequential cursor across sessions.

* **Plan Interactions:** Mark far/manual revision items done directly from the plan (syncs to Hifz Tracker). Replace any hizb in the plan with a custom one using the 🔄 button. Remove manually-added hizbs with ✖. Near revision hizbs support one-tap "Mark All Quarters Revised" from the detail modal.

* **Hifz Tracker (تتبع الحفظ):** Full grid of all 60 hizbs. Cards display revision strength via a glowing green ring border and a ×N badge — the deeper the ring, the more reviewed the hizb (fully solid at ×10). Overdue hizbs appear in red. Bulk edit mode lets you select multiple hizbs and mark them revised with today's date or a custom date.

* **Alhusoon Alkhamsa Integration:** Tracks progress per quarter (ربع) across New Hifz, Near/Far revision, and Daily Tilawah (الورد). Each quarter has its own revision count and last-revised date, editable individually.

* **Weekly Schedule Generator (خطة الحفظ):** Generates a full 7-day table including new memorization pages, near review, far review, preparation sessions, and continuous reading — based on your current juz count and daily page target.

* **Audio Recitation (ورد الاستماع):** Built-in audio playback using the Alquran.cloud API featuring Sheikh Muhammad Siddiq Al-Minshawi. Features a mini player bar showing current surah name, ayah number, and progress. Supports pause, resume from last position, and per-ayah seeking. Last playback position is persisted across sessions.

* **Offline-First PWA:** Installable on iOS and Android. Works entirely offline using Service Workers and Local Storage. Audio requires an internet connection.

* **Bottom Navigation:** Six-tab bottom nav bar with unique color per tab and swipe gesture support for switching between tabs.

* **Bilingual & Localization:** Full Arabic (RTL) and English (LTR) support, including Hijri calendar dates, Arabic numerals, and locale-aware day/month names.

* **Data Portability:** 100% local tracking with export and import of backup JSON files. No accounts, no cloud, no lock-in. Selective reset by hizb range with automatic pre-reset backup export.

* **Revision Streak (سلسلة المراجعة):** Tracks consecutive daily revision days with a streak counter on the daily plan screen.

---

## 🚀 How to Run Locally (طريقة التشغيل محلياً)

This app is built with pure Vanilla HTML, CSS, and JavaScript. No build tools or package managers required.

1. Clone the repository: `git clone https://github.com/ziyadabouelenin/rusookh.git`
2. Open `index.html` in any modern web browser.
3. To test PWA/Service Worker features, run it through a local server (e.g., VS Code Live Server).

---

## 🛠️ Technologies Used

* Vanilla JavaScript (ES6)
* HTML5 / CSS3 (CSS Variables, Flexbox, Grid)
* Browser `localStorage` & `ServiceWorker` (PWA)
* [Alquran.cloud API](https://alquran.cloud/api) for Audio

---

## رسوخ - تطبيق تتبع الحفظ

**رسوخ** هو تطبيق ويب متقدم (PWA) يعمل بدون إنترنت، صُمم لمساعدة حفظة كتاب الله على تتبع الإنجاز والمراجعة اليومية بخوارزمية ذكية مبنية بالكامل على منهجية **الحصون الخمسة**.

* يعرض الأحزاب المتأخرة ويمنحها الأولوية في خطة اليوم.
* يوازن بين المراجعة القريبة والبعيدة بمؤشر متسلسل يتذكر موقعه.
* يتيح تسجيل المراجعة مباشرةً من خطة اليوم مع مزامنة فورية مع شبكة الأحزاب.
* يعرض قوة المراجعة بصرياً على كل حزب عبر حلقة خضراء تتعمق كلما زادت مرات المراجعة.
* يولّد جدولاً أسبوعياً متكاملاً للحفظ والمراجعة وفق الحصون الخمسة.
* يوفر ورد الاستماع بصوت الشيخ المنشاوي رحمه الله، مع مشغّل يعرض اسم السورة والآية ويحفظ موضع التوقف بين الجلسات.
* يتيح تصدير واستيراد البيانات للحفاظ عليها ونقلها بين الأجهزة.
* يدعم اللغتين العربية (RTL) والإنجليزية (LTR) بالكامل، مع التقويم الهجري.
