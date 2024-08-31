import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="home">
      <div className="flex justify-around items-center h-screen">
        <div className="w-3/5 sm:w-2/5  text-[#0C2D57] text-center">
          {i18n.language === 'en' ? (
            <>
              <h1 className="text-3xl">Drive safe with</h1>
              <h1 className="text-5xl text-[#FF7F3E] mt-4">CARENTIFY</h1>
            </>
          ) : (
            <>
              <h1 className="text-5xl text-[#FF7F3E]">
                CARENTIFY <span className="text-3xl text-[#0C2D57]">ile</span>
              </h1>
              <h1 className="text-3xl mt-4">Güvenli sürün</h1>
            </>
          )}

          <p className="text-xl mt-4 italic">{t('homeMsg')}</p>
        </div>

        <img src="/src/assets/audi.png" className="lg:h-2/5 h-1/4 max-md:hidden hover:scale-110 duration-300 " alt=""></img>
      </div>
    </div>
  );
};

export default Home;
