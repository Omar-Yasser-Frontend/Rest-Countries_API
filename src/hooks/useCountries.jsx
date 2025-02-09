import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../slice/filterSlice";

function useCountries() {
  const { countries } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const [isLoading, setIsloading] = useState("idle");

  useEffect(
    function () {
      if (countries.length !== 0) return;
      async function gettingData() {
        try {
          setIsloading("loading");

          // life is hard man i have to use import instead of fetch to allow my self to upload the project

          const res = await fetch("/public/data.json");

          if (!res.ok) throw new Error("failled to fetch data");

          const data = await res.json();
          dispatch(fetchCountries(data));
          setIsloading("idle");
        } catch (e) {
          console.error(e.message);
          setIsloading("error");
        }
      }
      gettingData();
    },
    [countries, dispatch]
  );
  return { isLoading };
}

export default useCountries;
