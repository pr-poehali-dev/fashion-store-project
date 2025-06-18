import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();

  const navItems = [
    { name: "Главная", path: "/", icon: "Home" },
    { name: "Каталог", path: "/catalog", icon: "Grid3X3" },
    { name: "Бренды", path: "/brands", icon: "Star" },
    { name: "Новинки", path: "/new", icon: "Sparkles" },
    { name: "Sale", path: "/sale", icon: "Percent" },
    { name: "О нас", path: "/about", icon: "Info" },
    { name: "Доставка", path: "/delivery", icon: "Truck" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Shirt" size={20} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-xl text-dark-purple">
                Fashion Store
              </span>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-open-sans text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-gray-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link to="/cart">
                  <Icon name="ShoppingCart" size={20} />
                  <span className="ml-2 hidden sm:inline">Корзина</span>
                </Link>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <Link to="/profile">
                  <Icon name="User" size={20} />
                  <span className="ml-2 hidden sm:inline">Профиль</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-dark-purple text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Shirt" size={20} className="text-white" />
                </div>
                <span className="font-montserrat font-bold text-xl">
                  Fashion Store
                </span>
              </div>
              <p className="text-gray-300 font-open-sans text-sm">
                Модная одежда для стильных людей. Качество и комфорт в каждой
                детали.
              </p>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold mb-4">Каталог</h3>
              <ul className="space-y-2 text-sm font-open-sans">
                <li>
                  <Link
                    to="/catalog"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Вся одежда
                  </Link>
                </li>
                <li>
                  <Link
                    to="/new"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Новинки
                  </Link>
                </li>
                <li>
                  <Link
                    to="/sale"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Распродажа
                  </Link>
                </li>
                <li>
                  <Link
                    to="/brands"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Бренды
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold mb-4">Информация</h3>
              <ul className="space-y-2 text-sm font-open-sans">
                <li>
                  <Link
                    to="/about"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    О нас
                  </Link>
                </li>
                <li>
                  <Link
                    to="/delivery"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Доставка
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Возврат
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    Контакты
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-montserrat font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-sm font-open-sans text-gray-300">
                <p>+7 (495) 123-45-67</p>
                <p>info@fashionstore.ru</p>
                <p>Москва, ул. Модная, 1</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300 text-sm font-open-sans">
              © 2024 Fashion Store. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
