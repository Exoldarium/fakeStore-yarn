'use client';

import { Button, Form, Input, Link } from '@heroui/react';
import { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

type Inputs = {
  username?: string;
  email: string;
  password: string;
};

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const {
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  // const endpoint = isLogin ? '/auth/login' : '/users';

  console.log(watch('email'));

  console.log(errors.password?.message);

  return (
    <div className="flex flex-col justify-center items-center">
      <Link href="/">Fake Store</Link>
      <Form
        className="w-full max-w-xs flex flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="email"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              label="Email"
              placeholder="Enter your email"
              variant="bordered"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              errorMessage={errors.email?.message}
              isRequired
              type="email"
            />
          )}
          rules={{
            required: 'Email is required.',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address.',
            },
          }}
        />

        {!isLogin && (
          <Controller
            control={control}
            name="username"
            render={({ field: { value, onChange, onBlur } }) => (
              <Input
                label="Username"
                placeholder="Enter your username"
                variant="bordered"
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                errorMessage={errors.username?.message}
                isRequired
                type="text"
              />
            )}
            rules={{ required: 'Username is required.' }}
          />
        )}

        <Controller
          control={control}
          name="password"
          render={({ field: { value, onChange, onBlur } }) => (
            <Input
              label="Password"
              placeholder="Enter your password"
              variant="bordered"
              value={value}
              onBlur={onBlur}
              onChange={onChange}
              description="Input your password"
              errorMessage={errors.password?.message}
              isRequired
              type="password"
            />
          )}
          rules={{
            required: 'Password is required.',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters long.',
            },
            pattern: {
              value: /^(?=.*[A-Z]).*$/,
              message: 'Password must contain at least one capital letter.',
            },
          }}
        />
        <p className="text-red-500">
          {(errors && errors.email?.message) || errors.password?.message}
        </p>
        <div className="flex gap-2">
          <Button color="primary" type="submit">
            {isLogin ? 'Login' : 'Register'}
          </Button>
        </div>

        <p className="text-center text-sm">
          {isLogin ? 'Don\'t have an account?' : 'Already have an account?'}{' '}
          <button
            className="underline text-blue-600"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? 'Register' : 'Login'}
          </button>
        </p>
      </Form>
    </div>
  );
}

export default LoginPage;
