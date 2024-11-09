import React from 'react';
import { CreditCard, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import type { Wallet } from '../types';

const Wallets = () => {
  const wallets = [
    { wallet_id: 1, user_id: 1, balance: 500, created_at: '2024-03-15', updated_at: '2024-03-15' },
    { wallet_id: 2, user_id: 2, balance: 1200, created_at: '2024-03-14', updated_at: '2024-03-15' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">Wallets</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Create Wallet
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {wallets.map((wallet) => (
          <div key={wallet.wallet_id} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-500">
                ID: {wallet.wallet_id}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Balance</span>
                <span className="text-lg font-semibold text-gray-900">
                  ${wallet.balance.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">User ID</span>
                <span className="text-sm font-medium text-gray-900">
                  {wallet.user_id}
                </span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <button className="w-full bg-gray-50 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-100">
                View Transactions
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallets;