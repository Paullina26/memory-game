import '../Button.scss';
import { useAppStore, Page } from '../../../store/appStore';

interface ButtonBigProps {
  buttonText: string;
  targetPage: Page;
  onClick?: () => void;
}

const ButtonBig: React.FC<ButtonBigProps> = ({
  buttonText,
  targetPage,
  onClick,
}) => {
  const setCurrentPage = useAppStore(state => state.setCurrentPage);

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      setCurrentPage(targetPage);
    }
  };

  return (
    <button onClick={handleClick} className='button-play'>
      {buttonText}
    </button>
  );
};
export default ButtonBig;
