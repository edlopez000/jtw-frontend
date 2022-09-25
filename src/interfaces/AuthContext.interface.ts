import { User } from './User.interface';

export interface IAuthContext {
  user?: User | null;
  loading?: boolean;
  error?: any; // FIX: Need standard error object for HTTP responses
  setUserInfo?: () => Promise<void>;
  signIn?: ({ email, password }: { email: string; password: string }) => void;
  registerUser?: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => void;
  logout?: () => void;
}
