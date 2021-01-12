import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router';

type Params = { [name: string]: string };

const getParams = (location: any): Params => {
  const urlSearchParams = new URLSearchParams(location.search);
  const searchParams = Object.fromEntries(urlSearchParams);

  return searchParams;
};

export default function (): Params {
  const location = useLocation();

  // Initialize the params related to the current location
  const [params, setParams] = useState<Params>(getParams(location));

  // If the location changes, make sure to return the query params on every update
  useEffect(() => {
    setParams(getParams(location));
  }, [location]);

  return params;
}
