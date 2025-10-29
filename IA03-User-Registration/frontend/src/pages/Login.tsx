import { useState } from 'react';
import { Link } from 'react-router-dom';
import Shell from '../components/Shell';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import Label from '../components/ui/Label';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import Logo from '../components/Logo';

export default function Login() {
  const [email, setEmail] = useState(''), [password, setPassword] = useState('');

  function mockLogin(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) return alert('Please fill email and password');
    alert(`Mock login OK for ${email}`);
  }

  return (
    <Shell>
      <Card className="w-full max-w-md">
        <CardHeader title="Welcome back" subtitle="Enter your credentials to continue." />
        <CardBody>
          <div className="mb-6 flex items-center justify-between">
            <Logo />
            <Link to="/signup" className="text-sm font-semibold text-gray-700 hover:underline">Create account</Link>
          </div>

          <form className="space-y-5" onSubmit={mockLogin}>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>

            <Button className="w-full" type="submit">Login</Button>
          </form>
        </CardBody>
      </Card>
    </Shell>
  );
}
