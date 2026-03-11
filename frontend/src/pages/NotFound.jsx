import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <div>404 - Page Not Found</div>

      <Link to={'/'}>
        <button>Go to homepage</button>
      </Link>
    </div>
  );
}
