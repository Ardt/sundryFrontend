import { createAsyncThunk } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectMap } from "../../features/map/mapSlice";
import { fetchMarker } from "../../features/marker/markerAPI";
import { setMap } from "../../features/marker/markerSlice";


const { naver } = window;

const initMarkerLocation = [
  [37.3595704, 127.105399],
  [37.3595704, 127.1054],
  [37.3595704, 127.1055],
  [37.3595704, 127.1056],
];

const markerList = [];

const Marker = (map) => {
  initMarkerLocation.forEach((loc) => {
    markerList.push(
      new naver.maps.Marker({
        position: new naver.maps.LatLng(...loc),
        map,
      })
    );
  });

  return markerList;

};

export default Marker;
