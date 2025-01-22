import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import FormInput from '../atoms/formInput/FormInput';
import arr from '../atoms/formInput/formData';
import { useContext } from 'react';
import { ImageContext } from '../../context/imageContext/ImageContext';
import pencil from '../../assets/images/pencil.png';

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
  const { img, handleImageUpload } = useContext(ImageContext);
  const method = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form data:', data); // Output form data
  };

  return (
    <div className="min-h-screen bg-white m-2 rounded-xl flex flex-col items-center">
      <div className="w-full mt-11 flex justify-center">
        <img
          className="w-[100px] h-[100px] object-cover  rounded-full"
          src={img}
        />

        <div className="h-8 w-8 bg-black rounded-full flex items-center relative right-6 top-16 ">
          <img src={pencil} className="h-3 w-3 relative left-3" />
          <input
            type="file"
            accept="image/*" // Restrict to image files only
            onChange={handleImageUpload}
            className=" bg-black rounded-full opacity-0 cursor-pointer"
          />
        </div>
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
