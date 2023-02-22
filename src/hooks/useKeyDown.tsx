import {useEffect} from 'react';

export function useKeyDown(setModalClose: (flag: boolean) => void) {

  useEffect(() => {
    function handleKeyDown(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        setModalClose(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setModalClose]);
}
