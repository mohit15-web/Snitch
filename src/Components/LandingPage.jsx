import { Link, useNavigate } from "react-router-dom";
// import { div, div } from "@/components/ui/div"
// import { button } from "@/components/ui/button"
import backpack from "/images/backpack.png";
import { productList } from "../../productsList";
import { toast } from "react-toastify";
import { addToCart } from "../store/slice";
import { useDispatch } from "react-redux";

export default function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAddCart = (product) => {
    dispatch(addToCart(product));
    toast.success("Product added to cart", {
      position: "bottom-right",
      theme: "colored",
    });
  };

  return (
    <div className="flex flex-col">
      <section className="w-full py-12 md:py-24 lg:py-32 flex justify-center items-center">
        <div className="w-[75%] grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col items-start justify-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Elevate Your Style
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Discover our latest collection of premium apparel, designed to
              elevate your everyday look.
            </p>
            <button onClick={() => navigate("/search")}>Buy Now</button>
          </div>
          <img
            src={backpack}
            width="500"
            height="500"
            alt="Hero Product"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center"
          />
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container space-y-8 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Featured Products
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Discover Our Latest Arrivals
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore our curated selection of premium apparel, designed to
                elevate your style.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {productList.slice(0, 4).map((product) => (
              <div key={product.id} className="border rounded-t-xl">
                <img
                  src={product.image}
                  width="300"
                  height="300"
                  alt="Product 2"
                  className="rounded-t-xl object-cover"
                />
                <div className="space-y-2 p-3">
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-muted-foreground"> ${product.price}</p>
                  <button onClick={() => handleAddCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-6 md:py-6 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Elevate Your Style Today
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Shop our latest collection of premium apparel and accessories,
              designed to help you look and feel your best.
            </p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <button onClick={() => navigate("/search")}>Shop Now</button>
            <Link
              to="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
