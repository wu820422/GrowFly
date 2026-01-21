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
    image: 'https://lh3.googleusercontent.com/d/1LItYovvJTkq2sO4MxNmGg-1CFuhrA-5C',
    description: '銀禾生醫旗艦產品。專為兒童設計的晚間營養補給，結合 D3+K2、精氨酸與甘胺酸鎂，幫助入睡，支持黃金時段的成長需求。',
    oneLiner: '「一夜好眠，啟動生長導航」',
    category: 'growth',
    status: '熱銷 NO.1',
    color: '#A7C7E7'
  },
  {
    id: 'probiotics-30',
    name: '舒敏益生菌',
    shortDesc: '全效益生菌粉 (30入/盒)',
    price: 990,
    originalPrice: 1280,
    image: 'https://images.unsplash.com/photo-1559089713-5262b7503020?auto=format&fit=crop&q=80&w=800',
    description: '銀禾生醫專業研發，嚴選 15 株專利活性益生菌，搭配雙重益生質，調整體質，提升自我保護力。',
    oneLiner: '「調整體質，營養吸收更加倍」',
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
    image: 'https://images.unsplash.com/photo-1550577624-42c7cf5d87cd?auto=format&fit=crop&q=80&w=800',
    description: '銀禾生醫晶亮配方。FloraGLO® 游離型葉黃素，搭配山桑子與玉米黃素，守護孩子探索世界的晶亮視窗。',
    oneLiner: '「晶亮守護，閱讀學習不吃力」',
    category: 'vision',
    color: '#F9E7B8'
  },
  {
    id: 'bundle-growth',
    name: '全方位成長禮盒組',
    shortDesc: '銀禾成長應援組合',
    price: 3980,
    originalPrice: 4800,
    image: 'https://images.unsplash.com/photo-1512418490979-92798ccc1380?auto=format&fit=crop&q=80&w=800',
    description: '銀禾生醫成長應援組。高飛星、舒敏益生菌、晶亮葉黃素凍各一盒。陪伴每一個重要的里程碑。',
    oneLiner: '「成長+防護一次到位，送禮首選」',
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
    content: '孩子進入學齡階段，需要穩定的日常補給。銀禾生醫的高飛星在睡前飲用更容易讓孩子接受。',
    avatar: 'https://picsum.photos/seed/eva/200'
  },
  {
    id: 2,
    name: '陳太太',
    title: '小學二年級家長',
    content: '我兒子挑食，晚上的營養總覺得不夠。現在睡前給他喝一瓶高飛群高飛星，他自己也會主動提醒我！',
    avatar: 'https://picsum.photos/seed/mrs-chen/200'
  },
  {
    id: 3,
    name: '王老師',
    title: '學習發展輔導老師',
    content: '孩子在夜晚好好休息，隔天保持專注。銀禾生醫的產品讓家長掌握固定補給的時刻，安心有感。',
    avatar: 'https://picsum.photos/seed/mr-wang/200'
  }
];

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
    image: 'https://images.unsplash.com/photo-1544126592-807daa2b5d3a?auto=format&fit=crop&q=80&w=1200',
    date: '2026.01.10',
    readTime: '3 min read',
    author: '銀禾生醫 研發團隊',
    content: [
      { type: 'h2', value: '打破補鈣迷思！深層睡眠才是關鍵' },
      { type: 'text', value: '生長激素的分泌高峰期是晚上 10 點到凌晨 2 點，前提是孩子必須進入深層睡眠。如果孩子在 11 點才上床，即便睡滿 10 小時，也會錯過生長激素分泌最旺盛的時刻。' },
      { type: 'quote', value: '「生長激素的分泌高峰期是晚上 10 點到凌晨 2 點，前提是孩子必須進入深層睡眠。」' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1544126592-807daa2b5d3a?auto=format&fit=crop&q=80&w=1000' },
      { type: 'h2', value: '如何幫助孩子進入深睡？' },
      { type: 'text', value: '建立穩定的睡前儀式是關鍵。例如：刷牙、講故事、或是補充特定的放鬆營養素。甘胺酸鎂被證實能幫助肌肉放鬆，是建立健康睡眠習慣的好幫手。' },
      { type: 'product', value: 'growfly-30', subValue: '搭配「高飛星」建立夜間儀式' }
    ]
  },
  {
    id: 'calcium-d3-k2',
    title: '補鈣卻長不高？醫師：缺了維生素 K2，鈣質根本進不去骨骼。',
    summary: '單純補鈣可能導致鈣質在血液中遊蕩，甚至沉積在血管，這就是著名的「鈣質悖論」。',
    category: 'growth',
    categoryName: '長高關鍵',
    image: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&q=80&w=1200',
    date: '2025.12.15',
    readTime: '4 min read',
    author: '銀禾生醫 醫學顧問',
    content: [
      { type: 'h2', value: '什麼是鈣質導航系統？' },
      { type: 'text', value: '維生素 D3 負責把鈣搬進身體，但只有維生素 K2 (MenaQ7®) 才能把鈣鎖進骨骼。沒有 K2，補再多鈣也是事便功半。' },
      { type: 'product', value: 'growfly-30', subValue: '高飛星含專利 K2 的精準導航配方' }
    ]
  },
  {
    id: 'picky-eater-tips',
    title: '孩子挑食怎麼辦？5 個讓孩子愛上蔬菜的創意食譜。',
    summary: '面對不愛吃綠色蔬菜的孩子，強迫往往適得其反。營養師教您用「色彩學」改變孩子的胃口。',
    category: 'nutrition',
    categoryName: '營養食譜',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=1200',
    date: '2026.01.05',
    readTime: '5 min read',
    author: '兒童營養師 林小姐',
    content: [
      { type: 'h2', value: '隱身術：將蔬菜融入最愛的食物' },
      { type: 'text', value: '將菠菜打成汁混入鬆餅麵糊，或是將甜椒切碎混入肉餅中。讓蔬菜成為配角，減少孩子的防備心。' },
      { type: 'image', value: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1000' }
    ]
  },
  {
    id: 'posture-growth',
    title: '書桌高度也會影響發育？物理治療師教你打造黃金學習環境。',
    summary: '不正確的坐姿不僅影響視力，更會對發育中的脊椎造成永久性負擔，影響身高發展。',
    category: 'expert',
    categoryName: '醫師專欄',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=1200',
    date: '2025.12.28',
    readTime: '4 min read',
    author: '物理治療師 張院長',
    content: [
      { type: 'h2', value: '90-90-90 原則' },
      { type: 'text', value: '肘部、臀部與膝部都應保持 90 度彎曲。書桌高度應剛好能讓前臂水平放置而不聳肩。' }
    ]
  },
  {
    id: 'exercise-for-height',
    title: '運動不只是流汗！這三種運動最能刺激長骨生長。',
    summary: '並非所有運動都有助於長高。適度的「負重」與「跳躍」才是刺激生長板細胞分裂的關鍵。',
    category: 'growth',
    categoryName: '長高關鍵',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1200',
    date: '2025.11.30',
    readTime: '3 min read',
    author: '銀禾運動科學顧問',
    content: [
      { type: 'h2', value: '為什麼籃球與跳繩是長高首選？' },
      { type: 'text', value: '垂直跳躍運動會產生縱向的壓力，這種壓力能啟動生長板的代謝，促進軟骨細胞鈣化成骨組織。' }
    ]
  },
  {
    id: 'blue-light-threat',
    title: '藍光對成長的威脅？睡前滑手機影響的不只是視力。',
    summary: '許多研究指出，藍光會抑制褪黑激素分泌，進而延遲生長激素的釋放，對正在發育的孩子來說，影響的不只是眼睛，更是身高。',
    category: 'sleep',
    categoryName: '睡眠發育',
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1200',
    date: '2025.11.15',
    readTime: '4 min read',
    author: '銀禾生醫 研發團隊',
    content: [
      { type: 'h2', value: '藍光如何影響睡眠品質？' },
      { type: 'text', value: '螢幕發出的藍光會抑制大腦褪黑激素的分泌。當褪黑激素不足時，身體難以進入深層睡眠，進而減少生長激素的分泌。' }
    ]
  },
  {
    id: 'picky-eaters-guide',
    title: '挑食孩子的救星：如何讓孩子在快樂中攝取足量營養？',
    summary: '挑食是許多家長的噩夢。透過遊戲與視覺引導，讓餐桌不再是戰場，而是成長的起點。',
    category: 'nutrition',
    categoryName: '營養食譜',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=1200',
    date: '2026.02.05',
    readTime: '5 min read',
    author: '兒童行為學專家',
    content: [
      { type: 'h2', value: '改變食物的型態' },
      { type: 'text', value: '將不愛吃的蔬菜切成可愛形狀，或是打碎融入咖哩中。慢慢建立孩子對新口味的接受度。' }
    ]
  },
  {
    id: 'summer-growth-tips',
    title: '夏季成長黃金期：掌握這三點，讓孩子在暑假「突飛猛進」。',
    summary: '夏天是戶外活動的高峰，充足的陽光與運動量是生長的加速器，但補水與休息同樣不可忽視。',
    category: 'growth',
    categoryName: '長高關鍵',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea244b05ffb?auto=format&fit=crop&q=80&w=1200',
    date: '2025.07.10',
    readTime: '4 min read',
    author: '銀禾健康教練',
    content: [
      { type: 'h2', value: '陽光與 D3' },
      { type: 'text', value: '適度的日曬能幫助身體合成天然維生素 D3。每天早晨 15 分鐘的戶外活動，對骨骼健康大有裨益。' }
    ]
  },
  {
    id: 'eye-protection-3c',
    title: '3C 時代的視力保護：葉黃素到底該怎麼挑、怎麼吃？',
    summary: '面對數位學習不可避免的趨勢，如何保護孩子的靈魂之窗？專業醫師教你挑選有效的護眼配方。',
    category: 'expert',
    categoryName: '醫師專欄',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dad99a01?auto=format&fit=crop&q=80&w=1200',
    date: '2026.01.20',
    readTime: '6 min read',
    author: '眼科專業醫師',
    content: [
      { type: 'h2', value: '游離型葉黃素的優勢' },
      { type: 'text', value: 'FloraGLO® 游離型葉黃素分子量小，吸收率比酯化型更高。搭配玉米黃素與花青素，防護力更全面。' }
    ]
  },
  {
    id: 'probiotics-science',
    title: '腸道健康即是免疫力：益生菌對學齡孩童的多重保護。',
    summary: '腸道是人體最大的免疫器官。維持健康的菌相，不僅能改善消化，更能提升對外在環境的防禦力。',
    category: 'expert',
    categoryName: '醫師專欄',
    image: 'https://images.unsplash.com/photo-1559089713-5262b7503020?auto=format&fit=crop&q=80&w=1200',
    date: '2026.02.12',
    readTime: '5 min read',
    author: '微生學博士',
    content: [
      { type: 'h2', value: '多元菌株的協同作用' },
      { type: 'text', value: '選擇包含多種專利菌株的益生菌，能針對腸道不同部位提供保護。搭配益生質如異麥芽寡糖，讓好菌活得更久。' }
    ]
  }
];
