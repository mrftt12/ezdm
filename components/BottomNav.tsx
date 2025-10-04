
import React from 'react';
import { MaterialIcon } from './Icons';
import type { Page } from '../App';

interface NavItem {
  page: Page;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { page: 'Home', label: 'Home', icon: 'home' },
  { page: 'Search', label: 'Search', icon: 'search' },
  { page: 'Library', label: 'My Library', icon: 'bookmark' },
  { page: 'Profile', label: 'Profile', icon: 'person' },
];

interface BottomNavProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ activePage, onNavigate }) => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 border-t border-slate-200 bg-background-light/90 backdrop-blur-sm dark:border-slate-800 dark:bg-background-dark/90">
      <nav className="flex justify-around px-2 pt-2 pb-4">
        {navItems.map((item) => {
          const isActive = activePage === item.page;
          return (
            <button
              key={item.page}
              onClick={() => onNavigate(item.page)}
              className={`flex flex-col items-center gap-1 w-20 ${
                isActive ? 'text-primary' : 'text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-primary'
              }`}
            >
              <MaterialIcon name={item.icon} className="text-2xl" filled={isActive} />
              <span className={`text-xs font-medium ${isActive ? 'font-bold' : ''}`}>{item.label}</span>
            </button>
          );
        })}
      </nav>
    </footer>
  );
};

export default BottomNav;
