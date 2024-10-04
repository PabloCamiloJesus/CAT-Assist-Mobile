import React, {useState, useRef} from 'react'
import { View, Text, StyleSheet, FlatList, Animated } from 'react-native'
import slides from './slides'
import OnboardingItem from './OnboardingItems'

export default Onboarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const scrollx = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null)

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current

    // Escolha apenas um dos dois parâmetros abaixo
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current
    // Se preferir usar o itemVisiblePercentThreshold, pode ser algo como:
    // const viewConfig = useRef({ itemVisiblePercentThreshold: 50 }).current

    return (
        <View style={styles.container}>
            <View style={{ flex: 3 }}>
                <FlatList 
                    data={slides} 
                    renderItem={({ item }) => <OnboardingItem item={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{nativeEvent: {contentOffset: { x: scrollx }}}], {
                        useNativeDriver: false,
                    })}
                    scrollEventThrottle={32}
                    onViewableItemsChanged={viewableItemsChanged}
                    viewabilityConfig={viewConfig}
                    ref={slidesRef}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    }
})