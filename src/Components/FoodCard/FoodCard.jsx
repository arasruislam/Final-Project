import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (item) => {
    const { _id, name, image, price } = item;
    console.log(item);

    if (user && user.email) {
      const cartItem = {
        menuItemId: _id,
        name,
        image,
        price,
        email: user.email,
      };
      fetch("http://localhost:5000/carts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Food Added on the cart",
              showConfirmButton: false,
              timer: 1000,
            });
          }
        });
    } else {
      Swal.fire({
        title: "You Need To Login To Order The Food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { replace: true, state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl rounded-none">
      <figure>
        <img src={item?.image} alt="Shoes" />
      </figure>
      <p className="bg-slate-800 text-white px-4 py-2 absolute right-0 mt-4 mr-4">
        ${item?.price}
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item?.name}</h2>

        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline text-[#BB8506] border-[#BB8506] bg-slate-100 border-0 border-b-4 hover:bg-[#1F2937] hover:text-[#BB8506]"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
