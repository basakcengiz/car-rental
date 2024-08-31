import Grid from '@mui/material/Grid2';
import { ArrowRight2, Call, DirectInbox, Instagram, Xrp } from 'iconsax-react';
import { useTranslation } from 'react-i18next';
import { cities } from '../../helpers/arrays';
import { CityType } from '../../helpers/types';

const Footer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div id="contact">
      <Grid container className="h-max p-10 bg-[#B99470] text-[#F7F8F9]" spacing={2}>
        <Grid container size={{ xs: 12, sm: 6, md: 3 }} flexDirection={'column'} justifyContent={'flex-start'} alignItems={'center'}>
          <div className="text-[#0C2D57]">{t('contact').toLocaleUpperCase(i18n.language)}</div>
          <Grid>
            <Grid container justifyContent={'center'} spacing={1}>
              <Call size="20" color="#F7F8F9" />
              <span className="text-sm">0850 000 00 00</span>
            </Grid>
            <Grid container justifyContent={'center'} spacing={1}>
              <DirectInbox color="#ffffff" size="20" />
              <span className="text-sm">carrental@rentify.com</span>
            </Grid>
          </Grid>
        </Grid>
        <Grid container size={{ xs: 12, sm: 6, md: 3 }} flexDirection={'column'} alignItems={'center'}>
          <div className="text-[#0C2D57]">{t('popularCityOffices').toLocaleUpperCase(i18n.language)}</div>
          <Grid>
            {cities.map((city: CityType) => {
              return (
                <Grid container key={city.cityName}>
                  <ArrowRight2 size="20" color="#F7F8F9" />
                  <span className="text-sm cursor-pointer">{t(city.cityName)}</span>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid container size={{ xs: 12, sm: 6, md: 3 }} flexDirection={'column'} alignItems={'center'}>
          <div className="text-[#0C2D57]">{t('popularAirportOffices').toLocaleUpperCase(i18n.language)}</div>
          <Grid>
            {cities.map((city: CityType) => {
              return (
                <div key={city.airportName}>
                  <Grid container>
                    <ArrowRight2 size="20" color="#F7F8F9" />
                    {city.airportName && <span className="text-sm cursor-pointer">{t(city.airportName)}</span>}
                  </Grid>
                  {city.secondaryAirportName && (
                    <Grid container>
                      <ArrowRight2 size="20" color="#F7F8F9" />
                      <span className="text-sm">{t(city.secondaryAirportName)}</span>
                    </Grid>
                  )}
                </div>
              );
            })}
          </Grid>
        </Grid>
        <Grid container size={{ xs: 12, sm: 6, md: 3 }} flexDirection={'column'} alignItems={'center'}>
          <div className="text-[#0C2D57]">{t('findUs').toLocaleUpperCase(i18n.language)}</div>
          <Grid container flexDirection={'column'} spacing={1}>
            <Grid container justifyContent={'center'} spacing={1}>
              <Instagram size="20" color="#F7F8F9" />
              <span className="text-sm">carentify</span>
            </Grid>
            <Grid container justifyContent={'center'} spacing={1}>
              <Xrp size="20" color="#F7F8F9" />
              <span className="text-sm">carentify</span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
