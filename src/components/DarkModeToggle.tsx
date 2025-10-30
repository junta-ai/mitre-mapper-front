import React, { useEffect, useState } from 'react';

const DarkModeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Verificar preferência salva ou usar dark mode por padrão
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || !savedTheme;
    
    setIsDark(prefersDark);
    
    if (prefersDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full text-slate-600 hover:bg-slate-500/10 dark:text-slate-400 dark:hover:bg-slate-400/10"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
    >
      <span className="material-symbols-outlined text-xl">
        {isDark ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
};

export default DarkModeToggle;
