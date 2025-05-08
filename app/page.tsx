'use client'
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface Card {
  title: string;
  description: string;
  image: string;
}

interface NFT {
  title: string;
  description: string;
  image: string;
}

const CardSlider: React.FC = () => {
  const cards: Card[] = [
    {
      title: "Who He Is?",
      description: "A true Web3 builder and entertainer & known for humor, hustle, and diamond hands, leading the charge in crypto.",
      image: "/images/m1.jfif",
    },
    {
      title: "What He Wants to Achieve?",
      description: "Moose aims to be the Mr.Beast of Web3, giving back and helping his community grow.",
      image: "/images/m4.jfif",
    },
    {
      title: "Moose's Events",
      description: "Moose hosts fun and unpredictable abstract streams, packed with giveaways for his watchers and followers. Whether you’re here to vibe, win, or learn, there’s always something exciting happening in the Moose community.",
      image: "/images/m3.jfif",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.children[0].clientWidth;
      const offset = (sliderRef.current.clientWidth - cardWidth) / 2 - currentIndex * cardWidth;
      sliderRef.current.style.transform = `translateX(${offset}px)`;
      sliderRef.current.style.transition = 'transform 0.5s ease-in-out';
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full max-w-5xl mx-auto overflow-hidden px-4 touch-pan-y">
      <div ref={sliderRef} className="flex">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full md:w-2/3 flex flex-col md:flex-row items-center bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-green-500/50 p-4 mx-2 transition-all duration-300 ${
              index === currentIndex ? 'scale-100 opacity-100' : 'scale-90 opacity-60'
            } hover:scale-102`}
          >
            <div className="w-full md:w-1/2 p-4">
              <h3 className="text-base md:text-2xl gaming-font text-green-400 mb-3 drop-shadow-[0_0_8px_rgba(0,255,0,0.4)]">
                {card.title}
              </h3>
              <p className="text-gray-200 text-xs md:text-base">{card.description}</p>
            </div>
            <div className="w-full md:w-1/2 h-48 md:h-56 rounded-lg overflow-hidden border-2 border-green-500/30">
              <Image
                src={card.image}
                alt={card.title}
                width={400}
                height={224}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-green-500/80 hover:bg-green-400 text-white p-2 md:p-3 rounded-full gaming-font transition-all duration-300 shadow-[0_0_15px_rgba(0,255,0,0.6)] hover:shadow-[0_0_25px_rgba(0,255,0,0.8)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4 md:w-5 md:h-5 fill-current"
        >
          <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6z" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-green-500/80 hover:bg-green-400 text-white p-2 md:p-3 rounded-full gaming-font transition-all duration-300 shadow-[0_0_15px_rgba(0,255,0,0.6)] hover:shadow-[0_0_25px_rgba(0,255,0,0.8)]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-4 h-4 md:w-5 md:h-5 fill-current"
        >
          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
        </svg>
      </button>
    </div>
  );
};

const NFTQuests: React.FC = () => {
  const nfts: NFT[] = [
    {
      title: "Subscribe to Moose for only $1 monthly",
      description: "Get access to subscriber giveaways every month and unlock exclusive perks. Your support helps keep the community strong & and you get rewarded for it.",
      image: "/images/m2.jfif",
    },
    {
      title: "Be a reply guy",
      description: "Show up, engage, and support Moose on X. He rewards true believers who stick with him & it’s all about backing a legend and being part of the journey.",
      image: "/images/m5.jfif",
    },
    {
      title: "Be Real",
      description: "Don’t just show up for the giveaways but stay for the growth. Connect with Moose and the community, share the wins, and build something bigger together.",
      image: "/images/m6.jfif",
    },
  ];

  return (
    <section id="nft-quests" className="py-12 md:py-16 bg-black relative animate-fade-in">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDEwTDAgMEwxMCAwTDEwIDEwTDAgMTBMMCAwWiIgZmlsbD0iIzAwNzcwMDMiLz48L3N2Zz4=')] opacity-10 z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <a href="#nft-quests">
          <h2 className="text-2xl md:text-4xl gaming-font text-green-400 text-center mb-6 md:mb-8 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)] hover:text-green-300 transition-colors">
            Quest
          </h2>
        </a>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {nfts.map((nft, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl shadow-xl border border-green-500/50 p-4 md:p-6 transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,255,0,0.6)] hover:scale-105"
            >
              <div className="h-32 md:h-40 rounded-lg overflow-hidden border-2 border-green-500/30 mb-3 md:mb-4">
                <Image
                  src={nft.image}
                  alt={nft.title}
                  width={400}
                  height={160}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-base md:text-xl gaming-font text-green-400 mb-2 drop-shadow-[0_0_5px_rgba(0,255,0,0.4)]">
                {nft.title}
              </h3>
              <p className="text-gray-200 text-xs md:text-base">{nft.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home: NextPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-black font-sans">
      <Head>
        <title>Moose Haven</title>
        <meta name="description" content="Discover Thunderhoof, the legendary moose of Moose Haven." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <style jsx global>{`
        .gaming-font {
          font-family: 'Orbitron', sans-serif;
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Header */}
      <header className="bg-black/95 border-b border-green-500/20 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <h1 className="text-xl md:text-3xl gaming-font text-green-400 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)]">
            Moose Haven
          </h1>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-500 hover:text-green-400 focus:outline-none gaming-font p-1 rounded hover:bg-green-500/10 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                fill="#00FF00"
              >
                <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
          </div>
          <nav
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex md:space-x-6 absolute md:static top-14 right-4 bg-black/95 backdrop-blur-sm p-4 rounded-lg shadow-lg md:shadow-none z-20`}
          >
            {['home', 'story', 'adventures', 'nft-quests', 'gallery'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className="block text-gray-200 hover:text-green-400 text-xs md:text-base gaming-font transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,0,0.4)] py-2 md:py-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {section === 'nft-quests' ? 'Quest' : section.charAt(0).toUpperCase() + section.slice(1).replace('-', ' ')}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative w-full bg-gradient-to-r from-green-600 to-black animate-fade-in">
        <div className="container mx-auto px-4 py-12 md:py-16 text-center">
          <a href="#home">
            <h2 className="text-2xl md:text-5xl gaming-font text-white mb-4 drop-shadow-[0_0_15px_rgba(0,255,0,0.7)] hover:text-green-300 transition-colors">
              Welcome to Moose Haven
            </h2>
          </a>
          <div className="w-full h-48 md:h-96 mb-4 md:mb-6 overflow-hidden border-4 border-green-500 rounded-2xl shadow-[0_0_20px_rgba(0,255,0,0.6)] hover:shadow-[0_0_30px_rgba(0,255,0,0.8)] transition-all duration-300">
            <Image
              src="/images/MooseBanner.png"
              alt="Majestic Moose"
              width={1280}
              height={384}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              priority
            />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-12 md:py-16 bg-gray-900 animate-fade-in">
        <div className="container mx-auto px-4">
          <a href="#story">
            <h2 className="text-2xl md:text-4xl gaming-font text-green-400 text-center mb-6 md:mb-8 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)] hover:text-green-300 transition-colors">
              The Moose's Journey
            </h2>
          </a>
          <p className="text-gray-200 text-sm md:text-lg max-w-3xl mx-auto text-center">
            @JoeyMooose’s on X is a real builder, doing big giveaways, and loyal to his community. A diamond handed Pudgy Penguin NFT holder for years and $PENGU enthusiast, with 46K+ followers shares humor, hustle, and heart, and a LEGEND.
          </p>
        </div>
      </section>

      {/* Moose Adventures Section */}
      <section id="adventures" className="py-12 md:py-16 bg-black animate-fade-in">
        <div className="container mx-auto px-4">
          <a href="#adventures">
            <h2 className="text-2xl md:text-4xl gaming-font text-green-400 text-center mb-6 md:mb-8 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)] hover:text-green-300 transition-colors">
              Moose's Adventures
            </h2>
          </a>
          <CardSlider />
        </div>
      </section>

      {/* Thunderhoof's NFT Quests Section */}
      <NFTQuests />

      {/* Gallery Section */}
      <section id="gallery" className="py-12 md:py-16 bg-gray-900 animate-fade-in">
        <div className="container mx-auto px-4">
          <a href="#gallery">
            <h2 className="text-2xl md:text-4xl gaming-font text-green-400 text-center mb-6 md:mb-8 drop-shadow-[0_0_10px_rgba(0,255,0,0.6)] hover:text-green-300 transition-colors">
              Moose Gallery
            </h2>
          </a>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: 'Moose in Forest', src: '/images/m8.jfif' },
              { name: 'Moose by Lake', src: '/images/m9.jfif' },
              { name: 'Moose at Dusk', src: '/images/m10.jfif' },
            ].map((image, index) => (
              <div
                key={index}
                className="h-32 md:h-48 overflow-hidden rounded-xl border border-green-500/30 hover:border-green-500 transition-all shadow-[0_0_10px_rgba(0,255,0,0.4)] hover:shadow-[0_0_20px_rgba(0,255,0,0.6)]"
              >
                <Image
                  src={image.src}
                  alt={image.name}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-200 py-6 md:py-8 mt-auto border-t border-green-500/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-xs md:text-base gaming-font mb-3 md:mb-4">© 2025 Moose Haven. All rights reserved.</p>
          <div className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-6">
            <a
              href="https://x.com/JoeyMooose"
              className="text-gray-200 hover:text-green-400 gaming-font flex items-center justify-center space-x-2 transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,0,0.4)] text-xs md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 md:w-6 md:h-6 fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Thunderhoof on X</span>
            </a>
            <a
              href="https://portal.abs.xyz/stream/Moose"
              className="text-gray-200 hover:text-green-400 gaming-font flex items-center justify-center space-x-2 transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,0,0.4)] text-xs md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 md:w-6 md:h-6 fill-current"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span>Abstract Account</span>
            </a>
            <a
              href="https://t.me/Moose_Knows"
              className="text-gray-200 hover:text-green-400 gaming-font flex items-center justify-center space-x-2 transition-colors hover:drop-shadow-[0_0_5px_rgba(0,255,0,0.4)] text-xs md:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-5 h-5 md:w-6 md:h-6 fill-current"
              >
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.02.21-.04.316-.046a.966.966 0 0 1 .943.723c.01.05.057.086.12.116.173.083.348.18.52.288l-.108.024a11.86 11.86 0 0 1-8.684 4.303 11.917 11.917 0 0 1-6.652-1.836c.196.549.412 1.03.673 1.495.16.286.336.572.45.808.15.318.382.636.566.86.276.335.63.572.928.838l-.005.013a.37.37 0 0 0 .11.038c.051.008.087.008.132.008a.614.614 0 0 0 .57-.4c.086-.246.217-.494.35-.74a9.72 9.72 0 0 0 2.5-5.998 12.5 12.5 0 0 1-1.848-.228l-2.3-.502a.5.5 0 0 0-.4.046.999.999 0 0 0-.27.668c-.01.042-.013.083-.013.126a3 3 0 0 0 .803 2.03 2.96 2.96 0 0 0 2.04.912c.504.024 1.003-.05 1.48-.213a4.944 4.944 0 0 0 1.733-1.001c.38-.344.723-.74 1.045-1.13a5.944 5.944 0 0 0 .668-1.925c.04-.28.04-.543.024-.805a1.52 1.52 0 0 0-.402-.907 1.566 1.566 0 0 0-.928-.513z" />
              </svg>
              <span>Moose Haven Telegram</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;