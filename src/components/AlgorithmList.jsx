import React from 'react';
import { Link } from 'react-router-dom';

const CATEGORIES = [
  { label: 'Data Structures',  match: a => a.category === 'Data Structures' },
  { label: 'Tree',             match: a => a.category === 'Tree' },
  { label: 'Graph',            match: a => a.category === 'Graph' },
  { label: 'Sorting',          match: a => a.category === 'Sorting' },
  { label: 'Searching',        match: a => a.category === 'Searching' },
  { label: 'Algorithms',       match: a => a.category === 'Algorithms' },
];

export default function AlgorithmList({ algorithms, selected, onSelect }) {
  return (
    <nav className="algo-list">
      {CATEGORIES.map(cat => {
        const items = algorithms.filter(cat.match);
        return (
          <div key={cat.label} className="algo-group">
            <div className="algo-group-title">{cat.label}</div>
            {items.map(algo => (
              <div
                key={algo.id}
                className={`algo-item ${selected?.id === algo.id ? 'active' : ''}`}
              >
                <button className="algo-item-main" onClick={() => onSelect(algo)}>
                  <span className="algo-name">{algo.name}</span>
                  <span className="algo-avg">{algo.timeComplexity.average}</span>
                </button>
                <Link
                  className="algo-details-link"
                  to={`/details/${algo.id}`}
                  title={`${algo.name} details`}
                  aria-label={`View details for ${algo.name}`}
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        );
      })}
    </nav>
  );
}
