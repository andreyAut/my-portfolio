'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-6 w-6 text-gray-900" />
          <TypingEffect texts={['Testes', 'Automação']} />
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#skills" className="text-gray-700 hover:text-black transition">Habilidades</Link>
          <Link href="#experience" className="text-gray-700 hover:text-black transition">Experiência</Link>
          <Link href="#projects" className="text-gray-700 hover:text-black transition">Projetos</Link>
          <Link href="#contact" className="text-gray-700 hover:text-black transition">Contato</Link>
        </nav>
      </div>
    </header>
  );
}

interface TypingEffectProps {
  texts: string[]; 
}

const TypingEffect: React.FC<TypingEffectProps> = ({ texts }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0); 
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100); 

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index]; 

      if (isDeleting) {
       
        setCurrentText((prev) => fullText.slice(0, prev.length - 1));
        setSpeed(35); 

        if (currentText === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length); 
        }
      } else {
       
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        setSpeed(100); 

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1000); 
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, index, texts, speed]);

  return (
    <span className="font-bold text-xl text-gray-900">
      {currentText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

