
import React from 'react';
import Blog from './Components/Blog';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Algoritmalar ve Veri Yapıları',
      content: 'Bu yazıda algoritmalar ve veri yapıları konularını inceleyeceğiz.',
      date: '12 Aralık 2023',
    },
    {
      id: 2,
      title: 'React ile Blog Oluşturma',
      content: 'React kullanarak basit bir blog oluşturma adımlarını göreceğiz.',
      date: '13 Aralık 2023',
    },
    {
      id: 3,
      title: 'Yapay Zeka ve Makine Öğrenimi',
      content: 'Yapay zeka ve makine öğrenimi alanındaki gelişmeleri bu yazıda ele alacağız.',
      date: '15 Aralık 2023',
    },
    {
      id: 4,
      title: 'VeriTabanı Modelleme ',
      content: 'VeriTabanı Modelleme öğrenimi alanındaki gelişmeleri bu yazıda ele alacağız.',
      date: '19 Aralık 2023',
    },
    {
      id: 5,
      title: 'BackEnd Kodlama  ',
      content: 'VeriTabanı Modelleme öğrenimi alanındaki gelişmeleri bu yazıda ele alacağız.',
      date: '21 Aralık 2023',
    },
  ];

  return (
    <div className="app">
      <h1>Bilgisayar Mühendisliği Blogu</h1>
      <Blog posts={blogPosts} />
      <Footer />
    </div>
  );
};

export default App;
