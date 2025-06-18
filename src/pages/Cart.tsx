import Layout from "@/components/Layout";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCart();

  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8">
          <h1 className="font-montserrat font-bold text-3xl text-dark-purple mb-8">
            Корзина
          </h1>
          <div className="text-center py-20">
            <Icon
              name="ShoppingCart"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <p className="font-open-sans text-gray-600 text-lg mb-4">
              Корзина пуста
            </p>
            <Button onClick={() => (window.location.href = "/catalog")}>
              Перейти к покупкам
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="font-montserrat font-bold text-3xl text-dark-purple">
            Корзина ({items.length})
          </h1>
          <Button variant="outline" onClick={clearCart}>
            <Icon name="Trash2" size={16} className="mr-2" />
            Очистить корзину
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-open-sans font-medium text-lg mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">{item.brand}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            disabled={item.quantity <= 1}
                          >
                            <Icon name="Minus" size={16} />
                          </Button>
                          <span className="font-semibold">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                          >
                            <Icon name="Plus" size={16} />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-lg">
                            {(item.price * item.quantity).toLocaleString(
                              "ru-RU",
                            )}{" "}
                            ₽
                          </p>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Icon name="Trash2" size={16} />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div>
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h3 className="font-montserrat font-bold text-xl mb-4">
                  Итого
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span>Товары:</span>
                    <span>{getTotalPrice().toLocaleString("ru-RU")} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка:</span>
                    <span>300 ₽</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Итого:</span>
                    <span>
                      {(getTotalPrice() + 300).toLocaleString("ru-RU")} ₽
                    </span>
                  </div>
                </div>
                <Button className="w-full" size="lg">
                  Оформить заказ
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
