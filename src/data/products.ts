export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  category: string;
  size: string[];
  color: string[];
  isNew?: boolean;
  discount?: number;
  description: string;
}

export const products: Product[] = [
  // Женская одежда
  {
    id: "1",
    name: "Платье миди с принтом",
    price: 4500,
    originalPrice: 6000,
    image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400",
    brand: "Zara",
    category: "Платья",
    size: ["XS", "S", "M", "L"],
    color: ["Синий", "Красный"],
    discount: 25,
    description: "Элегантное платье миди с цветочным принтом",
  },
  {
    id: "2",
    name: "Блузка шелковая",
    price: 3200,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=400",
    brand: "H&M",
    category: "Блузки",
    size: ["S", "M", "L", "XL"],
    color: ["Белый", "Черный", "Бежевый"],
    isNew: true,
    description: "Роскошная шелковая блузка для особых случаев",
  },
  {
    id: "3",
    name: "Джинсы скинни",
    price: 2800,
    originalPrice: 3500,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400",
    brand: "Levi's",
    category: "Джинсы",
    size: ["26", "27", "28", "29", "30"],
    color: ["Синий", "Черный"],
    discount: 20,
    description: "Классические джинсы скинни из премиального денима",
  },
  {
    id: "4",
    name: "Кардиган вязаный",
    price: 3800,
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400",
    brand: "Mango",
    category: "Кардиганы",
    size: ["S", "M", "L"],
    color: ["Серый", "Бежевый", "Розовый"],
    isNew: true,
    description: "Уютный вязаный кардиган из натуральной шерсти",
  },
  {
    id: "5",
    name: "Пальто классическое",
    price: 8900,
    originalPrice: 12000,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400",
    brand: "Reserved",
    category: "Верхняя одежда",
    size: ["S", "M", "L", "XL"],
    color: ["Черный", "Серый", "Коричневый"],
    discount: 26,
    description: "Элегантное классическое пальто для межсезонья",
  },
  {
    id: "6",
    name: "Топ кружевной",
    price: 1900,
    image: "https://images.unsplash.com/photo-1564257631407-2dea20449cdc?w=400",
    brand: "Zara",
    category: "Топы",
    size: ["XS", "S", "M"],
    color: ["Белый", "Черный", "Бежевый"],
    isNew: true,
    description: "Изысканный кружевной топ для романтичного образа",
  },
  {
    id: "7",
    name: "Юбка плиссе",
    price: 2400,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a13d44?w=400",
    brand: "H&M",
    category: "Юбки",
    size: ["XS", "S", "M", "L"],
    color: ["Черный", "Синий", "Зеленый"],
    discount: 25,
    description: "Стильная плиссированная юбка миди",
  },
  {
    id: "8",
    name: "Свитер оверсайз",
    price: 3600,
    image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400",
    brand: "Uniqlo",
    category: "Свитеры",
    size: ["S", "M", "L", "XL"],
    color: ["Серый", "Белый", "Коричневый"],
    isNew: true,
    description: "Комфортный свитер оверсайз из мягкой пряжи",
  },
];

export const brands = [
  {
    id: "zara",
    name: "Zara",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200",
    description: "Испанский бренд быстрой моды с актуальными трендами",
    productsCount: 45,
  },
  {
    id: "hm",
    name: "H&M",
    logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200",
    description: "Шведский ритейлер доступной и стильной одежды",
    productsCount: 38,
  },
  {
    id: "levis",
    name: "Levi's",
    logo: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200",
    description: "Легендарный американский бренд джинсовой одежды",
    productsCount: 22,
  },
  {
    id: "mango",
    name: "Mango",
    logo: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=200",
    description: "Испанский бренд женской одежды премиум-сегмента",
    productsCount: 31,
  },
  {
    id: "reserved",
    name: "Reserved",
    logo: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=200",
    description: "Польский бренд модной одежды для всей семьи",
    productsCount: 26,
  },
  {
    id: "uniqlo",
    name: "Uniqlo",
    logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200",
    description: "Японский бренд качественной базовой одежды",
    productsCount: 19,
  },
];

export const categories = [
  "Все товары",
  "Платья",
  "Блузки",
  "Джинсы",
  "Кардиганы",
  "Верхняя одежда",
  "Топы",
  "Юбки",
  "Свитеры",
];

export const sizes = ["XS", "S", "M", "L", "XL", "26", "27", "28", "29", "30"];
export const colors = [
  "Белый",
  "Черный",
  "Серый",
  "Синий",
  "Красный",
  "Бежевый",
  "Коричневый",
  "Розовый",
  "Зеленый",
];
