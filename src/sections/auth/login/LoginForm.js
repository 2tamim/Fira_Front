import * as Yup from 'yup';
import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
// form
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_AUTH } from '../../../routes/paths';
// hooks
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
import axiosInstance from '../../../utils/axios';

export default function LoginForm() {
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();
  const [showPassword, setShowPassword] = useState(false);

  const LoginSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    username: 'demo', // Set default username
    password: 'demo1234',
    remember: true,
  };

  const methods = useForm({
    resolver: yupResolver(LoginSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

//   const onSubmit = async (data) => {
//   try {
//     // Make a POST request to your Django API for authentication
//     const response = await axiosInstance.post('/api/user/token/', {
//       username: data.username,
//       password: data.password,
//     });

//     // Handle the response as needed (e.g., store the token)
//     console.log('Authentication successful:', response.data);

//     // Optionally, redirect the user or perform additional actions

//   } catch (error) {
//     console.error('Authentication failed:', error);
//     // Handle authentication failure (e.g., show an error message)
//   }
// };

  const onSubmit = async (data) => {
    try {
      await login(data.username, data.password); // Use data.username instead of data.email
    } catch (error) {
      console.error(error);
      reset();
      if (isMountedRef.current) {
        setError('afterSubmit', { ...error, message: error.message });
      }
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

        <RHFTextField name="username" label="نام کاربری" />

        <RHFTextField
          name="password"
          label="کلمه عبور"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <RHFCheckbox name="remember" label="مرا به خاطر بسپار" />
        <Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
          رمز عبورت رو فراموش کردی؟
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
        ورود
      </LoadingButton>
    </FormProvider>
  );
}


// import * as Yup from 'yup';
// import { useState } from 'react';
// import { Link as RouterLink } from 'react-router-dom';
// // form
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// // @mui
// import { Link, Stack, Alert, IconButton, InputAdornment } from '@mui/material';
// import { LoadingButton } from '@mui/lab';
// // routes
// import { PATH_AUTH } from '../../../routes/paths';
// // hooks
// import useAuth from '../../../hooks/useAuth';
// import useIsMountedRef from '../../../hooks/useIsMountedRef';
// // components
// import Iconify from '../../../components/Iconify';
// import { FormProvider, RHFTextField, RHFCheckbox } from '../../../components/hook-form';
// import axiosInstance from '../../../utils/axios';

// // ----------------------------------------------------------------------

// export default function LoginForm() {
//   const { login } = useAuth();

//   const isMountedRef = useIsMountedRef();

//   const [showPassword, setShowPassword] = useState(false);

//   const LoginSchema = Yup.object().shape({
//     email: Yup.string().email('Email must be a valid email address').required('Email is required'),
//     password: Yup.string().required('Password is required'),
//   });

//   const defaultValues = {
//     email: 'demo@minimals.cc',
//     password: 'demo1234',
//     remember: true,
//   };

//   const methods = useForm({
//     resolver: yupResolver(LoginSchema),
//     defaultValues,
//   });

//   const {
//     reset,
//     setError,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = methods;

//   // Assuming axiosInstance is imported from your axios utils file

// const onSubmit = async (data) => {
//   try {
//     // Make a POST request to your Django API for authentication
//     const response = await axiosInstance.post('/api/user/token/', {
//       email: data.email,
//       password: data.password,
//     });

//     // Handle the response as needed (e.g., store the token)
//     console.log('Authentication successful:', response.data);

//     // Optionally, redirect the user or perform additional actions

//   } catch (error) {
//     console.error('Authentication failed:', error);
//     // Handle authentication failure (e.g., show an error message)
//   }
// };

//   // const onSubmit = async (data) => {
//   //   try {
//   //     await login(data.email, data.password);
//   //   } catch (error) {
//   //     console.error(error);
//   //     reset();
//   //     if (isMountedRef.current) {
//   //       setError('afterSubmit', { ...error, message: error.message });
//   //     }
//   //   }
//   // };

//   return (
//     <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
//       <Stack spacing={3}>
//         {!!errors.afterSubmit && <Alert severity="error">{errors.afterSubmit.message}</Alert>}

//         <RHFTextField name="email" label="آدرس ایمیل" />

//         <RHFTextField
//           name="password"
//           label="کلمه عبور"
//           type={showPassword ? 'text' : 'password'}
//           InputProps={{
//             endAdornment: (
//               <InputAdornment position="end">
//                 <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
//                   <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
//                 </IconButton>
//               </InputAdornment>
//             ),
//           }}
//         />
//       </Stack>

//       <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
//         <RHFCheckbox name="remember" label="مرا به خاطر بسپار" />
//         <Link component={RouterLink} variant="subtitle2" to={PATH_AUTH.resetPassword}>
//           رمز عبورت رو فراموش کردی؟
//         </Link>
//       </Stack>

//       <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
//         ورود
//       </LoadingButton>
//     </FormProvider>
//   );
// }
