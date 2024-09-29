import { Button, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import validationSchema from '../../validationSchemas/loginSchema';
import { useTranslation } from 'react-i18next';
import { VisibilityOff, Visibility } from '@mui/icons-material';

const Login = () => {
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
    <div className="bg-[#F7F8F9] flex justify-center h-screen w-full items-center">
      <Paper elevation={3} className="flex flex-col w-2/3 sm:w-1/2 h-1/2 ">
        <form onSubmit={handleSubmit} className="flex-grow">
          <Grid
            container
            style={{ width: '100%', height: '100%' }}
            sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            spacing={4}
          >
            <Grid className="w-2/3">
              <InputLabel /* size="small" */>{t('email')}</InputLabel>
              <OutlinedInput
                /*  sx={{ width: '70%' }} */
                fullWidth
                size="small"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
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
              {touched.email && errors.email && <FormHelperText error>{String(errors.email)}</FormHelperText>}
            </Grid>
            <Grid className="w-2/3">
              <InputLabel>{t('password')}</InputLabel>
              <OutlinedInput
                fullWidth
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                size="small"
                name="password"
                onBlur={handleBlur}
                error={touched.password && Boolean(errors.password)}
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
              <div className="flex justify-end">
                <Link className="text-xs text-[#7F9FAF] pt-2" to={'/forgot-password'}>
                  {t('forgotPassword')}
                </Link>
              </div>
            </Grid>

            <Grid>
              <Button variant="contained" sx={{ backgroundColor: '#7E9FAF', width: '150px' }} disabled={isSubmitting} className="rounded-md">
                {t('login').toLocaleUpperCase(i18n.language)}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
