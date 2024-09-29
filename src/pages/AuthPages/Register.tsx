import { Button, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import validationSchema from '../../validationSchemas/loginSchema';
import { useTranslation } from 'react-i18next';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Register = () => {
  const { t, i18n } = useTranslation();
  const [initialValues] = useState({} as any);

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('values', values);
      setSubmitting(false);
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, isValid, values, handleBlur, handleChange, setSubmitting, resetForm, setFieldValue } = formik;
  return (
    <div className="bg-[#F7F8F9] flex justify-center w-full items-center">
      <Paper elevation={3} className="flex flex-col w-2/3 sm:w-1/2 md:w-full">
        <form onSubmit={handleSubmit} className="h-screen">
          <Grid
            container
            style={{ width: '100%', height: '100%' }}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            spacing={4}
          >
            <Grid className="w-2/3  pt-4 " size={{ md: 6 }}>
              <InputLabel /* size="small" */>{t('name')}</InputLabel>
              <OutlinedInput
                /*  sx={{ width: '70%' }} */
                fullWidth
                size="small"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name && Boolean(errors.name)}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F9FAF'
                  },
                  '& input': {
                    fontSize: '12px'
                  },
                  padding: '2px'
                }}
              />
              {touched.name && errors.name && <FormHelperText error>{String(errors.name)}</FormHelperText>}
            </Grid>
            <Grid className="w-2/3  " size={{ md: 6 }}>
              <InputLabel /* size="small" */>{t('surname')}</InputLabel>
              <OutlinedInput
                /*  sx={{ width: '70%' }} */
                fullWidth
                size="small"
                name="surname"
                value={values.surname}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.surname && Boolean(errors.surname)}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F9FAF'
                  },
                  '& input': {
                    fontSize: '12px'
                  },
                  padding: '2px'
                }}
              />
              {touched.surname && errors.surname && <FormHelperText error>{String(errors.surname)}</FormHelperText>}
            </Grid>
            <Grid className="w-2/3  " size={{ md: 6 }}>
              <InputLabel /* size="small" */>{t('nationalId')}</InputLabel>
              <OutlinedInput
                /*  sx={{ width: '70%' }} */
                fullWidth
                size="small"
                name="nationalId"
                value={values.nationalId}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.nationalId && Boolean(errors.nationalId)}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F9FAF'
                  },
                  '& input': {
                    fontSize: '12px'
                  },
                  padding: '2px'
                }}
              />
              {touched.nationalId && errors.nationalId && <FormHelperText error>{String(errors.nationalId)}</FormHelperText>}
            </Grid>
            <Grid className="w-2/3  " size={{ md: 6 }}>
              <InputLabel /* size="small" */>{t('dateOfBirth')}</InputLabel>
              <OutlinedInput
                /*  sx={{ width: '70%' }} */
                fullWidth
                size="small"
                name="dateOfBirth"
                value={values.dateOfBirth}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F9FAF'
                  },
                  '& input': {
                    fontSize: '12px'
                  },
                  padding: '2px'
                }}
              />
              {touched.dateOfBirth && errors.dateOfBirth && <FormHelperText error>{String(errors.dateOfBirth)}</FormHelperText>}
            </Grid>
            <Grid className="w-2/3 " size={{ md: 6 }}>
              <InputLabel /* size="small" */>{t('phone')}</InputLabel>
              <OutlinedInput
                /*  sx={{ width: '70%' }} */
                fullWidth
                size="small"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.phone && Boolean(errors.phone)}
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F9FAF'
                  },
                  '& input': {
                    fontSize: '12px'
                  },
                  padding: '2px'
                }}
              />
              {touched.phone && errors.phone && <FormHelperText error>{String(errors.phone)}</FormHelperText>}
            </Grid>

            <Grid className="w-2/3 " size={{ md: 6 }}>
              <InputLabel>{t('password')}</InputLabel>
              <OutlinedInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                size="small"
                name="password"
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position="end" className="pr-2">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F9FAF'
                  },
                  '& input': {
                    fontSize: '12px'
                  },
                  padding: '2px'
                }}
              />
              {touched.password && errors.password && <FormHelperText error>{String(errors.password)}</FormHelperText>}
            </Grid>
            <Grid className="w-2/3 " size={{ md: 6 }}>
              <InputLabel /* size="small" */>{t('passwordAgain')}</InputLabel>
              <OutlinedInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={values.passwordAgain}
                size="small"
                name="passwordAgain"
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position="end" className="pr-2">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F9FAF'
                  },
                  '& input': {
                    fontSize: '12px'
                  },
                  padding: '2px'
                }}
              />
              {touched.passwordAgain && errors.passwordAgain && <FormHelperText error>{String(errors.passwordAgain)}</FormHelperText>}
            </Grid>

            <Grid className="pb-4">
              <Button variant="contained" sx={{ backgroundColor: '#7E9FAF', width: '150px' }} disabled={isSubmitting} className="rounded-md">
                {t('register').toLocaleUpperCase(i18n.language)}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Register;
