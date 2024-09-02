import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
/* import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'; */
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/tr';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import 'dayjs/locale/tr';
import { trTR, enUS } from '@mui/x-date-pickers/locales';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

type IProps = {
   placeholder?: string;
   setDate: (date: string | null) => void;
   testId?: string;
   date: string | null;
   clearable?: boolean;
   error?: boolean;
   /*   setTime?: React.Dispatch<React.SetStateAction<string | null>>; */
   disabled?: boolean;
   disablePast?: boolean;
   sx?: Object;
   //object
   maxDate?: dayjs.Dayjs;
};

export default function DatePickerFC(props: IProps) {
   const { t, i18n } = useTranslation();

   const [pickerOpen, setPickerOpen] = useState(false);
   const turkishLocale = trTR.components.MuiLocalizationProvider.defaultProps.localeText;
   const englishLocale = enUS.components.MuiLocalizationProvider.defaultProps.localeText;

   return (
      <LocalizationProvider
         dateAdapter={AdapterDayjs}
         adapterLocale={i18n.language === 'tr' ? 'tr' : 'en'}
         localeText={i18n.language === 'tr' ? turkishLocale : englishLocale}
      >
         <div data-testid={props.testId + 'ParentDiv'}>
            <DatePicker
               value={props.date ? dayjs(props.date, 'YYYY-MM-DD') : null}
               data-testid={props.testId}
               onChange={(date: dayjs.Dayjs | null) => {
                  //const
                  let formattedDate = date?.format('YYYY-MM-DD');
                  props.setDate(formattedDate || null);
                  /*        props.setTime && props.setTime(null); */
               }}
               disablePast={props.disablePast ?? true}
               disabled={props.disabled ? props.disabled : false}
               format={i18n.language === 'tr' ? 'DD/MMM/YYYY' : 'MMM/DD/YYYY'}
               maxDate={props?.maxDate}
               open={pickerOpen}
               onClose={() => setPickerOpen(false)}
               sx={
                  props.sx
                     ? props.sx
                     : {
                          '& .MuiInputBase-root': {
                             fontWeight: 400,
                             fontSize: '14px',
                             backgroundColor: '#f6f8f9',
                          },
                          '& .MuiOutlinedInput-root': {
                             height: '40px',
                             fontSize: '14px',
                             width: '250px',
                             '&:hover fieldset': {
                                borderColor: '#FF7F3E',
                             },
                             '&.Mui-focused fieldset': {
                                borderColor: '#FF7F3E',
                             },
                          },
                       }
               }
               slotProps={{
                  openPickerButton: {
                     onClick: () => setPickerOpen(true),
                  },
                  textField: {
                     error: props.error,
                     onClick: () => setPickerOpen(true),
                     placeholder: props.placeholder ? props.placeholder : t('pickDate'),
                     /*    sx: { backgroundColor: '#FF7F3E' }, */
                     /*  inputProps: {
                        readOnly: true,
                     }, */
                  },
                  actionBar: {
                     actions: [props.clearable ? 'clear' : 'cancel', 'accept'],
                     sx: {
                        '.MuiButtonBase-root': {
                           backgroundColor: '#FF7F3E',
                           color: '#FFFFFF',
                        },
                        //todo: give background color to selected date
                        /*  '.MuiButtonBase-root.MuiPickersDay-root.Mui-selected': {
                           backgroundColor: '#FF7F3E',
                           color: '#FF7F3E',
                        }, */
                     },
                  },
               }}
               slots={{
                  openPickerIcon: CalendarMonthIcon,
               }}
            />
         </div>
      </LocalizationProvider>
   );
}
