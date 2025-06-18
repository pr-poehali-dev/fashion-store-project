import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import PriceRangeFilter from "@/components/PriceRangeFilter";
import SortingDropdown, { SortOption } from "@/components/SortingDropdown";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

        {/* Фильтры и сортировка */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
            {/* Категория */}
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger>
                <SelectValue placeholder="Категория" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Размер */}
            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger>
                <SelectValue placeholder="Размер" />
              </SelectTrigger>
              <SelectContent>
                {sizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Цвет */}
            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger>
                <SelectValue placeholder="Цвет" />
              </SelectTrigger>
              <SelectContent>
                {colors.map((color) => (
                  <SelectItem key={color} value={color}>
                    {color}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Бренд */}
            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger>
                <SelectValue placeholder="Бренд" />
              </SelectTrigger>
              <SelectContent>
                {Array.from(new Set(products.map((p) => p.brand))).map(
                  (brand) => (
                    <SelectItem key={brand} value={brand}>
                      {brand}
                    </SelectItem>
                  ),
                )}
              </SelectContent>
            </Select>

            {/* Фильтр по цене */}
            <PriceRangeFilter
              minPrice={priceRange.min}
              maxPrice={priceRange.max}
              onPriceChange={(min, max) => setPriceRange({ min, max })}
            />

            {/* Сортировка */}
            <SortingDropdown value={sortOption} onChange={setSortOption} />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                Найдено товаров: {sortedProducts.length}
              </span>
              {(searchQuery ||
                selectedCategory !== "Все товары" ||
                selectedSize ||
                selectedColor ||
                selectedBrand ||
                priceRange.min > 0 ||
                priceRange.max < 50000) && (
                <Badge variant="secondary" className="text-xs">
                  Фильтры активны
                </Badge>
              )}
            </div>

            <Button variant="outline" size="sm" onClick={clearAllFilters}>
              <Icon name="X" size={16} className="mr-2" />
              Сбросить все
            </Button>
          </div>
        </div>

        {/* Сетка товаров */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="text-center py-20">
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <p className="font-open-sans text-gray-600 text-lg mb-2">
              Товары не найдены
            </p>
            <p className="font-open-sans text-gray-500 text-sm">
              Попробуйте изменить параметры поиска или фильтры
            </p>
            <Button
              variant="outline"
              onClick={clearAllFilters}
              className="mt-4"
            >
              Сбросить фильтры
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Catalog;
