import logoUrl from '../../assets/logoHeader.svg';

import {ContainerHeader, DivButton} from './styles';

interface HeaderProps {
  onNewTransaction: () => void;
}

export function Header({ onNewTransaction }: HeaderProps) {
  return (
    <ContainerHeader>
      <DivButton>
        {/* Logo */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          <img src={logoUrl} alt="Logo"></img>
          
          <span
            className="text-white font-bold text-base sm:text-lg tracking-wide"
            style={{ fontFamily: 'Roboto, sans-serif' }}
          >
            My Money
          </span>
        </div>

        {/* CTA Button */}
        <button
          onClick={onNewTransaction}
          className="px-4 sm:px-5 py-2 sm:py-2.5 rounded text-xs sm:text-sm font-medium text-white transition-all duration-150 active:scale-95 whitespace-nowrap"
          style={{ backgroundColor: '#00875f' }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00b37e')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00875f')}
        >
          Nova transação
        </button>
      </DivButton>
    </ContainerHeader>
  );
}
