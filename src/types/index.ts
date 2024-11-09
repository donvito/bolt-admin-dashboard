export interface User {
  id: number;
  name: string;
  email: string;
  image: string;
}

export interface ImageGeneration {
  id: number;
  user_id: number;
  image_key: string;
  prompt: string;
  generated_at: string;
  model: string;
  hf_lora: string;
  prediction_log: any;
  prediction_id: string;
  prediction_status: string;
  replicate_image_url: string;
  is_deleted: boolean;
  is_favorite: boolean;
}

export interface Wallet {
  wallet_id: number;
  user_id: number;
  balance: number;
  created_at: string;
  updated_at: string;
}

export interface Transaction {
  transaction_id: number;
  wallet_id: number;
  amount: number;
  transaction_type: 'credit' | 'debit';
  description: string;
  created_at: string;
}