import { inputForm } from './InputInterface';
import { useFormContext, FieldValues, FieldError } from 'react-hook-form';

const FormInput = ({
  name,
  label,
  validation,
  type = 'text',
  placeholder,
}: inputForm) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<FieldValues>();

  const errorMessage = errors[name]
    ? (errors[name] as FieldError)?.message
    : undefined;

  return (
    <div className="flex flex-col justify-center items-center w-full md:w-4/5 lg:w-1/2 lg:min-h-max md:mt-4">
      <div className=" w-full">
        <label className="min-w-max  flex flex-col text-xs text-gray-900 mx-4">
          {label}
          <input
            className="w-full h-10 border rounded-xl mt-2 focus:ring-0 focus:outline-none border-sky-100 pl-4 placeholder-customBlue  font-normal "
            type={type}
            {...register(name, validation)}
            placeholder={placeholder}
          />
        </label>
      </div>
      <div className="ml-8 mt-1 flex justify-start  w-full">
        <p>{errorMessage && <p className="text-red-700 ">{errorMessage}</p>}</p>
      </div>
    </div>
  );
};

export default FormInput;
