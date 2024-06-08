import { useState } from "react";

function useSearch() {
  const [searchText, setsearchText] = useState("");
  const [searchBy, setsearchBy] = useState("");
  return {
    searchBy,
    searchText,
    setsearchBy,
    setsearchText,
  };
}

export default useSearch;
