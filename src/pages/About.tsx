import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="font-montserrat font-bold text-3xl text-dark-purple mb-8">
          О нас
        </h1>
        <div className="text-center py-20">
          <p className="font-open-sans text-gray-600 text-lg">
            Информация о компании скоро будет доступна
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
