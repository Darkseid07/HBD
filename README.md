# 🎂 A Little Piece of Me — Birthday Surprise Website

A deeply personal, romantic, long-distance birthday website made with pure love (and pure HTML, CSS & JavaScript).

This is **not** a generic template. It was designed to feel like a digital gift from a boyfriend who can't be there in person.

---

## ✨ What She Will Experience

1. **Cinematic Opening** — Soft sequential text that leads into “Happy Birthday, [HER NAME]”
2. **Long-distance message** — Acknowledges the distance with warmth
3. **Photo Gallery** — Polaroids, featured photos, subtle rotations, captions
4. **Things I Miss About You** — Beautiful cards
5. **Things I Love About You** — Interactive cards that reveal personal messages
6. **Our Little Story** — Timeline of memories
7. **Birthday Notes** — Dozens of short, heartfelt wishes
8. **Photo + Message sections** — Large emotional photo + text blocks
9. **If I Were There Right Now...** — A gentle list of what he’d do
10. **Closing letter** — Soft, emotional ending

Everything is written so you can easily personalize every single word.

---

## 📁 Project Structure

```
birthday-surprise/
├── index.html          ← Main page (edit text here)
├── css/
│   └── styles.css      ← All styling
├── js/
│   └── script.js       ← Opening animation + interactions
├── images/             ← Put her photos here
│   ├── photo1.jpg
│   ├── photo2.jpg
│   ├── ...
│   ├── memory1.jpg
│   ├── special1.jpg
│   └── ...
└── README.md
```

---

## 🛠️ How to Customize

### 1. Change her name
Open `index.html` and search for:
```html
<span class="her-name">[HER NAME]</span>
```
Replace `[HER NAME]` with her real name.

### 2. Edit all the messages
Every piece of text is clearly written in `index.html`.  
Just search for the section titles and rewrite the paragraphs, captions, and cards to match your real feelings and shared memories.

### 3. Add her real photos
Place your photos in the `images/` folder using these exact names (or update the `src` attributes):

**Gallery:**
- `photo1.jpg` → `photo10.jpg`

**Memories timeline:**
- `memory1.jpg` → `memory5.jpg`

**Photo + message sections:**
- `special1.jpg` → `special5.jpg`

Recommended size: at least 800px wide. Square or portrait works best for the gallery.

> Tip: If a photo is missing, the site falls back to a soft placeholder so it still looks good while you’re building it.

### 4. Add more memories or wishes
- **Timeline**: Copy an entire `.timeline-item` block and paste it below the others.
- **Wishes**: Copy a `.wish-card` and write a new message.
- **Miss / Love cards**: Same idea — just duplicate the card and change the content.

---

## 🚀 Run Locally (Development)

```bash
cd birthday-surprise
python -m http.server 8000
```

Then open: [http://localhost:8000](http://localhost:8000)

---

## 🌐 Deploy to a Public Link (Free)

You need a public URL so she can open it from anywhere on her phone.

### Option A — GitHub Pages (Recommended & Free)

1. Create a new GitHub repository (e.g. `birthday-surprise-for-her`)
2. Upload all the files (or push via git)
3. Go to **Settings → Pages**
4. Under **Source**, choose `Deploy from a branch`
5. Select `main` (or `master`) and `/ (root)`
6. Click Save

After 1–2 minutes your site will be live at:
```
https://YOUR-USERNAME.github.io/birthday-surprise-for-her/
```

### Option B — Netlify (Drag & Drop)

1. Go to [https://app.netlify.com](https://app.netlify.com)
2. Sign up (free)
3. Drag the entire `birthday-surprise` folder onto the Netlify dashboard
4. You’ll instantly get a public URL like:
```
https://random-name-123.netlify.app
```
You can later change it to something nicer in the site settings.

### Option C — Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Import the project (or drag & drop)
3. Deploy — done.

---

## 📱 Important Notes

- The site is fully responsive and works beautifully on phones.
- No backend, no database, no login required.
- She only needs the public link.
- All animations are CSS + light JavaScript — works offline after first load (except the temporary placeholder images from picsum.photos).

---

## ❤️ Final Tips

- Replace every placeholder message with something only the two of you would understand.
- Use real photos of her (and a few of you together if you want).
- Test the full experience on your phone before sending the link.
- Send the link on her birthday morning (or whenever feels right).

You made something personal. That already means more than a store-bought gift.

Happy birthday to her.  
You’re a good boyfriend for doing this.

---

Made with love, from far away.
