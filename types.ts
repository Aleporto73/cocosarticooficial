
export interface Product {
  id: string;
  name: string;
  category: 'CocoCoin' | 'vip' | 'CHAVES';
  description: string;
  price: number;
  image: string;
}

export interface CartItem extends Product {
  quantity: number;
}
