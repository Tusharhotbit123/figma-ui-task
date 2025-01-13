import { Notifications, Settings, Glass } from '../../icons';

const DesktopNavbar = () => {
  return (
    <div className=" h-24 bg-white w-full  flex items-center justify-between">
      <div className="flex justify-start  w-96 pl-10">
        <h1 className="text-[#343C6A] font-semibold text-lg justify-start">
          Setting
        </h1>
      </div>

      <div className="flex justify-around   w-[650px]">
        <div className="flex items-center justify-center rounded-3xl bg-[#F5F7FA] w-72 h-14">
          <div className="pr-2 pl-6">
            <Glass height="20" width="20" color="#718EBf " />
          </div>
          <input
            className="bg-[#F5F7FA] text-xl  text-[#8BA3CB] rounded-3xl  focus:outline-none focus:ring-0  font-normal"
            placeholder="Search for something"
          />
        </div>

        <button className="h-14 w-14 rounded-full bg-[#F5F7FA] flex items-center justify-center">
          <Settings height="25" width="25" color="#718EBF" />
        </button>
        <button className="h-14 w-14 rounded-full bg-[#F5F7FA] flex justify-center items-center">
          <Notifications height="25" width="25" color="#396AFF" />
        </button>
        <img
          className="h-16 w-16 rounded-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvrTbfYnuQOh7DgZbCVns4pBewutzVx36-y8zVmIy7QRsBGU5Q~DtYVN3qkxXkfO~tFYNtPO48B3rNNlGjxKFLkZVa3xE72FQRiP-CdxbYC7vkuEmUJOkqsMvceDTWK6fOGaD0KiVe2bhLOKlx2EJeQuCn-DKLcNfM6CbUm1AnuMisp90DnIkXA2laLh4oxU1jnBZpm4kbDDbRs9lyJu73Rr-jEP5O0JCMKGBqg4Y9lywumjPXyFtcc6lwda7NYWySxTvnXcWqDtGzCw78No0BeplZONjofNAijChAv3GRrm9PoR5-ICi611e74OIOOtl-XJSo4aSMahuSeUWDXeVQ__"
        />
      </div>
    </div>
  );
};

export default DesktopNavbar;
