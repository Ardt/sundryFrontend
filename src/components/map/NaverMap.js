import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectLocation } from "../../features/location/locationSlice";
import { mapId, initMapOption } from "../../store/InitialValue";

let map = null;
const { naver } = window;

const NaverMap = () => {
  const locationList = useSelector(selectLocation);

  useEffect(() => {
    if (map == null) {
      map = new naver.maps.Map(mapId, initMapOption);
    }
  }, []);

  if (map !== null && locationList !== undefined && locationList.length > 0) {
    setMarker(locationList);
  }

  return <div id={mapId}> </div>;
};

const setMarker = (locationList) => {
  locationList.forEach((loc) => {
    let position = new naver.maps.LatLng(loc.lat, loc.lng);
    let marker = new naver.maps.Marker({ position, map });

    naver.maps.Event.addListener(map, "idle", () => {
      displayMarker(map.getBounds().hasLatLng(marker.getPosition()), marker)
    });

    naver.maps.Event.addListener(marker, "click", getClickHandler(loc.id, marker));
  });
}

// 해당 마커의 인덱스를 seq라는 클로저 변수로 저장하는 이벤트 핸들러를 반환합니다.
const getClickHandler = (locationId, marker) => {
  return function(_e) {
    map.setCenter(new naver.maps.LatLng(marker.position.y, marker.position.x));
    console.log(locationId);
  }
}

const displayMarker = (shown, marker) => {
  if (shown !== marker.getMap()) {
    marker.setMap(shown ? map : null);
  }
}

export default NaverMap;
