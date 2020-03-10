import React from "react";
import { Image, Pattern, Defs, G, Text, Svg, Path, Circle } from 'react-native-svg';
import {getCartesianCoordiantesFromGeoCoordinates} from '../lib/GeoCoordinatesToCartesian';

const orientation = {
  latitudeOrigin: 49.88609917383489,
  latitudeEnd: 49.88463105776215,
  longitudeOrigin: 10.903342924138588,
  longitudeEnd: 10.902770927860796,
  azimuth: 282.1875,
  widthInPx: 1000,
  heightInPx: 473,
  fudgeFactorX: 2.345,
  fudgeFactorY: 2.233,
}

function renderGpsBobbel(location){
  if(!location){
    return null;
  }

  let point = getCartesianCoordiantesFromGeoCoordinates(orientation, location);

  return <Circle cx={point.x} cy={point.y} r="18" stroke="white" strokeWidth="7" fill={"blue"} />
}

function Heinrichsdamm(props) {
    const {onParkingSpacePress, getColor, location} = props;

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="1000"
      height="473"
      viewBox="-35 -109.219 2641.801 1249.144"
    >
      <Defs>
        <Pattern
          id="a"
          width="256"
          height="256"
          x="0"
          y="0"
          patternUnits="userSpaceOnUse"
        >
          <Image width="256" height="256" x="0" y="0" href={require("./wall.png")}></Image>
        </Pattern>
      </Defs>
      <G className="parking-lot">
        <G className="parking-level">
          <Path
            fill="url(#a)"
            d="M1746.924 205.857H2601.801V956.0219999999999H1746.924z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1423.843 344.524H1755.5010000000002V352.642H1423.843z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1418.12 273.2H1749.7779999999998V281.318H1418.12z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1579.127 408.844H1749.739V415.807H1579.127z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1576.926 876.987H1747.538V883.9499999999999H1576.926z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1576.926 933.285H1747.538V940.2479999999999H1576.926z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1915.186 934.571H2099.362V1025.415H1915.186z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1925.141 1017.948H2094.384V1085.148H1925.141z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1931.364 1080.17H2032.163V1134.9250000000002H1931.364z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1779.542 1018.17H1887.808V1070.17H1779.542z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1454.745 980.593H1918.4029999999998V988.711H1454.745z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1446.278 1013.948H1917.136V1018.948H1446.278z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1452.214 949.054H1750.0259999999998V954.054H1452.214z"
            className="wall"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1430.203 954.132H1454.719V959.132H1430.203z"
            className="wall"
            transform="rotate(331.875 1442.46 956.632)"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1414.929 969.827H1439.4450000000002V974.827H1414.929z"
            className="wall"
            transform="rotate(297.188 1427.187 972.327)"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1412.736 990.811H1437.2520000000002V995.811H1412.736z"
            className="wall"
            transform="rotate(254.063 1424.993 993.311)"
          ></Path>
          <Path
            fill="url(#a)"
            d="M1425.461 1007.958H1449.977V1012.958H1425.461z"
            className="wall"
            transform="rotate(214.688 1437.72 1010.458)"
          ></Path>
          <Path
            fill="url(#a)"
            d="M470.282 416.87H527.602V522.39H470.282z"
            className="wall"
          ></Path>
          <Image
            width="223"
            height="235"
            x="-30"
            y="118"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="179.8"
            height="170.2"
            x="137"
            y="68"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="115"
            height="115"
            x="400"
            y="90"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="172.6"
            height="167.8"
            x="503"
            y="42"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 589.3 125.9)"
          ></Image>
          <Image
            width="110.2"
            height="103"
            x="655"
            y="110"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="127"
            height="127"
            x="768"
            y="118"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="160.6"
            height="160.6"
            x="912"
            y="96"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(.938 992.3 176.3)"
          ></Image>
          <Image
            width="67"
            height="74.2"
            x="1088"
            y="161"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(.938 1121.5 198.1)"
          ></Image>
          <Image
            width="79"
            height="88.6"
            x="1148"
            y="151"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(3.75 1187.5 195.3)"
          ></Image>
          <Image
            width="93.4"
            height="93.4"
            x="1209"
            y="139"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(4.688 1255.7 185.7)"
          ></Image>
          <Image
            width="79"
            height="71.8"
            x="1432"
            y="163"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(4.688 1471.5 198.9)"
          ></Image>
          <Image
            width="115"
            height="112.6"
            x="1303"
            y="140"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(5.625 1360.5 196.3)"
          ></Image>
          <Image
            width="69.4"
            height="67"
            x="1579"
            y="166"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(4.688 1613.7 199.5)"
          ></Image>
          <Image
            width="50.2"
            height="52.6"
            x="1710"
            y="117"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(4.688 1735.1 143.3)"
          ></Image>
          <Image
            width="69.4"
            height="69.4"
            x="1119.126"
            y="-33.999"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(6.563 1153.826 .701)"
          ></Image>
          <Image
            width="131.8"
            height="107.8"
            x="961"
            y="-37"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(9.375 1026.9 16.9)"
          ></Image>
          <Image
            width="93.4"
            height="86.2"
            x="865"
            y="-28"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(9.375 911.7 15.1)"
          ></Image>
          <Image
            width="146.2"
            height="122.2"
            x="725"
            y="-34"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(9.375 798.1 27.1)"
          ></Image>
          <Image
            width="110.2"
            height="100.6"
            x="615"
            y="-30"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(9.375 670.1 20.3)"
          ></Image>
          <Image
            width="146.2"
            height="134.2"
            x="465.066"
            y="-73.999"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(12.188 538.166 -6.9)"
          ></Image>
          <Image
            width="191.8"
            height="179.8"
            x="275"
            y="-86"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(12.188 370.9 3.9)"
          ></Image>
          <Image
            width="191.8"
            height="179.8"
            x="31"
            y="-83"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(12.188 126.9 6.9)"
          ></Image>
          <Image
            width="115"
            height="115"
            x="-23"
            y="700"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="71.8"
            height="71.8"
            x="36"
            y="593"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="71.8"
            height="71.8"
            x="415"
            y="695"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="91"
            height="86.2"
            x="617"
            y="750"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 662.5 793.1)"
          ></Image>
          <Image
            width="67"
            height="64.6"
            x="521"
            y="726"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 554.5 758.3)"
          ></Image>
          <Image
            width="67"
            height="64.6"
            x="731"
            y="786"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 764.5 818.3)"
          ></Image>
          <Image
            width="47.8"
            height="52.6"
            x="835"
            y="822"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 858.9 848.3)"
          ></Image>
          <Image
            width="57.4"
            height="57.4"
            x="1010"
            y="874"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 1038.7 902.7)"
          ></Image>
          <Image
            width="35.8"
            height="38.2"
            x="1114"
            y="902"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 1131.9 921.1)"
          ></Image>
          <Image
            width="91"
            height="86.2"
            x="1328.626"
            y="939.261"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 1374.126 982.36)"
          ></Image>
          <Image
            width="35.8"
            height="33.4"
            x="1100"
            y="732"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 1117.9 748.7)"
          ></Image>
          <Image
            width="43"
            height="40.6"
            x="1095"
            y="634"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 1116.5 654.3)"
          ></Image>
          <Image
            width="45.4"
            height="43"
            x="1094"
            y="504"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 1116.7 525.5)"
          ></Image>
          <Image
            width="43"
            height="45.4"
            x="810"
            y="457"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(2.813 831.5 479.7)"
          ></Image>
          <Image
            width="28.6"
            height="28.6"
            x="542"
            y="538"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(.938 556.3 552.3)"
          ></Image>
          <Image
            width="28.6"
            height="28.6"
            x="805"
            y="347"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(.938 819.3 361.3)"
          ></Image>
          <Image
            width="45.4"
            height="47.8"
            x="1365"
            y="460"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(5.625 1387.7 483.9)"
          ></Image>
          <Image
            width="52.6"
            height="47.8"
            x="1362"
            y="813"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(5.625 1388.3 836.9)"
          ></Image>
          <Image
            width="86.2"
            height="83.8"
            x="1647"
            y="448"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(5.625 1690.1 489.9)"
          ></Image>
          <Image
            width="69.4"
            height="62.2"
            x="1663"
            y="542"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(5.625 1697.7 573.1)"
          ></Image>
          <Image
            width="88.6"
            height="81.4"
            x="1663"
            y="624"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(6.563 1707.3 664.7)"
          ></Image>
          <Image
            width="103"
            height="88.6"
            x="1646"
            y="721"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(6.563 1697.5 765.3)"
          ></Image>
          <Image
            width="76.6"
            height="76.6"
            x="1656.752"
            y="807.529"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(6.563 1695.052 845.829)"
          ></Image>
          <Image
            width="170.2"
            height="160.6"
            x="1981.634"
            y="56.328"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
            transform="rotate(.938 2066.734 136.628)"
          ></Image>
          <Image
            width="106.823"
            height="108.126"
            x="2156.002"
            y="72.952"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="177.17"
            height="168.051"
            x="2278.457"
            y="28.66"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="96.742"
            height="65.136"
            x="1901.971"
            y="-32.568"
            className="hedge"
            href={require("./hedge.png")}
            preserveAspectRatio="none"
          ></Image>
          <Image
            width="23.244"
            height="36.887"
            x="1690.628"
            y="292.809"
            className="entry-arrow"
            href={require("./entry-arrow.png")}
            preserveAspectRatio="none"
            transform="rotate(90 1702.25 311.253)"
          ></Image>
          <Image
            width="23.244"
            height="36.887"
            x="1690.628"
            y="364.053"
            className="entry-arrow"
            href={require("./entry-arrow.png")}
            preserveAspectRatio="none"
            transform="rotate(90 1702.25 382.496)"
          ></Image>
          <Image
            width="23.244"
            height="36.887"
            x="1694.325"
            y="890.969"
            className="entry-arrow"
            href={require("./entry-arrow.png")}
            preserveAspectRatio="none"
            transform="rotate(90 1705.947 909.412)"
          ></Image>
          <Image
            width="35.2"
            height="40"
            x="270.773"
            y="673.202"
            className="entry-arrow"
            href={require("./entry-arrow.png")}
            preserveAspectRatio="none"
            transform="rotate(10.313 288.373 693.202)"
          ></Image>
          <Image
            width="35.2"
            height="40"
            x="217.192"
            y="665.446"
            className="entry-arrow"
            href={require("./entry-arrow.png")}
            preserveAspectRatio="none"
            transform="rotate(190.313 234.792 685.446)"
          ></Image>
          <Image
            width="37.295"
            height="80.082"
            x="1310.931"
            y="430.079"
            className="parking-space-na"
            href={require("./parking-space-na.png")}
            preserveAspectRatio="none"
            transform="rotate(90 1329.578 470.12)"
          ></Image>
          <Image
            width="37.295"
            height="80.082"
            x="1310.931"
            y="393.783"
            className="parking-space-na"
            href={require("./parking-space-na.png")}
            preserveAspectRatio="none"
            transform="rotate(90 1329.578 433.824)"
          ></Image>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(21)}>
            <Path
              fill={getColor(21)}
              d="M867.993 613.926H905.288V694.008H867.993z"
              className="parking-space"
              transform="rotate(270 886.64 653.967)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="867.993"
              y="613.926"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 886.64 653.967)"
            ></Image>
            <Text
              x="886.64"
              y="653.967"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              21
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(20)}>
            <Path
              fill={getColor(20)}
              d="M867.993 577.63H905.288V657.712H867.993z"
              className="parking-space"
              transform="rotate(270 886.64 617.672)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="867.993"
              y="577.63"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 886.64 617.672)"
            ></Image>
            <Text
              x="886.64"
              y="617.672"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              20
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(19)}>
            <Path
              fill={getColor(19)}
              d="M867.993 541.335H905.288V621.417H867.993z"
              className="parking-space"
              transform="rotate(270 886.64 581.376)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="867.993"
              y="541.335"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 886.64 581.376)"
            ></Image>
            <Text
              x="886.64"
              y="581.376"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              19
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(18)}>
            <Path
              fill={getColor(18)}
              d="M867.993 505.04H905.288V585.1220000000001H867.993z"
              className="parking-space"
              transform="rotate(270 886.64 545.081)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="867.993"
              y="505.04"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 886.64 545.081)"
            ></Image>
            <Text
              x="886.64"
              y="545.081"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              18
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(17)}>
            <Path
              fill={getColor(17)}
              d="M867.993 468.745H905.288V548.827H867.993z"
              className="parking-space"
              transform="rotate(270 886.64 508.786)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="867.993"
              y="468.745"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 886.64 508.786)"
            ></Image>
            <Text
              x="886.64"
              y="508.786"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              17
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(16)}>
            <Path
              fill={getColor(16)}
              d="M867.993 432.45H905.288V512.5319999999999H867.993z"
              className="parking-space"
              transform="rotate(270 886.64 472.49)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="867.993"
              y="432.45"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 886.64 472.49)"
            ></Image>
            <Text
              x="886.64"
              y="472.491"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              16
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(15)}>
            <Path
              fill={getColor(15)}
              d="M867.993 396.154H905.288V476.236H867.993z"
              className="parking-space"
              transform="rotate(270 886.64 436.196)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="867.993"
              y="396.154"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 886.64 436.196)"
            ></Image>
            <Text
              x="886.64"
              y="436.196"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              15
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(14)}>
            <Path
              fill={getColor(14)}
              d="M867.993 359.859H905.288V439.941H867.993z"
              className="parking-space"
              transform="rotate(270 886.64 399.9)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="867.993"
              y="359.859"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 886.64 399.9)"
            ></Image>
            <Text
              x="886.64"
              y="399.9"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              14
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(13)}>
            <Path
              fill={getColor(13)}
              d="M759.486 355.607H796.781V435.689H759.486z"
              className="parking-space"
              transform="rotate(90 778.133 395.648)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="759.486"
              y="355.607"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 778.133 395.648)"
            ></Image>
            <Text
              x="778.133"
              y="395.648"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              13
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(12)}>
            <Path
              fill={getColor(12)}
              d="M759.486 391.902H796.781V471.984H759.486z"
              className="parking-space"
              transform="rotate(90 778.133 431.943)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="759.486"
              y="391.902"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 778.133 431.943)"
            ></Image>
            <Text
              x="778.133"
              y="431.943"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              12
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(11)}>
            <Path
              fill={getColor(11)}
              d="M759.486 428.197H796.781V508.279H759.486z"
              className="parking-space"
              transform="rotate(90 778.133 468.238)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="759.486"
              y="428.197"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 778.133 468.238)"
            ></Image>
            <Text
              x="778.133"
              y="468.238"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              11
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(10)}>
            <Path
              fill={getColor(10)}
              d="M759.486 464.492H796.781V544.5740000000001H759.486z"
              className="parking-space"
              transform="rotate(90 778.133 504.533)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="759.486"
              y="464.492"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 778.133 504.533)"
            ></Image>
            <Text
              x="778.133"
              y="504.533"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              10
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(9)}>
            <Path
              fill={getColor(9)}
              d="M759.486 500.787H796.781V580.8689999999999H759.486z"
              className="parking-space"
              transform="rotate(90 778.133 540.828)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="759.486"
              y="500.787"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 778.133 540.828)"
            ></Image>
            <Text
              x="778.133"
              y="540.828"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              9
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(8)}>
            <Path
              fill={getColor(8)}
              d="M759.486 537.083H796.781V617.165H759.486z"
              className="parking-space"
              transform="rotate(90 778.133 577.124)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="759.486"
              y="537.083"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 778.133 577.124)"
            ></Image>
            <Text
              x="778.133"
              y="577.124"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              8
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(7)}>
            <Path
              fill={getColor(7)}
              d="M759.486 573.378H796.781V653.46H759.486z"
              className="parking-space"
              transform="rotate(90 778.133 613.419)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="759.486"
              y="573.378"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 778.133 613.419)"
            ></Image>
            <Text
              x="778.133"
              y="613.419"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              7
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(6)}>
            <Path
              fill={getColor(6)}
              d="M594.343 514.969H631.6379999999999V595.051H594.343z"
              className="parking-space"
              transform="rotate(270 612.99 555.01)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="594.343"
              y="514.969"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 612.99 555.01)"
            ></Image>
            <Text
              x="612.991"
              y="555.01"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              6
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(5)}>
            <Path
              fill={getColor(5)}
              d="M594.343 478.674H631.6379999999999V558.756H594.343z"
              className="parking-space"
              transform="rotate(270 612.99 518.715)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="594.343"
              y="478.674"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 612.99 518.715)"
            ></Image>
            <Text
              x="612.991"
              y="518.715"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              5
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(4)}>
            <Path
              fill={getColor(4)}
              d="M594.343 442.379H631.6379999999999V522.461H594.343z"
              className="parking-space"
              transform="rotate(270 612.99 482.42)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="594.343"
              y="442.379"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 612.99 482.42)"
            ></Image>
            <Text
              x="612.991"
              y="482.42"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              4
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(3)}>
            <Path
              fill={getColor(3)}
              d="M594.343 406.083H631.6379999999999V486.165H594.343z"
              className="parking-space"
              transform="rotate(270 612.99 446.124)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="594.343"
              y="406.083"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 612.99 446.124)"
            ></Image>
            <Text
              x="612.991"
              y="446.124"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              3
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(2)}>
            <Path
              fill={getColor(2)}
              d="M594.343 369.788H631.6379999999999V449.87H594.343z"
              className="parking-space"
              transform="rotate(270 612.99 409.83)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="594.343"
              y="369.788"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 612.99 409.83)"
            ></Image>
            <Text
              x="612.991"
              y="409.829"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              2
            </Text>
          </G>
        
          <G className="parking-space-container" onPress={() => onParkingSpacePress(1)}>
            <Path
              fill={getColor(1)}
              d="M594.343 333.493H631.6379999999999V413.575H594.343z"
              className="parking-space"
              transform="rotate(270 612.99 373.534)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="594.343"
              y="333.493"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 612.99 373.534)"
            ></Image>
            <Text
              x="612.991"
              y="373.534"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              1
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(31)}>
            <Path
              fill={getColor(31)}
              d="M1040.571 364.67H1077.866V444.752H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 404.71)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="364.67"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 404.71)"
            ></Image>
            <Text
              x="1059.218"
              y="404.711"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              31
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(30)}>
            <Path
              fill={getColor(30)}
              d="M1040.571 400.965H1077.866V481.04699999999997H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 441.006)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="400.965"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 441.006)"
            ></Image>
            <Text
              x="1059.218"
              y="441.006"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              30
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(29)}>
            <Path
              fill={getColor(29)}
              d="M1040.571 437.26H1077.866V517.342H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 477.301)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="437.26"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 477.301)"
            ></Image>
            <Text
              x="1059.218"
              y="477.301"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              29
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(28)}>
            <Path
              fill={getColor(28)}
              d="M1040.571 473.555H1077.866V553.637H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 513.596)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="473.555"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 513.596)"
            ></Image>
            <Text
              x="1059.218"
              y="513.596"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              28
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(27)}>
            <Path
              fill={getColor(27)}
              d="M1040.571 509.851H1077.866V589.933H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 549.892)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="509.851"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 549.892)"
            ></Image>
            <Text
              x="1059.218"
              y="549.892"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              27
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(26)}>
            <Path
              fill={getColor(26)}
              d="M1040.571 546.146H1077.866V626.228H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 586.187)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="546.146"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 586.187)"
            ></Image>
            <Text
              x="1059.218"
              y="586.187"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              26
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(25)}>
            <Path
              fill={getColor(25)}
              d="M1040.571 582.441H1077.866V662.523H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 622.482)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="582.441"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 622.482)"
            ></Image>
            <Text
              x="1059.218"
              y="622.482"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              25
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(24)}>
            <Path
              fill={getColor(24)}
              d="M1040.571 618.736H1077.866V698.818H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 658.777)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="618.736"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 658.777)"
            ></Image>
            <Text
              x="1059.218"
              y="658.777"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              24
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(23)}>
            <Path
              fill={getColor(23)}
              d="M1040.571 655.031H1077.866V735.1129999999999H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 695.072)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="655.031"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 695.072)"
            ></Image>
            <Text
              x="1059.218"
              y="695.072"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              23
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(22)}>
            <Path
              fill={getColor(22)}
              d="M1040.571 691.327H1077.866V771.409H1040.571z"
              className="parking-space"
              transform="rotate(90 1059.218 731.368)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1040.571"
              y="691.327"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1059.218 731.368)"
            ></Image>
            <Text
              x="1059.218"
              y="731.368"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              22
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(46)}>
            <Path
              fill={getColor(46)}
              d="M1310.931 466.374H1348.226V546.456H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 506.415)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="466.374"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 506.415)"
            ></Image>
            <Text
              x="1329.578"
              y="506.415"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              46
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(45)}>
            <Path
              fill={getColor(45)}
              d="M1310.931 502.669H1348.226V582.751H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 542.71)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="502.669"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 542.71)"
            ></Image>
            <Text
              x="1329.578"
              y="542.71"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              45
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(44)}>
            <Path
              fill={getColor(44)}
              d="M1310.931 538.964H1348.226V619.046H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 579.005)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="538.964"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 579.005)"
            ></Image>
            <Text
              x="1329.578"
              y="579.005"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              44
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(43)}>
            <Path
              fill={getColor(43)}
              d="M1310.931 575.259H1348.226V655.341H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 615.3)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="575.259"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 615.3)"
            ></Image>
            <Text
              x="1329.578"
              y="615.3"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              43
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(42)}>
            <Path
              fill={getColor(42)}
              d="M1310.931 611.555H1348.226V691.637H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 651.596)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="611.555"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 651.596)"
            ></Image>
            <Text
              x="1329.578"
              y="651.596"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              42
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(41)}>
            <Path
              fill={getColor(41)}
              d="M1310.931 647.85H1348.226V727.932H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 687.89)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="647.85"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 687.89)"
            ></Image>
            <Text
              x="1329.578"
              y="687.891"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              41
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(40)}>
            <Path
              fill={getColor(40)}
              d="M1310.931 684.145H1348.226V764.227H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 724.186)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="684.145"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 724.186)"
            ></Image>
            <Text
              x="1329.578"
              y="724.186"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              40
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(39)}>
            <Path
              fill={getColor(39)}
              d="M1310.931 720.44H1348.226V800.522H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 760.481)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="720.44"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 760.481)"
            ></Image>
            <Text
              x="1329.578"
              y="760.481"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              39
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(38)}>
            <Path
              fill={getColor(38)}
              d="M1310.931 756.735H1348.226V836.817H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 796.776)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="756.735"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 796.776)"
            ></Image>
            <Text
              x="1329.578"
              y="796.776"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              38
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(37)}>
            <Path
              fill={getColor(37)}
              d="M1310.931 793.031H1348.226V873.1129999999999H1310.931z"
              className="parking-space"
              transform="rotate(90 1329.578 833.072)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1310.931"
              y="793.031"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1329.578 833.072)"
            ></Image>
            <Text
              x="1329.578"
              y="833.072"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              37
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(58)}>
            <Path
              fill={getColor(58)}
              d="M1422.478 733.256H1459.7730000000001V813.338H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 773.298)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="733.256"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 773.298)"
            ></Image>
            <Text
              x="1441.126"
              y="773.298"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              58
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(57)}>
            <Path
              fill={getColor(57)}
              d="M1422.478 696.961H1459.7730000000001V777.043H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 737.002)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="696.961"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 737.002)"
            ></Image>
            <Text
              x="1441.126"
              y="737.002"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              57
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(56)}>
            <Path
              fill={getColor(56)}
              d="M1422.478 660.666H1459.7730000000001V740.748H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 700.707)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="660.666"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 700.707)"
            ></Image>
            <Text
              x="1441.126"
              y="700.707"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              56
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(55)}>
            <Path
              fill={getColor(55)}
              d="M1422.478 624.371H1459.7730000000001V704.453H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 664.412)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="624.371"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 664.412)"
            ></Image>
            <Text
              x="1441.126"
              y="664.412"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              55
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(54)}>
            <Path
              fill={getColor(54)}
              d="M1422.478 588.076H1459.7730000000001V668.158H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 628.117)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="588.076"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 628.117)"
            ></Image>
            <Text
              x="1441.126"
              y="628.117"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              54
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(53)}>
            <Path
              fill={getColor(53)}
              d="M1422.478 551.78H1459.7730000000001V631.862H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 591.822)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="551.78"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 591.822)"
            ></Image>
            <Text
              x="1441.126"
              y="591.822"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              53
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(52)}>
            <Path
              fill={getColor(52)}
              d="M1422.478 515.485H1459.7730000000001V595.567H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 555.526)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="515.485"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 555.526)"
            ></Image>
            <Text
              x="1441.126"
              y="555.526"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              52
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(51)}>
            <Path
              fill={getColor(51)}
              d="M1422.478 479.19H1459.7730000000001V559.2719999999999H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 519.231)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="479.19"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 519.231)"
            ></Image>
            <Text
              x="1441.126"
              y="519.231"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              51
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(50)}>
            <Path
              fill={getColor(50)}
              d="M1422.478 442.895H1459.7730000000001V522.977H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 482.936)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="442.895"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 482.936)"
            ></Image>
            <Text
              x="1441.126"
              y="482.936"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              50
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(49)}>
            <Path
              fill={getColor(49)}
              d="M1422.478 406.6H1459.7730000000001V486.682H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 446.64)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="406.6"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 446.64)"
            ></Image>
            <Text
              x="1441.126"
              y="446.641"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              49
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(59)}>
            <Path
              fill={getColor(59)}
              d="M1422.478 769.552H1459.7730000000001V849.634H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 809.593)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="769.552"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 809.593)"
            ></Image>
            <Text
              x="1441.126"
              y="809.593"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              59
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(60)}>
            <Path
              fill={getColor(60)}
              d="M1422.478 805.847H1459.7730000000001V885.929H1422.478z"
              className="parking-space"
              transform="rotate(270 1441.126 845.888)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1422.478"
              y="805.847"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1441.126 845.888)"
            ></Image>
            <Text
              x="1441.126"
              y="845.888"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              60
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(70)}>
            <Path
              fill={getColor(70)}
              d="M1591.713 474.887H1629.008V554.969H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 514.928)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="474.887"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 514.928)"
            ></Image>
            <Text
              x="1610.361"
              y="514.928"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              70
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(69)}>
            <Path
              fill={getColor(69)}
              d="M1591.713 511.183H1629.008V591.265H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 551.224)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="511.183"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 551.224)"
            ></Image>
            <Text
              x="1610.361"
              y="551.224"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              69
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(68)}>
            <Path
              fill={getColor(68)}
              d="M1591.713 547.478H1629.008V627.56H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 587.519)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="547.478"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 587.519)"
            ></Image>
            <Text
              x="1610.361"
              y="587.519"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              68
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(67)}>
            <Path
              fill={getColor(67)}
              d="M1591.713 583.773H1629.008V663.855H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 623.814)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="583.773"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 623.814)"
            ></Image>
            <Text
              x="1610.361"
              y="623.814"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              67
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(66)}>
            <Path
              fill={getColor(66)}
              d="M1591.713 620.068H1629.008V700.15H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 660.11)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="620.068"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 660.11)"
            ></Image>
            <Text
              x="1610.361"
              y="660.109"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              66
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(65)}>
            <Path
              fill={getColor(65)}
              d="M1591.713 656.363H1629.008V736.445H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 696.404)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="656.363"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 696.404)"
            ></Image>
            <Text
              x="1610.361"
              y="696.404"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              65
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(64)}>
            <Path
              fill={getColor(64)}
              d="M1591.713 692.659H1629.008V772.741H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 732.7)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="692.659"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 732.7)"
            ></Image>
            <Text
              x="1610.361"
              y="732.7"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              64
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(63)}>
            <Path
              fill={getColor(63)}
              d="M1591.713 728.954H1629.008V809.036H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 768.995)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="728.954"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 768.995)"
            ></Image>
            <Text
              x="1610.361"
              y="768.995"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              63
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(62)}>
            <Path
              fill={getColor(62)}
              d="M1591.713 765.249H1629.008V845.331H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 805.29)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="765.249"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 805.29)"
            ></Image>
            <Text
              x="1610.361"
              y="805.29"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              62
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(61)}>
            <Path
              fill={getColor(61)}
              d="M1591.713 801.544H1629.008V881.626H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 841.585)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="801.544"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 841.585)"
            ></Image>
            <Text
              x="1610.361"
              y="841.585"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              61
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(71)}>
            <Path
              fill={getColor(71)}
              d="M1591.713 438.592H1629.008V518.674H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 478.633)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="438.592"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 478.633)"
            ></Image>
            <Text
              x="1610.361"
              y="478.633"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              71
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(72)}>
            <Path
              fill={getColor(72)}
              d="M1591.713 402.297H1629.008V482.379H1591.713z"
              className="parking-space"
              transform="rotate(90 1610.36 442.338)"
            ></Path>
            <Image
              width="37.295"
              height="80.082"
              x="1591.713"
              y="402.297"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(90 1610.36 442.338)"
            ></Image>
            <Text
              x="1610.361"
              y="442.338"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              72
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(32)}>
            <Path
              fill={getColor(32)}
              d="M1141.066 441.228H1197.561V521.31H1141.066z"
              className="parking-space"
              transform="rotate(270 1169.313 481.269)"
            ></Path>
            <Image
              width="56.495"
              height="80.082"
              x="1141.066"
              y="441.228"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1169.313 481.269)"
            ></Image>
            <Text
              x="1169.313"
              y="481.269"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              32
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(33)}>
            <Path
              fill={getColor(33)}
              d="M1141.066 496.723H1197.561V576.8050000000001H1141.066z"
              className="parking-space"
              transform="rotate(270 1169.313 536.764)"
            ></Path>
            <Image
              width="56.495"
              height="80.082"
              x="1141.066"
              y="496.723"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1169.313 536.764)"
            ></Image>
            <Text
              x="1169.313"
              y="536.764"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              33
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(34)}>
            <Path
              fill={getColor(34)}
              d="M1141.066 552.218H1197.561V632.3H1141.066z"
              className="parking-space"
              transform="rotate(270 1169.313 592.26)"
            ></Path>
            <Image
              width="56.495"
              height="80.082"
              x="1141.066"
              y="552.218"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1169.313 592.26)"
            ></Image>
            <Text
              x="1169.313"
              y="592.259"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              34
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(35)}>
            <Path
              fill={getColor(35)}
              d="M1141.066 607.713H1197.561V687.795H1141.066z"
              className="parking-space"
              transform="rotate(270 1169.313 647.754)"
            ></Path>
            <Image
              width="56.495"
              height="80.082"
              x="1141.066"
              y="607.713"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1169.313 647.754)"
            ></Image>
            <Text
              x="1169.313"
              y="647.754"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              35
            </Text>
          </G>
          <G className="parking-space-container" onPress={() => onParkingSpacePress(36)}>
            <Path
              fill={getColor(36)}
              d="M1141.066 663.208H1197.561V743.29H1141.066z"
              className="parking-space"
              transform="rotate(270 1169.313 703.25)"
            ></Path>
            <Image
              width="56.495"
              height="80.082"
              x="1141.066"
              y="663.208"
              className="parking-space-Image"
              href={require("./parking-space.png")}
              preserveAspectRatio="none"
              transform="rotate(270 1169.313 703.25)"
            ></Image>
            <Text
              x="1169.313"
              y="703.25"
              dominantBaseline="central"
              fontFamily="Verdana"
              fontSize="14"
              textAnchor="middle"
            >
              36
            </Text>
          </G>
          {renderGpsBobbel(location)}
        </G>
      </G>
    </Svg>
  );
}

export default Heinrichsdamm;
