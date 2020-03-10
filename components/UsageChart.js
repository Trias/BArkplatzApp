import * as scale from 'd3-scale'
import { BarChart, Grid, XAxis, YAxis } from 'react-native-svg-charts'
import { LinearGradient, Stop, Defs } from 'react-native-svg'
import { View, Dimensions, Text} from 'react-native';
import React, { useState } from 'react';
import averageUsage from '../data/averageUsage';
import PulsingRect from '../components/PulsingRect';

const ZERO_USAGE = [0, 0, 0, 0, 0, 0, 0, 0];

function Indicator({ bandwidth, x, y, data, occupiedPercent }) {
    let timeBucket = Math.floor((new Date()).getHours() / 3);
    let xStart = x(timeBucket);
    let yStart = y(occupiedPercent);
    let width = bandwidth;
    let height = -(yStart - y(0));
    let color = occupiedPercent < data[timeBucket] ? 'lightgreen' : 'red';
    return <PulsingRect x={xStart} y={yStart} width={width} height={height} fill={color} fillOpacity={0.5}></PulsingRect>;
};

function getWeekDay() {
    let d = new Date();
    let englishWeekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
    return englishWeekDays[d.getDay()];
}

export function UsageChart({ parkingLot, initial }) {
    if (!averageUsage[parkingLot.id]) {
        return null;
    }

    const [initialByState, setInitial] = useState(true);

    initial = initial || initialByState;

    let averageUseDataAggregated;
    if (initial) {
        setTimeout(() => { setInitial(false) }, 100);
        averageUseDataAggregated = ZERO_USAGE;
    } else {
        let averageUsageData = averageUsage[parkingLot.id][getWeekDay()];
        averageUseDataAggregated = aggregateUsageData(averageUsageData);
    }
    let totalParkingSpaces = Object.keys(parkingLot.spaces).length;

    const { width } = Dimensions.get('window');
    let chartWidth = width - 40;
    let chartHeight = chartWidth / 2.5;
    let yscaleHeight = chartHeight + 10;
    let totalHeight = chartWidth / 2;
    const ContentInset = { top: 20, bottom: 5 }

    const Gradient = () => (
        <Defs key={"gradient"}>
            <LinearGradient
                id={"gradient"}
                x1={"0%"}
                y={"0%"}
                x2={"0%"}
                y2={"100%"}
            >
                <Stop offset={"0%"} stopColor={"rgb(134, 65, 244)"} />
                <Stop offset={"100%"} stopColor={"rgb(66, 194, 244)"} />
            </LinearGradient>
        </Defs>
    );

    let labels = ['0-3', '3-6', '6-9', '9-12', '12-15', '15-18', '18-21', '21-24'];

    return <View
        style={{
            paddingRight: 10,
            height: totalHeight,
            flexDirection: "row",
            marginLeft: 2
        }}>
        <YAxis
            data={averageUseDataAggregated}
            svg={{
                fill: 'grey',
                fontSize: 10,
                marginLeft: 5,
            }}
            style={{ height: yscaleHeight }}
            numberOfTicks={4}
            formatLabel={(value) => `${value}%`}
            min={0}
            max={100}
            contentInset={ContentInset}
        />
        <View style={{ flex: 1, marginLeft: 4, marginRight: 8 }}>
            <BarChart
                style={{ flex: 1, width: chartWidth, height: chartHeight }}
                data={averageUseDataAggregated}
                width={chartWidth}
                yMin={0}
                yMax={100}
                svg={{ fill: 'url(#gradient)' }}
                animate={true}
                animationDuration={500}
                gridMin={0}
                numberOfTicks={4}
                contentInset={ContentInset}
            >

                <Indicator occupiedPercent={(parkingLot.occupied / totalParkingSpaces) * 100} />
                <Gradient />
                <Grid />
            </BarChart>
            <XAxis
                style={{ marginTop: 2, width: chartWidth, }}
                data={averageUseDataAggregated}
                scale={scale.scaleBand}
                formatLabel={(value, index) => labels[index]}
                labelStyle={{ color: 'black' }}
            />
        </View>

    </View>;
}

export function Explanation({parkingLot}){
    if (!averageUsage[parkingLot.id]) {
        return null;
    }
    let averageUsageData = averageUsage[parkingLot.id][getWeekDay()];
    let averageUseDataAggregated = aggregateUsageData(averageUsageData);

    let timeBucket = Math.floor((new Date()).getHours() / 3);
    let totalParkingSpaces = Object.keys(parkingLot.spaces).length;
    let occupiedPercent = (parkingLot.occupied / totalParkingSpaces) * 100

    if(Math.abs(occupiedPercent - averageUseDataAggregated[timeBucket]) < 10){
        return <Text style={styles.center}>Das Parkaufkommen ist im üblichen Rahmen</Text>
    }else if(occupiedPercent < averageUseDataAggregated[timeBucket]){
        return <Text style={styles.center}>Es ist weniger los als sonst</Text>
    }else{
        return <Text style={styles.center}>Es ist mehr los als üblich</Text>
    }
}


function aggregateUsageData(averageUseData) {
    let averageUseDataAggregated = [];
    let numberOfHours = 3;
    for (let i = 0; i < averageUseData.length; i++) {
        let bucket = Math.floor(i / numberOfHours);
        averageUseDataAggregated[bucket] = (averageUseDataAggregated[bucket] + averageUseData[i] / numberOfHours) || averageUseData[i] / numberOfHours;
    }
    return averageUseDataAggregated;
}

const styles = {
    center: {textAlign:'center'}
}