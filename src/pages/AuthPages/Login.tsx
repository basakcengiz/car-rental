import { Button, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, Stack, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useFormik } from 'formik';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import validationSchema from '../../validationSchemas/loginSchema';
import { useTranslation } from 'react-i18next';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import ForgotPassword from './ForgotPassword';

const Login = () => {
   const navigate = useNavigate();
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
      },
   });

   const {
      errors,
      touched,
      handleSubmit,
      isSubmitting,
      isValid,
      values,
      handleBlur,
      handleChange,
      setSubmitting,
      resetForm,
      setFieldValue,
      handleMouseDownPassword,
      handleMouseUpPassword,
   } = formik;
   return (
      <div className="bg-[#F7F8F9] flex justify-center h-screen items-center">
         <Paper elevation={3} className="w-1/2 h-1/2">
            <form onSubmit={handleSubmit} className="">
               <Grid container style={{ width: '100%' }} sx={{ alignItems: 'center', justifyContent: 'center', height: '350px' }}>
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
                        endAdornment={
                           <InputAdornment position="end">
                              <IconButton onClick={handleClickShowPassword} edge="end">
                                 {showPassword ? <Visibility /> : <VisibilityOff />}
                              </IconButton>
                           </InputAdornment>
                        }
                     />
                     {touched.password && errors.password && <FormHelperText error>{String(errors.password)}</FormHelperText>}
                  </Grid>
                  <Grid className="w-2/3">
                     <Link to={'/forgot-password'}>{t('forgotPassword')}</Link>
                  </Grid>

                  <Grid>
                     <Button variant="contained" sx={{ backgroundColor: '#7E9FAF', width: '150px' }} className="rounded-md">
                        {t('login').toLocaleUpperCase(i18n.language)}
                     </Button>
                  </Grid>
               </Grid>
            </form>
         </Paper>
         {/*  <button onClick={() => navigate('/forgot-password')}>sfsadf</button> */}
      </div>
   );
};

export default Login;
