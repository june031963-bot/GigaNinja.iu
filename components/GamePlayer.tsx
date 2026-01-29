
import React from 'react';

const GamePlayer = ({ game, onClose }) => {
  return (
    <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col">
      <div className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-6 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center text-white font-bold">
            {game.title.charAt(0)}
          </div>
          <div>
            <h2 className="font-heading text-lg font-bold text-white uppercase tracking-wider">{game.title}</h2>
            <p className="text-xs text-indigo-400 font-semibold">{game.category}</p>
          </div>
        </div>
        
        <button 
          onClick={onClose}
          className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all group"
        >
          <svg className="w-6 h-6 group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      
      <div className="flex-1 relative bg-black flex items-center justify-center overflow-hidden">
        <iframe
          src={game.url}
          className="w-full h-full border-none"
          title={game.title}
          allowFullScreen
          allow="autoplay; encrypted-media; fullscreen"
        />
        
        <div className="absolute bottom-4 right-4 pointer-events-none bg-black/50 backdrop-blur p-2 rounded text-[10px] text-white opacity-50">
          Nexus Game Player v1.0
        </div>
      </div>

      <div className="h-12 bg-slate-900 flex items-center justify-center px-4 shrink-0 border-t border-slate-800">
        <p className="text-xs text-slate-500 italic">Press ESC to exit full-screen if the game captures it.</p>
      </div>
    </div>
  );
};

export default GamePlayer;
