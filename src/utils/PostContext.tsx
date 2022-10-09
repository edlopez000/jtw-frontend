import { createContext } from 'react';

interface Posts {
  title: string;
  contents: string;
}

export const PostContext = createContext<Posts>({ title: '', contents: '' });
