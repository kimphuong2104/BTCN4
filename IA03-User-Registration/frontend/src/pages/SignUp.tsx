import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { registerUser } from '../lib/api';
import { Link, useNavigate } from 'react-router-dom';
import Shell from '../components/Shell';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import Label from '../components/ui/Label';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Logo from '../components/Logo';
import { useState } from 'react';

const schema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});
type FormValues = z.infer<typeof schema>;

export default function SignUp() {
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors } } =
    useForm<FormValues>({ resolver: zodResolver(schema) });

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      setApiError(null);
      navigate('/login', { replace: true });
      alert('Register success! Now please login.');
    },
    onError: (e: any) => {
      setApiError(e?.message ?? 'Register failed');
    },
  });

  return (
    <Shell>
      <Card className="w-full max-w-md">
        <CardHeader title="Create an account" subtitle="Join with your email and a password." />
        <CardBody>
          <div className="mb-6 flex items-center justify-between">
            <Logo />
            <Link to="/login" className="text-sm font-semibold text-gray-700 hover:underline">Already have an account?</Link>
          </div>

          {apiError && (
            <div className="mb-4 rounded-lg border border-red-300 bg-red-100 px-4 py-3 text-sm text-red-800">
              {apiError}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit((v) => mutation.mutate(v))}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" autoComplete="email" {...register('email')} />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" autoComplete="new-password" {...register('password')} />
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
              <p className="mt-1 text-xs text-gray-500">Min 6 characters.</p>
            </div>

            <Button type="submit" isLoading={mutation.isPending} className="w-full">
              {mutation.isPending ? 'Creating...' : 'Sign Up'}
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-600">
            By signing up you agree to our <a href="#" className="font-semibold text-gray-800 hover:underline">Terms</a>.
          </p>
        </CardBody>
      </Card>
    </Shell>
  );
}
