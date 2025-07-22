# 👋 HEY!!
## 👨‍💻 WELCOME TO **DevRohit** – A Portfolio Project

This is my personal portfolio project built with a focus on showcasing my skills, projects, and backend development proficiency. Below, you will find all the relevant technical details including API formats, tech stack used, image handling strategy, and more.

---

## 📑 Table of Contents

- [Tech Stack Used](#tech-stack-used)
- [API Format](#api-format)
- [Image Handling in Backend](#image-handling-in-backend)
- [Design](#design)
- [About the Project](#about-the-project)
- [About the Developer](#about-the-developer)
- [Project Link](#project-link)

---

## 🧰 Tech Stack Used

- **Frontend:** React.js, HTML5, CSS3, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Styling:** TailwindCSS / Material UI (if used)
- **Hosting:** Vercel (Frontend), Render / Railway (Backend)

---

## 🔗 API Format

> All APIs use JSON format. Authentication is handled via Bearer Token for protected routes.

---

### 📦 Projects API

#### ➕ POST `/api/v1/project/`  
_Add a single project_

**Request**
```json
Headers: {
  "Content-Type": "application/json",
  "Authorization": "Bearer <token>"
}
Body: {
  "imageUrl": "string",
  "languages": ["string"],
  "title": "string",
  "desc": "string",
  "link": "string"



**Success-Response**
```json
{
  "status": 200,
  "message": "Project added successfully"
}

**Failed-Response**
```json
{
  "status": 200,
  "message": "Project added successfully"
}
