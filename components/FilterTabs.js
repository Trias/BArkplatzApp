import React from 'react';
import {ScrollView, TouchableOpacity, Text, StyleSheet} from 'react-native';

const filterMappping = {
    'Normal': 'Standard',
    'Standard': 'Standard',
    'Elektro': 'Elektro',
    'Mutter-Kind': 'Mutter-Kind',
    'Versehrtenparkplatz': 'Behindertenparkplatz',
    'Behindertenparkplatz': 'Behindertenparkplatz',
    'Alle': 'Alle'
}
const filterToInternalMap = {
    'Standard': 'Normal',
    'Elektro': 'Elektro',
    'Mutter-Kind': 'Mutter-Kind',
    'Behindertenparkplatz': 'Versehrtenparkplatz',
    'Alle': 'Alle'
};

export function FilterTabs({ filters, onFilterPress, activeFilter }) {
    return <ScrollView style={styles.tabs} horizontal={true} showsHorizontalScrollIndicator={false}>
        {filters.map((filter) => {
            return <TouchableOpacity 
            key={filter} 
            onPress={() => onFilterPress(filterToInternalMap[filter])} 
            style={[styles.tab, filterMappping[activeFilter] == filter ? styles.activeTab : null]
            }>
                <Text style={[styles.filter, filterMappping[activeFilter] == filter ? styles.activeFilter : null]}>{filter}</Text>
            </TouchableOpacity>
        })}
    </ScrollView>
}

const styles = StyleSheet.create({
    tabs: {
        height: 60,
        lineHeight: 60,
        flex: 1,
        position: 'absolute',
        zIndex: 100,
        backgroundColor: 'white',
        left: 0,
        right: 0,
    },
    tab: {
        paddingHorizontal: 5,
        paddingVertical: 10,
        marginHorizontal: 5,
        borderBottomWidth: 3,
        borderBottomColor: 'transparent',
    },
    filter: {
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 10,
    },
    activeTab: {
        borderBottomColor: 'red',
    },
    activeFilter: {
        color: 'red',
    },
})