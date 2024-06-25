import backgroundMainMobile from "./bg-main-mobile.png";
import backgroundMainDesktop from "./bg-main-desktop.png";
import backgroundCardBack from "./bg-card-back.png";
import backgroundCardFront from "./bg-card-front.png";
import cardLogo from "./card-logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();
  return (
    <main className="flex justify-center items-center lg:justify-between lg:items-start flex-col bg-white max-w-sm lg:min-h-screen lg:max-w-none lg:flex-row">
      <div className="w-full relative lg:w-[40%]">
      <picture class="">
          <source
            media="(min-width:1024px)"
            srcset={backgroundMainDesktop}
            class="desktop-image"
          />
          <img src={backgroundMainMobile} alt="lady on a banner" class="mobile-image" />
        </picture>

        {/* card back */}
        {/* card back */}
        {/* card back */}
    
        <div className="absolute right-[5%] top-[15%] lg:hidden">
          <p className="absolute right-[15%] top-[43%] z-50 text-white text-xs">
            000
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
            000
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
            0000 0000 0000 0000
          </p>
          <p className="text-white absolute left-[7%] bottom-[10%] text-xs uppercase">
            Jane Appleseed
          </p>
          <p className="text-white absolute right-[10%] bottom-[10%] text-xs">
            00/00
          </p>
          <img
            src={backgroundCardFront}
            width={280}
            height={280}
            alt="credit card"
            className=""
          />
        </div>
        <div className="absolute hidden lg:block lg:top-[15%] -right-10 ">
          <img
            src={cardLogo}
            width={60}
            height={60}
            alt="credit card"
            className="absolute left-[7%] top-[10%] lg:top-[5%]"
          />
          <p className="absolute text-white text-[1.6rem] lg:bottom-[30%] lg:left-6">
            0000 0000 0000 0000
          </p>
          <p className="text-white absolute left-[7%] bottom-[10%] text-xs uppercase">
            Jane Appleseed
          </p>
          <p className="text-white absolute right-[10%] bottom-[10%] text-xs">
            00/00
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

      <Formik
        initialValues={{
          cardNumber: "",
          expiryMonth: "",
          expiryYear: "",
          cvv: "",
          cardHolderName: "",
        }}
        validationSchema={Yup.object({
          cardNumber: Yup.string()
            .matches(/^\d+$/, "Wrong format, numbers only")
            .required("Required"),
          expiryMonth: Yup.string()
            // .matches(/^(0[1-9]|1[0-2])$/, "Invalid month format")
            .required("Can't be blank"),
          expiryYear: Yup.string()
            // .matches(/^([0-9]{2})$/, "Invalid year format")
            .required("Can't be blank"),
          cvv: Yup.string()
            .matches(/^[0-9]{3,4}$/, "CVV must be 3 or 4 digits")
            .required("Can't be blank"),
          cardHolderName: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 400);
          // console.log(values);

          navigate("/success", {
            state: {
              cardNumber: values.cardNumber,
              expiryMonth: values.expiryMonth,
              expiryYear: values.expiryYear,
              cvv: values.cvv,
              cardHolderName: values.cardHolderName
            },
          });
         
        }}
      >
        {(formik) => (
          <form
            onSubmit={formik.handleSubmit}
            className="bg-white px-6 pt-20 pb-8 lg:p-0 w-full lg:w-[25%] lg:-translate-x-[50%] lg:translate-y-[50%]"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 mb-1"
                htmlFor="cardHolderName"
              >
                Card Holder Name
              </label>
              <input
                id="cardHolderName"
                name="cardHolderName"
                placeholder="e.g. Jane Appleseed"
                type="text"
                className={`w-full px-3 py-2 border rounded-lg ${
                  formik.touched.cardHolderName && formik.errors.cardHolderName
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                {...formik.getFieldProps("cardHolderName")}
              />
              {formik.touched.cardHolderName && formik.errors.cardHolderName ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.cardHolderName}
                </div>
              ) : null}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="cardNumber">
                Card Number
              </label>
              <input
                id="cardNumber"
                name="cardNumber"
                placeholder="e.g. 1234 5678 9123 0000"
                type="text"
                maxLength="16"
                className={`w-full px-3 py-2 border rounded-lg ${
                  formik.touched.cardNumber && formik.errors.cardNumber
                    ? "border-red-500"
                    : "border-gray-300"
                }`}
                {...formik.getFieldProps("cardNumber")}
              />
              {formik.touched.cardNumber && formik.errors.cardNumber ? (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.cardNumber}
                </div>
              ) : null}
            </div>

            <div className="flex gap-4">
              <label className="block text-gray-700 mb-1" htmlFor="expiryDate">
                Expiry Date (MM/YY)
              </label>
              <label className="block text-gray-700 mb-1" htmlFor="cvv">
                CVV
              </label>
            </div>

            <div className="grid grid-cols-4 mb-4 gap-4">
              <div className="">
                <input
                  id="expiryMonth"
                  name="expiryMonth"
                  type="number"
                  placeholder="MM"
                  maxLength="5"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    formik.touched.expiryMonth && formik.errors.expiryMonth
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("expiryMonth")}
                />
                {formik.touched.expiryMonth && formik.errors.expiryMonth ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.expiryMonth}
                  </div>
                ) : null}
              </div>

              <div className="">
                <input
                  id="expiryYear"
                  name="expiryYear"
                  type="text"
                  placeholder="YY"
                  maxLength="5"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    formik.touched.expiryYear && formik.errors.expiryYear
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("expiryYear")}
                />
                {formik.touched.expiryYear && formik.errors.expiryYear ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.expiryYear}
                  </div>
                ) : null}
              </div>

              <div className="col-span-2">
                <input
                  id="cvv"
                  name="cvv"
                  type="text"
                  placeholder="e.g. 123"
                  maxLength="4"
                  className={`w-full px-3 py-2 border rounded-lg ${
                    formik.touched.cvv && formik.errors.cvv
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...formik.getFieldProps("cvv")}
                />
                {formik.touched.cvv && formik.errors.cvv ? (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.cvv}
                  </div>
                ) : null}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#21092f] text-white py-2 rounded-lg"
            >
            Confirm
            </button>
          </form>
        )}
      </Formik>
    </main>
  );
}

