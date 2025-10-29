import { Link } from 'react-router-dom';
import Shell from '../components/Shell';
import { Card, CardBody, CardHeader } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Logo from '../components/Logo';

export default function Home() {
  return (
    <Shell>
      <Card className="w-full max-w-2xl">
        <CardHeader title="Welcome to IA03" subtitle="User Registration System with React & NestJS" />
        <CardBody>
          <div className="flex items-center justify-center mb-6">
            <Logo />
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">
              A complete user registration system with validation, React Query, and clean Tailwind UI.
            </p>

            <div className="flex gap-4 justify-center">
              <Link to="/signup">
                <Button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700">
                  Get Started — Sign Up
                </Button>
              </Link>
              <Link to="/login">
                <Button className="bg-white text-black ring-1 ring-black/10 hover:bg-gray-50">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </CardBody>
      </Card>
    </Shell>
  );
}