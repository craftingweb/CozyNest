import { FaStore } from "react-icons/fa";

import { Button } from "../ui/button";
import Link from "next/link";
import { Icon } from "@radix-ui/react-select";

const Logo = () => {
  return (
    <Button size="icon" asChild>
      <Link href={"/"}>
        <FaStore className="w-6 h-6" />
      </Link>
    </Button>
  );
};
export default Logo;
