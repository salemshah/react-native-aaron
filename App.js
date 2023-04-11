import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from "./navigations/AppNavigation";

export default function App() {
    return (
        <NavigationContainer>
            <AppNavigation/>
        </NavigationContainer>
    );
}