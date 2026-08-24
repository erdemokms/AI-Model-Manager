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
```

## CRUD Operations

The application implements the four fundamental CRUD operations:

| Operation | Description |
|---|---|
| Create | Add a new AI model |
| Read | List and view existing models |
| Update | Edit model information |
| Delete | Remove a model |

## Model Information

Each model can contain:

- Model name
- Dataset
- Framework
- Accuracy
- F1 Score
- Training epochs
- Status
- Description

## Getting Started

### Requirements

Make sure you have Node.js and npm installed.

### Installation

Clone the repository:

```bash
git clone https://github.com/erdemokms/AI-Model-Manager.git
```

Navigate to the project directory:

```bash
cd AI-Model-Manager
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will then be available through the local development URL provided by Vite.

## Data Storage

AI Model Manager uses the browser's `LocalStorage` API to store model information.

This means that model data is stored locally in the user's browser and does not require a backend database.

## Screenshots

Screenshots of the application will be added here.

## Live Demo

The application is deployed and available online:

[AI Model Manager - Live Demo](https://stately-sable-aef216.netlify.app)
## Project Purpose

This project was developed as part of a web development and artificial intelligence training program.

The purpose of the project is to practice modern frontend development concepts including React, JavaScript, responsive design, CRUD operations, LocalStorage, routing and deployment.

## Author

**Erdem Okumuş**