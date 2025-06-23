import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import AdvancedFilters from "@/components/AdvancedFilters";
import SortingDropdown, { SortOption } from "@/components/SortingDropdown";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products, categories, sizes, colors } from "@/data/products";
import Icon from "@/components/ui/icon";

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Все товары");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 50000 });
  const [sortOption, setSortOption] = useState<SortOption>("default");

  // Фильтрация товаров
  const filteredProducts = products.filter((product) => {
    // Поиск
    if (
      searchQuery &&
      !product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.brand.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !product.category.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false;
    }

    // Категория
    if (
      selectedCategory !== "Все товары" &&
      product.category !== selectedCategory
    )
      return false;

    // Размер
    if (selectedSize && !product.size.includes(selectedSize)) return false;

    // Цвет
    if (selectedColor && !product.color.includes(selectedColor)) return false;

    // Бренд
    if (selectedBrand && product.brand !== selectedBrand) return false;

    // Цена
    if (product.price < priceRange.min || product.price > priceRange.max)
      return false;

    return true;
  });

  // Сортировка товаров
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "newest":
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      case "popular":
        return (b.discount || 0) - (a.discount || 0);
      default:
        return 0;
    }
  });

  const clearAllFilters = () => {
    setSearchQuery("");
    setSelectedCategory("Все товары");
    setSelectedSize("");
    setSelectedColor("");
    setSelectedBrand("");
    setPriceRange({ min: 0, max: 50000 });
    setSortOption("default");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
          <h1 className="font-montserrat font-bold text-3xl text-dark-purple">
            Каталог
          </h1>
          <SearchBar onSearch={setSearchQuery} />
        </div>

        <div className="flex gap-8">
          {/* Боковая панель фильтров */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <AdvancedFilters
              brands={Array.from(new Set(products.map((p) => p.brand)))}
              categories={categories}
              sizes={sizes}
              colors={colors}
              selectedBrands={selectedBrand ? [selectedBrand] : []}
              selectedCategories={
                selectedCategory !== "Все товары" ? [selectedCategory] : []
              }
              selectedSizes={selectedSize ? [selectedSize] : []}
              selectedColors={selectedColor ? [selectedColor] : []}
              priceRange={[priceRange.min, priceRange.max]}
              onBrandChange={(brands) => setSelectedBrand(brands[0] || "")}
              onCategoryChange={(categories) =>
                setSelectedCategory(categories[0] || "Все товары")
              }
              onSizeChange={(sizes) => setSelectedSize(sizes[0] || "")}
              onColorChange={(colors) => setSelectedColor(colors[0] || "")}
              onPriceChange={([min, max]) => setPriceRange({ min, max })}
              onClearAll={clearAllFilters}
            />
          </div>

          {/* Основной контент */}
          <div className="flex-1 min-w-0">
            {/* Заголовок и сортировка */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">
                  Найдено товаров: {sortedProducts.length}
                </span>
                <SortingDropdown value={sortOption} onChange={setSortOption} />
              </div>

              <Button variant="outline" size="sm" onClick={clearAllFilters}>
                <Icon name="X" size={16} className="mr-2" />
                Сбросить все
              </Button>
            </div>
          </div>

          {/* Сетка товаров - оптимизированная */}
          <div className="flex-1 min-w-0">
            {sortedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
                {sortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <Icon
                  name="Search"
                  size={48}
                  className="mx-auto text-gray-400 mb-4"
                />
                <p className="font-open-sans text-gray-600 text-lg mb-2">
                  Товары не найдены
                </p>
                <p className="font-open-sans text-gray-500 text-sm mb-4">
                  Попробуйте изменить параметры поиска или фильтры
                </p>
                <Button
                  variant="outline"
                  onClick={clearAllFilters}
                  className="mt-4"
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Сбросить фильтры
                </Button>
              </div>
            )}

            {/* Пагинация для больших каталогов */}
            {sortedProducts.length > 20 && (
              <div className="flex justify-center mt-8">
                <Button variant="outline" className="mx-auto">
                  <Icon name="ChevronDown" size={16} className="mr-2" />
                  Показать больше товаров
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Catalog;
