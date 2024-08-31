import { useState } from 'react';
import Grid from '@mui/material/Grid2';

import { useTranslation } from 'react-i18next';

import DatePickerFC from '../inputComponents/DatePicker';

const BookCar = () => {
  const [date, setDate] = useState<string | null>('2022-04-17T15:30');
  const { t, i18n } = useTranslation();

  return (
    <Grid container justifyContent={'center'} alignItems={'center'}>
      <div className='bg-[url("/src/assets/background.png")] h-max w-4/5 border border-spacing-1'>
        <Grid container className="p-5" justifyContent={'space-around'} alignItems={'center'}>
          <DatePickerFC date={date} setDate={setDate} disablePast />
          <DatePickerFC date={date} setDate={setDate} disablePast />
        </Grid>
        <Grid container className="p-5" justifyContent={'space-around'} alignItems={'center'}>
          <DatePickerFC date={date} setDate={setDate} disablePast />
          <DatePickerFC date={date} setDate={setDate} disablePast />
        </Grid>
      </div>
    </Grid>
  );
};

export default BookCar;
