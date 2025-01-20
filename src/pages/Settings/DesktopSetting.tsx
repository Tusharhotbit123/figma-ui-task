import {useState,useContext} from 'react';
import pencil from "../../assets/images/pencil.png"
import { ImageContext } from '../../context/imageContext/ImageContext';

import {
  useForm,
  Controller,
  FormProvider,
  FieldValues,
  FieldError,
} from 'react-hook-form';

const DesktopSetting = () => {


  const {img,handleImageUpload}=useContext(ImageContext)


  const methods = useForm<FieldValues>({
    mode: 'onSubmit', // Trigger validation on form submission
  });

  const {
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data: FieldValues) => {
    console.log('Form data:', data); // Replace with desired action on form submission
  };

  const renderError = (error: FieldError | undefined) => {
    return error ? (
      <p className="text-red-500 text-sm">{error.message}</p>
    ) : null;
  };

  const [tab, setTab] = useState('Edit Profile');
  // const [img, setImg] = useState(
  //   'https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvrTbfYnuQOh7DgZbCVns4pBewutzVx36-y8zVmIy7QRsBGU5Q~DtYVN3qkxXkfO~tFYNtPO48B3rNNlGjxKFLkZVa3xE72FQRiP-CdxbYC7vkuEmUJOkqsMvceDTWK6fOGaD0KiVe2bhLOKlx2EJeQuCn-DKLcNfM6CbUm1AnuMisp90DnIkXA2laLh4oxU1jnBZpm4kbDDbRs9lyJu73Rr-jEP5O0JCMKGBqg4Y9lywumjPXyFtcc6lwda7NYWySxTvnXcWqDtGzCw78No0BeplZONjofNAijChAv3GRrm9PoR5-ICi611e74OIOOtl-XJSo4aSMahuSeUWDXeVQ__',
  // );

  // const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0]; // Get the first file from the input
  //   if (file) {
  //     const reader = new FileReader();

  //     // Event handler for when the file is read
  //     reader.onloadend = () => {
  //       if (reader.result) {
  //         setImg(reader.result as string); // Set the Base64 result as the image source
  //       }
  //     };

  //     // Read the file as a data URL (Base64 encoded string)
  //     reader.readAsDataURL(file);
  //   }
  // };

  if (tab == 'Edit Profile') {
    return (
      <div className="border ml-20 mt-10 mb-40 mr-20 rounded-2xl h-full w-auto bg-white">
        <div className="flex mt-8 ml-8 mr-8 mb-10 h-[30px] w-[1050px]">
          <button
            className="ml-4 mr-8 pl-4 pr-4 text-black border-b-[3px] border-b-black"
            onClick={() => setTab('Edit Profile')}
          >
            Edit Profile
          </button>
          <button
            className="ml-8 mr-8 text-[#718EBF]"
            onClick={() => setTab('Preferences')}
          >
            Preferences
          </button>
          <button
            className="ml-8 mr-8 text-[#718EBF]"
            onClick={() => setTab('Security')}
          >
            Security
          </button>
        </div>

        <div className="flex justify-center mb-6">
          <div className="flex relative top-8 ml-14">
            <img
              className="h-[91px] w-[98px] rounded-full"
              src={img}
              alt="Profile"
            />

            <div className='h-8 w-8 bg-black rounded-full flex items-center relative right-6 top-16 '>
              <img src={pencil} className='h-3 w-3 relative left-3'/>
              <input
                type="file"
                accept="image/*" // Restrict to image files only
                onChange={handleImageUpload}
                className=" bg-black rounded-full opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <FormProvider {...methods}>
            <form
              className="flex flex-col ml-14 mr-10 mt-6"
              onSubmit={handleSubmit(onSubmit)} // Attach submit handler
            >
              {/* Name and Username Fields */}
              <div className="flex">
                <div className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
                  <label>Your Name</label>
                  <Controller
                    name="name"
                    control={methods.control}
                    defaultValue=""
                    rules={{ required: 'Your Name is required' }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.name ? 'border-red-500' : 'border-[#DFEAF2]'
                          }`}
                          placeholder="Charlene Reed"
                        />
                        {renderError(errors.name as FieldError)}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col font-normal text-[18px] h-[80px]">
                  <label>User Name</label>
                  <Controller
                    name="username"
                    control={methods.control}
                    defaultValue=""
                    rules={{ required: 'Username is required' }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.username
                              ? 'border-red-500'
                              : 'border-[#DFEAF2]'
                          }`}
                          placeholder="Charlene Reed"
                        />
                        {renderError(errors.username as FieldError)}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Email and Password Fields */}
              <div className="flex mt-6">
                <div className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
                  <label>Email</label>
                  <Controller
                    name="email"
                    control={methods.control}
                    defaultValue=""
                    rules={{
                      required: 'Email is required',
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: 'Invalid email address',
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.email ? 'border-red-500' : 'border-[#DFEAF2]'
                          }`}
                          placeholder="charlenereed@gmail.com"
                        />
                        {renderError(errors.email as FieldError)}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col font-normal text-[18px] h-[80px]">
                  <label>Password</label>
                  <Controller
                    name="password"
                    control={methods.control}
                    defaultValue=""
                    rules={{
                      required: 'Password is required',
                      minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters',
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.password
                              ? 'border-red-500'
                              : 'border-[#DFEAF2]'
                          }`}
                          placeholder="***********"
                          type="password"
                        />
                        {renderError(errors.password as FieldError)}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Date of Birth and Present Address Fields */}
              <div className="flex mt-6">
                <div className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
                  <label>Date of Birth</label>
                  <Controller
                    name="dob"
                    control={methods.control}
                    defaultValue=""
                    rules={{ required: 'Date of Birth is required' }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.dob ? 'border-red-500' : 'border-[#DFEAF2]'
                          }`}
                          placeholder="25 January 1990"
                          type="date"
                        />
                        {renderError(errors.dob as FieldError)}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col font-normal text-[18px] h-[80px]">
                  <label>Present Address</label>
                  <Controller
                    name="presentAddress"
                    control={methods.control}
                    defaultValue=""
                    rules={{ required: 'Present Address is required' }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.presentAddress
                              ? 'border-red-500'
                              : 'border-[#DFEAF2]'
                          }`}
                          placeholder="San Jose,California,USA"
                        />
                        {renderError(errors.presentAddress as FieldError)}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Permanent Address and City Fields */}
              <div className="flex mt-6">
                <div className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
                  <label>Permanent Address</label>
                  <Controller
                    name="permanentAddress"
                    control={methods.control}
                    defaultValue=""
                    rules={{ required: 'Permanent Address is required' }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.permanentAddress
                              ? 'border-red-500'
                              : 'border-[#DFEAF2]'
                          }`}
                          placeholder="San Jose,California,USA"
                        />
                        {renderError(errors.permanentAddress as FieldError)}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col font-normal text-[18px] h-[80px]">
                  <label>City</label>
                  <Controller
                    name="city"
                    control={methods.control}
                    defaultValue=""
                    rules={{ required: 'City is required' }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.city ? 'border-red-500' : 'border-[#DFEAF2]'
                          }`}
                          placeholder="San Jose"
                        />
                        {renderError(errors.city as FieldError)}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Postal Code and Country Fields */}
              <div className="flex mt-6">
                <div className="flex flex-col font-normal text-[18px] h-[80px] mr-8">
                  <label>Postal Code</label>
                  <Controller
                    name="postalCode"
                    control={methods.control}
                    defaultValue=""
                    rules={{
                      required: 'Postal Code is required',
                      pattern: {
                        value: /^\d{5}$/,
                        message: 'Invalid Postal Code',
                      },
                    }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.postalCode
                              ? 'border-red-500'
                              : 'border-[#DFEAF2]'
                          }`}
                          placeholder="12345"
                        />
                        {renderError(errors.postalCode as FieldError)}
                      </div>
                    )}
                  />
                </div>

                <div className="flex flex-col font-normal text-[18px] h-[80px]">
                  <label>Country</label>
                  <Controller
                    name="country"
                    control={methods.control}
                    defaultValue=""
                    rules={{ required: 'Country is required' }}
                    render={({ field }) => (
                      <div>
                        <input
                          {...field}
                          className={`w-[418px] h-[50px] rounded-2xl pl-2 border ${
                            errors.country
                              ? 'border-red-500'
                              : 'border-[#DFEAF2]'
                          }`}
                          placeholder="USA"
                        />
                        {renderError(errors.country as FieldError)}
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* Save Button */}
              <div className="mt-10 flex justify-end">
                <button
                  type="submit"
                  className="w-[190px] h-[50px] bg-[#232323] text-white rounded-2xl"
                >
                  Save
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    );
  } else if (tab === 'Preferences') {
    return (
      <div className="mt-10 mb-40 mx-20 flex items-center justify-center">
        <div className="h-[717px] w-[1110px]  items-center justify-center bg-white rounded-3xl flex flex-col">
          <div className="flex mt-8 ml-8 mr-8 mb-10 h-[30px] w-[1050px] relative bottom-72">
            <button
              className="ml-8 mr-8 text-[#718EBF]"
              onClick={() => setTab('Edit Profile')}
            >
              Edit Profile
            </button>
            <button
              className="ml-4 mr-8 pl-4 pr-4 text-black border-b-[3px] border-b-black"
              onClick={() => setTab('Preferences')}
            >
              Preferences
            </button>
            <button
              className="ml-8 mr-8 text-[#718EBF]"
              onClick={() => setTab('Security')}
            >
              Security
            </button>
          </div>
          <h1>Preferences</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-10 mb-40 mx-20 flex items-center justify-center">
      <div className="h-[717px] w-[1110px] flex items-center justify-center bg-white rounded-3xl flex flex-col">
        <div className="flex mt-8 ml-8 mr-8 mb-10 h-[30px] w-[1050px] relative bottom-72">
          <button
            className="ml-8 mr-8 text-[#718EBF]"
            onClick={() => setTab('Edit Profile')}
          >
            Edit Profile
          </button>
          <button
            className="ml-8 mr-8 text-[#718EBF]"
            onClick={() => setTab('Preferences')}
          >
            Preferences
          </button>
          <button
            className="ml-4 mr-8 pl-4 pr-4 text-black border-b-[3px] border-b-black"
            onClick={() => setTab('Security')}
          >
            Security
          </button>
        </div>
        <h1>Security</h1>
      </div>
    </div>
  );
};

export default DesktopSetting;
