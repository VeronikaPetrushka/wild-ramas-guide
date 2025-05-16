import { ImageBackground, View, Dimensions } from "react-native";
import WildLayoutGuide from "./edfnewrnfewr";
import imports from "./imports";

const { height } = Dimensions.get('window');

export const WildAnimationScreen = () => {
    return (
        <WildLayoutGuide children={<imports.WildAnimation />} />
    )
};

export const WildHomeScreenGuide = () => {
    return (
        <WildLayoutGuide children={<imports.WildHome />} wildGuideNavi />
    )
};

export const WildDeerDetailsScreenGuide = ({ route }) => {
    const { deer } = route.params;

    return (
        <WildLayoutGuide children={<imports.WildDeerDetails deer={deer} />} />
    )
};

export const WildHomeStudiedScreenGuide = () => {
    return (
        <WildLayoutGuide children={<imports.WildHomeStudied />} />
    )
};

export const RamasNotesScreenGuide = () => {
    return (
        <WildLayoutGuide children={<imports.RamasNotes />} wildGuideNavi />
    )
};

export const RamasDictionaryScreenGuide = () => {
    return (
        <WildLayoutGuide children={<imports.RamasDictionary />} />
    )
};

export const RamasNoteDetailsScreenGuide = ({ route }) => {
    const { note } = route.params;

    return (
        <WildLayoutGuide children={<imports.RamasNoteDetails note={note} />} />
    )
};

export const WildJournalScreenGuide = () => {
    return (
        <WildLayoutGuide children={<imports.WildJournal />} wildGuideNavi />
    )
};

export const CreateWildJournalScreenGuide = ({ route }) => {
    const { journal } = route.params || {};

    return (
        <WildLayoutGuide children={<imports.CreateWildJournal journal={journal} />} />
    )
};

export const WildJournalDetailsScreenGuide = ({ route }) => {
    const { journal } = route.params;

    return (
        <WildLayoutGuide children={<imports.WildJournalDetails journal={journal} />} />
    )
};

export const RamasGuizScreenGuide = () => {
    return (
        <ImageBackground
            source={require('../WildRamasAssetsApp/wildRamasDecorGuide/ramasQuizBackground.png')}
            style={{ flex: 1 }}
        >
            <View style={{
                width: '100%',
                height: '100%',
                paddingTop: height * 0.08
            }}>
                <imports.RamasGuiz />
            </View>
        </ImageBackground>
    )
};

export const WildSettingsScreenGuide = () => {
    return (
        <WildLayoutGuide children={<imports.WildSettings />} wildGuideNavi />
    )
};