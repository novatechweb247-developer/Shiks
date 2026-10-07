import React, { useState } from 'react';
import { Instagram, ArrowUpRight, Heart, MessageCircle } from 'lucide-react';
import { MediaImage } from './MediaImage';

export const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<any | null>(null);

  const posts = [
    {
      id: 1,
      image: '/images/IMG-20261007-WA0001.jpg',
      handle: '@sixfashion',
      caption: 'Alabaster geometry backstage at Paris Fashion Week. The Blanche Tuxedo meets effortless composure. #SixFashion #ParisHauteCouture',
      likes: '4.2k',
      comments: '128',
      tag: 'PARIS BACKSTAGE'
    },
    {
      id: 2,
      image: '/images/IMG-20261007-WA0003.jpg',
      handle: '@sixfashion',
      caption: 'The Amethyst Empress gown captured in motion. Pure silk velvet responding to natural light. #MaisonSix #HauteCouture',
      likes: '8.9k',
      comments: '342',
      tag: 'RUNWAY EDIT'
    },
    {
      id: 3,
      image: '/images/IMG-20261007-WA0005.jpg',
      handle: '@sixfashion',
      caption: 'Quiet power. Tailored double-breasted cashmere on the streets of Mayfair. #SixEditorial #LondonFashion',
      likes: '3.6k',
      comments: '94',
      tag: 'LONDON STREETS'
    },
    {
      id: 4,
      image: '/images/IMG-20261007-WA0007.jpg',
      handle: '@sixfashion',
      caption: 'The Monogram Minaudière in box calfskin. An architectural evening statement with raw amethyst stone. #SixAccessories',
      likes: '5.1k',
      comments: '156',
      tag: 'DETAILS'
    },
    {
      id: 5,
      image: '/images/IMG-20261007-WA0010.jpg',
      handle: '@sixfashion',
      caption: 'Violet mist and bias-cut silk. Draped for late nights and gala openings. #SixNightfall #VelvetCapsule',
      likes: '6.7k',
      comments: '210',
      tag: 'CAMPAIGN'
    },
    {
      id: 6,
      image: '/images/IMG-20261007-WA0014.jpg',
      handle: '@sixfashion',
      caption: 'Atelier fittings in our Rue Saint-Honoré salon. Every contour sculpted to individual perfection. #BespokeSix',
      likes: '7.4k',
      comments: '185',
      tag: 'PARIS ATELIER'
    }
  ];

  return (
    <section className="py-20 bg-zinc-950 text-white overflow-hidden border-t border-purple-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Instagram className="w-4 h-4 text-purple-400" />
              <span className="text-xs uppercase tracking-[0.3em] font-semibold text-purple-300">
                SOCIAL EDITORIAL // @SIXFASHION
              </span>
            </div>
            <h2 className="font-cinzel text-3xl sm:text-4xl font-bold tracking-tight text-white">
              THE WORLD OF SIX
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-400 font-light">Tag #SixFashion to be featured on our digital salon</span>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 border border-purple-500/40 hover:border-purple-300 text-xs font-semibold tracking-widest uppercase hover:bg-purple-950 transition-colors"
            >
              <span>Follow @SixFashion</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square bg-zinc-900 overflow-hidden cursor-pointer"
            >
              <MediaImage
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                containerClassName="w-full h-full"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-purple-950/80 backdrop-blur-2xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between text-white">
                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-purple-300">
                  {post.tag}
                </span>

                <div className="flex items-center justify-center gap-4 text-xs font-semibold">
                  <div className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-current text-purple-400" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5 text-purple-300" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                <span className="text-[10px] text-center text-purple-200 underline tracking-wider uppercase">
                  Inspect Look
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Post */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="relative bg-zinc-900 border border-purple-800/50 max-w-2xl w-full flex flex-col sm:flex-row overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sm:w-1/2 aspect-square bg-black">
              <img src={selectedPost.image} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                  <span className="font-cinzel text-sm font-bold text-white tracking-wider">
                    {selectedPost.handle}
                  </span>
                  <span className="text-[10px] uppercase text-purple-400 font-semibold tracking-widest">
                    {selectedPost.tag}
                  </span>
                </div>
                <p className="text-xs text-zinc-300 font-light mt-3 leading-relaxed">
                  {selectedPost.caption}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
                <div className="flex items-center gap-3">
                  <span className="text-purple-300 font-semibold">{selectedPost.likes} Likes</span>
                  <span>{selectedPost.comments} Comments</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedPost(null)}
                  className="text-xs text-white hover:text-purple-300 underline uppercase tracking-wider"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
