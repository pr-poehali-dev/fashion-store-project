import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

interface AdvancedFiltersProps {
  brands: string[];
  categories: string[];
  sizes: string[];
  colors: string[];
  selectedBrands: string[];
  selectedCategories: string[];
  selectedSizes: string[];
  selectedColors: string[];
  priceRange: [number, number];
  onBrandChange: (brands: string[]) => void;
  onCategoryChange: (categories: string[]) => void;
  onSizeChange: (sizes: string[]) => void;
  onColorChange: (colors: string[]) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearAll: () => void;
}

const AdvancedFilters = ({
  brands,
  categories,
  sizes,
  colors,
  selectedBrands,
  selectedCategories,
  selectedSizes,
  selectedColors,
  priceRange,
  onBrandChange,
  onCategoryChange,
  onSizeChange,
  onColorChange,
  onPriceChange,
  onClearAll,
}: AdvancedFiltersProps) => {
  const [openSections, setOpenSections] = useState({
    brands: true,
    categories: true,
    sizes: true,
    colors: true,
    price: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const handleCheckboxChange = (
    value: string,
    selected: string[],
    onChange: (values: string[]) => void,
  ) => {
    const isSelected = selected.includes(value);
    if (isSelected) {
      onChange(selected.filter((item) => item !== value));
    } else {
      onChange([...selected, value]);
    }
  };

  const getActiveFiltersCount = () => {
    return (
      selectedBrands.length +
      selectedCategories.length +
      selectedSizes.length +
      selectedColors.length +
      (priceRange[0] > 0 || priceRange[1] < 50000 ? 1 : 0)
    );
  };

  const colorMap: { [key: string]: string } = {
    Белый: "bg-white border-2 border-gray-300",
    Черный: "bg-black",
    Серый: "bg-gray-500",
    Синий: "bg-blue-500",
    Красный: "bg-red-500",
    Бежевый: "bg-amber-100",
    Коричневый: "bg-amber-800",
    Розовый: "bg-pink-400",
    Зеленый: "bg-green-500",
  };

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Фильтры</CardTitle>
          {getActiveFiltersCount() > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="secondary">{getActiveFiltersCount()}</Badge>
              <Button variant="ghost" size="sm" onClick={onClearAll}>
                <Icon name="X" size={14} />
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Цена */}
        <Collapsible
          open={openSections.price}
          onOpenChange={() => toggleSection("price")}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center justify-between w-full p-0"
            >
              <span className="font-semibold">Цена</span>
              <Icon
                name={openSections.price ? "ChevronDown" : "ChevronRight"}
                size={16}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3 pt-3">
            <div className="px-2">
              <Slider
                value={priceRange}
                onValueChange={(value) =>
                  onPriceChange(value as [number, number])
                }
                max={50000}
                min={0}
                step={500}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>{priceRange[0].toLocaleString()} ₽</span>
                <span>{priceRange[1].toLocaleString()} ₽</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Категории */}
        <Collapsible
          open={openSections.categories}
          onOpenChange={() => toggleSection("categories")}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center justify-between w-full p-0"
            >
              <span className="font-semibold">Категории</span>
              <Icon
                name={openSections.categories ? "ChevronDown" : "ChevronRight"}
                size={16}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 pt-3">
            {categories
              .filter((cat) => cat !== "Все товары")
              .map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() =>
                      handleCheckboxChange(
                        category,
                        selectedCategories,
                        onCategoryChange,
                      )
                    }
                  />
                  <Label htmlFor={`category-${category}`} className="text-sm">
                    {category}
                  </Label>
                </div>
              ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Бренды */}
        <Collapsible
          open={openSections.brands}
          onOpenChange={() => toggleSection("brands")}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center justify-between w-full p-0"
            >
              <span className="font-semibold">Бренды</span>
              <Icon
                name={openSections.brands ? "ChevronDown" : "ChevronRight"}
                size={16}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-2 pt-3">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={`brand-${brand}`}
                  checked={selectedBrands.includes(brand)}
                  onCheckedChange={() =>
                    handleCheckboxChange(brand, selectedBrands, onBrandChange)
                  }
                />
                <Label htmlFor={`brand-${brand}`} className="text-sm">
                  {brand}
                </Label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        {/* Размеры */}
        <Collapsible
          open={openSections.sizes}
          onOpenChange={() => toggleSection("sizes")}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center justify-between w-full p-0"
            >
              <span className="font-semibold">Размеры</span>
              <Icon
                name={openSections.sizes ? "ChevronDown" : "ChevronRight"}
                size={16}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3">
            <div className="grid grid-cols-3 gap-2">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSizes.includes(size) ? "default" : "outline"}
                  size="sm"
                  className="h-8"
                  onClick={() =>
                    handleCheckboxChange(size, selectedSizes, onSizeChange)
                  }
                >
                  {size}
                </Button>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>

        {/* Цвета */}
        <Collapsible
          open={openSections.colors}
          onOpenChange={() => toggleSection("colors")}
        >
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex items-center justify-between w-full p-0"
            >
              <span className="font-semibold">Цвета</span>
              <Icon
                name={openSections.colors ? "ChevronDown" : "ChevronRight"}
                size={16}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="pt-3">
            <div className="grid grid-cols-4 gap-2">
              {colors.map((color) => (
                <div key={color} className="flex flex-col items-center gap-1">
                  <button
                    className={`w-8 h-8 rounded-full ${colorMap[color] || "bg-gray-300"} ${
                      selectedColors.includes(color)
                        ? "ring-2 ring-primary ring-offset-2"
                        : ""
                    }`}
                    onClick={() =>
                      handleCheckboxChange(color, selectedColors, onColorChange)
                    }
                    title={color}
                  />
                  <span className="text-xs text-center">{color}</span>
                </div>
              ))}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
};

export default AdvancedFilters;
