import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import NavigationLayout from "./NavigationLayout"
import SpeakerModal from "../screens/Speaker/SpeakerModal"
import Session from "../screens/Session/Session"

export default createAppContainer(
    createStackNavigator(
        {
            Layout: NavigationLayout,
            Session: Session,
            Speaker: SpeakerModal,
        },
        {
            mode: 'modal',
            headerMode: 'none',
        }
    ))