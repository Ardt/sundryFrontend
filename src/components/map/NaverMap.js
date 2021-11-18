import React, { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { setMap } from "../../features/map/mapSlice";

var map = null;

const mapDivId = 'map';

const initMapOption = {
  scaleControl: true,
  logoControl: true,
  mapDataControl: true,
  zoomControl: true,
  size: {width: 600, height: 400},
  zoom: 16
};

const initMarkerLocation = [
  [37.3595704, 127.105399]
];

const markerList = [];

const { naver } = window;

const NaverMap = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (map == null) {
      map = new naver.maps.Map(mapDivId, initMapOption);
    }
    
    setMarker()
    
    dispatch(setMap(map))
  }, [])
  
  return <div id="map"> </div>
}

function setMarker() {
  initMarkerLocation.forEach((loc) => {
    markerList.push(new naver.maps.Marker({
      position: new naver.maps.LatLng(...loc),
      map
    }));
  });

}

export default NaverMap;