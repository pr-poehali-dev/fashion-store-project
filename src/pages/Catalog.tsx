import { useState } from "react";
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
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
  const [selectedCategory, setSelectedCategory] = useState("Все товары");
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<string>("");

  const filteredProducts = products.filter((product) => {
    if (
      selectedCategory !== "Все товары" &&
      product.category !== selectedCategory
    )
      return false;
    if (selectedSize && !product.size.includes(selectedSize)) return false;
    if (selectedColor && !product.color.includes(selectedColor)) return false;
    if (selectedBrand && product.brand !== selectedBrand) return false;
    return true;
  });

  const clearFilters = () => {
    setSelectedCategory("Все товары");
    setSelectedSize("");
    setSelectedColor("");
    setSelectedBrand("");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-montserrat font-bold text-3xl text-dark-purple mb-8">
          Каталог
        </h1>

        {/* Фильтры */}
        <div className="bg-white rounded-lg border p-6 mb-8">
          <div className="flex flex-wrap gap-4 mb-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-[180px]">
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

            <Select value={selectedSize} onValueChange={setSelectedSize}>
              <SelectTrigger className="w-[120px]">
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

            <Select value={selectedColor} onValueChange={setSelectedColor}>
              <SelectTrigger className="w-[120px]">
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

            <Select value={selectedBrand} onValueChange={setSelectedBrand}>
              <SelectTrigger className="w-[120px]">
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

            <Button variant="outline" onClick={clearFilters}>
              <Icon name="X" size={16} className="mr-2" />
              Сбросить фильтры
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              Найдено товаров: {filteredProducts.length}
            </span>
          </div>
        </div>

        {/* Товары */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Icon
              name="Search"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <p className="font-open-sans text-gray-600 text-lg">
              Товары не найдены. Попробуйте изменить фильтры.
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Catalog;
