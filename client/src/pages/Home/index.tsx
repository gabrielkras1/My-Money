
import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { SummaryCards } from '@/components/SummaryCards';
import { TransactionsTable } from '@/components/TransactionsTable';
import { NewTransactionModal } from '@/components/NewTransactionModal';
import { transactions as initialTransactions, type Transaction } from '@/lib/data';

// import { PageContainer, TopSection, Divider, BottomSection } from './styles';

export default function Home() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { totalIncome, totalExpense, total } = useMemo(() => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + t.amount, 0);
    const expense = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + Math.abs(t.amount), 0);
    return {
      totalIncome: income,
      totalExpense: expense,
      total: income - expense,
    };
  }, [transactions]);

  function handleAddTransaction(transaction: Omit<Transaction, 'id'>) {
    const newTransaction: Transaction = {
      ...transaction,
      id: Date.now(),
    };
    setTransactions(prev => [newTransaction, ...prev]);
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#121214' }}>
      <div style={{ backgroundColor: '#1d1d1d', paddingBottom: '2rem sm:pb-16' }}>
        <Header onNewTransaction={() => setIsModalOpen(true)} />
      </div>

      <SummaryCards
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        total={total}
      />

      <TransactionsTable transactions={transactions} />

      <NewTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTransaction}
      />
    </div>
  );
}


/*<div className="min-h-screen" style={{ backgroundColor: '#121214' }}>
      <div style={{ backgroundColor: '#1d1d1d', paddingBottom: '2rem sm:pb-16' }}>
        <Header onNewTransaction={() => setIsModalOpen(true)} />
      </div>

      <SummaryCards
        totalIncome={totalIncome}
        totalExpense={totalExpense}
        total={total}
      />

      <TransactionsTable transactions={transactions} />

      <NewTransactionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAdd={handleAddTransaction}
      />
    </div>*/
