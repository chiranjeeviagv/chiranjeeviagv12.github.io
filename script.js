---

### 2. Folder Specific Styling (`style.css`)
Update your `style.css` to add the folder appearance, hover animation transformations, and smooth content visibility control:

```css
:root {
    --primary: #0f172a;
    --accent: #2563eb;
    --text-main: #334155;
    --bg-light: #f1f5f9;
    --white: #ffffff;
    --border: #cbd5e1;
    --folder-bg: #e2e8f0;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', system-ui, sans-serif;
}

body {
    background-color: var(--bg-light);
    color: var(--text-main);
    line-height: 1.6;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header Area */
.header {
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
    color: var(--white);
    padding: 40px 0;
    margin-bottom: 30px;
}

.header-content {
    display: flex;
    align-items: center;
    gap: 25px;
}

.profile-img {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 3px solid var(--accent);
    object-fit: cover;
}

.header-text h1 { font-size: 2rem; }
.header-text h3 { color: #38bdf8; font-weight: 400; margin-bottom: 5px; }
.objective { font-style: italic; opacity: 0.8; font-size: 0.9rem; margin-bottom: 12px; }

.contact-links a {
    color: var(--white);
    text-decoration: none;
    margin-right: 12px;
    font-size: 0.85rem;
    background: rgba(255,255,255,0.1);
    padding: 4px 10px;
    border-radius: 15px;
}

/* Folder System UX */
.main-title { color: var(--primary); margin-bottom: 4px; }
.instruction { color: #64748b; font-size: 0.9rem; margin-bottom: 25px; }

.folder {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 8px;
    margin-bottom: 15px;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.04);
}

.folder-header {
    width: 100%;
    background: var(--folder-bg);
    border: none;
    padding: 15px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    cursor: pointer;
    text-align: left;
    transition: background 0.2s ease;
}

.folder-header:hover {
    background: #cbd5e1;
}

.folder-icon {
    font-size: 1.3rem;
    transition: transform 0.2s ease;
}

.folder-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--primary);
}

/* Click Trigger adjustments */
.folder.open .folder-icon {
    transform: rotate(90deg); /* Subtle spin animation on open */
}

.folder-content {
    display: none;
    padding: 25px 20px;
    border-top: 1px solid var(--border);
    background: #ffffff;
}

.folder.open .folder-content {
    display: block;
}

/* Content Element Formatting Styles */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 15px;
}

.card {
    border: 1px solid var(--border);
    padding: 15px;
    border-radius: 6px;
    background: #fafafa;
}

.card h3 { font-size: 1rem; color: var(--primary); margin-bottom: 5px; }
.date { font-size: 0.8rem; color: var(--accent); font-weight: 600; }
.verify-link { display: inline-block; margin-top: 10px; font-size: 0.8rem; text-decoration: none; color: var(--accent); font-weight: bold; }

.info-table { width: 100%; border-collapse: collapse; }
.info-table th, .info-table td { padding: 10px; border: 1px solid var(--border); text-align: left; font-size: 0.9rem; }
.info-table th { background: #f8fafc; }

.list-items li { margin-left: 20px; margin-bottom: 10px; font-size: 0.95rem; }

.timeline { border-left: 2px solid var(--border); padding-left: 15px; }
.timeline-item { margin-bottom: 20px; position: relative; }
.timeline-item::before { content: ''; position: absolute; width: 10px; height: 10px; background: var(--accent); border-radius: 50%; left: -21px; top: 6px; }

.footer { text-align: center; padding: 25px; background: #0f172a; color: #94a3b8; font-size: 0.8rem; margin-top: 40px; }
