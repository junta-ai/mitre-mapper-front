import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full text-slate-600 hover:bg-slate-500/10 dark:text-slate-400 dark:hover:bg-slate-400/10 transition-colors"
      aria-label="Alternar tema"
    >
      {isDark ? (
        <span className="material-symbols-outlined text-xl">light_mode</span>
      ) : (
        <span className="material-symbols-outlined text-xl">dark_mode</span>
      )}
    </button>
  );
};

export default ThemeToggle;
