import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../context";
import { Div, Input } from "./searchBarStyles";
import { ChildrenProps } from "../../react-app-env";

export const SearchBar = () => {
  const { inputValue, deb } = useContext<ChildrenProps>(DataContext);

  const searchInput = useRef<any>(null);

  useEffect(() => {
    searchInput.current.focus();
    localStorage.setItem("input", String(inputValue));
  }, [inputValue]);

  return (
    <Div>
      <Input
        aria-label="Input Search"
        type="text"
        ref={searchInput}
        placeholder="Please enter a search..."
        onChange={(e) => deb(e)}
      />
    </Div>
  );
};
