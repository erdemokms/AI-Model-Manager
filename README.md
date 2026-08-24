# AI Model Manager

A modern web application for managing and monitoring machine learning models.

AI Model Manager allows users to store, organize and update information about their AI models through a clean and responsive dashboard.

## Features

- Dashboard with model statistics
- Add new AI models
- List existing models
- Update model information
- Delete models with confirmation
- Track accuracy, F1 score and training epochs
- Model status tracking
- LocalStorage data persistence
- Responsive design
- Modern React-based interface

## Tech Stack

- React
- JavaScript
- Vite
- Bootstrap 5
- React Router
- LocalStorage
- CSS

## Project Structure

```text
src/
├── components/
│   ├── ModelCard.jsx
│   └── Navbar.jsx
│
├── interfaces/
│   └── Model.js
│
├── pages/
│   ├── AddModel.jsx
│   ├── Dashboard.jsx
│   ├── EditModel.jsx
│   └── Models.jsx
│
├── App.jsx
├── index.css
└── main.jsx