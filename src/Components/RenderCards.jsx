import { useEffect, useState } from "react";
import { FaCartPlus, FaShoppingCart } from 'react-icons/fa';
import PropTypes from "prop-types";
function RenderCards({ searchText }) {
  const productList = [
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2826-02-M31.jpg?v=1712311181&width=600",
      name: "PLAID GRID BABY PINK CHECKS SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2826-01-M24.jpg?v=1712310909&width=600",
      name: "PLAID GRID MOSS GREEN CHECKS SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2268-04-M24.jpg?v=1712231899&width=400",
      name: "PLAID GRID BLACK CHECKS SHIRT",
      price: 999,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2268-05-M30.jpg?v=1712402945&width=400",
      name: "TACTILE BEIGE TEXTURED T-SHIRT",
      price: 999,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2268-03-M13.jpg?v=1712402999&width=400",
      name: "TACTILE WHITE TEXTURED T-SHIRT",
      price: 999,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2769-03-M71.jpg?v=1712230748&width=400",
      name: "COSMIC CRUSH GREAY SELF STRIPE SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2769-02-M31.jpg?v=1712230687&width=400",
      name: "COSMIC CRUSH CREAM SELF STRIPE SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2769-01-M21.jpg?v=1712230617&width=400",
      name: "COSMIC CRUSH WHITE SELF STRIPE SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MBZ0006-01M42.jpg?v=1712406464&width=400",
      name: "SIGNATURE STYLE BLACK SUIT",
      price: 4999,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/Suit594.jpg?v=1712406398&width=400",
      name: "SIGNATURE STYLE CREAM SUIT",
      price: 4999,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MBZ0004-01-M63.jpg?v=1712406561&width=400",
      name: "SIGNATURE STYLE STEEL GRAY SUIT",
      price: 4999,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5065-01-3247.jpg?v=1712569223&width=400",
      name: "FORMAL ATTIRE SHADOW GREY TROUSER",
      price: 1799,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5064-01-3224.jpg?v=1712569557&width=400",
      name: "FORMAL FLAIR BLACK TROUSER",
      price: 1700,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSR5060-02-3235.jpg?v=1712568570&width=400",
      name: "CLASSIC CUT NAVY TROUSER",
      price: 1799,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2729-05-M25.jpg?v=1712755676&width=600",
      name: "MANDARIAN ELEGANCE PURPLE SHIRT",
      price: 1799,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2729-04-M38.jpg?v=1712755668&width=600",
      name: "MANDARIAN ELEGANCE OLIVE SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2270-04-M32.jpg?v=1712744177&width=600",
      name: "WAFFLE TEXTURE BLACK T-SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2270-03-M27.jpg?v=1712744104&width=600",
      name: "WAFFLE TEXTURE ANCHOR GREY T-SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2270-02-M25.jpg?v=1712744009&width=600",
      name: "WAFFLE TEXTURE GREY T-SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MST2270-01-M13.jpg?v=1712751747&width=600",
      name: "WAFFLE TEXTURE WHITE T-SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2885-02-M24.jpg?v=1712755535&width=600",
      name: "CUBIX CHECKS OLIVE SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2885-01-M33.jpg?v=1712755547&width=400",
      name: "CUBIX CHECKS NAVY SHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSK8580-03-M22.jpg?v=1712042382&width=400",
      name: "WILD ENOUGH GREEN OVERSHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSK8580-02-M56.jpg?v=1712042328&width=400",
      name: "WILD ENOUGH OLIVE OVERSHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSK8580-01-M35_ecf63950-6cd5-4fcb-bb4a-510af6c93230.jpg?v=1712383020&width=400",
      name: "WILD ENOUGH BROWN OVERSHIRT",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSWH9878-05-M34.jpg?v=1706509169&width=400",
      name: "SUPINE NAVY BLUE HOODIE",
      price: 1499,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSWH9878-04-M16.jpg?v=1706508809&width=400",
      name: "SUPINE MAROON HOODIE",
      price: 1199,
    },
    {
      image:
        "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSWH9878-01-M17.jpg?v=1706508673&width=400",
      name: "SUPINE WHITE HOODIE",
      price: 1199,
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
    <div className="cardContainer flex justify-center flex-wrap gap-3 px-10">
      {filteredProducts.map((product, index) => (
        <div className="card w-64 pb-5 relative group" key={index}>
          <img
            src={product.image}
            alt={product.name}
            className="w-60 object-cover"
          />
          <div className="hoverButtons absolute left-20 bottom-36 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
            <button className="bg-white text-black py-2 px-4 m-1 rounded-md" title="Add to Cart">
              <FaCartPlus />
            </button>
            <button className="bg-black text-white py-2 px-4 m-1 rounded-md" title="Go to Cart">
              <FaShoppingCart />
            </button>
          </div>
          <h1 className="py-2 text-[0.9rem]">{product.name}</h1>
          <h1 className="text-xs">Rs. {product.price}</h1>
          <h1 className="text-xs pt-4 text-gray-400 tracking-widest">
            S M L XL XXL
          </h1>
        </div>
      ))}
    </div>
  );
}

RenderCards.propTypes ={
  searchText: PropTypes.string,
}

export default RenderCards;
