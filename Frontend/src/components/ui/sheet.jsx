import React, { createContext, useContext, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './button';

// Create context for sheet state
const SheetContext = createContext({});

const Sheet = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SheetContext.Provider>
  );
};

const SheetTrigger = ({ children, asChild }) => {
  const { setIsOpen } = useContext(SheetContext);
  
  const handleClick = (e) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  if (asChild) {
    return React.cloneElement(children, {
      onClick: handleClick,
    });
  }

  return (
    <button onClick={handleClick}>
      {children}
    </button>
  );
};

const SheetContent = ({ children, side = 'right', className = '' }) => {
  const { isOpen, setIsOpen } = useContext(SheetContext);

  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, setIsOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div
        role="dialog"
        aria-modal="true"
        className={`fixed ${side === 'right' ? 'right-0' : 'left-0'} top-0 h-full bg-white p-6 shadow-lg z-50 transition-transform duration-300 ease-in-out ${className}`}
        style={{
          transform: 'translateX(0)',
          width: '100%',
          maxWidth: '24rem'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end mb-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
        </div>
        {children}
      </div>
    </>
  );
};

const SheetClose = ({ children, asChild }) => {
  const { setIsOpen } = useContext(SheetContext);

  if (asChild) {
    return React.cloneElement(children, {
      onClick: (e) => {
        children.props.onClick?.(e);
        setIsOpen(false);
      },
    });
  }

  return (
    <button onClick={() => setIsOpen(false)}>
      {children}
    </button>
  );
};

export { Sheet, SheetTrigger, SheetContent, SheetClose };
