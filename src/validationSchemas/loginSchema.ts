import * as Yup from 'yup';
const validationSchema = () =>
  Yup.object().shape({
    email: Yup.string().required('mandatory'),
    password: Yup.string().required('mandatory')
  });

export default validationSchema;
