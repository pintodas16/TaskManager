import { Link } from "react-router-dom";
function FouOhFour() {
  return (
    <section>
      {/* <!-- container  --> */}
      <div className="container  mx-auto max-w-6xl px-8 py-4 ">
        {/* <!-- flex container --> */}
        <div className="flex justify-center items-center ">
          {/* <!-- content  --> */}
          <div className="flex flex-col gap-2 justify-center  mt-20">
            {/* <!-- image  --> */}
            <img
              className="h-40 w-30"
              src="https://www.gstatic.com/youtube/src/web/htdocs/img/monkey.png"
              alt="not-found img"
            />
            <p className="text-2xl font-bold">This Page is not available</p>
            <Link className=" px-4 py-2 text-center cursor-pointer border-red-600 bg-red-600 rounded-lg text-lg font-bold text-gray-100 hover:text-red-600 hover:bg-gray-300 hover:border-gray-300 ">
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
export default FouOhFour;
