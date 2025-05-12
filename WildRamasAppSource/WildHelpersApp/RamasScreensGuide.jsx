import WildLayout from "./WildLayout";
import WildAnimation from "../RamasComponentsApp/WildAnimation";
import WildHome from "../RamasComponentsApp/WildHome";
import WildDeerDetails from "../RamasComponentsApp/WildDeerDetails";
import WildHomeStudied from "../RamasComponentsApp/WildHomeStudied";
import RamasNotes from "../RamasComponentsApp/RamasNotes";
import RamasDictionary from "../RamasComponentsApp/RamasDictionary";
import RamasNoteDetails from "../RamasComponentsApp/RamasNoteDetails";
import WildJournal from "../RamasComponentsApp/WildJournal";
import CreateWildJournal from "../RamasComponentsApp/CreateWildJournal";
import WildJournalDetails from "../RamasComponentsApp/WildJournalDetails";
import RamasGuiz from "../RamasComponentsApp/RamasGuiz";
import WildSettings from "../RamasComponentsApp/WildSettings";

export const WildAnimationScreen = () => {
    return (
        <WildLayout children={<WildAnimation />} />
    )
};

export const WildHomeScreenGuide = () => {
    return (
        <WildLayout children={<WildHome />} wildGuideNavi />
    )
};

export const WildDeerDetailsScreenGuide = ({ route }) => {
    const { deer } = route.params;

    return (
        <WildLayout children={<WildDeerDetails deer={deer} />} />
    )
};

export const WildHomeStudiedScreenGuide = () => {
    return (
        <WildLayout children={<WildHomeStudied />} />
    )
};

export const RamasNotesScreenGuide = () => {
    return (
        <WildLayout children={<RamasNotes />} wildGuideNavi />
    )
};

export const RamasDictionaryScreenGuide = () => {
    return (
        <WildLayout children={<RamasDictionary />} />
    )
};

export const RamasNoteDetailsScreenGuide = ({ route }) => {
    const { note } = route.params;

    return (
        <WildLayout children={<RamasNoteDetails note={note} />} />
    )
};

export const WildJournalScreenGuide = () => {
    return (
        <WildLayout children={<WildJournal />} wildGuideNavi />
    )
};

export const CreateWildJournalScreenGuide = ({ route }) => {
    const { journal } = route.params || {};

    return (
        <WildLayout children={<CreateWildJournal journal={journal} />} />
    )
};

export const WildJournalDetailsScreenGuide = ({ route }) => {
    const { journal } = route.params;

    return (
        <WildLayout children={<WildJournalDetails journal={journal} />} />
    )
};

export const RamasGuizScreenGuide = () => {
    return (
        <WildLayout children={<RamasGuiz />} wildGuideNavi />
    )
};

export const WildSettingsScreenGuide = () => {
    return (
        <WildLayout children={<WildSettings />} wildGuideNavi />
    )
};