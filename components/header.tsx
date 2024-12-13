'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Code } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Code className="h-6 w-6 text-gray-900" />
          <TypingEffect texts={['Inovação', 'Inspiração', 'Ideias']} />
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

type TypingEffectProps = {
  texts: string[]; // Define que texts é um array de strings
};

// Componente para o efeito de digitação
function TypingEffect({ texts }: TypingEffectProps) {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0); // Índice da palavra atual
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150); // Velocidade da digitação

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[index]; // Palavra atual

      if (!isDeleting) {
        // Adiciona caractere por caractere
        setCurrentText(fullText.slice(0, currentText.length + 1));

        // Quando a palavra completa é exibida, pausa antes de apagar
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500); // Pausa de 1 segundo
        }
      } else {
        // Apaga caractere por caractere
        setCurrentText(fullText.slice(0, currentText.length - 1));

        // Quando apagar completamente, passa para a próxima palavra
        if (currentText === '') {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Próxima palavra (cíclico)
        }
      }

      // Ajusta a velocidade para digitar/apagar
      setSpeed(isDeleting ? 100:100);
    };

    const timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer); // Limpa o timer para evitar efeitos colaterais
  }, [currentText, isDeleting, index, texts, speed]);

  return (
    <span className="font-bold text-xl text-gray-900">
      {currentText}
      <span className="blinking-cursor">|</span>
    </span>
  );
}
