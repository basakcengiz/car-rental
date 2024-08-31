import { useState } from 'react';
import Grid from '@mui/material/Grid2';

import { useTranslation } from 'react-i18next';

import DatePickerFC from '../inputComponents/DatePicker';
import { Button, InputLabel, MenuItem, Select } from '@mui/material';

const BookCar = () => {
  const [date, setDate] = useState<string | null>('2024-09-01T15:30');
  const { t, i18n } = useTranslation();
  const [office, setOffice] = useState('Istanbul Ofis');

  return (
    <Grid id="book" container justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      <div className='bg-[url("/src/assets/background.png")] h-max w-full border border-spacing-1 flex '>
        <Grid container size={{ xs: 12 }} justifyContent={'center'}>
          <Grid container className="p-10" flexDirection={'column'} spacing={1}>
            <InputLabel>{t('pickUpOffice')}</InputLabel>
            <Select
              value={office}
              defaultValue={office}
              onChange={(e) => {
                setOffice(e.target.value);
              }}
              /*   MenuProps={{
              sx: {
                fontSize: '8px'
              }
            }} */
              sx={{
                height: '40px',
                width: '250px',
                fontSize: '14px',
                '& svg': {
                  color: '#FF7F3E'
                },
                '.MuiOutlinedInput-notchedOutline': { border: 1, borderColor: '#FF7F3E' },
                '&.MuiOutlinedInput-root.Mui-focused': {
                  '.MuiOutlinedInput-notchedOutline': { border: 1, borderColor: '#FF7F3E' }
                }
              }}
            >
              <MenuItem value="Istanbul Ofis">Istanbul Havalimanı Ofis</MenuItem>
              <MenuItem value="Ankara Ofis">Ankara ofis</MenuItem>
              <MenuItem value="Ant Ofis">Ant Ofis</MenuItem>
              <MenuItem value="Izmır Ofis">Izmır Ofis</MenuItem>
              <MenuItem value="Sabiha Ofis">Sabiha</MenuItem>
            </Select>
            <InputLabel>{t('dropOffOffice')}</InputLabel>
            <Select
              value={office}
              defaultValue={office}
              onChange={(e) => {
                setOffice(e.target.value);
              }}
              sx={{
                height: '40px',
                width: '250px',
                fontSize: '14px',
                '& svg': {
                  color: '#FF7F3E'
                },
                '.MuiOutlinedInput-notchedOutline': { border: 1, borderColor: '#FF7F3E' },
                '&.MuiOutlinedInput-root.Mui-focused': {
                  '.MuiOutlinedInput-notchedOutline': { border: 1, borderColor: '#FF7F3E' }
                }
              }}
            >
              <MenuItem value="Istanbul Ofis">Istanbul Ofis</MenuItem>
              <MenuItem value="Ankara Ofis">Ankara ofis</MenuItem>
              <MenuItem value="Ant Ofis">Ant Ofis</MenuItem>
              <MenuItem value="Izmır Ofis">Izmır Ofis</MenuItem>
              <MenuItem value="Sabiha Ofis">Sabiha</MenuItem>
            </Select>
          </Grid>
          <Grid container className="p-10" flexDirection={'column'} spacing={1}>
            <InputLabel>{t('pickUpDate')}</InputLabel>
            <DatePickerFC date={date} setDate={setDate} disablePast />
            <InputLabel>{t('dropOffDate')}</InputLabel>
            <DatePickerFC date={date} setDate={setDate} disablePast />
          </Grid>
        </Grid>
      </div>
      <Grid container className="p-10" justifyContent={'center'} alignItems={'center'}>
        <Button variant="contained" sx={{ color: '#0C2D57', backgroundColor: '#FF7F3E', width: '150px' }} className="rounded-md">
          {t('bookCar').toLocaleUpperCase(i18n.language)}
        </Button>
      </Grid>
    </Grid>
  );
};

export default BookCar;
