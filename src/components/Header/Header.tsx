import { HambergerMenu } from 'iconsax-react';
import { LinkType, PropsType } from '../../helpers/types';
import { links } from '../../helpers/arrays';
import { useNavigate } from 'react-router-dom';
import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { changeLanguage, languages } from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

const Header = ({ setDrawer }: PropsType) => {
   const navigate = useNavigate();
   const { t, i18n } = useTranslation();

   const handleChange = (event: SelectChangeEvent) => {
      changeLanguage(event.target.value);
      /* if (user) {
        dispatch(
          handleUpdateUser({
            language: event.target.value.toUpperCase() as Language
          })
        );
      } */
   };
   return (
      <header className="header fixed top-0 w-full z-[1]">
         <div className="flex items-center justify-around h-20 bg-white">
            <div className="flex">
               {/*   <img src="src//assets/carLogo.svg" alt="" /> */}
               <h1
                  className="text-3xl text-[#FF7F3E] cursor-pointer"
                  onClick={() => {
                     navigate('/');
                  }}
               >
                  CARENTIFY
               </h1>
            </div>

            <div className="max-md:hidden text-[#0C2D57]">
               {links.map((link: LinkType) => {
                  return (
                     <a className="pr-6 hover:text-[#FF7F3E]" href={link.id} key={link.id}>
                        {link.name}
                     </a>
                  );
               })}
            </div>

            <div className="flex items-center gap-8">
               <Select
                  id="lang-select"
                  className="lang-select"
                  value={i18n.language}
                  onChange={handleChange}
                  sx={{
                     height: '38px',
                     '& svg': {
                        color: '#0C2D57',
                     },
                     '.MuiOutlinedInput-notchedOutline': { border: 1, borderColor: '#0C2D57' },
                     '&.MuiOutlinedInput-root.Mui-focused': {
                        '.MuiOutlinedInput-notchedOutline': { border: 1, borderColor: '#0C2D57' },
                     },
                  }}
               >
                  {languages.map((lang, index) => (
                     <MenuItem key={lang + index} value={lang} sx={{ display: 'flex', justifyContent: 'center' }}>
                        {lang.toLocaleUpperCase()}
                     </MenuItem>
                  ))}
               </Select>
               <div
                  className="cursor-pointer md:hidden"
                  onClick={() => {
                     setDrawer((prev: boolean) => !prev);
                  }}
               >
                  <HambergerMenu className="pointer" size="32" color="#FF7F3E" />
               </div>
               <div className="max-md:hidden">
                  <button className="bg-[#f6f8f9]  text-[#0C2D57] rounded-md p-2" onClick={() => navigate('/login')}>
                     {t('login').toLocaleUpperCase(i18n.language)}
                  </button>
                  <button className="bg-[#FF7F3E] text-[#0C2D57] rounded-md p-2">{t('register').toLocaleUpperCase(i18n.language)}</button>
               </div>
            </div>
         </div>
      </header>
   );
};

export default Header;
