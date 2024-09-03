import { useTranslation } from 'react-i18next';

const Face = () => {
   const { t, i18n } = useTranslation();

   return (
      <div id="home">
         <div className="flex items-center justify-around h-screen">
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
                     <h1 className="mt-4 text-3xl">Güvenli sürün</h1>
                  </>
               )}

               <p className="mt-4 text-xl italic">{t('homeMsg')}</p>
            </div>

            <img src="/src/assets/audi.png" className="duration-300 lg:h-2/5 h-1/4 max-md:hidden hover:scale-110 " alt=""></img>
         </div>
      </div>
   );
};

export default Face;
