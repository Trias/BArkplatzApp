import React from 'react';
import { StyleSheet, View, } from 'react-native';
import Accordion from './Accordion'

export default class FAQList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    key: '1',
                    title: 'Wie wähle ich einen Parkplatz aus?',
                    data: 'Tippen Sie auf das Parkplatzicon. Bei den Informationen zu den jeweiligen Parkplätzen finden sie den Button "Zur Parkplatzansicht", über diesen können Sie sich den Parkplatz im Detail anzeigen lassen und auch die einzelnen Parkbuchten anwählen.'
                },
                {
                    key: '2',
                    title: 'Wie funktioniert der Parkzeitrechner?',
                    data: 'Im Parkzeitrechner können sie die von ihnen beabsichtigte Parkzeit eingeben. Die App zeigt ihnen an wie viel Sie für die beabsichtigte Zeit zahlen müssen.',
                },
                {
                    key: '3',
                    title: 'Kann die App einen für mich passenden Parkplatz automatisch auswählen?',
                    data: 'Ja. Wenn sie auf den Button "Eine neue Welt des Parkens" auf der Startseite tippen, wählt die App automatisch einen passenden Parkplatz uas, sofern sich einer in der Nähe befindet. Mit "Navigation" können Sie sofort die Navigation starten.',
                },
                {
                    key: '4',
                    title: 'Kann ich meinen Parkschein in der App lösen?',
                    data: 'Nein, aber Sie können Ihre gewünschte Parkdauer in der App einstellen und sich den Parkplatz speichern. Die App erinnert Sie vor Ablauf der Parkzeit und führt Sie zu Ihrem Parkplatz zurück.'
                },
                {
                    key: '5',
                    title: 'Wie kann ich die Ansicht an meine besonderen Bedürfnisse (z.B.: Behinderung, E-Auto) anpassen?',
                    data: 'Tippen Sie auf den passenden Filter in der Parkplatzansicht.'
                },
                {
                    key: '6',
                    title: 'Was bedeuten die Punkte auf den Parkplatzicons?',
                    data: 'Die Punkte auf den Parkplatzicons können verschiedene Farben annehmen: rot, gelb und grün. Mit Hilfe dieser Farbgebungen können Sie sich schon beim öffnen der App einen Überblick darüber verschaffen, wie stark belegt die Parkplätzen zum gegenwärtigen Zeitpunkt sind.',
                },
                {
                    key: '7',
                    title: 'Warum der Name BArkplatz und was macht der Hund im Logo?',
                    data: 'Die App wurde von Studenten der Uni Bamberg entwickelt, und da im fränkischen das "P" weich ausgesprochen wird, war der Name der App schnell gefunden. Zu unserem Maskottchen "Barker" war es dann auch nicht mehr weit.',
                },
                {
                    key: '8',
                    title: 'Gibt es ein Easter Egg?',
                    data: 'Wer auf der Karte findet, wo die App entwickelt wurde, wird mit einem kleinen Easter Egg belohnt :)',
                },
                {
                    key: '9',
                    title: 'Wie merke ich mir einen Parkplatz?',
                    data: 'Um sich einen Parkplatz zu merken, müssen Sie sich auf dem Parkplatz befinden. Dann tippen sie einfach ihren Parkplatz an und geben ihr geplante Parkdauer an, um eine Erinnerung zu erhalten.',
                },
                {
                    key: '10',
                    title: 'Wie reserviere ich einen Parkplatz?',
                    data: 'Wenn man sich nicht auf dem Parkplatz befindet und einen noch nicht belegten oder reservierten Parkplatz auswählt, kann man diesen reservieren. Dazu gibt man an ab wann und wie lange man ihn reservieren möchte. Die Daten werden dann auf unserem Server hinterlegt.',
                },
                {
                    key: '11',
                    title: 'Was bedeuten die Farben in der Parkplatzansicht?',
                    data: 'Rot bedeutet, dass der Parkplatz belegt ist. Grün bedeutet dass der Parkplatz frei ist. Blau ist der Parkplatz den die App sich gemerkt hat und orange sind reservierte Parkplätze. Ist eine Farbe ausgegraut, bedeutet das, dass der aktuelle Filter nicht auf diesen Parkplatz zutrifft.',
                },
                {
                    key: '12',
                    title: 'Was sind die grünen Kreise oder die schwarzen Flächen auf der Parkplatzansicht?',
                    data: 'Die grünen Kreise stellen Bäume dar, die schwarzen Flächen Gebäude.',
                },
                {
                    key: '13',
                    title: 'Was zeigt die Balkengrafik?',
                    data: 'Durch den roten oder grünen Balken wird die aktuelle (Live)-Auslastung angegeben. Im Hintergrund ist die durchschnittliche Auslastung für den heutigen Wochentag zu sehen',
                },
                {
                    key: '14',
                    title: 'Warum braucht die App so lange zum laden?',
                    data: 'Beim allerersten Starten, muss der gesamte Code und alle Bilder heruntergeladen werden. Außerdem wird bei jedem Start der Standort festgestellt und die Parkplatzdaten vom Server abgerufen. Dies benötigt etwas Zeit',
                },
            ]
        }

        if(props.filterKeys){
            this.state.menu = this.state.menu.filter(el => {
                if(props.filterKeys.indexOf(el.key) !== -1){
                    return true;
                }else{
                    return false;
                }
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderAccordions()}
            </View>
        );
    }

    renderAccordions = () => {
        const items = [];

        for (item of this.state.menu) {
            items.push(
                <Accordion
                    key={item.key}
                    title={item.title}
                    data={item.data} />
            );

        }
        return items;
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 1,
        backgroundColor: 'white',
        width: '100%',

    }
});