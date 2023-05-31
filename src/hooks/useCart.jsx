import { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../Providers/AuthProvider";

const useCart = () => {
  const { user } = useContext(AuthContext);

  const { isLoading, data: cart = [], refetch } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user.emial}`
      );

      return res.json();
    },
  });
  return [isLoading, cart, refetch];
};

export default useCart;
