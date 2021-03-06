import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

const CategoryMealsScreen = props => {
    return (
        <View style={styles.screen}> 
            <Text>The CategoryMealsScreen Screen!</Text>
            <Button 
                title="Go to Details"
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail'
                    })
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default CategoryMealsScreen;