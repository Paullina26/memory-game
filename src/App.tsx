import './App.css';
import { useAppStore } from './store/appStore';

import PageHome from './page/Home/PageHome';
import PageGame from './page/Game/PageGame';
import PageInstruction from './page/Instrudtions/PageInstruction';
import DifficultySelector from './components/DifficultySelector/DifficultySelector';
import PageStatistic from './page/Statistic/PageStatistic';

function App() {
  const currentPage = useAppStore(state => state.currentPage);

  return (
    <>
      <div>
        <div>
          {currentPage === 'PageHome' && <PageHome />}
          {currentPage === 'PageGame' && <PageGame />}
          {currentPage === 'PageInstructions' && <PageInstruction />}
          {currentPage === 'DifficultySelector' && <DifficultySelector />}
          {currentPage === 'PageStatistic' && <PageStatistic />}
        </div>
      </div>
    </>
  );
}

export default App;
