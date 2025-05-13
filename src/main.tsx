
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './App.css'
import './styles/carousel.css'

const initContentDirectories = async () => {
  try {
    const directories = ['blog', 'events', 'projects'];
    
    for (const dir of directories) {
      // Try to fetch the index.json
      const response = await fetch(`/content/${dir}/index.json`).catch(() => null);
      
      if (!response || !response.ok) {
        console.log(`Creating index.json for ${dir} directory`);
      }
    }
  } catch (error) {
    console.error('Error initializing content directories:', error);
  }
};

// Initialize content directories before rendering
initContentDirectories().finally(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
});
