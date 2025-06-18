import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Классическая рубашка из хлопка",
      price: 4990,
      originalPrice: 6990,
      image:
        "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=600&fit=crop",
      brand: "ZARA",
      discount: 30,
    },
    {
      id: "2",
      name: "Джинсы прямого кроя",
      price: 7990,
      image:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=600&fit=crop",
      brand: "Levi's",
      isNew: true,
    },
    {
      id: "3",
      name: "Кашемировый свитер",
      price: 12990,
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop",
      brand: "COS",
      isNew: true,
    },
    {
      id: "4",
      name: "Трикотажное платье миди",
      price: 5990,
      originalPrice: 8990,
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=600&fit=crop",
      brand: "H&M",
      discount: 35,
    },
  ];

  const brands = [
    {
      name: "ZARA",
      logo: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=100&fit=crop",
    },
    {
      name: "H&M",
      logo: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=200&h=100&fit=crop",
    },
    {
      name: "COS",
      logo: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=200&h=100&fit=crop",
    },
    {
      name: "Levi's",
      logo: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=200&h=100&fit=crop",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 to-accent/20 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge
                variant="secondary"
                className="mb-4 bg-primary/10 text-primary"
              >
                Новая коллекция
              </Badge>
              <h1 className="font-montserrat font-bold text-4xl md:text-6xl text-dark-purple mb-6 leading-tight">
                Стиль без
                <br />
                <span className="text-primary">компромиссов</span>
              </h1>
              <p className="font-open-sans text-lg text-gray-600 mb-8 max-w-md">
                Откройте для себя новую коллекцию модной одежды от ведущих
                мировых брендов
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link to="/catalog">
                    Смотреть каталог
                    <Icon name="ArrowRight" size={20} className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/sale">Распродажа до -50%</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/30">
                <img
                  src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=600&h=600&fit=crop"
                  alt="Fashion Collection"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-3">
                  <Icon
                    name="Star"
                    className="text-yellow-400 fill-current"
                    size={24}
                  />
                  <div>
                    <p className="font-montserrat font-semibold text-dark-purple">
                      4.9/5
                    </p>
                    <p className="font-open-sans text-sm text-gray-600">
                      1000+ отзывов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl text-dark-purple mb-4">
              Хиты продаж
            </h2>
            <p className="font-open-sans text-gray-600 max-w-2xl mx-auto">
              Самые популярные товары этого сезона
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link to="/catalog">
                Смотреть все товары
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-soft-gray">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-dark-purple text-center mb-12">
            Категории
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/new"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=500&fit=crop"
                alt="Новинки"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="mb-2 bg-primary">Новинки</Badge>
                <h3 className="font-montserrat font-bold text-2xl">
                  Весенние новинки
                </h3>
                <p className="font-open-sans text-sm opacity-90">От 2 990 ₽</p>
              </div>
            </Link>

            <Link
              to="/sale"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&h=500&fit=crop"
                alt="Распродажа"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="mb-2 bg-red-500">Sale</Badge>
                <h3 className="font-montserrat font-bold text-2xl">
                  Распродажа
                </h3>
                <p className="font-open-sans text-sm opacity-90">
                  Скидки до -50%
                </p>
              </div>
            </Link>

            <Link
              to="/brands"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=500&fit=crop"
                alt="Бренды"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <Badge className="mb-2 bg-primary">Премиум</Badge>
                <h3 className="font-montserrat font-bold text-2xl">
                  Лучшие бренды
                </h3>
                <p className="font-open-sans text-sm opacity-90">
                  Мировые марки
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="font-montserrat font-bold text-3xl text-dark-purple text-center mb-12">
            Наши бренды
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {brands.map((brand) => (
              <div key={brand.name} className="group text-center">
                <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-montserrat font-semibold text-dark-purple">
                  {brand.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
