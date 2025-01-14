import React from 'react';
import NavInput from '../../uiComponents/NavInput';
import { Logo } from '../../icons';

const MobileNavbar = () => {
  return (
    <div className="h-[140px] flex flex-col items-center">
      <div className=" flex  w-full justify-around items-center mt-6">
        <div className=" w-36 pl-6">
          <img
            className="h-8 w-6 cursor-pointer mt-2"
            src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          />
        </div>
        <div className=" w-36 flex justify-center items-center text-xl font-semibold">
          <h1 className="h-6 w-16 text-[#343C6A]">Settings</h1>
        </div>
        <div className="flex justify-center items-center w-36 pl-16">
          <img
            className="h-9 w-9 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvrTbfYnuQOh7DgZbCVns4pBewutzVx36-y8zVmIy7QRsBGU5Q~DtYVN3qkxXkfO~tFYNtPO48B3rNNlGjxKFLkZVa3xE72FQRiP-CdxbYC7vkuEmUJOkqsMvceDTWK6fOGaD0KiVe2bhLOKlx2EJeQuCn-DKLcNfM6CbUm1AnuMisp90DnIkXA2laLh4oxU1jnBZpm4kbDDbRs9lyJu73Rr-jEP5O0JCMKGBqg4Y9lywumjPXyFtcc6lwda7NYWySxTvnXcWqDtGzCw78No0BeplZONjofNAijChAv3GRrm9PoR5-ICi611e74OIOOtl-XJSo4aSMahuSeUWDXeVQ__"
          />
        </div>
      </div>
      <div className="mt-6 w-full">
        <NavInput />
      </div>
    </div>
  );
};

export default MobileNavbar;
