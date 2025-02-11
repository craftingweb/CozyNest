import Link from "next/link";
import { Button } from "../ui/button";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = () => {
  //temp
  let numItemsInCart = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative rounded-xl"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute -top-3 -right-3 bg-black text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;
