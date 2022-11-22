import FHIR from "fhirclient";
import { useRef, useEffect, useState, useMemo } from "react";

const useConditions = (patientId) => {
  const FHIRref = useRef();

  const [sibLinks, setSibLinks] = useState([]);
  const [conditions, setConditions] = useState([]);

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

  const processConditions = (data) => {
    setSibLinks([...data.link]);
    setConditions(data.entry || []);
  };

  const fetchData = (url) => {
    FHIRref.current.request(url).then(processConditions).catch(console.error);
  };

  useEffect(() => {
    FHIRref.current = FHIR.client("https://r2.smarthealthit.org");
    fetchData(`Condition?patient=${patientId}`);
  }, [patientId]);

  return {
    conditions,
    nextPage: nextLink && nextPage,
    prevPage: prevLink && prevPage,
  };
};

export default useConditions;
