import { objectArrays } from "../react-app-env";

type GetTotalImages = (data: objectArrays) => number;
type GetIndexOfLastImage = (currPage: number, imagesPerPage: number) => number;
type GetIndexOfFirstImage = (
  indexOfLastImage: number,
  imagesPerPage: number
) => number;
type GetCurrentImages = (args: {
  data: objectArrays;
  indexOfFirstImage: number;
  indexOfLastImage: number;
}) => objectArrays;

export const getTotalImages: GetTotalImages = (data) => data.photos?.length;
export const getIndexOfLastImage: GetIndexOfLastImage = (
  currPage,
  imagesPerPage
) => currPage * imagesPerPage;
export const getIndexOfFirstImage: GetIndexOfFirstImage = (
  indexOfLastImage,
  imagesPerPage
) => indexOfLastImage - imagesPerPage;
export const getCurrentImages: GetCurrentImages = ({
  data,
  indexOfFirstImage,
  indexOfLastImage,
}) => data.photos?.slice(indexOfFirstImage, indexOfLastImage);
