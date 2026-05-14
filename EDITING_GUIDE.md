# Editing Guide for Non-Technical Users

## Quick Start

To edit painting information on the website:

1. **Find the painting file** in the `content/paintings/` folder
2. **Open it** in any text editor (Notepad, TextEdit, VS Code, etc.)
3. **Edit the content** (see below)
4. **Save the file**
5. **Refresh the website** in your browser to see changes

No special software or technical knowledge required!

---

## File Structure

Each painting has its own file named like `DEL_1694.md`, `DEL_1695.md`, etc.

The file has two parts:
1. **Metadata** (at the top, between `---` lines)
2. **Descriptions** (English and Greek)

---

## Editing Metadata

At the top of each file, you'll see:

```
---
title: "Light in a Vase"
year: 2023
technique: "Oil on canvas / Spatule"
---
```

- **title**: The name of the painting (use quotes)
- **year**: The year it was created (just the number)
- **technique**: How it was made (use quotes)

**Example changes:**
```
---
title: "Sunset Over the Sea"
year: 2024
technique: "Acrylic on canvas"
---
```

---

## Editing Descriptions

Below the metadata, you'll see:

```
# Description-en

This is the English description.

# Description-gr

Αυτή είναι η περιγραφή στα ελληνικά.
```

- **# Description-en**: Everything after this line (until the next `#`) is the English description
- **# Description-gr**: Everything after this line is the Greek description

**Tips:**
- You can use simple formatting:
  - `*word*` or `_word_` for *italics*
  - `**word**` for **bold**
  - `- item` for bullet lists
- Start each description on a new line after the `#` line
- Leave a blank line between the `#` and the text

**Example:**
```
# Description-en

This beautiful painting was created in 2024.

*Features:*
- Oil on canvas
- 50cm x 70cm
- Signed by the artist

# Description-gr

Αυτό το όμορφο έργο δημιουργήθηκε το 2024.

*Χαρακτηριστικά:*
- Λάδι σε καμβά
- 50cm x 70cm
- Υπογεγραμμένο από τον καλλιτέχνη
```

---

## Adding a New Painting

To add a new painting to the website:

1. **Copy the template**: Copy `content/paintings/TEMPLATE.md` to `content/paintings/DEL_XXXX.md`
   - Replace `XXXX` with the painting ID (e.g., `DEL_1720`)

2. **Edit the new file**: Fill in the title, year, technique, and descriptions

3. **Add images**: 
   - Full size: `images/DEL_XXXX.JPG`
   - Thumbnail: `images/thumbnails/thumb_DEL_XXXX.JPG`

4. **Add to gallery**: This requires editing `galerie.html` (see below)

---

## Adding to the Gallery Page (Technical Step)

To display the new painting on the website, you need to add it to `galerie.html`:

1. Find the `<div class="gallery">` section
2. Add a new artwork div:
```html
<div class="artwork" onclick="openModal('DEL_XXXX')" data-painting-id="DEL_XXXX">
    <img src="images/thumbnails/thumb_DEL_XXXX.JPG" alt="Painting name" loading="lazy">
</div>
```
3. Add a new modal div (copy an existing one and update the ID):
```html
<div id="modal-DEL_XXXX" class="modal" onclick="closeModal('DEL_XXXX')">
    <div class="modal-content-wrapper" onclick="event.stopPropagation()">
        <span class="close" onclick="closeModal('DEL_XXXX')">&times;</span>
        <img src="images/DEL_XXXX.JPG" class="modal-content" id="zoom-img-DEL_XXXX" onclick="toggleZoom(this)">
        <div class="description"></div>
    </div>
</div>
```

**Note:** This step requires comfort with HTML. If unsure, ask a technical person to help.

---

## Common Questions

**Q: Do I need special software?**
A: No! Any text editor works. Windows Notepad, Mac TextEdit, or any code editor.

**Q: How do I see my changes?**
A: Just save the file and refresh your browser.

**Q: Can I use Greek characters?**
A: Yes! The website supports Greek fully. Just type normally.

**Q: What if I make a mistake?**
A: Just edit the file again and save. Changes update immediately.

**Q: Do I need to restart a server?**
A: No! The website loads files directly from your computer.

---

## Need Help?

If you have questions or need assistance:
- Check this guide again
- Look at existing painting files as examples
- Ask the website administrator
