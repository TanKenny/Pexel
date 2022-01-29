import { DataProvider } from "./context/DataContext";
import { PaginationBar } from "./components/Pagination/";
import { PexelImages } from "./components/Pexel";
import { SearchBar } from "./components/Search/";
import "./App.css";
import { Grid } from "./appStyles";
import { FC } from "react";

const App = () => {
  return (
    <DataProvider>
      <Grid>
        <SearchBar />
        <PexelImages />
        <PaginationBar />
      </Grid>
    </DataProvider>
  );
};

export default App;
