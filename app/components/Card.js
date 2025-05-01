// components/QuestionCard.js

export default function QuestionCard({ question, options, onAnswer }) {
    return (
      <div style={{
        background: '#fff',
        borderRadius: '12px',
        padding: '24px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        maxWidth: '500px',
        margin: '0 auto',
      }}>
        <h2 style={{ marginBottom: '20px' }}>{question}</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(opt)}
              style={{
                padding: '12px',
                fontSize: '16px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                background: '#f9f9f9',
                cursor: 'pointer',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => e.target.style.background = '#e6e6e6'}
              onMouseLeave={(e) => e.target.style.background = '#f9f9f9'}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    );
  }
  