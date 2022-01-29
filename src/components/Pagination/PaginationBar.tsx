//@ts-nocheck
import { useContext } from "react";
import { DataContext } from "../../context";
import { A, Li, Nav, Span, Ul } from "./paginationBarStyles";
import { ChildrenProps } from "../../react-app-env";

export const PaginationBar = () => {
  const {
    imagesPerPage,
    totalImages,
    paginate,
    currPage,
    setCurrPage,
    indexOfFirstImage,
  } = useContext<ChildrenProps>(DataContext);

  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalImages / imagesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Nav>
      {totalImages && !!indexOfFirstImage && (
        <Span
          totalImages={totalImages}
          onClick={() => setCurrPage(currPage - 1)}
        >
          &#60;
        </Span>
      )}
      <Ul>
        {pageNumber.map((number, index) => (
          <Li key={index}>
            <A href="#" onClick={() => paginate(number)}>
              {number}
            </A>
          </Li>
        ))}
      </Ul>
      {totalImages && currPage !== pageNumber.length && (
        <Span
          totalImages={totalImages}
          onClick={() => setCurrPage(currPage + 1)}
        >
          &#62;
        </Span>
      )}
    </Nav>
  );
};
