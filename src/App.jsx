import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";







function RouteFallback() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-background text-foreground">
      <p className="font-sans text-sm text-muted-foreground">Loading…</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
    
      <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300 relative">
        

        <Suspense fallback={<RouteFallback />}>
          <Routes>
            
          </Routes>
        </Suspense>

        <ThemeToggle />
        
      </div>
    </BrowserRouter>
  );
}

export default App;