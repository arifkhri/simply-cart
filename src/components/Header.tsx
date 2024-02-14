import { ExitIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";

import cookie from "@/utils/cookie";

import { Button } from "./ui/Button";

const Header = () => {
  const { push: navigate } = useRouter();

  const handleLogout = useCallback(() => {
    cookie.del('utoken');
    setTimeout(() => {
      navigate('/login');
    }, 300);
  }, []);

  return (
    <div className="w-full flex justify-between items-center">
      <Link href="/">
        <div className="flex justify-center items-center">
          <img src="/images/logo.png" alt="simple-cart-logo" className="w-20" />
          <h3 className="text-base ps-2">Simple cart.</h3>
        </div>
      </Link>

      <div>
        <Button variant="secondary" onClick={handleLogout}>
          Logout
          <ExitIcon />
        </Button>
      </div>
    </div>
  )
}

export default Header;
