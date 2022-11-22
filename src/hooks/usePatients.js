import FHIR from "fhirclient";
import { useRef, useEffect, useState, useMemo } from "react";

const usePatients = () => {
  const FHIRref = useRef();

  const [sibLinks, setSibLinks] = useState([]);
  const [patients, setPatients] = useState([]);

  const nextLink = useMemo(
    () => sibLinks.find((link) => link.relation === "next"),
    [sibLinks]
  );
  const prevLink = useMemo(
    () => sibLinks.find((link) => link.relation === "previous"),
    [sibLinks]
  );

  const nextPage = () => {
    if (nextLink) fetchData(nextLink.url);
  };

  const prevPage = () => {
    if (prevLink) fetchData(prevLink.url);
  };

  const processPatients = (data) => {
    setSibLinks([...data.link]);
    setPatients([...data.entry]);
  };

  const fetchData = (url) => {
    FHIRref.current.request(url).then(processPatients).catch(console.error);
  };

  useEffect(() => {
    FHIRref.current = FHIR.client("https://r2.smarthealthit.org");
    fetchData("Patient");
  }, []);

  return {
    patients,
    nextPage: nextLink && nextPage,
    prevPage: prevLink && prevPage,
  };
};

export default usePatients;
