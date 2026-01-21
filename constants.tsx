
import { Product, Testimonial, GrowthRecord, JournalArticle, User, Order } from './types';

export const COLORS = {
  oatmeal: '#FDFBF7',
  softBlue: '#A7C7E7',
  sageGreen: '#C1D7C1',
  softPink: '#F2D5D5',
  softYellow: '#F9E7B8',
  prestigeGold: '#D4AF37',
  text: '#4A4A4A',
  warmGrey: '#F5F5F0'
};

export const PRODUCTS: Product[] = [
  {
    id: 'growfly-30',
    name: '高飛星 GrowFly',
    shortDesc: '星際能量飲 (30入/盒)',
    price: 2190,
    originalPrice: 2580,
    image: 'https://images.unsplash.com/photo-1550577624-42c7cf5d87cd?auto=format&fit=crop&q=80&w=800',
    description: '專為兒童設計的晚間營養補給。結合 D3+K2、精氨酸與甘胺酸鎂，幫助入睡，支持黃金時段的成長需求。',
    oneLiner: '一夜好眠，啟動生長導航',
    category: 'growth',
    status: '熱銷 No.1',
    color: '#A7C7E7'
  },
  {
    id: 'probiotics-30',
    name: '舒敏益生菌',
    shortDesc: '全效益生菌粉 (30入/盒)',
    price: 990,
    originalPrice: 1280,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=800',
    description: '嚴選 15 株專利活性益生菌，搭配雙重益生質，調整體質，提升自我保護力。',
    oneLiner: '調整體質，營養吸收更加倍',
    category: 'digest',
    status: '新上市',
    color: '#F2D5D5'
  },
  {
    id: 'lutein-30',
    name: '晶亮葉黃素凍',
    shortDesc: '水果風味凍 (30入/盒)',
    price: 1180,
    originalPrice: 1580,
    image: 'https://images.unsplash.com/photo-1626202346765-f67311197825?auto=format&fit=crop&q=80&w=800',
    description: 'FloraGLO® 游離型葉黃素，搭配山桑子與玉米黃素，守護孩子探索世界的晶亮視窗。',
    oneLiner: '晶亮守護，閱讀學習不吃力',
    category: 'vision',
    color: '#F9E7B8'
  },
  {
    id: 'bundle-growth',
    name: '全方位成長禮盒',
    shortDesc: '組合包裝 (各一盒)',
    price: 3980,
    originalPrice: 4800,
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800',
    description: '成長、吸收、晶亮一次到位。給孩子最完整的應援，陪伴每一個重要的里程碑。',
    oneLiner: '成長+防護一次到位，送禮首選',
    category: 'bundle',
    status: '省 NT$820',
    color: '#E5D5B0'
  }
];

export const GROWFLY_PRODUCT = PRODUCTS[0];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Eva',
    title: '護理師',
    content: '孩子進入學齡階段，需要穩定的日常補給。高飛星在睡前飲用更容易讓孩子接受，也更符合育兒習慣。',
    avatar: 'https://picsum.photos/seed/eva/200'
  },
  {
    id: 2,
    name: '陳太太',
    title: '小學二年級家長',
    content: '我兒子挑食，晚上的營養總覺得不夠。現在睡前給他喝一瓶高飛星，他自己也會主動提醒我！',
    avatar: 'https://picsum.photos/seed/mrs-chen/200'
  },
  {
    id: 3,
    name: '王老師',
    title: '學習發展輔導老師',
    content: '孩子在夜晚好好休息，隔天才能保持專注。晚間補充高飛星能讓家長掌握固定補給的時刻，實用又安心。',
    avatar: 'https://picsum.photos/seed/mr-wang/200'
  }
];

// WHO Reference Data (Simplified for Boy 6-7 years)
export const WHO_GROWTH_REFERENCE = [
  { age: 6.0, h3: 108.5, h50: 116.0, h97: 123.5 },
  { age: 6.2, h3: 109.5, h50: 117.2, h97: 124.9 },
  { age: 6.4, h3: 110.8, h50: 118.5, h97: 126.2 },
  { age: 6.6, h3: 112.0, h50: 119.8, h97: 127.6 },
  { age: 6.8, h3: 113.2, h50: 121.0, h97: 128.9 },
  { age: 7.0, h3: 114.5, h50: 122.5, h97: 130.5 },
];

export const DUMMY_GROWTH_DATA: GrowthRecord[] = [
  { date: '2025.05', height: 115, weight: 20, age: 6 },
  { date: '2025.07', height: 116.5, weight: 20.8, age: 6.2 },
  { date: '2025.09', height: 118, weight: 21.5, age: 6.4 },
  { date: '2025.11', height: 119.5, weight: 22.2, age: 6.6 },
  { date: '2026.01', height: 121, weight: 23, age: 6.8 },
];

export const CURRENT_USER: User = {
  id: 'user_123',
  name: '羽晨媽媽',
  email: 'mummy@example.com',
  level: 'seed',
  levelName: '🌱 種子會員',
  points: 1280,
  childProfile: {
    nickname: '小羽',
    birthday: '2019-05-20',
    gender: 'boy'
  }
};

export const ORDER_HISTORY: Order[] = [
  { id: 'ORD-100256', date: '2026.01.15', total: 2190, status: 'completed', isSubscription: true },
  { id: 'ORD-99812', date: '2025.12.15', total: 2190, status: 'completed', isSubscription: true },
  { id: 'ORD-98231', date: '2025.11.20', total: 1180, status: 'completed', isSubscription: false },
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 'sleep-growth-hormone',
    title: '孩子睡滿 8 小時還不夠？黃金生長激素只在「這時間」分泌。',
    summary: '許多家長以為孩子只要睡得久就好，其實生長激素的分泌高峰期是晚上 10 點到凌晨 2 點...',
    category: 'sleep',
    categoryName: '睡眠發育',
    image: 'https://images.unsplash.com/photo-1520206151081-7bf65ee39b20?auto=format&fit=crop&q=80&w=1000',
    date: '2026.01.10',
    readTime: '3 min read',
    author: 'GrowFly 營養團隊',
    content: [
      { type: 'h2', value: '打破補鈣迷思！深層睡眠才是關鍵' },
      { type: 'text', value: '生長激素的分泌高峰期是晚上 10 點到凌晨 2 點，前提是孩子必須進入深層睡眠。如果孩子在 11 點才上床，即便睡滿 10 小時，也會錯過生長激素分泌最旺盛的時刻。' },
      { type: 'quote', value: '「生長激素的分泌高峰期是晚上 10 點到凌晨 2 點，前提是孩子必須進入深層睡眠。」' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1544126592-807daa2b5d3a?auto=format&fit=crop&q=80&w=1000' },
      { type: 'h2', value: '如何幫助孩子進入深睡？' },
      { type: 'text', value: '建立穩定的睡前儀式是關鍵。例如：刷牙、講故事、或是補充特定的放鬆營養素。甘胺酸鎂被證實能幫助肌肉放鬆，是建立健康睡眠習慣的好幫手。' },
      { type: 'product', value: 'growfly-30', subValue: '搭配「高飛星」建立夜間儀式' },
      { type: 'text', value: '在睡眠的路上，我們不僅要追求「量」，更要追求「質」。讓孩子在正確的時間入睡，才能掌握成長的主導權。' }
    ]
  },
  {
    id: 'calcium-d3-k2',
    title: '補鈣卻長不高？醫師：缺了維生素 K2，鈣質根本進不去骨骼。',
    summary: '單純補鈣可能導致鈣質在血液中遊蕩，甚至沉積在血管，這就是著名的「鈣質悖論」。',
    category: 'growth',
    categoryName: '長高關鍵',
    image: 'https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=1000',
    date: '2025.12.15',
    readTime: '4 min read',
    author: '林小兒科醫師',
    content: [
      { type: 'h2', value: '什麼是鈣質導航系統？' },
      { type: 'text', value: '維生素 D3 負責把鈣搬進身體，但只有維生素 K2 (MenaQ7®) 才能把鈣鎖進骨骼。沒有 K2，補再多鈣也是事倍功半。' },
      { type: 'product', value: 'growfly-30', subValue: '含專利 K2 的精準導航配方' }
    ]
  }
];
