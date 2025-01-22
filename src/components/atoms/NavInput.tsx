import { Glass } from '../icons';

const NavInput = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <label className="rounded-full w-full flex bg-gray-100 ">
        <p className="mt-3 ml-3 pl-2">
          <Glass height="16" width="16" />
        </p>
        <input
          className="h-10 bg-gray-100 w-full pl-2 focus:ring-0 focus:outline-none text-slate-400 rounded-3xl font-normal"
          placeholder="Search for something"
        />
      </label>
    </div>
  );
};

export default NavInput;
