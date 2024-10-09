import '../Button.scss';
import { useAppStore } from '../../../store/appStore';

const HomeButton: React.FC = () => {
  const setCurrentPage = useAppStore(state => state.setCurrentPage);

  return (
    <button onClick={() => setCurrentPage('PageHome')} className='button-home'>
      Home
    </button>
  );
};
export default HomeButton;
