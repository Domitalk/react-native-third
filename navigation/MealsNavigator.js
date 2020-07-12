// in here we're going to name all the key-value pairs for navigating
// react-native navigation is kind of like a stack of pages and 
// you put pages on top as you navigate so back is down 
// top of the stack is the current screen 

// for version 4 of react-navigation you import from 'react-navigation-stack'
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen'
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'

// this can run concurrently with tabs and sidedrawer, but exclude in here for those
// takes @ least one arg, an object
// has all the info in createStackNavigator but must make AppContainer at export 
const MealsNavigator = createStackNavigator({
    // convention is to capitalize 
    // the value is the component you want to load
    Categories: CategoriesScreen,
    CategoryMeals: {
        // you can add more stuff if you style it like this. like more mods below screen
        screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
});


// must wrap it in createAppContainer
export default createAppContainer(MealsNavigator); 