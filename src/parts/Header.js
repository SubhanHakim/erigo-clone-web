import React from "react";
import Button from "../elements/Button";
import { FiSearch, FiHeart, FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <header className="">
      <div className="px-16">
        <div className="flex items-center justify-items-center justify-between">
          <div className="brand-icon">
            <Button href="" type="link">
              <img src="https://cdn.shopify.com/s/files/1/0607/2841/0296/files/Logo_Erigo_Black_Resize.jpg?v=1659491149" alt="Logo" style={{ width: 69 }} />
            </Button>
          </div>
          <nav>
            <ul className="flex">
              <li className="mx-5">
                <Button className="font-bold text-black" type="link" href="/">
                  Erigo
                </Button>
              </li>
              <li className="mx-5">
                <Button className="font-bold text-black" type="link" href="/">
                  Erigo-X
                </Button>
              </li>
              <li className="mx-5">
                <Button className="font-bold text-black" type="link" href="/">
                  Erigo Tour
                </Button>
              </li>
              <li className="">
                <Button className="font-bold text-black" type="link" href="/">
                  Campaign
                </Button>
              </li>
            </ul>
          </nav>
          <div className="flex items-center">
            <Button className="text-black font-semibold mx-5" type="link" href="">
              Sign In
            </Button>
            <Button className="text-black font-semibold mx-5 text-2xl" type="link" href="">
              <FiSearch />
            </Button>
            <Button className="text-black font-semibold mx-5 text-2xl" type="link" href="">
              <FiHeart />
            </Button>
            <div className="mx-5 flex items-center">
              <Button className="text-black font-semibold text-2xl" type="link" href="">
                <FiShoppingCart />
              </Button>
              <div className="w-5 h-5 bg-black flex items-center justify-center rounded-full mx-2">
                <span className="text-white">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
