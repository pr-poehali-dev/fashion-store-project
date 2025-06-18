import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface PriceRangeFilterProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceRangeFilter = ({
  minPrice,
  maxPrice,
  onPriceChange,
}: PriceRangeFilterProps) => {
  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);

  const handleApply = () => {
    onPriceChange(min, max);
  };

  const handleReset = () => {
    setMin(0);
    setMax(50000);
    onPriceChange(0, 50000);
  };

  return (
    <div className="space-y-3">
      <Label className="text-sm font-medium">Цена, ₽</Label>
      <div className="flex gap-2 items-center">
        <Input
          type="number"
          value={min}
          onChange={(e) => setMin(Number(e.target.value))}
          placeholder="От"
          className="w-20 text-sm"
        />
        <span className="text-gray-500">—</span>
        <Input
          type="number"
          value={max}
          onChange={(e) => setMax(Number(e.target.value))}
          placeholder="До"
          className="w-20 text-sm"
        />
      </div>
      <div className="flex gap-2">
        <Button size="sm" onClick={handleApply} className="text-xs">
          Применить
        </Button>
        <Button
          size="sm"
          variant="outline"
          onClick={handleReset}
          className="text-xs"
        >
          Сбросить
        </Button>
      </div>
    </div>
  );
};

export default PriceRangeFilter;
