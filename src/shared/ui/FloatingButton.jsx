import { createPortal } from 'react-dom';
import Button from './Button';

function FloatingButton({ label, onClick, disabled = false }) {
  const portalRoot = document.getElementById('root-portal');

  if (!portalRoot) {
    return null;
  }

  return createPortal(
    <div className='fixed inset-x-0 bottom-0 z-footer animate-slideup bg-white px-4 pb-10'>
      <Button onClick={onClick} disabled={disabled}>
        {label}
      </Button>
    </div>,
    portalRoot,
  );
}

export default FloatingButton;
