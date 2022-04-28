import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation, selectLocation } from "../../features/location/locationSlice";

const Footer = () => {
  const dispatch = useDispatch();
  const locationList = useSelector(selectLocation);

  useEffect(() => {
    dispatch(fetchLocation());
  }, []);

  if (locationList !== undefined && locationList.length > 0) {
    return <div id="footerId"> {locationList[0].id}</div>;
  }
  return null;
};

export default Footer;
