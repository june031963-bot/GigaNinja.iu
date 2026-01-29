
import React from 'react';

// Added interface for GameCard props to properly handle React reserved props like 'key'
interface GameCardProps {
  game: any;
  onPlay: (game: any) => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPlay }) => {
  return (
    <div 
      onClick={() => onPlay(game)}
      className="group relative bg-slate-800 rounded-xl overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300 border border-slate-700 hover:border-indigo-500/50 shadow-lg hover:shadow-indigo-500/10"
    >
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={game.thumbnail} 
          alt={game.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />
        {game.isHot && (
          <div className="absolute top-2 right-2 bg-rose-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider animate-pulse shadow-lg">
            Hot
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[10px] font-semibold text-indigo-400 uppercase tracking-widest">{game.category}</span>
        </div>
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-indigo-400 transition-colors line-clamp-1">{game.title}</h3>
        <p className="text-sm text-slate-400 line-clamp-2 mt-1">{game.description}</p>
      </div>

      <div className="absolute inset-0 bg-indigo-600/0 group-hover:bg-indigo-600/10 transition-colors pointer-events-none" />
    </div>
  );
};

export default GameCard;
