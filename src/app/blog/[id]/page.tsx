// blog/[id]/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

type Blog = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
  imageUrl: string;
};

const BlogDetails = () => {
  const params = useParams<{ id: string }>();
  const [blogDetail, setBlogDetail] = useState<Blog | null>(null);

  useEffect(() => {
    if (!params?.id) return;
    const blogs: Blog[] = JSON.parse(localStorage.getItem('myData') || '[]');
    const selected = blogs.find(b => b.id === parseInt(params.id, 10)) || null;
    setBlogDetail(selected);
  }, [params?.id]);

  if (!blogDetail) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="container bg-light" style={{ marginTop: '5rem' }}>
        <div className="card mt-5">
          <img
            src={blogDetail.imageUrl}
            style={{ maxWidth: '100%', maxHeight: '300px' }}
            className="card-img-top"
            alt="Blog"
          />
          <div className="card-body">
            <h1 className="card-title">{blogDetail.title}</h1>
            <p className="card-text">{blogDetail.description}</p>
            <p className="card-text">Author: {blogDetail.author}</p>
            <p className="card-text">Date: {blogDetail.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
