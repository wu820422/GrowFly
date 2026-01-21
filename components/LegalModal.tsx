
import React from 'react';
import { X } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-3xl bg-white rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100">
          <h2 className="text-xl font-black text-slate-800">{title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-slate-800"
          >
            <X size={24} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-grow overflow-y-auto p-8 md:p-12 prose prose-slate prose-headings:font-black prose-p:font-medium prose-p:text-slate-600 prose-p:leading-relaxed text-sm md:text-base">
          {children}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-slate-50 bg-slate-50/50 text-center">
          <button 
            onClick={onClose}
            className="px-10 py-3 bg-slate-800 text-white rounded-full font-black text-sm hover:bg-slate-700 transition-all"
          >
            關閉視窗
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalModal;
