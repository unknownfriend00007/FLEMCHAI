export type Theme = 'light' | 'dark';

export const getSystemTheme = (): Theme => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('chatbot-theme') as Theme | null;
};

export const setStoredTheme = (theme: Theme): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('chatbot-theme', theme);
};

export const getInitialTheme = (): Theme => {
  const stored = getStoredTheme();
  if (stored) return stored;
  return getSystemTheme();
};

export const applyTheme = (theme: Theme, element?: HTMLElement): void => {
  if (typeof window === 'undefined') return;

  const targetElement = element || document.documentElement;

  targetElement.classList.remove('theme-light', 'theme-dark');
  targetElement.classList.add(`theme-${theme}`);
};
