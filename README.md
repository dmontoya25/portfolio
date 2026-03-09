# Daniel Montoya - Developer Portfolio

A minimalist, dark-themed portfolio showcasing my projects and skills. Built with React and designed with clean, science-inspired aesthetics.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Local Development

1. **Clone or download this portfolio**
   ```bash
   # If you haven't already, create a new repo named dmontoya25.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run locally**
   ```bash
   npm start
   ```
   Opens at `http://localhost:3000`

## 📦 Deployment to GitHub Pages

### First Time Setup

1. **Create a new repository on GitHub**
   - Name it exactly: `dmontoya25.github.io`
   - Make it public
   - Don't initialize with README (you already have these files)

2. **Initialize git and push**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git branch -M main
   git remote add origin https://github.com/dmontoya25/dmontoya25.github.io.git
   git push -u origin main
   ```

3. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

4. **Enable GitHub Pages** (if not automatic)
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch `gh-pages`
   - Your site will be live at: `https://dmontoya25.github.io`

## ✏️ Customization

### Update Your Information

**In `src/App.jsx`:**

1. **Contact Info** (line ~155):
   ```javascript
   <a href="mailto:YOUR_EMAIL@example.com" className="contact-link">
     <Mail size={24} />
     <span>YOUR_EMAIL@example.com</span>
   </a>
   ```

2. **LinkedIn URL** (line ~163):
   ```javascript
   <a href="https://linkedin.com/in/YOUR_PROFILE" className="contact-link">
   ```

3. **Add More Projects** (line ~32):
   ```javascript
   const projects = [
     {
       title: "Your Project Name",
       description: "Description here...",
       tech: ["Tech1", "Tech2", "Tech3"],
       github: "https://github.com/dmontoya25/your-repo",
       demo: "https://your-demo-link.com",
       featured: false
     },
     // Add more projects...
   ];
   ```

4. **Update Skills** (line ~44):
   ```javascript
   const skills = {
     "Languages": ["Add", "Your", "Languages"],
     "Tools & Frameworks": ["Add", "Your", "Tools"],
     "Concepts": ["Add", "Your", "Concepts"]
   };
   ```

### Styling Tweaks

**In `src/App.css`:**

- Change accent color: Modify `--accent-primary` and `--accent-secondary` (line ~8-9)
- Adjust spacing: Modify padding values in `.section` (line ~118)
- Font changes: Update `font-family` in `body` (line ~13)

## 📁 Project Structure

```
portfolio/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.jsx            # Main component (YOUR INFO HERE)
│   ├── App.css            # All styles
│   └── index.js           # React entry point
├── package.json           # Dependencies
└── README.md             # This file
```

## 🛠️ Technologies Used

- React 18
- Lucide React (icons)
- CSS3 (custom styling, no frameworks)
- GitHub Pages (hosting)

## 💡 Tips

- **Adding images**: Place them in `public/` folder and reference as `/image.png`
- **Smooth scroll**: Already implemented for navigation
- **Mobile responsive**: Styles adapt automatically
- **Update content**: Edit `App.jsx` - it's well-commented!

## 📝 To-Do After Setup

- [ ] Update email address
- [ ] Update LinkedIn URL
- [ ] Add your N-body simulator project with links
- [ ] Add more projects as you build them
- [ ] Update skills list
- [ ] Take a screenshot for your README (optional)
- [ ] Share your portfolio link!

## 🚀 Deploy Updates

Every time you make changes:

```bash
git add .
git commit -m "Update portfolio"
git push origin main
npm run deploy
```

Your site updates in ~2 minutes!

---

Built with ❤️ by Daniel Montoya
