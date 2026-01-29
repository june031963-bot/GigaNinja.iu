
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import GameCard from './components/GameCard';
import GamePlayer from './components/GamePlayer';
import GameGuru from './components/GameGuru';
import { GAMES_DATA } from './constants';
import { Category } from './types';

const App = () => {
  const [selectedGame, setSelectedGame] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState(Category.ALL);

  const filteredGames = useMemo(() => {
    return GAMES_DATA.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === Category.ALL || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredGames = useMemo(() => {
    return GAMES_DATA.filter(g => g.isHot);
  }, []);

  const handleHome = () => {
    setSearchQuery('');
    setActiveCategory(Category.ALL);
    setSelectedGame(null);
  };

  return (
    <div className="min-h-screen flex flex-col relative pb-20">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onHome={handleHome} 
      />

      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-8 py-8">
        
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide no-scrollbar">
          {Object.values(Category).map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full whitespace-nowrap text-sm font-bold transition-all ${
                activeCategory === cat 
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' 
                  : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {activeCategory === Category.ALL && !searchQuery && (
          <section className="mb-12">
            <h2 className="font-heading text-xl font-bold text-slate-200 mb-4 uppercase tracking-wider flex items-center gap-2">
              <span className="w-1.5 h-6 bg-rose-500 rounded-full" />
              Trending Now
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredGames.map(game => (
                <GameCard key={game.id} game={game} onPlay={setSelectedGame} />
              ))}
            </div>
          </section>
        )}

        <section>
          <h2 className="font-heading text-xl font-bold text-slate-200 mb-6 uppercase tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-6 bg-indigo-500 rounded-full" />
            {searchQuery ? `Results for "${searchQuery}"` : activeCategory === Category.ALL ? 'Explore Games' : `${activeCategory} Games`}
          </h2>

          {filteredGames.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredGames.map(game => (
                <GameCard key={game.id} game={game} onPlay={setSelectedGame} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-slate-900/50 rounded-3xl border border-dashed border-slate-700">
              <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-300">No games found</h3>
              <p className="text-slate-500 mt-2">Try searching for something else or browse categories.</p>
              <button 
                onClick={handleHome}
                className="mt-6 text-indigo-400 hover:text-indigo-300 font-bold uppercase tracking-widest text-sm"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>
      </main>

      <footer className="mt-auto py-10 px-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} NEXUS GAMES. All games are property of their respective owners.
        </p>
        <div className="mt-4 flex justify-center gap-6 text-slate-600 text-xs">
          <a href="#" className="hover:text-indigo-400">Terms</a>
          <a href="#" className="hover:text-indigo-400">Privacy</a>
          <a href="#" className="hover:text-indigo-400">Contact</a>
        </div>
      </footer>

      {selectedGame && (
        <GamePlayer game={selectedGame} onClose={() => setSelectedGame(null)} />
      )}

      <GameGuru />
    </div>
  );
};

export default App;
