// Step 1 of useContext() hook 
// have the context to have data (optional) - by using createContext() hook
import { createContext } from 'react';

export const PageContext = createContext(); // you can have data;

// For Step 2: Refer App.js
// For Step 3: Refer Home.js and About.js