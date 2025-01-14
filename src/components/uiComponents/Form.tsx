import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import FormInput from '../atoms/formInput/FormInput';
import arr from '../atoms/formInput/formData';

interface FormData {
  name: string;
  username: string;
  email: string;
  password: string;
  dob: Date;
  age: number;
  presentAddress: string;
  permanentAddress: string;
  city: string;
  postalCode: string;
  country: string;
}

const Form = () => {
  const method = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form data:', data); // Output form data
  };

  return (
    <div className="min-h-screen bg-white m-2 rounded-xl flex flex-col items-center">
      <div>
        <div className="flex justify-around font-medium text-sm mt-6 mb-2">
          <button className="text-[#232323] underline decoration-[2px] underline-offset-[10px] ">
            Edit Profiile
          </button>
          <button className="text-[#718EBF]">Preferences</button>
          <button className="text-[#718EBF]">Security</button>
        </div>
        <div className="flex justify-center">
          <hr className="w-96" />
        </div>
      </div>
      <div className="w-full mt-11 flex justify-center">
        <img
          className="w-[100px] h-[100px] object-cover  rounded-full"
          src="https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvrTbfYnuQOh7DgZbCVns4pBewutzVx36-y8zVmIy7QRsBGU5Q~DtYVN3qkxXkfO~tFYNtPO48B3rNNlGjxKFLkZVa3xE72FQRiP-CdxbYC7vkuEmUJOkqsMvceDTWK6fOGaD0KiVe2bhLOKlx2EJeQuCn-DKLcNfM6CbUm1AnuMisp90DnIkXA2laLh4oxU1jnBZpm4kbDDbRs9lyJu73Rr-jEP5O0JCMKGBqg4Y9lywumjPXyFtcc6lwda7NYWySxTvnXcWqDtGzCw78No0BeplZONjofNAijChAv3GRrm9PoR5-ICi611e74OIOOtl-XJSo4aSMahuSeUWDXeVQ__"
        />
      </div>
      <div>
        <FormProvider {...method}>
          <form
            onSubmit={method.handleSubmit(onSubmit)}
            className=" mt-6 mb-12 flex flex-col items-center"
          >
            {arr.map((field) => {
              return (
                <FormInput
                  name={field.name}
                  label={field.label}
                  validation={field.validation}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              );
            })}
            <button className="w-[285px] h-10 border rounded-lg text-white bg-[#232323] font-medium text-base">
              Save
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Form;
