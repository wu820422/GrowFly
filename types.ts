
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  description: string;
  shortDesc: string;
  category: 'growth' | 'digest' | 'vision' | 'bundle';
  status?: string;
  color: string;
  oneLiner: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  content: string;
  avatar: string;
}

export interface GrowthRecord {
  date: string;
  height: number;
  weight: number;
  age: number;
}

export interface JournalArticle {
  id: string;
  title: string;
  summary: string;
  category: 'growth' | 'sleep' | 'nutrition' | 'expert';
  categoryName: string;
  image: string;
  date: string;
  readTime: string;
  author: string;
  content: {
    type: 'text' | 'image' | 'h2' | 'quote' | 'product';
    value: string;
    subValue?: string;
  }[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  level: 'seed' | 'tree' | 'forest';
  levelName: string;
  points: number;
  childProfile?: {
    nickname: string;
    birthday: string;
    gender: 'boy' | 'girl';
  };
}

export interface Order {
  id: string;
  date: string;
  total: number;
  status: 'processing' | 'shipped' | 'completed';
  isSubscription: boolean;
}
