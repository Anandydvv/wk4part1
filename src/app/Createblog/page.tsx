'use client';

import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../Components/Navbar';

type Blog = {
  id: number;
  author: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
};

const Createblog = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Safe read from localStorage with fallback
  const initialBlogs: Blog[] =
    typeof window !== 'undefined'
      ? (JSON.parse(localStorage.getItem('myData') ?? '[]') as Blog[])
      : [];

  const [data, setData] = useState<Blog[]>(initialBlogs);

  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  const addData = () => {
    const currentDate = new Date().toLocaleDateString();
    const newData: Blog = {
      id: data.length + 1,
      author,
      date: currentDate,
      title,
      description,
      imageUrl,
    };
    setData(prev => [...prev, newData]);
    setAuthor('');
    setTitle('');
    setDescription('');
    setImageUrl('');
  };

  return (
    <div>
      <Navbar />
      {/* ...rest of your JSX unchanged... */}
    </div>
  );
};

export default Createblog;
