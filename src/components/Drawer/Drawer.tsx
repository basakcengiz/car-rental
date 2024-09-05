import { CloseSquare } from 'iconsax-react';
import { links } from '../../helpers/arrays';
import { LinkType, PropsType } from '../../helpers/types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Drawer = ({ setDrawer }: PropsType) => {
   const { t, i18n } = useTranslation();
   const navigate = useNavigate();
   return (
      <div className="flex flex-col justify-center gap-10">
         <div
            className="flex justify-end p-5 cursor-pointer"
            onClick={() => {
               setDrawer((prev: boolean) => !prev);
            }}
         >
            <CloseSquare size="32" color="#FF7F3E" />
         </div>
         <div>
            {links.map((link: LinkType) => {
               return (
                  <a
                     className="flex flex-col p-10 text-xl justify-center items-center hover:text-[#FF7F3E] text-[#0C2D57]"
                     href={link.id}
                     key={link.id}
                     onClick={() => {
                        setDrawer((prev: boolean) => !prev);
                     }}
                  >
                     {link.name}
                  </a>
               );
            })}
         </div>
         <div className="flex items-center justify-center">
            <button
               className="bg-[#f6f8f9] rounded-md p-2 text-[#0C2D57]"
               onClick={() => {
                  navigate('/login');
               }}
            >
               {t('login').toLocaleUpperCase(i18n.language)}
            </button>
            <button className="bg-[#FF7F3E] rounded-md p-2 text-[#0C2D57]">{t('register').toLocaleUpperCase(i18n.language)}</button>
         </div>
      </div>
   );
};

export default Drawer;
