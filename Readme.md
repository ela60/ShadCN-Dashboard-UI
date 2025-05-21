# 📊 ShadCN Dashboard UI

A clean and responsive **Dashboard UI** built with **React**, **TypeScript**, **Tailwind CSS**, and **ShadCN/UI** components. This is a submission for a Frontend Developer Assignment focused on layout structure, reusable components, and modern UI best practices.

> **Live Demo:** [https://your-deployment-link.com](https://your-deployment-link.com)  
> **GitHub Repo:** [https://github.com/yourusername/shadcn-dashboard-ui](https://github.com/yourusername/shadcn-dashboard-ui)

---

## 🖼️ Project Preview

![Dashboard UI Preview](./public/dashboard-ui.png)

> _This is a reimagined version of the provided design using ShadCN blocks._

---

## 🔧 What I Built

This dashboard includes:

- ✅ **Sidebar Navigation** using `sidebar-07` block  
- ✅ **Data Table Section** with dummy data, filters, and sorting (based on `dashboard-01`)  
- ✅ Fully responsive layout  
- ✅ Clean code structure with reusable components  
- ✅ Dummy routing using `React Router`  
- ✅ Loading skeleton and minimal loading UI  
- ✅ Organized folder and component architecture

---

## 🧩 Components Used (via ShadCN)

- **Sidebar Navigation**  
  `npx shadcn@latest add sidebar-07`
- **Dashboard Table Block**  
  `npx shadcn@latest add dashboard-01`
- Other smartly extracted or custom blocks from [https://ui.shadcn.com/blocks](https://ui.shadcn.com/blocks)

---

## 🧱 Technologies Used

- ⚛️ React (Vite)
- 🔠 TypeScript
- 💨 Tailwind CSS
- 🎯 ShadCN/UI
- 🌐 React Router DOM

---

## 📁 Folder Structure

src/
├── components/
│ ├── Sidebar.tsx
│ ├── DataTable.tsx
│ ├── LoadingSkeleton.tsx
│ └── Layout.tsx
├── data/
│ └── dummyData.ts
├── pages/
│ ├── Dashboard.tsx
│ └── Home.tsx
├── routes/
│ └── AppRoutes.tsx
├── App.tsx
└── main.tsx

yaml
Copy
Edit
