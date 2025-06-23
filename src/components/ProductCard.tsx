import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useCart } from "@/contexts/CartContext";

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
  id,
  name,
  price,
  originalPrice,
  image,
  brand,
  isNew = false,
  discount,
}: ProductCardProps) => {
  const { addToCart } = useCart();
  return (
    <div className="group bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-200 overflow-hidden animate-fade-in will-change-transform">
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400";
          }}
        />
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge
              variant="secondary"
              className="bg-primary text-white text-xs px-2 py-1"
            >
              Новинка
            </Badge>
          )}
          {discount && (
            <Badge
              variant="destructive"
              className="bg-red-500 text-white text-xs px-2 py-1"
            >
              -{discount}%
            </Badge>
          )}
        </div>
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            variant="ghost"
            size="sm"
            className="bg-white/90 hover:bg-white shadow-sm h-8 w-8 p-0"
          >
            <Icon name="Heart" size={14} />
          </Button>
        </div>

        {/* Быстрая покупка при наведении */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            size="sm"
            className="w-full bg-primary hover:bg-primary/90 text-white h-8 text-xs"
            onClick={(e) => {
              e.stopPropagation();
              addToCart({
                id,
                name,
                price,
                originalPrice,
                image,
                brand,
                isNew,
                discount,
                category: "",
                size: [],
                color: [],
                description: "",
              });
            }}
          >
            <Icon name="ShoppingCart" size={14} className="mr-1" />В корзину
          </Button>
        </div>
      </div>

      <div className="p-3">
        <p className="text-xs text-gray-500 font-open-sans mb-1 truncate">
          {brand}
        </p>
        <h3 className="font-open-sans font-medium text-gray-900 mb-2 text-sm leading-tight line-clamp-2 min-h-[2.5rem]">
          {name}
        </h3>

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="font-montserrat font-semibold text-base text-gray-900">
              {price.toLocaleString("ru-RU")} ₽
            </span>
            {originalPrice && (
              <span className="font-open-sans text-xs text-gray-500 line-through">
                {originalPrice.toLocaleString("ru-RU")} ₽
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
