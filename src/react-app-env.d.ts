/// <reference types="react-scripts" />

export type objectArrays = { [key: string]: any };

export type ChildrenProps = {
  data?: objectArrays;
  setData?: any;
  currentImages?: { key: [any] }[];
  loading?: boolean;
  setLoading?: boolean;
  inputValue?: string;
  setInputValue?: any;
  totalImages?: number | undefined;
  imagesPerPage?: number;
  paginate?: (loading: boolean) => void;
  currPage?: number;
  setCurrPage?: number;
  indexOfFirstImage?: number;
  deb?: any;
};
