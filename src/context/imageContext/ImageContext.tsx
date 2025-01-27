import { createContext, useState, ReactNode, ChangeEvent } from 'react';

type ImageContextType = {
  img: string;
  setImg: React.Dispatch<React.SetStateAction<string>>;
  handleImageUpload: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const ImageContext = createContext<ImageContextType>(
  {} as ImageContextType,
);

type NavProviderProps = {
  children: ReactNode;
};

export const ImageProvider = ({ children }: NavProviderProps) => {
  const [img, setImg] = useState(
    'https://s3-alpha-sig.figma.com/img/57d3/d250/790e98129931897251abd3915a931233?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gvrTbfYnuQOh7DgZbCVns4pBewutzVx36-y8zVmIy7QRsBGU5Q~DtYVN3qkxXkfO~tFYNtPO48B3rNNlGjxKFLkZVa3xE72FQRiP-CdxbYC7vkuEmUJOkqsMvceDTWK6fOGaD0KiVe2bhLOKlx2EJeQuCn-DKLcNfM6CbUm1AnuMisp90DnIkXA2laLh4oxU1jnBZpm4kbDDbRs9lyJu73Rr-jEP5O0JCMKGBqg4Y9lywumjPXyFtcc6lwda7NYWySxTvnXcWqDtGzCw78No0BeplZONjofNAijChAv3GRrm9PoR5-ICi611e74OIOOtl-XJSo4aSMahuSeUWDXeVQ__',
  );

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.result) {
          setImg(reader.result as string);
        }
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <ImageContext.Provider value={{ img, setImg, handleImageUpload }}>
      {children}
    </ImageContext.Provider>
  );
};
