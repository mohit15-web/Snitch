import { useEffect, useState } from "react";

function RenderCards({searchText }) {

  const productList = [
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2826-02-M31.jpg?v=1712311181&width=600",
      name:"PLAID GRID BABY PINK CHECKS SHIRT",
      price:1199
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2826-01-M24.jpg?v=1712310909&width=600",
      name:"PLAID GRID MOSS GREEN CHECKS SHIRT",
      price:1199
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2268-04-M24.jpg?v=1712231899&width=400",
      name:"PLAID GRID BLACK CHECKS SHIRT",
      price:999
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2268-05-M30.jpg?v=1712402945&width=400",
      name:"TACTILE BEIGE TEXTURED T-SHIRT",
      price:999
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2268-03-M13.jpg?v=1712402999&width=400",
      name:"TACTILE WHITE TEXTURED T-SHIRT",
      price:999
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2769-03-M71.jpg?v=1712230748&width=400",
      name:"COSMIC CRUSH GREAY SELF STRIPE SHIRT",
      price:1199
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2769-02-M31.jpg?v=1712230687&width=400",
      name:"COSMIC CRUSH CREAM SELF STRIPE SHIRT",
      price:1199
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2769-01-M21.jpg?v=1712230617&width=400",
      name:"COSMIC CRUSH WHITE SELF STRIPE SHIRT",
      price:1199
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MBZ0006-01M42.jpg?v=1712406464&width=400",
      name:"SIGNATURE STYLE BLACK SUIT",
      price:4999
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/Suit594.jpg?v=1712406398&width=400",
      name:"SIGNATURE STYLE CREAM SUIT",
      price:4999
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MBZ0004-01-M63.jpg?v=1712406561&width=400",
      name:"SIGNATURE STYLE STEEL GRAY SUIT",
      price:4999
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5065-01-3247.jpg?v=1712569223&width=400",
      name:"FORMAL ATTIRE SHADOW GREY TROUSER",
      price:1799
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5064-01-3224.jpg?v=1712569557&width=400",
      name:"FORMAL FLAIR BLACK TROUSER",
      price:1700
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5060-02-3235.jpg?v=1712568570&width=400",
      name:"CLASSIC CUT NAVY TROUSER",
      price:1799
    },
    {
      image: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5060-01-3249.jpg?v=1712568524&width=400",
      name:"CLASSIC CUT BLACK TROUSER",
      price:1799
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(productList);

  useEffect(() => {
    const filtered = productList.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchText]);

  return (
    <div className="cardContainer flex flex-wrap gap-3 px-10">
      {filteredProducts.map((product,index) => {
        // const image2 = product.images
        // console.log(image2);
        return (
          
          <div className="card w-64 pb-5" key={index}>
            <img
              src={product.image}
              alt={product.name}
              className="w-60 object-cover"
            />
            <h1 className="py-2 text-[0.9rem]">{product.name}</h1>
            <h1 className="text-xs">Rs. {product.price}</h1>
            <h1 className="text-xs pt-4 text-gray-400 tracking-widest">S M L XL XXL</h1>
          </div>
        );
      })}
    </div>
  );
}

export default RenderCards;
