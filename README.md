# Todo App with React and Firebase Firestore

A simple and responsive Todo application built with React, TypeScript, and Firebase Firestore for real-time data synchronization.

## Features
- 📝 Create new todo items with form validation
- ✅ Toggle todo completion status
- 🗑️ Delete todos
- 📲 Real-time sync with Firebase Firestore
- 📊 Track total todos in list
- 🎨 Styled with Tailwind CSS

## Technologies Used
- React + TypeScript
- Firebase Firestore (v9+ SDK)
- Tailwind CSS
- Vite (project setup)

## Installation
1. Clone repository
```bash
git clone [your-repository-url]
cd todo-app

npm install

# Firebase setup:

Create a Firebase project at firebase.google.com

Create a new Firestore database

Add your Firebase config to src/Components/Firebase.ts:

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/src
  /Components
    Firebase.ts       # Firebase configuration
    Forms.tsx         # Input form component
    ToDoList.tsx      # Todo item component
  App.tsx            # Main application component