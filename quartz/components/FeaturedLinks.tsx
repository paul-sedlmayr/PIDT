import React from 'react';

interface Link {
  label: string;
  url: string;
}

interface FeaturedLinksProps {
  links: Link[];
}

const FeaturedLinks: React.FC<FeaturedLinksProps> = ({ links }) => {
  return (
    <div className="featured-links">
      <h3>Featured Links</h3>
      <ul>
        {links.map((link: Link, index: number) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeaturedLinks;