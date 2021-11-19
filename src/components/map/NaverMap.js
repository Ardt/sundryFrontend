import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setMap } from "../../features/map/mapSlice";
import { APIURL, markerList, mapDivId, initMapOption } from "./MapOption";
import Marker from "../marker/Marker";

let map = null;
const { naver } = window;

const NaverMap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (map == null) {
      map = new naver.maps.Map(mapDivId, initMapOption);
      dispatch(setMap(map));
    }

    fetchData();
  }, []);

  return map ? null : <div id={mapDivId}> </div>;
};

const fetchData = () => {
  try {
    return fetch(APIURL + "location/", { mode: "cors" })
      .then((response) => response.json())
      .then((data) =>
        data.forEach((loc) => {
          markerList.push(
            new naver.maps.Marker({
              position: new naver.maps.LatLng(loc.lat, loc.lng),
              map,
            })
          );
        })
      );
  } catch (err) {
    alert(err);
  }
}

export default NaverMap;
