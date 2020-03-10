import React from "react";
import Svg, { Defs, Pattern, Image, G, Path, Text , Circle} from "react-native-svg" ;
import {getCartesianCoordiantesFromGeoCoordinates} from '../lib/GeoCoordinatesToCartesian';

const orientation = {
  latitudeOrigin: 49.9022971227527,
  latitudeEnd: 49.90113355396578,
  longitudeOrigin: 10.899680361263167,
  longitudeEnd: 10.900085956390571,
  azimuth: 305.9866071428564,
  widthInPx: 1000,
  heightInPx: 578,
  fudgeFactorX: 1.57,
  fudgeFactorY: 1.2,
}

function renderGpsBobbel(location){
  if(!location){
    return null;
  }

  let point = getCartesianCoordiantesFromGeoCoordinates(orientation, location);

  return <Circle cx={point.x} cy={point.y} r="18" stroke="white" strokeWidth="7" fill={"blue"} />
}

function BrennerSvg(props) {
  const {onParkingSpacePress, getColor, location} = props;

  return (
        <Svg
          width={700}
          height={578}
          viewBox="-2.835 55 1600.398 925.425"
          {...props}
        >
          <Defs>
            <Pattern
              id="prefix__a"
              x={0}
              y={0}
              width={256}
              height={256}
              patternUnits="userSpaceOnUse"
            >
              <Image
               href={require("./wall.png")}
                width={256}
                height={256}
              />
            </Pattern>
          </Defs>
          <G className="prefix__parking-lot">
            <G className="prefix__parking-level">
              <Path
                fill="url(#prefix__a)"
                className="prefix__wall"
                d="M193.519 189.164h236.892v202.915H193.519zM386.128-189.082h287.856V13.833H386.128z"
              />
              <Path
                fill="url(#prefix__a)"
                className="prefix__wall"
                d="M670.448-189.477h251.048V13.438H670.448z"
              />
              <Path
                fill="url(#prefix__a)"
                className="prefix__wall"
                d="M920.083-188.65h251.048V14.265H920.083zM1296.468 353.617h142.876v139.304h-142.876z"
              />
              <Path
                fill="url(#prefix__a)"
                className="prefix__wall"
                d="M1435.87 392.886h47.625v64.294h-47.625zM63.103 200.026h50.006v90.488H63.103z"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={58.515}
                height={64.178}
                x={94.015}
                y={376.821}
                transform="rotate(305.987 123.273 408.91)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={41.527}
                height={47.19}
                x={149.262}
                y={382.152}
                transform="rotate(305.987 170.026 405.747)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={41.527}
                height={41.527}
                x={291.512}
                y={398.664}
                transform="rotate(305.987 312.275 419.428)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={52.852}
                height={50.021}
                x={328.658}
                y={398.276}
                transform="rotate(305.987 355.084 423.286)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={47.19}
                height={41.527}
                x={417.768}
                y={396.01}
                transform="rotate(305.987 441.363 416.773)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={67.009}
                height={67.009}
                x={463.464}
                y={372.573}
                transform="rotate(305.987 496.969 406.078)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={57.747}
                height={56.452}
                x={463.493}
                y={269.163}
                transform="rotate(305.987 492.366 297.39)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={69.841}
                height={58.515}
                x={464.14}
                y={195.606}
                transform="rotate(305.987 499.06 224.863)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={50.021}
                x={545.83}
                y={155.662}
                transform="rotate(305.987 570.84 180.672)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={67.009}
                height={67.009}
                x={661.485}
                y={95.203}
                transform="rotate(305.987 694.99 128.707)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={50.021}
                x={606.407}
                y={150.305}
                transform="rotate(305.987 631.418 175.316)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={50.021}
                x={658.044}
                y={154.872}
                transform="rotate(305.987 683.055 179.882)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={81.166}
                height={92.492}
                x={782.054}
                y={90.918}
                transform="rotate(305.987 822.637 137.164)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={50.021}
                x={546.631}
                y={102}
                transform="rotate(305.987 571.642 127.01)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={38.695}
                height={33.033}
                x={936.207}
                y={115.609}
                transform="rotate(305.987 955.555 132.126)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={38.695}
                height={33.033}
                x={1069.176}
                y={116.843}
                transform="rotate(305.987 1088.524 133.36)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={61.346}
                x={102.03}
                y={631.675}
                transform="rotate(305.987 127.04 662.348)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={72.672}
                height={75.503}
                x={238.605}
                y={636.612}
                transform="rotate(305.987 274.94 674.364)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={72.672}
                x={340.89}
                y={630.179}
                transform="rotate(305.987 365.9 666.515)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={58.515}
                x={417.094}
                y={638.927}
                transform="rotate(305.987 442.104 668.185)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={52.852}
                x={517.755}
                y={645.56}
                transform="rotate(305.987 542.765 671.986)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={61.346}
                height={55.684}
                x={592.351}
                y={641.71}
                transform="rotate(305.987 623.024 669.552)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={52.852}
                x={690.818}
                y={639.911}
                transform="rotate(306.924 715.829 666.337)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={50.021}
                x={246.131}
                y={131.46}
                transform="rotate(305.987 271.142 156.47)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={50.021}
                x={270.224}
                y={90.928}
                transform="rotate(305.987 295.234 115.938)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={33.033}
                height={33.033}
                x={806.175}
                y={170.36}
                transform="rotate(305.987 822.691 186.877)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={30.201}
                height={30.201}
                x={856.818}
                y={159.481}
                transform="rotate(305.987 871.919 174.581)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={27.37}
                height={24.539}
                x={918.091}
                y={166.202}
                transform="rotate(305.987 931.776 178.472)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={27.37}
                height={33.033}
                x={1083.057}
                y={168.516}
                transform="rotate(305.987 1096.742 185.033)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={27.37}
                height={27.37}
                x={1120.12}
                y={168.22}
                transform="rotate(305.987 1133.805 181.905)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={27.37}
                height={27.37}
                x={1165.374}
                y={171.639}
                transform="rotate(305.987 1179.06 185.324)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={27.37}
                height={30.201}
                x={772.224}
                y={637.098}
                transform="rotate(305.987 785.909 652.199)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={27.37}
                height={38.695}
                x={947.537}
                y={650.355}
                transform="rotate(305.987 961.222 669.703)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={38.695}
                height={38.695}
                x={981.954}
                y={649.879}
                transform="rotate(305.987 1001.302 669.227)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={38.695}
                height={38.695}
                x={1052.919}
                y={652.532}
                transform="rotate(305.987 1072.267 671.88)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={50.021}
                height={50.021}
                x={696.519}
                y={395.289}
                transform="rotate(305.987 721.529 420.3)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={41.527}
                height={47.19}
                x={894.163}
                y={396.48}
                transform="rotate(305.987 914.927 420.075)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={47.19}
                height={44.358}
                x={1067.995}
                y={391.717}
                transform="rotate(305.987 1091.59 413.896)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={24.539}
                height={21.707}
                x={1289.048}
                y={282.179}
                transform="rotate(305.987 1301.317 293.033)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={27.37}
                height={27.37}
                x={1288.993}
                y={233.363}
                transform="rotate(305.987 1302.678 247.048)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={38.695}
                height={41.527}
                x={1349.748}
                y={127.474}
                transform="rotate(305.987 1369.096 148.237)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={58.515}
                height={64.178}
                x={97.632}
                y={145.257}
                transform="rotate(305.987 126.89 177.346)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={41.527}
                height={47.19}
                x={152.879}
                y={150.587}
                transform="rotate(305.987 173.642 174.182)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={41.527}
                height={47.19}
                x={57.15}
                y={153.591}
                transform="rotate(292.862 77.914 177.186)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={57.747}
                height={56.452}
                x={13.097}
                y={254.795}
                transform="rotate(305.987 41.97 283.02)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={57.747}
                height={56.452}
                x={14.288}
                y={316.708}
                transform="rotate(305.987 43.16 344.934)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={38.695}
                height={33.033}
                x={411.132}
                y={106.279}
                transform="rotate(305.987 430.48 122.795)"
              />
              <Image
                preserveAspectRatio="none"
               href={require("./hedge.png")}
                className="prefix__hedge"
                width={39.42}
                height={37.167}
                x={1553.143}
                y={569.899}
              />
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(1)}>
                <Path fill={getColor(1)}

                  className="prefix__parking-space"
                  d="M26.325 444.276h33.033v58.515H26.325z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={26.325}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={42.842}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"1"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(2)}
>
                <Path
                  fill={getColor(2)}

                  className="prefix__parking-space"
                  d="M58.178 444.276h33.033v58.515H58.178z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={58.178}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={74.695}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"2"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(3)}
>
                <Path
                  fill={getColor(3)}

                  className="prefix__parking-space"
                  d="M90.031 444.276h33.033v58.515H90.031z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={90.031}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={106.548}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"3"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(4)}
>
                <Path
                  fill={getColor(4)}

                  className="prefix__parking-space"
                  d="M121.884 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={121.884}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={138.4}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"4"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(5)}
>
                <Path
                  fill={getColor(5)}

                  className="prefix__parking-space"
                  d="M153.737 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={153.737}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={170.253}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"5"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(6)}
>
                <Path
                  fill={getColor(6)}

                  className="prefix__parking-space"
                  d="M185.59 444.276h33.033v58.515H185.59z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={185.59}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={202.106}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"6"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(7)}
>
                <Path
                  fill={getColor(7)}

                  className="prefix__parking-space"
                  d="M217.443 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={217.443}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={233.959}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"7"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(8)}
>
                <Path
                  fill={getColor(8)}

                  className="prefix__parking-space"
                  d="M249.296 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={249.296}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={265.812}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"8"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(9)}
>
                <Path
                  fill={getColor(9)}

                  className="prefix__parking-space"
                  d="M281.149 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={281.149}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={297.665}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"9"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(10)}
>
                <Path
                  fill={getColor(10)}

                  className="prefix__parking-space"
                  d="M313.002 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={313.002}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={329.518}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"10"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(11)}
>
                <Path
                  fill={getColor(11)}

                  className="prefix__parking-space"
                  d="M344.855 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={344.855}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={361.371}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"11"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(12)}
>
                <Path
                  fill={getColor(12)}

                  className="prefix__parking-space"
                  d="M376.708 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={376.708}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={393.224}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"12"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(13)}
>
                <Path
                  fill={getColor(13)}

                  className="prefix__parking-space"
                  d="M408.561 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={408.561}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={425.077}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"13"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(14)}
>
                <Path
                  fill={getColor(14)}

                  className="prefix__parking-space"
                  d="M440.414 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={440.414}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={456.93}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"14"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(15)}
>
                <Path
                  fill={getColor(15)}

                  className="prefix__parking-space"
                  d="M472.267 444.276H505.3v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={472.267}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={488.783}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"15"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(16)}
>
                <Path
                  fill={getColor(16)}

                  className="prefix__parking-space"
                  d="M504.119 444.276h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={504.119}
                  y={444.276}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={520.636}
                  y={473.534}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"16"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(17)}
>
                <Path
                  fill={getColor(17)}

                  className="prefix__parking-space"
                  d="M95.534 632.8H62.501v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={62.501}
                  y={574.286}
                  transform="rotate(180 79.018 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={79.018}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"17"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(18)}
>
                <Path
                  fill={getColor(18)}

                  className="prefix__parking-space"
                  d="M127.387 632.8H94.354v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={94.354}
                  y={574.286}
                  transform="rotate(180 110.87 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={110.871}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"18"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(19)}
>
                <Path
                  fill={getColor(19)}

                  className="prefix__parking-space"
                  d="M159.24 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={126.207}
                  y={574.286}
                  transform="rotate(180 142.724 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={142.724}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"19"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(20)}
>
                <Path
                  fill={getColor(20)}

                  className="prefix__parking-space"
                  d="M191.093 632.8H158.06v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={158.06}
                  y={574.286}
                  transform="rotate(180 174.577 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={174.577}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"20"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(21)}
>
                <Path
                  fill={getColor(21)}

                  className="prefix__parking-space"
                  d="M222.946 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={189.913}
                  y={574.286}
                  transform="rotate(180 206.43 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={206.429}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"21"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(22)}
>
                <Path
                  fill={getColor(22)}

                  className="prefix__parking-space"
                  d="M254.799 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={221.766}
                  y={574.286}
                  transform="rotate(180 238.282 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={238.282}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"22"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(23)}
>
                <Path
                  fill={getColor(23)}

                  className="prefix__parking-space"
                  d="M286.652 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={253.619}
                  y={574.286}
                  transform="rotate(180 270.135 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={270.135}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"23"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(24)}
>
                <Path
                  fill={getColor(24)}

                  className="prefix__parking-space"
                  d="M318.505 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={285.472}
                  y={574.286}
                  transform="rotate(180 301.988 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={301.988}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"24"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(25)}
>
                <Path
                  fill={getColor(25)}

                  className="prefix__parking-space"
                  d="M350.358 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={317.325}
                  y={574.286}
                  transform="rotate(180 333.841 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={333.841}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"25"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(26)}
>
                <Path
                  fill={getColor(26)}

                  className="prefix__parking-space"
                  d="M382.21 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={349.178}
                  y={574.286}
                  transform="rotate(180 365.694 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={365.694}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"26"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(27)}
>
                <Path
                  fill={getColor(27)}

                  className="prefix__parking-space"
                  d="M414.063 632.8H381.03v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={381.031}
                  y={574.286}
                  transform="rotate(180 397.547 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={397.547}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"27"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(28)}
>
                <Path
                  fill={getColor(28)}

                  className="prefix__parking-space"
                  d="M445.916 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={412.884}
                  y={574.286}
                  transform="rotate(180 429.4 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={429.4}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"28"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(29)}
>
                <Path
                  fill={getColor(29)}

                  className="prefix__parking-space"
                  d="M477.77 632.8h-33.034v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={444.737}
                  y={574.286}
                  transform="rotate(180 461.253 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={461.253}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"29"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(30)}
>
                <Path
                  fill={getColor(30)}

                  className="prefix__parking-space"
                  d="M509.622 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={476.59}
                  y={574.286}
                  transform="rotate(180 493.106 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={493.106}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"30"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(31)}
>
                <Path
                  fill={getColor(31)}

                  className="prefix__parking-space"
                  d="M541.475 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={508.443}
                  y={574.286}
                  transform="rotate(180 524.959 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={524.959}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"31"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(32)}
>
                <Path
                  fill={getColor(32)}

                  className="prefix__parking-space"
                  d="M573.328 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={540.296}
                  y={574.286}
                  transform="rotate(180 556.812 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={556.812}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"32"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(33)}
>
                <Path
                  fill={getColor(33)}

                  className="prefix__parking-space"
                  d="M605.182 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={572.148}
                  y={574.286}
                  transform="rotate(180 588.665 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={588.665}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"33"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(34)}
>
                <Path
                  fill={getColor(34)}

                  className="prefix__parking-space"
                  d="M637.035 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={604.001}
                  y={574.286}
                  transform="rotate(180 620.518 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={620.518}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"34"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(35)}
>
                <Path
                  fill={getColor(35)}

                  className="prefix__parking-space"
                  d="M668.887 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={635.854}
                  y={574.286}
                  transform="rotate(180 652.37 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={652.371}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"35"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(36)}
>
                <Path
                  fill={getColor(36)}

                  className="prefix__parking-space"
                  d="M700.74 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={667.707}
                  y={574.286}
                  transform="rotate(180 684.224 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={684.224}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"36"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(37)}
>
                <Path
                  fill={getColor(37)}

                  className="prefix__parking-space"
                  d="M732.593 632.8H699.56v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={699.56}
                  y={574.286}
                  transform="rotate(180 716.077 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={716.077}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"37"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(38)}
>
                <Path
                  fill={getColor(38)}

                  className="prefix__parking-space"
                  d="M764.446 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={731.413}
                  y={574.286}
                  transform="rotate(180 747.93 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={747.93}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"38"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(39)}
>
                <Path
                  fill={getColor(39)}

                  className="prefix__parking-space"
                  d="M796.299 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={763.266}
                  y={574.286}
                  transform="rotate(180 779.783 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={779.783}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"39"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(40)}
>
                <Path
                  fill={getColor(40)}

                  className="prefix__parking-space"
                  d="M828.152 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={795.119}
                  y={574.286}
                  transform="rotate(180 811.635 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={811.635}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"40"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(41)}
>
                <Path
                  fill={getColor(41)}

                  className="prefix__parking-space"
                  d="M860.005 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={826.972}
                  y={574.286}
                  transform="rotate(180 843.488 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={843.488}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"41"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(42)}
>
                <Path
                  fill={getColor(42)}

                  className="prefix__parking-space"
                  d="M891.858 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={858.825}
                  y={574.286}
                  transform="rotate(180 875.341 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={875.341}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"42"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(43)}
>
                <Path
                  fill={getColor(43)}

                  className="prefix__parking-space"
                  d="M923.71 632.8h-33.032v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={890.678}
                  y={574.286}
                  transform="rotate(180 907.194 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={907.194}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"43"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(44)}
>
                <Path
                  fill={getColor(44)}

                  className="prefix__parking-space"
                  d="M955.564 632.8H922.53v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={922.531}
                  y={574.286}
                  transform="rotate(180 939.047 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={939.047}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"44"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(45)}
>
                <Path
                  fill={getColor(45)}

                  className="prefix__parking-space"
                  d="M987.416 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={954.384}
                  y={574.286}
                  transform="rotate(180 970.9 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={970.9}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"45"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(46)}
>
                <Path
                  fill={getColor(46)}

                  className="prefix__parking-space"
                  d="M1019.27 632.8h-33.034v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={986.237}
                  y={574.286}
                  transform="rotate(180 1002.753 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1002.753}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"46"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(47)}
>
                <Path
                  fill={getColor(47)}

                  className="prefix__parking-space"
                  d="M1051.122 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1018.09}
                  y={574.286}
                  transform="rotate(180 1034.606 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1034.606}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"47"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(48)}
>
                <Path
                  fill={getColor(48)}

                  className="prefix__parking-space"
                  d="M1082.975 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1049.943}
                  y={574.286}
                  transform="rotate(180 1066.459 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1066.459}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"48"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(49)}
>
                <Path
                  fill={getColor(49)}

                  className="prefix__parking-space"
                  d="M1114.828 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1081.796}
                  y={574.286}
                  transform="rotate(180 1098.312 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1098.312}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"49"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(50)}
>
                <Path
                  fill={getColor(50)}

                  className="prefix__parking-space"
                  d="M1146.68 632.8h-33.032v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1113.649}
                  y={574.286}
                  transform="rotate(180 1130.165 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1130.165}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"50"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(51)}
>
                <Path
                  fill={getColor(51)}

                  className="prefix__parking-space"
                  d="M1178.534 632.8H1145.5v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1145.502}
                  y={574.286}
                  transform="rotate(180 1162.018 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1162.018}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"51"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(52)}
>
                <Path
                  fill={getColor(52)}

                  className="prefix__parking-space"
                  d="M1210.388 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1177.354}
                  y={574.286}
                  transform="rotate(180 1193.87 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1193.871}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"52"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(53)}
>
                <Path
                  fill={getColor(53)}

                  className="prefix__parking-space"
                  d="M1242.24 632.8h-33.032v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1209.207}
                  y={574.286}
                  transform="rotate(180 1225.724 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1225.724}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"53"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(54)}
>
                <Path
                  fill={getColor(54)}

                  className="prefix__parking-space"
                  d="M1274.093 632.8h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1241.06}
                  y={574.286}
                  transform="rotate(180 1257.577 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1257.577}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"54"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(55)}
>
                <Path
                  fill={getColor(55)}

                  className="prefix__parking-space"
                  d="M605.237 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={605.237}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={621.753}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"55"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(56)}
>
                <Path
                  fill={getColor(56)}

                  className="prefix__parking-space"
                  d="M637.09 444.568h33.033v58.515H637.09z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={637.09}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={653.606}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"56"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(57)}
>
                <Path
                  fill={getColor(57)}

                  className="prefix__parking-space"
                  d="M668.943 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={668.943}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={685.459}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"57"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(58)}
>
                <Path
                  fill={getColor(58)}

                  className="prefix__parking-space"
                  d="M700.796 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={700.796}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={717.312}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"58"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(59)}
>
                <Path
                  fill={getColor(59)}

                  className="prefix__parking-space"
                  d="M732.649 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={732.649}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={749.165}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"59"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(60)}
>
                <Path
                  fill={getColor(60)}

                  className="prefix__parking-space"
                  d="M764.502 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={764.502}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={781.018}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"60"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(61)}
>
                <Path
                  fill={getColor(61)}

                  className="prefix__parking-space"
                  d="M796.354 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={796.354}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={812.871}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"61"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(62)}
>
                <Path
                  fill={getColor(62)}

                  className="prefix__parking-space"
                  d="M828.207 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={828.207}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={844.724}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"62"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(63)}
>
                <Path
                  fill={getColor(63)}

                  className="prefix__parking-space"
                  d="M860.06 444.568h33.033v58.515H860.06z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={860.06}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={876.577}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"63"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(64)}
>
                <Path
                  fill={getColor(64)}

                  className="prefix__parking-space"
                  d="M891.913 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={891.913}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={908.43}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"64"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(65)}
>
                <Path
                  fill={getColor(65)}

                  className="prefix__parking-space"
                  d="M923.766 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={923.766}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={940.283}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"65"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(66)}
>
                <Path
                  fill={getColor(66)}

                  className="prefix__parking-space"
                  d="M955.619 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={955.619}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={972.136}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"66"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(67)}
>
                <Path
                  fill={getColor(67)}

                  className="prefix__parking-space"
                  d="M987.472 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={987.472}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1003.988}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"67"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(68)}
>
                <Path
                  fill={getColor(68)}

                  className="prefix__parking-space"
                  d="M1019.325 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1019.325}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1035.841}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"68"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(69)}
>
                <Path
                  fill={getColor(69)}

                  className="prefix__parking-space"
                  d="M1051.178 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1051.178}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1067.694}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"69"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(70)}
>
                <Path
                  fill={getColor(70)}

                  className="prefix__parking-space"
                  d="M1083.031 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1083.031}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1099.547}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"70"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(71)}
>
                <Path
                  fill={getColor(71)}

                  className="prefix__parking-space"
                  d="M1114.884 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1114.884}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1131.4}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"71"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(72)}
>
                <Path
                  fill={getColor(72)}

                  className="prefix__parking-space"
                  d="M1146.737 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1146.737}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1163.253}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"72"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(73)}
>
                <Path
                  fill={getColor(73)}

                  className="prefix__parking-space"
                  d="M1178.59 444.568h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1178.59}
                  y={444.568}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1195.106}
                  y={473.826}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"73"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(74)}
>
                <Path
                  fill={getColor(74)}

                  className="prefix__parking-space"
                  d="M637.18 398.543h-33.032v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={604.148}
                  y={340.028}
                  transform="rotate(180 620.664 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={620.664}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"74"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(75)}
>
                <Path
                  fill={getColor(75)}

                  className="prefix__parking-space"
                  d="M669.034 398.543H636v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={636.001}
                  y={340.028}
                  transform="rotate(180 652.517 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={652.517}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"75"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(76)}
>
                <Path
                  fill={getColor(76)}

                  className="prefix__parking-space"
                  d="M700.886 398.543h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={667.854}
                  y={340.028}
                  transform="rotate(180 684.37 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={684.37}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"76"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(77)}
>
                <Path
                  fill={getColor(77)}

                  className="prefix__parking-space"
                  d="M732.74 398.543h-33.034v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={699.707}
                  y={340.028}
                  transform="rotate(180 716.223 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={716.223}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"77"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(78)}
>
                <Path
                  fill={getColor(78)}

                  className="prefix__parking-space"
                  d="M764.592 398.543H731.56v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={731.56}
                  y={340.028}
                  transform="rotate(180 748.076 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={748.076}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"78"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(79)}
>
                <Path
                  fill={getColor(79)}

                  className="prefix__parking-space"
                  d="M796.445 398.543h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={763.413}
                  y={340.028}
                  transform="rotate(180 779.929 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={779.929}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"79"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(80)}
>
                <Path
                  fill={getColor(80)}

                  className="prefix__parking-space"
                  d="M828.298 398.543h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={795.266}
                  y={340.028}
                  transform="rotate(180 811.782 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={811.782}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"80"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(81)}
>
                <Path
                  fill={getColor(81)}

                  className="prefix__parking-space"
                  d="M860.15 398.543h-33.032v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={827.119}
                  y={340.028}
                  transform="rotate(180 843.635 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={843.635}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"81"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(82)}
>
                <Path
                  fill={getColor(82)}

                  className="prefix__parking-space"
                  d="M892.004 398.543H858.97v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={858.972}
                  y={340.028}
                  transform="rotate(180 875.488 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={875.488}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"82"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(83)}
>
                <Path
                  fill={getColor(83)}

                  className="prefix__parking-space"
                  d="M923.858 398.543h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={890.824}
                  y={340.028}
                  transform="rotate(180 907.34 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={907.341}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"83"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(84)}
>
                <Path
                  fill={getColor(84)}

                  className="prefix__parking-space"
                  d="M955.71 398.543h-33.032v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={922.677}
                  y={340.028}
                  transform="rotate(180 939.194 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={939.194}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"84"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(85)}
>
                <Path
                  fill={getColor(85)}

                  className="prefix__parking-space"
                  d="M987.563 398.543H954.53v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={954.53}
                  y={340.028}
                  transform="rotate(180 971.047 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={971.047}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"85"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(86)}
>
                <Path
                  fill={getColor(86)}

                  className="prefix__parking-space"
                  d="M1019.416 398.543h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={986.383}
                  y={340.028}
                  transform="rotate(180 1002.9 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1002.9}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"86"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(87)}
>
                <Path
                  fill={getColor(87)}

                  className="prefix__parking-space"
                  d="M1051.27 398.543h-33.034v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1018.236}
                  y={340.028}
                  transform="rotate(180 1034.753 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1034.753}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"87"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(88)}
>
                <Path
                  fill={getColor(88)}

                  className="prefix__parking-space"
                  d="M1083.122 398.543h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1050.089}
                  y={340.028}
                  transform="rotate(180 1066.606 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1066.606}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"88"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(89)}
>
                <Path
                  fill={getColor(89)}

                  className="prefix__parking-space"
                  d="M1114.975 398.543h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1081.942}
                  y={340.028}
                  transform="rotate(180 1098.459 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1098.459}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"89"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(90)}
>
                <Path
                  fill={getColor(90)}

                  className="prefix__parking-space"
                  d="M1146.828 398.543h-33.033v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1113.795}
                  y={340.028}
                  transform="rotate(180 1130.311 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1130.311}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"90"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(91)}
>
                <Path
                  fill={getColor(91)}

                  className="prefix__parking-space"
                  d="M1178.68 398.543h-33.032v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1145.648}
                  y={340.028}
                  transform="rotate(180 1162.164 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1162.164}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"91"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(92)}
>
                <Path
                  fill={getColor(92)}

                  className="prefix__parking-space"
                  d="M1210.534 398.543H1177.5v-58.515h33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1177.501}
                  y={340.028}
                  transform="rotate(180 1194.017 369.285)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1194.017}
                  y={369.285}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"92"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(93)}
>
                <Path
                  fill={getColor(93)}

                  className="prefix__parking-space"
                  d="M541.404 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={541.404}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={557.921}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"93"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(94)}
>
                <Path
                  fill={getColor(94)}

                  className="prefix__parking-space"
                  d="M573.257 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={573.257}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={589.774}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"94"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(95)}
>
                <Path
                  fill={getColor(95)}

                  className="prefix__parking-space"
                  d="M605.11 210.845h33.033v58.515H605.11z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={605.11}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={621.627}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"95"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(96)}
>
                <Path
                  fill={getColor(96)}

                  className="prefix__parking-space"
                  d="M636.963 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={636.963}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={653.479}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"96"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(97)}
>
                <Path
                  fill={getColor(97)}

                  className="prefix__parking-space"
                  d="M668.816 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={668.816}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={685.332}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"97"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(98)}
>
                <Path
                  fill={getColor(98)}

                  className="prefix__parking-space"
                  d="M700.669 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={700.669}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={717.185}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"98"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(99)}
>
                <Path
                  fill={getColor(99)}

                  className="prefix__parking-space"
                  d="M732.522 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={732.522}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={749.038}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"99"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(100)}
>
                <Path
                  fill={getColor(100)}

                  className="prefix__parking-space"
                  d="M764.375 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={764.375}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={780.891}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"100"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(101)}
>
                <Path
                  fill={getColor(101)}

                  className="prefix__parking-space"
                  d="M796.228 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={796.228}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={812.744}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"101"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(102)}
>
                <Path
                  fill={getColor(102)}

                  className="prefix__parking-space"
                  d="M828.081 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={828.081}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={844.597}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"102"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(103)}
>
                <Path
                  fill={getColor(103)}

                  className="prefix__parking-space"
                  d="M859.934 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={859.934}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={876.45}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"103"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(104)}
>
                <Path
                  fill={getColor(104)}

                  className="prefix__parking-space"
                  d="M891.787 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={891.787}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={908.303}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"104"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(105)}
>
                <Path
                  fill={getColor(105)}

                  className="prefix__parking-space"
                  d="M923.64 210.845h33.033v58.515H923.64z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={923.64}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={940.156}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"105"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(106)}
>
                <Path
                  fill={getColor(106)}

                  className="prefix__parking-space"
                  d="M955.493 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={955.493}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={972.009}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"106"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(107)}
>
                <Path
                  fill={getColor(107)}

                  className="prefix__parking-space"
                  d="M987.346 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={987.346}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1003.862}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"107"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(108)}
>
                <Path
                  fill={getColor(108)}

                  className="prefix__parking-space"
                  d="M1019.198 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1019.198}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1035.715}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"108"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(109)}
>
                <Path
                  fill={getColor(109)}

                  className="prefix__parking-space"
                  d="M1051.051 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1051.051}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1067.568}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"109"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(110)}
>
                <Path
                  fill={getColor(110)}

                  className="prefix__parking-space"
                  d="M1082.904 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1082.904}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1099.421}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"110"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(111)}
>
                <Path
                  fill={getColor(111)}

                  className="prefix__parking-space"
                  d="M1114.757 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1114.757}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1131.274}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"111"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(112)}
>
                <Path
                  fill={getColor(112)}

                  className="prefix__parking-space"
                  d="M1146.61 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1146.61}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1163.127}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"112"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(113)}
>
                <Path
                  fill={getColor(113)}

                  className="prefix__parking-space"
                  d="M1178.463 210.845h33.033v58.515h-33.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={33.033}
                  height={58.515}
                  x={1178.463}
                  y={210.845}
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1194.98}
                  y={240.103}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"113"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(114)}
>
                <Path
                  fill={getColor(114)}

                  className="prefix__parking-space"
                  d="M1359.126 632.8h-45.033v-58.515h45.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={45.033}
                  height={58.515}
                  x={1314.093}
                  y={574.286}
                  transform="rotate(180 1336.61 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1336.609}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"114"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(115)}
>
                <Path
                  fill={getColor(115)}

                  className="prefix__parking-space"
                  d="M1403.158 632.8h-45.033v-58.515h45.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={45.033}
                  height={58.515}
                  x={1358.126}
                  y={574.286}
                  transform="rotate(180 1380.642 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1380.642}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"115"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(116)}
>
                <Path
                  fill={getColor(116)}

                  className="prefix__parking-space"
                  d="M1447.192 632.8h-45.033v-58.515h45.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={45.033}
                  height={58.515}
                  x={1402.158}
                  y={574.286}
                  transform="rotate(180 1424.675 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1424.675}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"116"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(117)}
>
                <Path
                  fill={getColor(117)}

                  className="prefix__parking-space"
                  d="M1491.224 632.8h-45.033v-58.515h45.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={45.033}
                  height={58.515}
                  x={1446.191}
                  y={574.286}
                  transform="rotate(180 1468.707 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1468.707}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"117"}
                </Text>
              </G>
              <G className="prefix__parking-space-container" onPress={() => onParkingSpacePress(118)}
>
                <Path
                  fill={getColor(118)}

                  className="prefix__parking-space"
                  d="M1535.256 632.8h-45.033v-58.515h45.033z"
                />
                <Image
                  preserveAspectRatio="none"
                 href={require("./parking-space.png")}
                  className="prefix__parking-space-image"
                  width={45.033}
                  height={58.515}
                  x={1490.224}
                  y={574.286}
                  transform="rotate(180 1512.74 603.543)"
                />
                <Text
                  dominantBaseline="central"
                  textAnchor="middle"
                  x={1512.74}
                  y={603.543}
                  fontFamily="Verdana"
                  fontSize={14}
                >
                  {"118"}
                </Text>
              </G>
              {renderGpsBobbel(location)}
            </G>
          </G>
        </Svg>
      )
    }
    

export default BrennerSvg;



