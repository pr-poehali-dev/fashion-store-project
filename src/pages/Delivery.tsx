import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Delivery = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-montserrat font-bold text-3xl text-dark-purple mb-8">
          Доставка и оплата
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div>
            <h2 className="font-montserrat font-bold text-2xl text-dark-purple mb-6">
              Способы доставки
            </h2>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Truck" size={24} className="text-primary" />
                    Курьерская доставка
                    <Badge variant="secondary">Популярно</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-gray-700 mb-2">
                    Доставка по Москве и области
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">1-2 дня</span>
                    <span className="font-semibold">от 300 ₽</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Package" size={24} className="text-primary" />
                    Пункт выдачи
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-gray-700 mb-2">
                    Более 500 пунктов по всей России
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">2-5 дней</span>
                    <span className="font-semibold">от 150 ₽</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Icon name="Store" size={24} className="text-primary" />
                    Самовывоз
                    <Badge variant="outline">Бесплатно</Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-open-sans text-gray-700 mb-2">
                    Из нашего магазина на Тверской
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Сегодня</span>
                    <span className="font-semibold text-green-600">0 ₽</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="font-montserrat font-bold text-2xl text-dark-purple mb-6">
              Карта доставки
            </h2>

            <div className="bg-gray-100 rounded-lg p-4 h-96 flex items-center justify-center">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A64f59eba1b2cd8f8a8a8b8ba86aa5c6c4b80e8a866b6f8b2f3b6b1b1b1b1b1b1&amp;source=constructor"
                width="100%"
                height="100%"
                frameBorder="0"
                className="rounded-lg"
                title="Карта доставки"
              ></iframe>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Icon name="Info" size={16} className="text-blue-600" />
                <span className="font-semibold text-blue-800">
                  Зоны доставки
                </span>
              </div>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• Москва в пределах МКАД — 300 ₽</li>
                <li>• Московская область до 30 км — 500 ₽</li>
                <li>• Московская область свыше 30 км — 800 ₽</li>
              </ul>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Icon name="CreditCard" size={24} className="text-primary" />
              Способы оплаты
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Icon name="CreditCard" size={20} className="text-gray-600" />
                <span className="font-open-sans">Банковской картой</span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Icon name="Banknote" size={20} className="text-gray-600" />
                <span className="font-open-sans">Наличными курьеру</span>
              </div>
              <div className="flex items-center gap-3 p-3 border rounded-lg">
                <Icon name="Smartphone" size={20} className="text-gray-600" />
                <span className="font-open-sans">Электронными деньгами</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Delivery;
