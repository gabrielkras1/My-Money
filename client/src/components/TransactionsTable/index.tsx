import { useState } from 'react';
import { Search, ChevronRight, ChevronLeft } from 'lucide-react';
import { formatCurrency, ITEMS_PER_PAGE, type Transaction } from '@/lib/data';

import {DivTransactionsTable, DivForm, ContainerTransactions} from './styles';

interface TransactionsTableProps {
  transactions: Transaction[];
}

export function TransactionsTable({ transactions }: TransactionsTableProps) {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = transactions.filter(t =>
    t.description.toLowerCase().includes(search.toLowerCase()) ||
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const safePage = Math.min(currentPage, totalPages);
  const paginated = filtered.slice((safePage - 1) * ITEMS_PER_PAGE, safePage * ITEMS_PER_PAGE);

  function handleSearch() {
    setCurrentPage(1);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSearch();
  }

  // Build page numbers array
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <DivTransactionsTable>
      <ContainerTransactions>
        <DivForm>
          <input
            type="text"
            placeholder="Busque uma transação"
            value={search}
            onChange={e => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            onKeyDown={handleKeyDown}
            className="flex-1 px-4 sm:px-5 py-2.5 sm:py-3 rounded text-sm text-white placeholder-gray-500 outline-none focus:ring-1 focus:ring-green-600 transition-all"
            style={{ backgroundColor: '#121214', border: 'none' }}
          />
          <button
            onClick={handleSearch}
            className="flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded text-sm font-medium transition-all duration-150 active:scale-95 whitespace-nowrap"
            style={{ backgroundColor: '#29292e', color: '#00b37e', border: '1px solid #015F43' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#323238')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#29292e')}
          >
            <Search size={16} />
            Buscar
          </button>
        </DivForm>

        <div className="hidden sm:block rounded-md overflow-hidden" style={{ backgroundColor: 'transparent' }}>
          {paginated.length === 0 ? (
            <div className="text-center py-16" style={{ color: '#8d8d99' }}>
              Nenhuma transação encontrada.
            </div>
          ) : (
            <table className="w-full border-collapse">
              <tbody>
                {paginated.map((transaction) => (
                  <tr
                    key={transaction.id}
                    className="transaction-row"
                    style={{
                      backgroundColor: '#29292e',
                      borderBottom: '4px solid #121214',
                    }}
                  >
                    <td className="px-6 py-5 text-sm" style={{ color: '#e1e1e6', width: '40%' }}>
                      {transaction.description}
                    </td>
                    <td
                      className="px-6 py-5 text-sm font-medium"
                      style={{
                        color: transaction.type === 'income' ? '#00b37e' : '#f75a68',
                        width: '20%',
                      }}
                    >
                      {transaction.type === 'expense' && '- '}
                      {formatCurrency(transaction.amount)}
                    </td>
                    <td className="px-6 py-5 text-sm" style={{ color: '#8d8d99', width: '20%' }}>
                      {transaction.category}
                    </td>
                    <td className="px-6 py-5 text-sm text-right" style={{ color: '#8d8d99', width: '20%' }}>
                      {transaction.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Mobile Cards */}
        <div className="sm:hidden space-y-3">
          {paginated.length === 0 ? (
            <div className="text-center py-12" style={{ color: '#8d8d99' }}>
              Nenhuma transação encontrada.
            </div>
          ) : (
            paginated.map((transaction) => (
              <div
                key={transaction.id}
                className="transaction-row p-4 rounded"
                style={{ backgroundColor: '#29292e' }}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-sm font-medium text-white flex-1">
                    {transaction.description}
                  </span>
                  <span
                    className="text-sm font-bold ml-2 whitespace-nowrap"
                    style={{
                      color: transaction.type === 'income' ? '#00b37e' : '#f75a68',
                    }}
                  >
                    {transaction.type === 'expense' && '- '}
                    {formatCurrency(transaction.amount)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs" style={{ color: '#8d8d99' }}>
                  <span className="flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM8 3a5 5 0 1 1 0 10A5 5 0 0 1 8 3z"/>
                    </svg>
                    {transaction.category}
                  </span>
                  <span>{transaction.date}</span>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 sm:gap-2 mt-6 sm:mt-8">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={safePage === 1}
              className="w-8 h-8 flex items-center justify-center rounded transition-all duration-150 disabled:opacity-30"
              style={{ color: '#8d8d99' }}
              onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8d8d99')}
            >
              <ChevronLeft size={16} />
            </button>

            {pageNumbers.map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className="w-8 h-8 flex items-center justify-center rounded text-xs sm:text-sm font-medium transition-all duration-150"
                style={{
                  backgroundColor: page === safePage ? '#00875f' : 'transparent',
                  color: page === safePage ? '#fff' : '#8d8d99',
                  border: page === safePage ? 'none' : '1px solid #323238',
                }}
                onMouseEnter={e => {
                  if (page !== safePage) {
                    e.currentTarget.style.backgroundColor = '#323238';
                    e.currentTarget.style.color = '#fff';
                  }
                }}
                onMouseLeave={e => {
                  if (page !== safePage) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = '#8d8d99';
                  }
                }}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={safePage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded transition-all duration-150 disabled:opacity-30"
              style={{ color: '#8d8d99' }}
              onMouseEnter={e => !e.currentTarget.disabled && (e.currentTarget.style.color = '#fff')}
              onMouseLeave={e => (e.currentTarget.style.color = '#8d8d99')}
            >
              <ChevronRight size={16} />
            </button>
          </div>
        )}
      </ContainerTransactions>
    </DivTransactionsTable>
  );
}
