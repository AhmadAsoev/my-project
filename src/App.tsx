import { CreateProduct } from './components/CreateProduct';
import { ErrorMessage } from './components/errorMessage';
import { Loader } from './components/loader';
import { Modal } from './components/modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/Products';

function App() {
  const { products, loading, error } = useProducts();

  return (
    <>
      <div className="container mx-auto max-w-2xl pt-5">
        {loading && <Loader/>}
        {error && <ErrorMessage error={error} /> }
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
        <Modal title='Create New Product'>
          <CreateProduct/>
        </Modal>
      </div>
    </>
  );
}

export default App;
