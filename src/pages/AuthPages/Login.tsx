import { Button, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validationSchema from '../../validationSchemas/loginSchema';
import { useTranslation } from 'react-i18next';
import { VisibilityOff, Visibility } from '@mui/icons-material';

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
    }
  });

  const { errors, touched, handleSubmit, isSubmitting, isValid, values, handleBlur, handleChange, setSubmitting, resetForm, setFieldValue } = formik;
  return (
    <div className="bg-[#F7F8F9] flex justify-center h-screen items-center">
      <Paper elevation={3} className="w-1/2 h-1/2">
        <form onSubmit={handleSubmit} className="h-full">
          <Grid container display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} style={{ height: '100%' }} spacing={4}>
            <Grid>
              <InputLabel /* size="small" */>{t('email')}</InputLabel>
              <TextField
                fullWidth
                size="small"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && Boolean(errors.email)}
                helperText={touched.email && errors.email ? String(errors.email) : null}
              />
            </Grid>
            <Grid>
              <InputLabel>{t('password')}</InputLabel>

              <TextField
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                size="small"
                name="password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={handleClickShowPassword}
                      /*    onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword} */
                      edge="end"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              ></TextField>

              {/*   <TextField
                size="small"
                name="password"
                value={values.password}
                onChange={handleChange}
                 onBlur={handleBlur}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email ? String(errors.email) : null} 
              /> */}
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
