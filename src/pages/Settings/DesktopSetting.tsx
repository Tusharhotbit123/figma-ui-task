import React from 'react';

const DesktopSetting = () => {
  return (
    <div className="border mt-10 mb-40 rounded-2xl h-[717px] w-[1110px] bg-white">
      <div className="flex mt-8 ml-8 mr-8 mb-10 h-[30px] w-[1050px] ">
        <button className="ml-4 mr-8 pl-4 pr-4 text-black border-b-[3px] border-b-black">
          Edit Profile
        </button>
        <button className="ml-8 mr-8 text-[#718EBF]">Preferences</button>
        <button className="ml-8 mr-8 text-[#718EBF]">Security</button>
      </div>
      <div className="flex ml-14">
        <img
          className="h-[91px] w-[98px] rounded-full"
          src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvrTbfYnuQOh7DgZbCVns4pBewutzVx36-y8zVmIy7QRsBGU5Q~DtYVN3qkxXkfO~tFYNtPO48B3rNNlGjxKFLkZVa3xE72FQRiP-CdxbYC7vkuEmUJOkqsMvceDTWK6fOGaD0KiVe2bhLOKlx2EJeQuCn-DKLcNfM6CbUm1AnuMisp90DnIkXA2laLh4oxU1jnBZpm4kbDDbRs9lyJu73Rr-jEP5O0JCMKGBqg4Y9lywumjPXyFtcc6lwda7NYWySxTvnXcWqDtGzCw78No0BeplZONjofNAijChAv3GRrm9PoR5-ICi611e74OIOOtl-XJSo4aSMahuSeUWDXeVQ__"
        />
        <form className="flex flex-col ml-14">
          <div className="flex ">
            <label className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
              Your Name
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 text-[#718EBF] font-normal border border-[#DFEAF2]"
                placeholder="Charlene Reed"
              />
            </label>
            <label className="flex flex-col font-normal text-[18px] h-[80px]">
              User Name
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 border border-[#DFEAF2]"
                placeholder="Charlene Reed"
              />
            </label>
          </div>
          <div className="flex mt-6 ">
            <label className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
              Email
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 text-[#718EBF] font-normal border border-[#DFEAF2]"
                placeholder="charlenereed@gmail.com"
              />
            </label>
            <label className="flex flex-col font-normal text-[18px] h-[80px]">
              Password
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 border border-[#DFEAF2]"
                placeholder="***********"
              />
            </label>
          </div>
          <div className="flex mt-6 ">
            <label className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
              Date of Birth
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 text-[#718EBF] font-normal border border-[#DFEAF2]"
                placeholder="25 January 1990"
              />
            </label>
            <label className="flex flex-col font-normal text-[18px] h-[80px]">
              Present Address
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 border border-[#DFEAF2]"
                placeholder="San Jose,California,USA"
              />
            </label>
          </div>
          <div className="flex mt-6 ">
            <label className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
              Permanent Address
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 text-[#718EBF] font-normal border border-[#DFEAF2]"
                placeholder="San Jose,California,USA"
              />
            </label>
            <label className="flex flex-col font-normal text-[18px] h-[80px]">
              City
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 border border-[#DFEAF2]"
                placeholder="San Jose"
              />
            </label>
          </div>
          <div className="flex mt-6 ">
            <label className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
              Postal Code
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 text-[#718EBF] font-normal border border-[#DFEAF2]"
                placeholder="45962"
              />
            </label>
            <label className="flex flex-col font-normal text-[18px] h-[80px]">
              Country
              <input
                className="w-[418px] h-[50px] rounded-2xl focus:outline-none focus:ring-0 pl-2 border border-[#DFEAF2]"
                placeholder="USA"
              />
            </label>
          </div>
          <div className="mt-10 flex justify-end">
            <button className="w-[190px] h-[50px] bg-[#232323] text-white rounded-2xl">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DesktopSetting;
