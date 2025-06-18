import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-montserrat font-bold text-3xl text-dark-purple mb-8">
          О нас
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="font-montserrat font-bold text-2xl text-dark-purple mb-4">
              Наша история
            </h2>
            <p className="font-open-sans text-gray-700 mb-4">
              Мы — команда энтузиастов моды, которая с 2018 года помогает людям
              выражать свою индивидуальность через стильную одежду. Наш магазин
              предлагает тщательно отобранные коллекции от ведущих мировых
              брендов.
            </p>
            <p className="font-open-sans text-gray-700">
              Мы верим, что качественная одежда должна быть доступной, поэтому
              предлагаем конкурентные цены и регулярные акции для наших
              покупателей.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
              alt="О магазине"
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="MapPin" size={24} className="text-primary" />
                <h3 className="font-montserrat font-bold text-lg">Адрес</h3>
              </div>
              <p className="font-open-sans text-gray-700">
                г. Москва, ул. Тверская, д. 15
                <br />
                ТЦ "Центральный", 2 этаж
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Phone" size={24} className="text-primary" />
                <h3 className="font-montserrat font-bold text-lg">Телефон</h3>
              </div>
              <p className="font-open-sans text-gray-700">
                +7 (495) 123-45-67
                <br />
                Ежедневно с 10:00 до 22:00
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon name="Mail" size={24} className="text-primary" />
                <h3 className="font-montserrat font-bold text-lg">Email</h3>
              </div>
              <p className="font-open-sans text-gray-700">
                info@fashionstore.ru
                <br />
                support@fashionstore.ru
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
          <h2 className="font-montserrat font-bold text-2xl text-dark-purple mb-6">
            Мы в социальных сетях
          </h2>
          <div className="flex gap-4">
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Icon name="Facebook" size={20} />
              Facebook
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors"
            >
              <Icon name="Instagram" size={20} />
              Instagram
            </a>
            <a
              href="#"
              className="flex items-center gap-2 bg-blue-400 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
            >
              <Icon name="Twitter" size={20} />
              Twitter
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
