import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import Icon from "@/components/ui/icon";

const NewArrivals = () => {
  const newProducts = products.filter((product) => product.isNew);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="font-montserrat font-bold text-3xl text-dark-purple mb-4">
            ✨ Новинки
          </h1>
          <p className="font-open-sans text-gray-600 text-lg">
            Самые свежие поступления в нашем магазине
          </p>
        </div>

        {newProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {newProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Icon
              name="Package"
              size={48}
              className="mx-auto text-gray-400 mb-4"
            />
            <p className="font-open-sans text-gray-600 text-lg">
              Новинки скоро появятся
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default NewArrivals;
