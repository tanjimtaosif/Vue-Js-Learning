# Vue Jobs - Developer Listing Portal

A modern, responsive job board application built with **Vue 3** and **Tailwind CSS**. This project serves as a platform to browse, view details, and manage Vue.js job opportunities.

---

## 🚀 Features

* **Dynamic Job Grid**: Fetches and renders job listings from a centralized JSON data source.
* **Show More/Less Logic**: Intelligent description truncation that allows users to toggle full text visibility.
* **Component-Based Architecture**: Highly reusable UI components including customizable Cards and Buttons.
* **Responsive Design**: Built with a mobile-first approach using Tailwind CSS.
* **Prop-Driven Customization**: Sections like the Hero and Job Listings can be adjusted via props (e.g., limiting the number of jobs displayed).

---

## 🛠️ Tech Stack

* **Framework:** [Vue.js 3](https://vuejs.org/) (Composition API with `<script setup>`)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [PrimeIcons](https://primefaces.org/primeicons/) (Recommended for the location marker)



---

## 📂 Project Structure

* `src/components/`
    * `Navbar.vue`: Top navigation with branding and links.
    * `Hero.vue`: Main banner with dynamic title and subtitle props.
    * `Card.vue`: A wrapper component using slots for flexible layout.
    * `JobListing.vue`: Individual job cards with "read more" logic.
    * `JobListings.vue`: The container that loops through the job data.
* `src/jobs.json`: The "database" containing job titles, descriptions, and company details.
* `App.vue`: The master layout combining all components.

---

## 🔧 Project Setup

### 1. Installation
```
npm install

```
### 2. Install Additional Dependencies (Vue Router & Icons)
```
npm install vue-router@4 primeicons

```

### 3. Run Development Server
```
npm run dev

```
### 4. Build for Production
```
npm run build

```
---
## 📝 Component Usage Example
* The Card component uses a slot to allow any content to be injected into a styled box:)
```
<Card bg="bg-green-100">
  <h2>Title</h2>
  <p>Content goes here.</p>
</Card>
```
---
## 💡 IDE Setup 
* **Editor: ** VS Code
* **Extension: ** Vue - Official (Volar)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Icons:** [PrimeIcons](https://primefaces.org/primeicons/) (Recommended for the location marker)

