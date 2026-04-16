# Rusookh (رسوخ) - Quran Hifz Tracker 📖

![Rusookh App](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Quran_Kareem.svg/100px-Quran_Kareem.svg.png)

**Rusookh** is a smart, offline-first Progressive Web App (PWA) designed to help users track their Quranic memorization and daily revision. The tracking algorithm is strictly based on the **Alhusoon Alkhamsa (الحصون الخمسة)** methodology, ensuring a structured and highly effective approach to Hifz.

🌐 **[Live Demo: Play with the App Here](https://ziyadabouelenin.github.io/rusookh/)**

---

## 🌟 Features (المميزات)
* **Smart Daily Plan (خطة اليوم الذكية):** Automatically generates a daily routine balancing Near Revision (المراجعة القريبة) and Far Revision (المراجعة البعيدة).
* **Alhusoon Alkhamsa Integration:** Tracks progress across New Hifz, Near/Far revision, and Daily Tilawah (الورد).
* **Audio Recitation (ورد الاستماع):** Built-in audio playback using the Alquran.cloud API featuring Sheikh Muhammad Siddiq Al-Minshawi.
* **Offline-First PWA:** Installable on iOS and Android. Works entirely offline using Service Workers and Local Storage.
* **Bilingual & Localization:** Full Arabic (RTL) and English (LTR) support, including Hijri calendar integration.
* **Data Portability:** 100% local tracking with the ability to export and import backup JSON files. No cloud lock-in.

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

* يعرض الأحزاب المتأخرة لتداركها.
* يوازن بين المراجعة القريبة والمراجعة البعيدة.
* يوفر ورد الاستماع بصوت الشيخ المنشاوي رحمه الله.
* يتيح تصدير واستيراد البيانات للحفاظ عليها.
