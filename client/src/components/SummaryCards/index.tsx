import { formatCurrency } from '@/lib/data';
import {DivCards} from './styles';

interface SummaryCardsProps {
  totalIncome: number;
  totalExpense: number;
  total: number;
}

export function SummaryCards({ totalIncome, totalExpense, total }: SummaryCardsProps) {
  return (
    <DivCards>
      {/* Entradas */}
      <div
        className="rounded p-4 sm:p-7 flex flex-col gap-3 sm:gap-4"
        style={{ backgroundColor: '#29292e' }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-normal" style={{ color: '#c4c4cc' }}>
            Entradas
          </span>
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="w-6 h-6 sm:w-7 sm:h-7">
            <circle cx="14" cy="14" r="14" fill="none"/>
            <path d="M14 20V8M14 8L8 14M14 8L20 14" stroke="#00b37e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-white">
          {formatCurrency(totalIncome)}
        </span>
      </div>

      {/* Saídas */}
      <div
        className="rounded p-4 sm:p-7 flex flex-col gap-3 sm:gap-4"
        style={{ backgroundColor: '#29292e' }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-normal" style={{ color: '#c4c4cc' }}>
            Saídas
          </span>
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="w-6 h-6 sm:w-7 sm:h-7">
            <circle cx="14" cy="14" r="14" fill="none"/>
            <path d="M14 8V20M14 20L8 14M14 20L20 14" stroke="#f75a68" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-white">
          {formatCurrency(totalExpense)}
        </span>
      </div>

      {/* Total */}
      <div
        className="rounded p-4 sm:p-7 flex flex-col gap-3 sm:gap-4"
        style={{ backgroundColor: '#015f43' }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xs sm:text-sm font-normal" style={{ color: '#c4c4cc' }}>
            Total
          </span>
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" className="w-6 h-6 sm:w-7 sm:h-7">
            <circle cx="14" cy="14" r="14" fill="none"/>
            <text x="14" y="19" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold">$</text>
          </svg>
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-white">
          {formatCurrency(total)}
        </span>
      </div>
    </DivCards>
  );
}
