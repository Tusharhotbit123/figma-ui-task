import {
  useForm,
  FormProvider,
  SubmitHandler,
  FieldValues,
} from 'react-hook-form';
import FormInput from '../../components/atoms/formInput/FormInput';
import formData from '../../components/atoms/formInput/formData';
import { useContext, useState } from 'react';
import { ImageContext } from '../../context/imageContext/ImageContext';
import { Pencil } from '../../components/icons';

const Setting = () => {
  const [tab, setTab] = useState('Edit Profile');
  const { img, handleImageUpload } = useContext(ImageContext);
  const method = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Form data:', data);
  };

  if (tab == 'Preferences') {
    return (
      <div className="bg-white rounded-3xl m-4 min-h-screen pt-4">
        <div className="flex justify-around font-medium text-sm mt-6  border-b-2 w-full pb-1 lg:justify-start ">
          <button
            onClick={() => setTab('Edit Profile')}
            className="text-slate-400 lg:px-8 lg:ml-24"
          >
            Edit Profiile
          </button>
          <button
            onClick={() => setTab('Preferences')}
            className="text-gray-900 underline decoration-2 underline-offset-8 lg:px-8"
          >
            Preferences
          </button>
          <button
            onClick={() => setTab('Security')}
            className="text-slate-400 lg:px-8"
          >
            Security
          </button>
        </div>
        <div>Preferences</div>
      </div>
    );
  } else if (tab == 'Security') {
    return (
      <div className="bg-white rounded-3xl m-4 min-h-lvh pt-4">
        <div className="flex justify-around font-medium text-sm mt-6  border-b-2 w-full pb-1 lg:justify-start ">
          <button
            onClick={() => setTab('Edit Profile')}
            className="text-slate-400 lg:px-8 lg:ml-24"
          >
            Edit Profiile
          </button>
          <button
            onClick={() => setTab('Preferences')}
            className="text-slate-400 lg:px-8 "
          >
            Preferences
          </button>
          <button
            onClick={() => setTab('Security')}
            className="text-gray-900 underline decoration-2 underline-offset-8 lg:px-8"
          >
            Security
          </button>
        </div>
        <div>Security</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl m-4 min-h-screen pt-4 md:max-w-max ">
      <div className="flex justify-around font-medium text-sm mt-6  border-b-2 w-full pb-1 lg:justify-start ">
        <button
          onClick={() => setTab('Edit Profile')}
          className="text-gray-900 underline decoration-2 underline-offset-8 lg:px-8 lg:ml-24"
        >
          Edit Profiile
        </button>
        <button
          onClick={() => setTab('Preferences')}
          className="text-slate-400 lg:px-8 "
        >
          Preferences
        </button>
        <button
          onClick={() => setTab('Security')}
          className="text-slate-400 lg:px-8"
        >
          Security
        </button>
      </div>

      <div className=" flex justify-center mt-11 lg:hidden">
        <img
          src={img}
          alt="profile picture"
          className="h-24 w-24 rounded-full"
        />

        <div className="bg-black h-6 w-6 rounded-full flex items-center justify-around relative top-14 right-4">
          <div className="relative left-2">
            <Pencil />
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="bg-black rounded-full opacity-0 cursor-pointer h-6 w-6 "
          />
        </div>
      </div>

      <div className="md:flex md:justify-center  md:w-full ">
        <div className="hidden lg:flex lg:w-1/4   lg:justify-center lg:mt-10 lg:ml-6  ">
          <img
            src={img}
            alt="profile picture"
            className="h-24 w-24 rounded-full"
          />

          <div className="bg-black h-8 w-8 rounded-full flex items-center justify-around relative top-14 right-4">
            <div className="relative left-3">
              <Pencil />
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="bg-black rounded-full opacity-0 cursor-pointer h-6 w-6 "
            />
          </div>
        </div>

        <FormProvider {...method}>
          <form
            onSubmit={method.handleSubmit(onSubmit)}
            className=" mt-6 mb-12 flex flex-col items-center md:mb-2   md:w-3/4 md:h-full pb-8 md:flex-row md:justify-center md:flex-wrap lg:justify-end"
          >
            {formData.map((field) => {
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

            <div className='w-full flex items-center justify-center lg:justify-end'>
              <button className=" w-full md:w-64 mx-4 mt-2 h-10  rounded-lg text-white bg-black font-medium text-base lg:w-48 lg:h-12 lg:rounded-2xl lg:relative lg:right-3 lg:mt-2">
                Save
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};

export default Setting;
