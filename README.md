# 📦 Tooplate 2145 - Techsoln Personal Portfolio & Engineer Template

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tooplate](https://img.shields.io/badge/Tooplate-Free%20Template-6366F1?style=for-the-badge)
![License](https://img.shields.io/badge/License-CC%20BY%204.0-10B981?style=for-the-badge)

A modern, high-performance, dark/light responsive HTML5 & CSS3 website template created in the **Tooplate** template format. Specifically designed for **Computer Science Students, Software Engineers, Data Scientists, and Developers** preparing for IT placement interviews or showcase projects.

---

## 📥 How to Download the Template Package

You can download this complete website template in 2 ways:

### Method 1: Direct ZIP File Download (In Workspace)
- Download the compressed archive directly from your project directory:
  `tooplate_techsoln_portfolio.zip`

### Method 2: Download Button on Live Webpage
- Open `index.html` in your browser.
- Click the **"Download Template (.ZIP)"** button in the top bar or the hero section to save the entire source code bundle.

---

## 📁 Package Folder Structure

```text
tooplate_techsoln_portfolio/
├── index.html            # Main HTML5 webpage structure & section markup
├── css/
│   └── styles.css        # Modular CSS design system, themes, and micro-animations
├── js/
│   ├── resume-data.js    # Data Object file to easily customize all text, projects & contact info
│   └── main.js           # Interactive UI logic (modals, skills filter, dark mode, toast notifications)
├── template-info.json    # Template metadata
├── LICENSE.txt           # Free template usage terms
└── README.md             # Complete quick-start and customization guide
```

---

## 🛠️ How to Customize This Template for Yourself

You can easily replace the placeholder candidate info with your own name, resume details, and projects without touching complex layout code!

### Step 1: Update Personal Info & Resume Data
Open `js/resume-data.js` in VS Code or any text editor and update the `RESUME_DATA` object:
- **`profile`**: Edit your name, email, phone number, location, and objective.
- **`education`**: Update your college, degree, marks/CGPA, and graduation year.
- **`skills`**: Add or remove technical skills by category (Programming, Web Dev, Databases, Tools).
- **`projects`**: Add your personal coding projects, description, bullet points, and GitHub links.
- **`internships`**: Add your practical work experience or internships.
- **`certifications`**: Update your earned technical certificates.

### Step 2: Change Website Name & Title Tag
Open `index.html` and update line 6 & line 27:
- `<title>Your Name | Personal Portfolio</title>`
- `<span class="logo-text">YourName<span class="logo-accent">.Dev</span></span>`

---

## 💻 How to Preview & Run Locally

### Option 1: Direct File Opening
Double-click `index.html` to open it in Chrome, Edge, Safari, or Firefox.

### Option 2: Live Server in VS Code
1. Open folder in **VS Code**.
2. Right-click `index.html` and click **"Open with Live Server"**.

### Option 3: Python Local Server
```bash
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 🚀 How to Host on GitHub Pages (Free Hosting)

1. Create a public repository on [GitHub](https://github.com).
2. Push all files (`index.html`, `css/`, `js/`, `README.md`) to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of portfolio template"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings > Pages**.
4. Set Source to `Deploy from a branch` -> Select `main` -> Click **Save**.
5. Your live portfolio link will be available at: `https://YOUR_USERNAME.github.io/portfolio/`

---

## 📄 License & Terms of Use

Provided under the **Tooplate Free HTML Template License (CC BY 4.0)**. Free for personal and commercial use.
For more free responsive HTML CSS website templates, visit [Tooplate.com](https://www.tooplate.com).
