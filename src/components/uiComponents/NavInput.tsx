import { Glass } from '../icons';

// interface props{

// }

const NavInput = () => {
  return (
    <div className="w-full flex justify-center ">
      <label className="rounded-full w-[85%] flex bg-[#F5F7FA]">
        <p className="mt-3 ml-3 pl-2">
          <Glass height="16" width="16" />
        </p>
        <input
          className="h-10 bg-[#F5F7FA] w-[85%] pl-2 focus:ring-0 focus:outline-none text-[#8BA3CB] font-normal"
          placeholder="Search for something"
        />
      </label>
    </div>
  );
};

export default NavInput;
