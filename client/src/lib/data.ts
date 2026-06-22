export interface Transaction {
  id: number;
  description: string;
  amount: number;
  category: string;
  date: string;
  type: 'income' | 'expense';
}

export const transactions: Transaction[] = [
  { id: 1,  description: 'Desenvolvimento de site',  amount: 12000,  category: 'Venda',       date: '13/04/2022', type: 'income'  },
  { id: 2,  description: 'Hamburguer',               amount: -59,    category: 'Alimentação', date: '10/04/2022', type: 'expense' },
  { id: 3,  description: 'Aluguel do apartamento',   amount: -1200,  category: 'Casa',        date: '27/03/2022', type: 'expense' },
  { id: 4,  description: 'Computador',               amount: 5400,   category: 'Venda',       date: '15/03/2022', type: 'income'  },
  { id: 5,  description: 'Desenvolvimento de site',  amount: 8000,   category: 'Venda',       date: '13/03/2022', type: 'income'  },
  { id: 6,  description: 'Janta',                    amount: -39,    category: 'Alimentação', date: '10/03/2022', type: 'expense' },
  { id: 7,  description: 'Aluguel do apartamento',   amount: -1200,  category: 'Casa',        date: '27/02/2022', type: 'expense' },
  { id: 8,  description: 'Salário',                  amount: 5400,   category: 'Salário',     date: '15/02/2022', type: 'income'  },
  { id: 9,  description: 'Almoço',                   amount: -30,    category: 'Alimentação', date: '05/02/2022', type: 'expense' },
  { id: 10, description: 'Fone de ouvido',           amount: -150,   category: 'Itens',       date: '02/02/2022', type: 'expense' },
  { id: 11, description: 'Freelance design',         amount: 3500,   category: 'Venda',       date: '28/01/2022', type: 'income'  },
  { id: 12, description: 'Supermercado',             amount: -320,   category: 'Alimentação', date: '25/01/2022', type: 'expense' },
  { id: 13, description: 'Salário',                  amount: 5400,   category: 'Salário',     date: '15/01/2022', type: 'income'  },
  { id: 14, description: 'Conta de luz',             amount: -180,   category: 'Casa',        date: '10/01/2022', type: 'expense' },
  { id: 15, description: 'Consultoria',              amount: 2800,   category: 'Venda',       date: '05/01/2022', type: 'income'  },
  { id: 16, description: 'Academia',                 amount: -90,    category: 'Saúde',       date: '02/01/2022', type: 'expense' },
  { id: 17, description: 'Salário',                  amount: 5400,   category: 'Salário',     date: '15/12/2021', type: 'income'  },
  { id: 18, description: 'Restaurante',              amount: -85,    category: 'Alimentação', date: '12/12/2021', type: 'expense' },
  { id: 19, description: 'Projeto mobile',           amount: 4200,   category: 'Venda',       date: '08/12/2021', type: 'income'  },
  { id: 20, description: 'Aluguel do apartamento',   amount: -1200,  category: 'Casa',        date: '27/11/2021', type: 'expense' },
];

export function formatCurrency(value: number): string {
  const abs = Math.abs(value);
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(abs);
}

export const ITEMS_PER_PAGE = 10;
