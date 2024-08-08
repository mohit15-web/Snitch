import { productList } from "../../productsList";

function Carousel() {
  return (
    <div className="mt-20 px-8">
      <div className="carousel rounded-box gap-4">
        {productList.map((product) => {
          return (
            <div className="carousel-item flex-col cursor-pointer" key={product.id} onClick={() => {
              window.location.href = `./search`
            }}>
              <img src={product.image} alt={product.name} className="w-80 h-96 object-center rounded-md" />
              
          <h1 className="py-2 text-[0.9rem]">{product.name}</h1>
          <h1 className="text-xs">Rs. {product.price}</h1>
          <h1 className="text-xs pt-4 text-gray-400 tracking-widest">
            S M L XL XXL
          </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
