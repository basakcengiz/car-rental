import { t } from 'i18next';
import * as Yup from 'yup';
import { passwordRegExp } from '../helpers/regex';

const validationSchema = () =>
   Yup.object().shape({
      email: Yup.string().email(t('invalidEmail')).required(t('mandatoryMsg')),
      password: Yup.string().min(6, t('minPwdMsg')).max(20, t('maxPwdMsg')).matches(passwordRegExp, t('rgxPwdMsg')).required(t('mandatoryMsg')),
   });

export default validationSchema;
