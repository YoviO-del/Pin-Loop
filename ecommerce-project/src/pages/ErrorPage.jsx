import { Header } from '../components/Header';

export function NotFoundPage({ cart }) {
  return (
    <>
      <title>404 Page Not Found</title>
      <Header cart={cart} />
      <div>
        Page not found
      </div>
    </>
  );
}