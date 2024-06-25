import React from "react";
import iconComplete from "../../icon-complete.svg";
import backgroundMainMobile from "../../bg-main-mobile.png";
import backgroundMainDesktop from "../../bg-main-desktop.png";
import backgroundCardBack from "../../bg-card-back.png";
import backgroundCardFront from "../../bg-card-front.png";
import cardLogo from "../../card-logo.svg";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Success = () => {
  const location = useLocation();
  const { cardNumber } = location.state;
  const { cvv } = location.state;
  const { expiryMonth } = location.state;
  const { expiryYear } = location.state;
  const { cardHolderName } = location.state;
  return (
    <div>
      <main className="flex justify-center items-center lg:justify-between lg:items-start flex-col bg-white max-w-sm lg:min-h-screen lg:max-w-none lg:flex-row">
        {/* <div className="w-full relative">
          <img src={backgroundMainMobile} alt="background" className="" />
          <div className="absolute right-[5%] top-[15%]">
            <p className="absolute right-[15%] top-[43%] z-50 text-white text-xs">
              {cvv}
            </p>
            <img
              src={backgroundCardBack}
              width={280}
              height={280}
              alt="credit card"
              className=""
            />
          </div>

          <div className="absolute left-[5%] -bottom-[15%]">
            <img
              src={cardLogo}
              width={50}
              height={50}
              alt="card"
              className="absolute left-[7%] top-[10%]"
            />
            <p className="absolute text-white left-[7%] top-[50%] text-[1.3rem]">
              {cardNumber}
            </p>
            <p className="text-white absolute left-[7%] bottom-[10%] text-xs uppercase">
              {cardHolderName}
            </p>
            <p className="text-white absolute right-[10%] bottom-[10%] text-xs">
              {expiryMonth} / {expiryYear}
            </p>
            <img
              src={backgroundCardFront}
              width={280}
              height={280}
              alt="credit card"
              className=""
            />
          </div>
        </div> */}

        <div className="w-full relative lg:w-[40%]">
          <picture class="">
            <source
              media="(min-width:1024px)"
              srcset={backgroundMainDesktop}
              class="desktop-image"
            />
            <img
              src={backgroundMainMobile}
              alt="lady on a banner"
              class="mobile-image"
            />
          </picture>

          {/* card back */}
          {/* card back */}
          {/* card back */}

          <div className="absolute right-[5%] top-[15%] lg:hidden">
            <p className="absolute right-[15%] top-[43%] z-50 text-white text-xs">
              {cvv}
            </p>
            <img
              src={backgroundCardBack}
              width={280}
              height={280}
              alt="credit card"
              className=""
            />
          </div>
          <div className="absolute hidden -right-32 top-[40%] lg:block">
            <p className="absolute right-[15%] top-[43%] z-50 text-white text-xs">
              {cvv}
            </p>
            <img
              src={backgroundCardBack}
              width={330}
              height={330}
              alt="credit card"
              className=""
            />
          </div>

          {/* card front */}
          {/* card front */}
          {/* card front */}

          <div className="absolute left-[5%] -bottom-[15%] lg:hidden">
            <img
              src={cardLogo}
              width={50}
              height={50}
              alt="credit card"
              className="absolute left-[7%] top-[10%] lg:top-[5%]"
            />
            <p className="absolute text-white left-[7%] top-[50%] text-[1.3rem] lg:top-[10%]">
              {cardNumber}
            </p>
            <p className="text-white absolute left-[7%] bottom-[10%] text-xs uppercase">
              {cardHolderName}
            </p>
            <p className="text-white absolute right-[10%] bottom-[10%] text-xs">
              {expiryMonth} / {expiryYear}
            </p>
            <img
              src={backgroundCardFront}
              width={280}
              height={280}
              alt="credit card"
              className=""
            />
          </div>
          <div className="absolute hidden lg:block lg:top-[17%] -right-10 ">
            <img
              src={cardLogo}
              width={60}
              height={60}
              alt="credit card"
              className="absolute left-[7%] top-[10%] lg:top-[5%]"
            />
            <p className="absolute text-white text-[1.6rem] lg:bottom-[30%] lg:left-6">
              {cardNumber}
            </p>
            <p className="text-white absolute left-[7%] bottom-[10%] text-xs uppercase">
              {cardHolderName}
            </p>
            <p className="text-white absolute right-[10%] bottom-[10%] text-xs">
              {expiryMonth} / {expiryYear}
            </p>
            <img
              src={backgroundCardFront}
              width={330}
              height={330}
              alt="credit card"
              className=""
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center px-6 pt-20 gap-4 bg-white pb-8 lg:p-0 w-full lg:w-[25%] lg:-translate-x-[50%] lg:translate-y-[70%]">
          <img
            src={iconComplete}
            width={70}
            height={70}
            alt="form submitted successfully"
          />
          <h1 className="uppercase text-3xl text-[#21092f]">Thank you!</h1>
          <p className="text-Dark-Grayish-Violet text-lg">
            We have added your card details
          </p>
          <Link
            to="/"
            className="flex justify-center items-center w-full bg-[#21092f] text-white py-3 rounded-lg"
          >
            Continue
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Success;
