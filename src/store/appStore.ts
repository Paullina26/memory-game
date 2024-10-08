import { create } from 'zustand';


// it might be react-router-dom but for this small app I decided to use zustand. 
export type Page =
  | 'PageHome'
  | 'PageGame'
  | 'PageInstructions'
  | 'DifficultySelector'
  | 'PageStatistic';

interface AppState {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const useAppStore = create<AppState>(set => ({
  currentPage: 'PageHome',
  setCurrentPage: page => set({ currentPage: page }),
}));
