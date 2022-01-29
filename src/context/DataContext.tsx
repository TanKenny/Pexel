import { createContext, useCallback, useState, useEffect } from "react";
import {
  debounce,
  fetchData,
  getTotalImages,
  getIndexOfLastImage,
  getIndexOfFirstImage,
  getCurrentImages,
} from "../utils";
import { objectArrays, ChildrenProps } from "../react-app-env";

type DataProvider = (args: { children: ChildrenProps }) => any;

export const DataContext = createContext({});

export const DataProvider: DataProvider = ({ children }) => {
  const storedValue = localStorage.getItem("input");

  const [inputValue, setInputValue] = useState<string>(storedValue || "dog");
  const [data, setData] = useState<objectArrays>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [currPage, setCurrPage] = useState<number>(1);
  const [imagesPerPage, setImagesPerPage] = useState<number>(10);

  // Pagination logic
  const totalImages = getTotalImages(data);
  const indexOfLastImage = getIndexOfLastImage(currPage, imagesPerPage);
  const indexOfFirstImage = getIndexOfFirstImage(
    indexOfLastImage,
    imagesPerPage
  );
  const currentImages = getCurrentImages({
    data,
    indexOfFirstImage,
    indexOfLastImage,
  });
  const paginate = (pageNumber: number) => setCurrPage(pageNumber);

  // Input logic
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  // Debounce logic
  // @ts-ignore
  const deb = useCallback(debounce(handleChange));

  useEffect(() => {
    fetchData(setLoading, inputValue)
      .then((res: objectArrays) => {
        setLoading(false);
        setData(res);
      })
      .catch((err: unknown) => console.log(err));
  }, [inputValue]);

  const props = {
    data,
    setData,
    currentImages,
    loading,
    setLoading,
    inputValue,
    setInputValue,
    totalImages,
    imagesPerPage,
    paginate,
    currPage,
    setCurrPage,
    indexOfFirstImage,
    deb,
  };

  return <DataContext.Provider value={props}>{children}</DataContext.Provider>;
};
