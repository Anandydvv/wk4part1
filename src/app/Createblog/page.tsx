// src/app/Createblog/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

type Blog = {
  id: number;
  author: string;
  date: string;
  title: string;
  description: string;
  imageUrl: string;
};

const Createblog: React.FC = () => {
  const [author, setAuthor] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  // Safe initial load from localStorage (client-only)
  const initialBlogs: Blog[] =
    typeof window !== 'undefined'
      ? (JSON.parse(localStorage.getItem('myData') ?? '[]') as Blog[])
      : [];

  const [data, setData] = useState<Blog[]>(initialBlogs);

  useEffect(() => {
    // Persist whenever data changes
    localStorage.setItem('myData', JSON.stringify(data));
  }, [data]);

  const addData = () => {
    const currentDate = new Date().toLocaleDateString();
    const newItem: Blog = {
      id: data.length + 1,
      author,
      date: currentDate,
      title,
      description,
      imageUrl,
    };
    setData(prev => [...prev, newItem]);
    setAuthor('');
    setTitle('');
    setDescription('');
    setImageUrl('');
    // Optional: give quick feedback
    alert('Blog saved locally ✅');
  };

  return (
    <div>
      <Navbar />

      {/* Push content below fixed-top navbar */}
      <main className="container bg-light" style={{ marginTop: '5rem', paddingBottom: '2rem' }}>
        <h2 className="mb-3 pt-3">Create new blog</h2>

        <div className="row">
          <div className="col-md-8 col-lg-6">
            <div className="mb-2">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>

            <div className="mb-2">
              <label className="form-label">Description</label>
              <textarea
                className="form-control"
                rows={5}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Image URL</label>
              <input
                type="text"
                className="form-control"
                value={imageUrl}
                onChange={e => setImageUrl(e.target.value)}
              />
            </div>

            <button type="button" onClick={addData} className="btn btn-primary">
              Add Data
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Createblog;
