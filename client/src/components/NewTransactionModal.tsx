/**
 * NewTransactionModal — My Money
 * Modal para criação de nova transação com campos de descrição, valor, categoria e tipo
 * Design: Fiel à imagem de referência com inputs, tipo seletor e botão cadastrar
 * Responsive: mobile-first design
 */
import { useState } from 'react';
import { X } from 'lucide-react';
import type { Transaction } from '@/lib/data';

interface NewTransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (transaction: Omit<Transaction, 'id'>) => void;
}

export function NewTransactionModal({ isOpen, onClose, onAdd }: NewTransactionModalProps) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState<'income' | 'expense'>('income');

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!description || !amount || !category) return;

    const numericAmount = parseFloat(amount.replace(',', '.'));
    const today = new Date();
    const date = `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;

    onAdd({
      description,
      amount: type === 'expense' ? -Math.abs(numericAmount) : Math.abs(numericAmount),
      category,
      date,
      type,
    });

    setDescription('');
    setAmount('');
    setCategory('');
    setType('income');
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
      style={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-md mx-0 sm:mx-4 rounded-t-lg sm:rounded p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        style={{ backgroundColor: '#323238' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <h2 className="text-white text-lg font-bold mb-6">Nova transação</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Descrição */}
          <input
            type="text"
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            className="w-full px-4 sm:px-5 py-3 rounded text-white text-sm placeholder-gray-500 outline-none focus:ring-1 focus:ring-green-500 transition-all"
            style={{ backgroundColor: '#29292e', border: 'none' }}
          />

          {/* Preço */}
          <input
            type="number"
            placeholder="Preço"
            value={amount}
            onChange={e => setAmount(e.target.value)}
            required
            min="0"
            step="0.01"
            className="w-full px-4 sm:px-5 py-3 rounded text-white text-sm placeholder-gray-500 outline-none focus:ring-1 focus:ring-green-500 transition-all"
            style={{ backgroundColor: '#29292e', border: 'none' }}
          />

          {/* Categoria */}
          <input
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={e => setCategory(e.target.value)}
            required
            className="w-full px-4 sm:px-5 py-3 rounded text-white text-sm placeholder-gray-500 outline-none focus:ring-1 focus:ring-green-500 transition-all"
            style={{ backgroundColor: '#29292e', border: 'none' }}
          />

          {/* Type selector - Entrada / Saída */}
          <div className="flex gap-3 mt-2">
            <button
              type="button"
              onClick={() => setType('income')}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded text-sm font-medium transition-all duration-150"
              style={{
                border: `2px solid ${type === 'income' ? '#00b37e' : '#8d8d99'}`,
                backgroundColor: 'transparent',
                color: type === 'income' ? '#00b37e' : '#8d8d99',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 12V4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Entrada
            </button>

            <button
              type="button"
              onClick={() => setType('expense')}
              className="flex-1 flex items-center justify-center gap-2 py-3 rounded text-sm font-medium transition-all duration-150"
              style={{
                border: `2px solid ${type === 'expense' ? '#f75a68' : '#8d8d99'}`,
                backgroundColor: 'transparent',
                color: type === 'expense' ? '#f75a68' : '#8d8d99',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 4V12M8 12L4 8M8 12L12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Saída
            </button>
          </div>

          {/* Botão Cadastrar */}
          <button
            type="submit"
            className="mt-4 w-full py-3 rounded font-bold text-white text-sm transition-all duration-150 active:scale-95"
            style={{ backgroundColor: '#00875f' }}
            onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#00b37e')}
            onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#00875f')}
          >
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
