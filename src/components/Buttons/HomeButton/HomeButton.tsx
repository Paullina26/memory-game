import '../Button.scss';
import { useAppStore, Page } from '../../../store/appStore';

interface HomeButtonProps {
  buttonText: string;
  targetPage: Page;
}

const HomeButton: React.FC<HomeButtonProps> = ({ buttonText, targetPage }) => {
  const setCurrentPage = useAppStore(state => state.setCurrentPage);

  return (
    <button onClick={() => setCurrentPage(targetPage)} className='button-home'>
      {buttonText}
    </button>
  );
};
export default HomeButton;
