import { Link } from 'react-router-dom';

const Card = ({ image, title, date, excerpt, category, id }) => {
  return (
    <div className="card hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover" 
        />
        {category && (
          <div className="absolute top-3 left-3 bg-coffee-dark text-white text-xs px-3 py-1 rounded-full">
            {category}
          </div>
        )}
      </div>
      <div className="p-6">
        {date && <span className="text-sm text-coffee-dark/60 font-medium">{date}</span>}
        <h3 className="font-serif font-medium text-xl mt-1 mb-2 text-coffee-darkest">{title}</h3>
        {excerpt && <p className="text-coffee-darkest/80 mb-4 line-clamp-2">{excerpt}</p>}
        <Link to={`/blog/${id}`} className="text-coffee-dark font-medium hover:text-coffee-darkest flex items-center">
          Devamını Oku
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Card;