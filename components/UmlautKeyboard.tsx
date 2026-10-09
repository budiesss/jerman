'use client';

import React from 'react';

interface UmlautKeyboardProps {
  onInsertChar: (char: string) => void;
}

export default function UmlautKeyboard({ onInsertChar }: UmlautKeyboardProps) {
  const characters = ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'];

  return (
    <div className="umlaut-bar">
      <span
        style={{
          fontSize: '0.75rem',
          color: 'var(--text-muted)',
          fontWeight: 600,
          marginRight: 4,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        Umlaut:
      </span>
      {characters.map((char) => (
        <button
          key={char}
          type="button"
          onClick={() => onInsertChar(char)}
          className="umlaut-key"
          title={`Sisipkan karakter "${char}"`}
        >
          {char}
        </button>
      ))}
    </div>
  );
}
