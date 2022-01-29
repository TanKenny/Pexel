import { useContext } from "react";
import { DataContext } from "../../context";
import { Img, Li, Ul } from "./pexelStyles";
import { Message } from "../Loading/Message";
import { ChildrenProps, objectArrays } from "../../react-app-env";

export const PexelImages = () => {
  const { currentImages, loading } = useContext<ChildrenProps>(DataContext);

  return (
    <Ul>
      {loading ? (
        <Message />
      ) : (
        currentImages?.map((photo: objectArrays, index: number) => {
          return (
            <Li key={index}>
              <Img src={photo.src.portrait} alt={photo.alt} />
            </Li>
          );
        })
      )}
    </Ul>
  );
};
