import { inputForm } from './InpiutInterface';
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
    <div className="flex flex-col justify-center items-center">
      <div>
        <label className="flex flex-col text-xs text-[#232323] m-4">
          {label}
          <input
            className="w-[285px] h-10 border rounded-xl mt-2 focus:ring-0 focus:outline-none border-[#DFEAF2] pl-4 placeholder-[#718EBF]  font-normal "
            type={type}
            {...register(name, validation)} //form validation
            placeholder={placeholder}
          />
        </label>
      </div>
      <div>
        <p>{errorMessage && <p className="text-red-700">{errorMessage}</p>}</p>
      </div>
    </div>
  );
};

export default FormInput;
