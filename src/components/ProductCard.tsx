import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  brand,
  isNew = false,
  discount,
}: ProductCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in">
      <div className="relative aspect-[3/4] overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <Badge variant="secondary" className="bg-primary text-white">
              Новинка
            </Badge>
          )}
          {discount && (
            <Badge variant="destructive" className="bg-red-500 text-white">
              -{discount}%
            </Badge>
          )}
        </div>
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/90 hover:bg-white"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500 font-open-sans mb-1">{brand}</p>
        <h3 className="font-open-sans font-medium text-gray-900 mb-2 line-clamp-2">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-montserrat font-semibold text-lg text-gray-900">
              {price.toLocaleString("ru-RU")} ₽
            </span>
            {originalPrice && (
              <span className="font-open-sans text-sm text-gray-500 line-through">
                {originalPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>

          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Icon name="Plus" size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
