// ── Nutzerdaten ───────────────────────────────────────────
let user = {};
let selectedEpisode = null;

// ── Episoden ──────────────────────────────────────────────
var EPISODES = [
  {
    id: 1,
    number: 'Folge 1',
    title: 'Arbeiten in Luxemburg \u2013 Das m\u00fcssen Grenzg\u00e4nger wissen',
    description: 'Mindestlohn, Elternzeit, Indexsystem, Krankenversicherung und mehr: Was Sie als Grenzg\u00e4nger \u00fcber Ihren Arbeitsalltag in Luxemburg wissen sollten.',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/7orxi3Ywc4vFtkjzQ2ohv6?utm_source=generator&theme=0',
    topics: ['Sozialversicherungspflicht', 'Mindestlohn (SSM)', 'Indexsystem', 'Krankenversicherung (CNS)', 'Elternzeit & Elterngeld', 'Homeoffice-Regelung', 'Steuerliche Grundlagen', 'Grenzg\u00e4nger-Definition'],
    questions: [
      {
        text: 'Welche luxemburgische Institution ist f\u00fcr die Krankenversicherung der Grenzg\u00e4nger zust\u00e4ndig, die in Luxemburg arbeiten?',
        options: [
          'Die CNS (Caisse Nationale de Sant\u00e9 \u2013 Luxemburgische Nationale Gesundheitskasse)',
          'Die deutsche gesetzliche Krankenkasse (z.\u00a0B. AOK, TK oder Barmer)',
          'Die ADEM (Agence pour le D\u00e9veloppement de l\u2019Emploi)',
          'Eine private Krankenversicherung nach eigener Wahl'
        ],
        correct: 0,
        explanation: 'Als Grenzg\u00e4nger, der in Luxemburg arbeitet und dem dortigen Sozialversicherungssystem angeh\u00f6rt, ist die CNS (Caisse Nationale de Sant\u00e9) f\u00fcr Ihre Krankenversicherung zust\u00e4ndig \u2013 nicht die deutsche Krankenkasse.'
      },
      {
        text: 'Was beschreibt das Luxemburger Indexsystem?',
        options: [
          'Ein steuerliches Bewertungsverfahren f\u00fcr grenz\u00fcberschreitende Einк\u00fcnfte',
          'Eine automatische Anpassung von L\u00f6hnen und Sozialleistungen an die Preisentwicklung (Inflation)',
          'Ein offizielles Ranking der Arbeitgeber nach Lohnniveau',
          'Ein Registrierungsverfahren f\u00fcr neu ankommende Grenzg\u00e4nger'
        ],
        correct: 1,
        explanation: 'Das Luxemburger Indexsystem sorgt daf\u00fcr, dass L\u00f6hne, Geh\u00e4lter, Renten und staatliche Leistungen automatisch um 2,5\u00a0% erh\u00f6ht werden, sobald der Preisindex diesen Schwellenwert \u00fcberschreitet. Damit soll die Kaufkraft aller Arbeitnehmer \u2013 auch der Grenzg\u00e4nger \u2013 erhalten bleiben.'
      },
      {
        text: 'Haben deutsche Grenzg\u00e4nger, die in Luxemburg besch\u00e4ftigt sind, grunds\u00e4tzlich Anspruch auf luxemburgisches Elterngeld (Indemnit\u00e9 de cong\u00e9 parental)?',
        options: [
          'Nein, nur luxemburgische Staatsangeh\u00f6rige haben diesen Anspruch',
          'Nein, da Grenzg\u00e4nger ihren Wohnsitz nicht in Luxemburg haben',
          'Ja, da Grenzg\u00e4nger dem luxemburgischen Sozialversicherungssystem angeh\u00f6ren und damit dieselben Rechte wie Inlandsarbeitnehmer genie\u00dfen',
          'Nur teilweise, wenn der Ehepartner ebenfalls in Luxemburg arbeitet'
        ],
        correct: 2,
        explanation: 'Da Grenzg\u00e4nger vollst\u00e4ndig dem luxemburgischen Sozialversicherungssystem angeschlossen sind, haben sie dieselben sozialen Rechte wie in Luxemburg wohnhafte Arbeitnehmer \u2013 einschlie\u00dflich des Anspruchs auf luxemburgisches Elterngeld. Ein Wohnsitz in Luxemburg ist daf\u00fcr nicht erforderlich.'
      },
      {
        text: 'In welchem Land versteuern deutsche Grenzg\u00e4nger ihr in Luxemburg erzieltes Arbeitseinkommen grunds\u00e4tzlich?',
        options: [
          'In Deutschland, da dort der steuerliche Wohnsitz ist',
          'In Luxemburg, da dort die Arbeit tats\u00e4chlich ausge\u00fcbt wird',
          'Zu je 50\u00a0% sowohl in Deutschland als auch in Luxemburg',
          'Der Arbeitnehmer kann das Besteuerungsland frei w\u00e4hlen'
        ],
        correct: 1,
        explanation: 'Gem\u00e4\u00df dem Doppelbesteuerungsabkommen (DBA) zwischen Deutschland und Luxemburg wird Arbeitseinkommen in dem Land besteuert, in dem die Arbeit ausgef\u00fchrt wird \u2013 also in Luxemburg. Wichtige Ausnahme: Homeoffice-Tage im Wohnsitzland k\u00f6nnen unter bestimmten Bedingungen abweichend behandelt werden.'
      },
      {
        text: 'Was ist ein \u201eGrenzg\u00e4nger\u201c im Sinne des Luxemburger Arbeits- und Sozialversicherungsrechts?',
        options: [
          'Jede Person mit luxemburgischer Staatsangeh\u00f6rigkeit, die im Ausland wohnt',
          'Eine Person, die in einem anderen EU-Staat wohnt, in Luxemburg arbeitet und regelm\u00e4\u00dfig an ihren Wohnort zur\u00fcckkehrt',
          'Nur Arbeitnehmer, die t\u00e4glich zwischen Luxemburg und dem Ausland pendeln',
          'Personen, die sowohl eine deutsche als auch eine luxemburgische Arbeitsstelle haben'
        ],
        correct: 1,
        explanation: 'Als Grenzg\u00e4nger gilt rechtlich, wer in einem EU-/EWR-Staat oder der Schweiz wohnt, in einem anderen Staat (hier: Luxemburg) einer Besch\u00e4ftigung nachgeht und grunds\u00e4tzlich t\u00e4glich oder zumindest einmal w\u00f6chentlich an seinen Wohnort zur\u00fcckkehrt. Diese Definition ist entscheidend f\u00fcr die Bestimmung der Sozialversicherungs- und Steuerpflichten.'
      }
    ]
  },
  {
    id: 2,
    number: 'Folge 2',
    title: 'Rente & Mitbestimmung \u2013 Was dir in Luxemburg zusteht',
    description: 'Wann kann ich in Luxemburg in Rente gehen? Wie funktioniert die Krankenversicherung im Ruhestand? Und welche Mitbestimmungsrechte haben Grenzg\u00e4nger als Arbeitnehmer im Betrieb?',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/2A7uEn44lvZtSdGfws4DzR?utm_source=generator&theme=0',
    topics: ['Luxemburgische Rente', 'Rentenerwartungen', 'Krankenversicherung im Ruhestand', 'Personaldelegation', 'Sozialwahlen', 'Mitbestimmungsrechte'],
    questions: [
      {
        text: 'Wann hat ein Grenzg\u00e4nger, der in Luxemburg gearbeitet hat, Anspruch auf die volle luxemburgische Rente (pension compl\u00e8te)?',
        options: [
          'Mit 60 Jahren, unabh\u00e4ngig von der Beitragszeit',
          'Nach 40 Beitragsjahren oder mit 65 Jahren nach mindestens 10 Beitragsjahren',
          'Mit 67 Jahren wie in Deutschland',
          'Erst nach 30 Jahren Besch\u00e4ftigung ausschlie\u00dflich in Luxemburg'
        ],
        correct: 1,
        explanation: 'In Luxemburg hat man nach 40 Beitragsjahren Anspruch auf die volle Rente \u2013 unabh\u00e4ngig vom Alter. Mit 65 Jahren gen\u00fcgen mindestens 10 Beitragsjahre. Grenzg\u00e4nger haben dieselben Rentenanspruch wie in Luxemburg wohnhafte Arbeitnehmer.'
      },
      {
        text: 'Wie funktioniert die Krankenversicherung f\u00fcr ehemalige Grenzg\u00e4nger, die eine luxemburgische Rente beziehen und in Deutschland wohnen?',
        options: [
          'Sie sind ausschlie\u00dflich \u00fcber die deutsche gesetzliche Krankenversicherung abgesichert',
          'Sie m\u00fcssen sich privat versichern, da sie nicht mehr in Luxemburg wohnen',
          'Als Bezieher einer luxemburgischen Rente bleiben sie \u00fcber die luxemburgische CNS krankenversichert, auch mit Wohnsitz in Deutschland',
          'Sie haben nach dem Renteneintritt keinen Krankenversicherungsschutz mehr'
        ],
        correct: 2,
        explanation: 'Wer eine luxemburgische Rente bezieht, bleibt \u00fcber die CNS (Caisse Nationale de Sant\u00e9) krankenversichert \u2013 auch mit Wohnsitz in Deutschland. Im Rahmen der EU-Koordinierungsregeln werden Behandlungskosten in Deutschland erstattet.'
      },
      {
        text: 'Was ist die Personaldelegation (d\u00e9l\u00e9gation du personnel) in luxemburgischen Unternehmen?',
        options: [
          'Eine staatliche Kontrollbeh\u00f6rde, die Betriebe im Auftrag des Arbeitsministeriums \u00fcberwacht',
          'Ein gew\u00e4hltes Gremium aus Arbeitnehmervertretern, das die Belegschaft gegen\u00fcber dem Arbeitgeber repr\u00e4sentiert',
          'Ein internes Managementorgan des Unternehmens',
          'Ein Ausschuss ausschlie\u00dflich f\u00fcr luxemburgische Staatsangeh\u00f6rige im Betrieb'
        ],
        correct: 1,
        explanation: 'Die Personaldelegation ist ein gew\u00e4hltes Arbeitnehmervertretungsgremium in luxemburgischen Betrieben. Sie vertritt die Interessen aller Besch\u00e4ftigten \u2013 unabh\u00e4ngig von Nationalit\u00e4t oder Wohnsitz \u2013 gegen\u00fcber dem Arbeitgeber.'
      },
      {
        text: 'Ab wie vielen Besch\u00e4ftigten m\u00fcssen luxemburgische Unternehmen eine Personaldelegation einrichten?',
        options: [
          'Ab 5 Besch\u00e4ftigten',
          'Ab 15 Besch\u00e4ftigten',
          'Ab 50 Besch\u00e4ftigten',
          'Ab 100 Besch\u00e4ftigten'
        ],
        correct: 1,
        explanation: 'In Luxemburg sind Unternehmen ab 15 Besch\u00e4ftigten gesetzlich verpflichtet, eine Personaldelegation einzurichten. Diese vertritt alle Arbeitnehmer des Betriebs, unabh\u00e4ngig von deren Nationalit\u00e4t oder Wohnsitz.'
      },
      {
        text: 'K\u00f6nnen deutsche Grenzg\u00e4nger an den Sozialwahlen (Wahl der Personaldelegation) in luxemburgischen Betrieben teilnehmen?',
        options: [
          'Nein, nur luxemburgische Staatsangeh\u00f6rige sind wahlberechtigt',
          'Nein, nur Arbeitnehmer mit Wohnsitz in Luxemburg d\u00fcrfen w\u00e4hlen',
          'Ja, als Besch\u00e4ftigte des Betriebs haben Grenzg\u00e4nger dasselbe aktive und passive Wahlrecht wie alle anderen Kollegen',
          'Nur als Wahlbeobachter, aber nicht als Kandidaten'
        ],
        correct: 2,
        explanation: 'Grenzg\u00e4nger haben bei den Sozialwahlen in luxemburgischen Betrieben dasselbe aktive (w\u00e4hlen) und passive (gew\u00e4hlt werden) Wahlrecht wie alle anderen Arbeitnehmer. Nationalit\u00e4t und Wohnsitz spielen dabei keine Rolle.'
      }
    ]
  },
  {
    id: 3,
    number: 'Folge 3',
    title: 'Ausbildung und Studium \u2013 Deine M\u00f6glichkeiten in Luxemburg',
    description: 'Wie funktioniert das luxemburgische Ausbildungssystem? Welche Studienbeihilfen gibt es f\u00fcr Grenzg\u00e4nger und ihre Kinder? Und wie beantrage ich Unterst\u00fctzung \u00fcber guichet.lu?',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/6oXlUxVM1GtDs9ISZc28hg?utm_source=generator&theme=0',
    topics: ['Studienbeihilfe', 'guichet.lu', 'Duales Ausbildungssystem', 'Anerkennung von Abschl\u00fcssen', 'SFP (Berufsausbildung)', 'F\u00f6rderbedingungen f\u00fcr Grenzg\u00e4nger'],
    questions: [
      {
        text: 'Kann ein in Deutschland wohnhafter Grenzg\u00e4nger luxemburgische Studienbeihilfe f\u00fcr sein Kind beantragen?',
        options: [
          'Nein, nur Personen mit Wohnsitz in Luxemburg haben Anspruch auf Studienbeihilfe',
          'Ja, wenn mindestens ein Elternteil in Luxemburg besch\u00e4ftigt ist und weitere Bedingungen erf\u00fcllt sind',
          'Nur wenn das Kind an einer luxemburgischen Universit\u00e4t studiert',
          'Nur wenn das Kind die luxemburgische Staatsangeh\u00f6rigkeit besitzt'
        ],
        correct: 1,
        explanation: 'Kinder von Grenzg\u00e4ngern k\u00f6nnen luxemburgische Studienbeihilfe erhalten, sofern mindestens ein Elternteil in Luxemburg berufst\u00e4tig ist und die weiteren Voraussetzungen erf\u00fcllt sind. Das Studium muss nicht zwingend in Luxemburg stattfinden.'
      },
      {
        text: 'Wie wird der Antrag auf luxemburgische Studienbeihilfe gestellt?',
        options: [
          'Beim deutschen BAf\u00f6G-Amt am Wohnsitz des Antragstellers',
          'Direkt beim Ministerium f\u00fcr Hochschulwesen per Post',
          '\u00dcber das offizielle luxemburgische B\u00fcrgerportal guichet.lu',
          'Bei der ADEM (Agence pour le D\u00e9veloppement de l\u2019Emploi)'
        ],
        correct: 2,
        explanation: 'Der Antrag auf Studienbeihilfe wird \u00fcber das Beh\u00f6rdenportal guichet.lu gestellt. Dort findet man auch alle relevanten Informationen zu Fristen, ben\u00f6tigten Unterlagen und Voraussetzungen.'
      },
      {
        text: 'Wer ist Mirko Mazzi und welche Rolle spielt er in dieser Folge?',
        options: [
          'Er ist Direktor der luxemburgischen Arbeitsvermittlung ADEM und erkl\u00e4rt Jobsuche in Luxemburg',
          'Er leitet die Abteilung f\u00fcr Studienbeihilfen beim Ministerium f\u00fcr Forschung und Hochschulwesen und erkl\u00e4rt F\u00f6rderm\u00f6glichkeiten f\u00fcr Grenzg\u00e4nger',
          'Er ist Rektor der Universit\u00e4t Luxemburg und stellt Studienm\u00f6glichkeiten vor',
          'Er ist Schulleiter und erkl\u00e4rt das Schulsystem in Luxemburg'
        ],
        correct: 1,
        explanation: 'Mirko Mazzi arbeitet beim Ministerium f\u00fcr Forschung und Hochschulwesen und leitet die Abteilung f\u00fcr Studienbeihilfen. In der Folge erkl\u00e4rt er die verschiedenen F\u00f6rderm\u00f6glichkeiten, die Bedingungen f\u00fcr Grenzg\u00e4nger und den Online-Antragsprozess.'
      },
      {
        text: 'Was ist das duale Ausbildungssystem (formation en alternance) in Luxemburg?',
        options: [
          'Eine Ausbildung, die vollst\u00e4ndig im Betrieb ohne Schulunterricht stattfindet',
          'Eine Kombination aus betrieblicher Praxis und theoretischem Unterricht an einer Berufsschule',
          'Ein rein schulisches Programm ohne Betriebspraktika',
          'Ein Fernstudienangebot ausschlie\u00dflich f\u00fcr Grenzg\u00e4nger'
        ],
        correct: 1,
        explanation: 'Das duale Ausbildungssystem (formation en alternance) verbindet praktische Ausbildung im Betrieb mit theoretischem Unterricht in der Berufsschule \u2013 \u00e4hnlich wie in Deutschland. Marc Sinner vom SFP (Berufsausbildungsministerium) erkl\u00e4rt in der Folge den Zugang f\u00fcr deutsche Grenzg\u00e4nger.'
      },
      {
        text: 'Werden deutsche Schul- und Berufsabschl\u00fcsse in Luxemburg automatisch anerkannt?',
        options: [
          'Ja, innerhalb der EU werden alle Abschl\u00fcsse gegenseitig automatisch anerkannt',
          'Nein, es gibt in Luxemburg kein Anerkennungsverfahren f\u00fcr ausl\u00e4ndische Abschl\u00fcsse',
          'Nicht automatisch; in der Regel ist ein offizielles Anerkennungsverfahren beim zust\u00e4ndigen Ministerium erforderlich',
          'Nur Universit\u00e4tsabschl\u00fcsse werden anerkannt, keine Berufsausbildungen'
        ],
        correct: 2,
        explanation: 'Deutsche Abschl\u00fcsse werden in Luxemburg nicht automatisch anerkannt. Es ist ein offizielles Anerkennungsverfahren beim zust\u00e4ndigen Ministerium notwendig. F\u00fcr reglementierte Berufe k\u00f6nnen zus\u00e4tzliche Anforderungen bestehen.'
      }
    ]
  },
  {
    id: 4,
    number: 'Folge 4',
    title: 'Grenzenlos arbeiten \u2013 40 Jahre Schengen und der Alltag dazwischen',
    description: 'Was bedeutet es heute, Grenzg\u00e4nger zu sein \u2013 und wie hat sich das in den letzten Jahrzehnten ver\u00e4ndert? Diese Folge nimmt dich mit auf eine Reise durch die Geschichte des Schengener Abkommens und besucht das neue Schengen-Museum.',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/1tjiHJ3Hkwe0Chg4xkFeW4?utm_source=generator&theme=0',
    topics: ['Schengener Abkommen', '275.000 Grenzg\u00e4nger', 'Mus\u00e9e Europ\u00e9en Schengen', 'Atypische Grenzg\u00e4nger', 'Fachkr\u00e4ftemangel', 'Gro\u00dfregion'],
    questions: [
      {
        text: 'Wie viele Grenzg\u00e4nger arbeiten laut dieser Folge in Luxemburg?',
        options: [
          'Rund 50.000',
          '\u00dcber 100.000',
          '\u00dcber 275.000',
          'Etwa 500.000'
        ],
        correct: 2,
        explanation: 'Laut der Folge pendeln \u00fcber 275.000 Menschen t\u00e4glich als Grenzg\u00e4nger zur Arbeit nach Luxemburg \u2013 eine Zahl, die den enormen Umfang der grenz\u00fcberschreitenden Arbeitsmobilit\u00e4t in der Gro\u00dfregion verdeutlicht.'
      },
      {
        text: 'Was ist das Mus\u00e9e Europ\u00e9en Schengen und warum wird es in der Folge besucht?',
        options: [
          'Ein Grenzmuseum, das ausschlie\u00dflich historische Zollkontrollen dokumentiert',
          'Ein Museum, das die Geschichte und Bedeutung des Schengener Abkommens f\u00fcr Europa und die Grenzg\u00e4ngermobilit\u00e4t erlebbar macht',
          'Ein luxemburgisches Nationalmuseum \u00fcber Einwanderungsgeschichte',
          'Eine Ausstellung \u00fcber die Wirtschaftsgeschichte der Gro\u00dfregion'
        ],
        correct: 1,
        explanation: 'Das Mus\u00e9e Europ\u00e9en Schengen macht die Geschichte, Wirkung und Wahrnehmung des Schengener Abkommens erlebbar. Martina Kneip, Leiterin des Museums, erkl\u00e4rt in der Folge die Ausstellung zum 40-j\u00e4hrigen Jubil\u00e4um des Abkommens.'
      },
      {
        text: 'Wer ist Marie Feunteun-Schmidt und was ist ihre Expertise in dieser Folge?',
        options: [
          'Sie ist Direktorin des Schengen-Museums und erkl\u00e4rt die Geschichte des Abkommens',
          'Sie ist Koordinatorin der Interregionalen Arbeitsmarkt Beobachtungsstelle (IBA) und liefert Zahlen zur Grenzg\u00e4ngermobilit\u00e4t in der Gro\u00dfregion',
          'Sie ist luxemburgische Politikerin und erkl\u00e4rt die aktuelle Migrationspolitik',
          'Sie ist Arbeitsrechtlerin und ber\u00e4t Grenzg\u00e4nger zu ihren Rechten'
        ],
        correct: 1,
        explanation: 'Marie Feunteun-Schmidt ist Koordinatorin der Interregionalen Arbeitsmarkt Beobachtungsstelle (IBA) und liefert in der Folge Zahlen, Entwicklungen und wirtschaftliche Perspektiven zur Grenzg\u00e4ngermobilit\u00e4t in der Gro\u00dfregion.'
      },
      {
        text: 'Was sind \u201eatypische Grenzg\u00e4nger\u201c, die in dieser Folge erw\u00e4hnt werden?',
        options: [
          'Grenzg\u00e4nger, die nur gelegentlich und nicht regelm\u00e4\u00dfig nach Luxemburg pendeln',
          'Arbeitnehmer, die im Homeoffice arbeiten und daher nicht t\u00e4glich die Grenze \u00fcberqueren',
          'Grenzg\u00e4nger mit besonderen Arbeitsbedingungen, z.\u00a0B. Nachtarbeit oder flexible Modelle, die neue Herausforderungen f\u00fcr Regelungen schaffen',
          'Personen, die sowohl in Luxemburg als auch in Deutschland einer Besch\u00e4ftigung nachgehen'
        ],
        correct: 2,
        explanation: 'Die Folge thematisiert \u201eatypische Grenzg\u00e4nger\u201c als eine wachsende Gruppe mit besonderen Arbeitsmodellen, die neue Herausforderungen f\u00fcr Regelungen und Strukturen in der Gro\u00dfregion schaffen.'
      },
      {
        text: 'Was symbolisiert das Schengener Abkommen laut dieser Folge f\u00fcr die Grenzg\u00e4nger?',
        options: [
          'Prim\u00e4r ein b\u00fcrokratisches Instrument zur Vereinheitlichung von Visa-Vorschriften',
          'Ein Symbol f\u00fcr Freiheit, europ\u00e4isches Miteinander und die M\u00f6glichkeit, ohne Grenzkontrollen zu arbeiten und zu leben',
          'Ein wirtschaftliches Abkommen zwischen Deutschland und Luxemburg',
          'Eine historische Vereinbarung ohne Bedeutung f\u00fcr den heutigen Alltag'
        ],
        correct: 1,
        explanation: 'Die Folge zeigt, dass Schengen f\u00fcr viele Grenzg\u00e4nger weit mehr als ein politisches Dokument ist \u2013 es steht als Symbol f\u00fcr Freiheit, europ\u00e4isches Miteinander und die M\u00f6glichkeit, ohne Grenzkontrollen zwischen Deutschland und Luxemburg zu arbeiten und zu leben.'
      }
    ]
  },
  {
    id: 5,
    number: 'Folge 5',
    title: 'Zwischen Kollegen und Kulturen \u2013 wie sich Arbeiten in Luxemburg anf\u00fchlt',
    description: 'Was passiert, wenn Kollegen aus Deutschland, Frankreich, Luxemburg, Portugal und vielen anderen L\u00e4ndern zusammenarbeiten? Diese Folge beleuchtet Mehrsprachigkeit, interkulturelle Kommunikation und den Cong\u00e9 Linguistique.',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/1wBIFRrEKOGdI99JXZrOnT?utm_source=generator&theme=0',
    topics: ['Mehrsprachigkeit am Arbeitsplatz', 'Cong\u00e9 Linguistique', 'Interkulturelle Kommunikation', 'Sprachkurse', 'Integration im Team', 'Kulturelle Unterschiede'],
    questions: [
      {
        text: 'Was ist der \u201eCong\u00e9 Linguistique\u201c (Sprachurlaub) in Luxemburg?',
        options: [
          'Ein bezahlter Urlaub, den Grenzg\u00e4nger nehmen m\u00fcssen, um Luxemburgisch zu lernen',
          'Ein gesetzlicher Anspruch auf bezahlte Freistellung f\u00fcr Sprachkurse, den Arbeitnehmer in Luxemburg nutzen k\u00f6nnen',
          'Ein Bildungsurlaub, der ausschlie\u00dflich luxemburgischen Staatangeh\u00f6rigen zusteht',
          'Ein freiwilliges Programm des Arbeitgebers ohne gesetzliche Grundlage'
        ],
        correct: 1,
        explanation: 'Der Cong\u00e9 Linguistique ist ein gesetzlicher Anspruch auf bezahlte Freistellung f\u00fcr Sprachkurse in Luxemburg. Arbeitnehmer \u2013 auch Grenzg\u00e4nger \u2013 k\u00f6nnen diese Freistellung f\u00fcr das Erlernen von Luxemburgisch oder anderen Sprachen nutzen.'
      },
      {
        text: 'Zu welchem Forschungsthema arbeitet Lou Pepin an der Universit\u00e4t Luxemburg, der in dieser Folge zu Wort kommt?',
        options: [
          'Wirtschaftliche Auswirkungen der Grenzg\u00e4ngermobilit\u00e4t auf luxemburgische Unternehmen',
          'Die Rolle von Sprache und Mehrsprachigkeit im Leben und Berufsalltag von Grenzg\u00e4ngern',
          'Rechtliche Grundlagen des Grenzg\u00e4ngerstatus in der EU',
          'Digitalisierung und Homeoffice-Regelungen in der Gro\u00dfregion'
        ],
        correct: 1,
        explanation: 'Lou Pepin ist Doktorand an der Universit\u00e4t Luxemburg und forscht zur Rolle von Sprache und Mehrsprachigkeit im Leben von Grenzg\u00e4ngern \u2013 einem zentralen Thema dieser Folge.'
      },
      {
        text: 'Welche Sprachen spielen im luxemburgischen Berufsalltag laut der Folge eine wichtige Rolle?',
        options: [
          'Ausschlie\u00dflich Luxemburgisch, da es die Landessprache ist',
          'Nur Englisch und Franz\u00f6sisch im internationalen Gesch\u00e4ftsumfeld',
          'Franz\u00f6sisch, Luxemburgisch, Deutsch und oft auch Englisch \u2013 je nach Branche und Team',
          'Prim\u00e4r Deutsch, da die meisten Grenzg\u00e4nger aus Deutschland kommen'
        ],
        correct: 2,
        explanation: 'Im luxemburgischen Berufsalltag werden je nach Branche und Team Franz\u00f6sisch, Luxemburgisch, Deutsch und Englisch verwendet. Die Mehrsprachigkeit ist ein besonderes Merkmal des luxemburgischen Arbeitsmarkts.'
      },
      {
        text: 'Welche Herausforderungen erw\u00e4hnen Jan und Ruth, die als deutsche Grenzg\u00e4nger im Gesundheitswesen arbeiten?',
        options: [
          'Zu lange Pendelzeiten machen ihre Arbeit unm\u00f6glich',
          'Sprachliche Anforderungen und die Kommunikation mit Patienten und Kollegen in einem mehrsprachigen Umfeld',
          'Fehlende Anerkennung ihrer deutschen Berufsabschl\u00fcsse',
          'Schwierigkeiten bei der Steuerkl\u00e4rung in Luxemburg'
        ],
        correct: 1,
        explanation: 'Jan und Ruth berichten aus ihrem Berufsalltag im Krankenhaus und Pflegebereich, wo die sprachliche Kommunikation in einem mehrsprachigen Umfeld eine besondere Herausforderung darstellt.'
      },
      {
        text: 'Was sagt die Folge dar\u00fcber, warum Sprache im Team \u201eoft \u00fcber mehr entscheidet als man denkt\u201c?',
        options: [
          'Weil der Arbeitsvertrag in der Sprache des Arbeitgebers verfasst sein muss',
          'Weil Sprachkenntnisse direkt \u00fcber Geh\u00e4lt und Karrierestufe entscheiden',
          'Weil Sprache nicht nur Kommunikationsmittel ist, sondern auch Integration, Vertrauen und Zusammengeh\u00f6rigkeitsgef\u00fchl im Team beeinflusst',
          'Weil fehlende Luxemburgischkenntnisse zur K\u00fcndigung f\u00fchren k\u00f6nnen'
        ],
        correct: 2,
        explanation: 'Die Folge zeigt, dass Sprache im Arbeitsalltag weit mehr ist als ein Kommunikationsmittel: Sie beeinflusst Integration, Vertrauen, Teamzusammengehorigkeitsgef\u00fchl und das Gef\u00fchl, wirklich Teil des Unternehmens zu sein.'
      }
    ]
  },
  {
    id: 6,
    number: 'Folge 6',
    title: 'Malg\u00e9 moi oder Lebensmodell? \u2013 Was das Pendeln wirklich bedeutet',
    description: 'T\u00e4glich pendeln Tausende von Deutschland nach Luxemburg. Welche psychischen und physischen Herausforderungen bringt das Pendeln mit sich? Und warum ist Homeoffice f\u00fcr Grenzg\u00e4nger steuerlich problematisch?',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/17bJDNQazabTYgaSVaZzWJ?utm_source=generator&theme=0',
    topics: ['Pendelbelastung', 'Lebensqualit\u00e4t von Grenzg\u00e4ngern', 'Homeoffice & Steuern', 'Quality of Work Index', 'Chambre des salari\u00e9s', 'Psychische Gesundheit'],
    questions: [
      {
        text: 'Warum ist Homeoffice f\u00fcr Grenzg\u00e4nger nach Luxemburg steuerlich problematisch?',
        options: [
          'Homeoffice ist f\u00fcr Grenzg\u00e4nger in Luxemburg gesetzlich verboten',
          'Arbeitstage im deutschen Wohnsitzstaat k\u00f6nnen die Steuerverteilung zwischen Deutschland und Luxemburg ver\u00e4ndern, sobald bestimmte Schwellenwerte \u00fcberschritten werden',
          'Luxemburgische Arbeitgeber d\u00fcrfen keine Homeoffice-Tage gew\u00e4hren',
          'Im Homeoffice verdienen Grenzg\u00e4nger automatisch weniger, weil luxemburgische Zulagen wegfallen'
        ],
        correct: 1,
        explanation: 'Laut der Folge bleibt Homeoffice f\u00fcr Grenzg\u00e4nger steuerlich komplex: Arbeitstage im deutschen Wohnsitzstaat k\u00f6nnen je nach Anzahl die Steuerverteilung zwischen Deutschland und Luxemburg beeinflussen, was die Attraktivit\u00e4t von Homeoffice-Regelungen einschr\u00e4nkt.'
      },
      {
        text: 'Wer ist David B\u00fcchel und welche Expertise bringt er in dieser Folge ein?',
        options: [
          'Er ist Pendlerbeauftragter der luxemburgischen Regierung und erkl\u00e4rt neue Mobili\u00e4tsprojekte',
          'Er ist Arbeitspsychologe bei der Chambre des salari\u00e9s und forscht zur Arbeitsqualit\u00e4t und zum Wohlbefinden von Besch\u00e4ftigten in Luxemburg',
          'Er ist Verkehrsplaner und erkl\u00e4rt Infrastrukturma\u00dfnahmen f\u00fcr Pendler',
          'Er ist Steuerberater und ber\u00e4t Grenzg\u00e4nger zu Homeoffice und Steuerrecht'
        ],
        correct: 1,
        explanation: 'David B\u00fcchel ist Arbeitspsychologe bei der Chambre des salari\u00e9s in Luxemburg. Er forscht zur Arbeitsqualit\u00e4t und zum Wohlbefinden der Erwerbst\u00e4tigen und erkl\u00e4rt in der Folge, was Studien \u00fcber die Lebensqualit\u00e4t der Grenzg\u00e4nger zeigen.'
      },
      {
        text: 'Welche Herausforderungen erw\u00e4hnt die Folge konkret im Zusammenhang mit dem t\u00e4glichen Pendeln?',
        options: [
          'Sprachbarrieren beim Einkaufen in Luxemburg',
          'Psychische und k\u00f6rperliche Belastungen wie Stress durch Staus, lange Pendelzeiten und das Spannungsfeld zwischen Beruf und Privatleben',
          'Probleme bei der Wohnungssuche in der N\u00e4he der Grenze',
          'Fehlende Kinderbetreuungsangebote in luxemburgischen Unternehmen'
        ],
        correct: 1,
        explanation: 'Die Folge thematisiert konkret psychische und k\u00f6rperliche Belastungen durch das Pendeln: Stresssymptome, Staus, lange Fahrzeiten und die Schwierigkeit, Beruf und Privatleben in Balance zu halten.'
      },
      {
        text: 'Was zeigt der \u201eQuality of Work Index\u201c, den die Chambre des salari\u00e9s in dieser Folge erw\u00e4hnt?',
        options: [
          'Eine Rangliste der beliebtesten Arbeitgeber in Luxemburg',
          'Eine j\u00e4hrliche Erhebung zur Zufriedenheit, Arbeitsbedingungen und Lebensqualit\u00e4t von Besch\u00e4ftigten in Luxemburg \u2013 auch f\u00fcr Grenzg\u00e4nger',
          'Einen Vergleich der Mindestl\u00f6hne in der Gro\u00dfregion',
          'Eine Statistik \u00fcber Krankenst\u00e4nde in luxemburgischen Unternehmen'
        ],
        correct: 1,
        explanation: 'Der Quality of Work Index der Chambre des salari\u00e9s ist eine j\u00e4hrliche Erhebung, die Zufriedenheit, Arbeitsbedingungen und Wohlbefinden von Besch\u00e4ftigten in Luxemburg misst \u2013 und damit auch Einblicke in die Situation der Grenzg\u00e4nger gibt.'
      },
      {
        text: 'Warum bleiben laut der Folge viele Grenzg\u00e4nger trotz der Pendelbelastung bei ihrer Arbeit in Luxemburg?',
        options: [
          'Weil sie gesetzlich verpflichtet sind, f\u00fcr mindestens 10 Jahre in Luxemburg zu arbeiten',
          'Weil sie trotz der Herausforderungen Vorteile wie h\u00f6here L\u00f6hne, soziale Absicherung und berufliche Perspektiven sch\u00e4tzen',
          'Weil es in Deutschland keine vergleichbaren Arbeitspl\u00e4tze gibt',
          'Weil die Pendelstrecke in Luxemburg staatlich subventioniert wird'
        ],
        correct: 1,
        explanation: 'Die Folge zeigt, dass viele Grenzg\u00e4nger trotz der Belastungen bewusst in Luxemburg arbeiten, weil sie die Vorteile \u2013 h\u00f6here L\u00f6hne, gute soziale Absicherung, berufliche M\u00f6glichkeiten \u2013 als attraktiv empfinden.'
      }
    ]
  },
  {
    id: 7,
    number: 'Folge 7',
    title: 'Mehr als Arbeiten \u2013 wie Grenzg\u00e4nger Teil der Gesellschaft werden',
    description: 'Wie k\u00f6nnen Grenzg\u00e4nger am gesellschaftlichen Leben in Luxemburg teilhaben? Was bieten der Biergerpakt und der Gemengepakt? Und wie l\u00e4sst sich Ehrenamt ohne Wohnsitz in Luxemburg auszu\u00fcben?',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/02BadNZkJrjzj1actHXRDb?utm_source=generator&theme=0',
    topics: ['Biergerpakt', 'Gemengepakt', 'Ehrenamt in Luxemburg', 'Gesetz zum interkulturellen Zusammenleben', 'B\u00fcrgerateliers', 'Agence du B\u00e9n\u00e9volat'],
    questions: [
      {
        text: 'Was ist der \u201eBiergerpakt\u201c und was bietet er Grenzg\u00e4ngern?',
        options: [
          'Ein gesetzliches Programm, das Grenzg\u00e4nger zur Zahlung zus\u00e4tzlicher Abgaben verpflichtet',
          'Eine luxemburgische Regierungsinitiative, die Grenzg\u00e4nger einl\u00e4dt, Luxemburg besser kennenzulernen \u2013 durch Sprach-, Kultur- und Begegnungsangebote',
          'Ein bilaterales Abkommen zwischen Deutschland und Luxemburg zum Schutz von Pendlerrechten',
          'Ein Programm ausschlie\u00dflich f\u00fcr Personen, die die luxemburgische Staatsb\u00fcrgerschaft anstreben'
        ],
        correct: 1,
        explanation: 'Der Biergerpakt ist eine luxemburgische Regierungsinitiative, die alle in Luxemburg arbeitenden Menschen \u2013 auch Grenzg\u00e4nger ohne Wohnsitz in Luxemburg \u2013 einl\u00e4dt, das Land besser kennenzulernen und am gesellschaftlichen Leben teilzunehmen: durch Sprachkurse, Orientierungsmodule, Bürgerateliers und kulturelle Angebote.'
      },
      {
        text: 'Was ist der \u201eGemengepakt\u201c, der in dieser Folge vorgestellt wird?',
        options: [
          'Ein kommunales Abkommen zwischen luxemburgischen Gemeinden und Deutschland',
          'Ein Programm, das Grenzg\u00e4nger zu gesellschaftlichem Engagement und Mitgestaltung in ihrer Arbeitsgemeinde einl\u00e4dt',
          'Eine Vereinbarung zwischen Arbeitgebern und Arbeitnehmern \u00fcber soziale Leistungen',
          'Ein staatliches Hilfsprogramm f\u00fcr Grenzg\u00e4nger in finanziellen Schwierigkeiten'
        ],
        correct: 1,
        explanation: 'Der Gemengepakt richtet sich an Grenzg\u00e4nger und l\u00e4dt sie ein, sich in ihrer Arbeitsgemeinde zu engagieren und am lokalen Zusammenleben mitzugestalten \u2013 auch ohne offiziellen Wohnsitz in Luxemburg.'
      },
      {
        text: 'Was erkl\u00e4rt der luxemburgische Familienminister Max Hahn in dieser Folge?',
        options: [
          'Er erl\u00e4utert die Rentenanpassungen f\u00fcr Grenzg\u00e4nger ab 2025',
          'Er erkl\u00e4rt, warum das neue Gesetz zum interkulturellen Zusammenleben (2023) einen Paradigmenwechsel in der luxemburgischen Integrationspolitik darstellt',
          'Er stellt neue Steuerverg\u00fcnstigungen f\u00fcr Grenzg\u00e4nger vor',
          'Er diskutiert die Ergebnisse der letzten Parlamentswahlen'
        ],
        correct: 1,
        explanation: 'Max Hahn, luxemburgischer Minister f\u00fcr Familie, Solidarit\u00e4t, Zusammenleben und Unterbringung von Fl\u00fcchtlingen, erkl\u00e4rt in der Folge, warum das 2023 verabschiedete Gesetz zum interkulturellen Zusammenleben einen Paradigmenwechsel in der luxemburgischen Integrations- und Teilhabepolitik darstellt.'
      },
      {
        text: 'K\u00f6nnen Grenzg\u00e4nger ohne Wohnsitz in Luxemburg in luxemburgischen Vereinen und im Ehrenamt aktiv sein?',
        options: [
          'Nein, ehrenamtliches Engagement setzt einen offiziellen Wohnsitz in Luxemburg voraus',
          'Ja, laut Leonie Fischer-Unterrainer von der Agence du B\u00e9n\u00e9volat k\u00f6nnen sich Grenzg\u00e4nger problemlos ehrenamtlich einbringen \u2013 ohne Wohnsitz in Luxemburg',
          'Nur in Vereinen, die speziell f\u00fcr Grenzg\u00e4nger gegr\u00fcndet wurden',
          'Nur f\u00fcr Personen, die seit mindestens 5 Jahren in Luxemburg arbeiten'
        ],
        correct: 1,
        explanation: 'Leonie Fischer-Unterrainer von der Agence du B\u00e9n\u00e9volat erkl\u00e4rt in der Folge, dass sich Grenzg\u00e4nger sehr wohl ehrenamtlich in Luxemburg engagieren k\u00f6nnen \u2013 ein Wohnsitz in Luxemburg ist daf\u00fcr keine Voraussetzung.'
      },
      {
        text: 'Welche konkreten Angebote stellt Anne Daems vom Familienministerium in der Folge vor?',
        options: [
          'Neue Pendlertickets und Fahrtkostenerstattungen f\u00fcr Grenzg\u00e4nger',
          'Einen digitalen Sprachcode, Orientierungstage und B\u00fcrgerateliers in der Arbeitsgemeinde \u2013 als Wege zur gesellschaftlichen Teilhabe f\u00fcr Grenzg\u00e4nger',
          'Steuerliche Anreize f\u00fcr Grenzg\u00e4nger, die sich ehrenamtlich engagieren',
          'Neue Regelungen zur Kinderbetreuung f\u00fcr Grenzg\u00e4nger'
        ],
        correct: 1,
        explanation: 'Anne Daems aus der Abteilung \u201eZusammenleben\u201c des Familienministeriums stellt konkrete Teilhabeangebote vor: einen digitalen Sprachcode, Orientierungstage sowie B\u00fcrgerateliers in der jeweiligen Arbeitsgemeinde.'
      }
    ]
  }
];

// ── Persistenz: gespeicherte Fragen vom Server laden ──
function loadSavedEpisodes(callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', '/api/questions', true);
  xhr.onload = function() {
    try {
      if (xhr.status === 200) {
        var parsed = JSON.parse(xhr.responseText);
        if (parsed && Array.isArray(parsed)) {
          parsed.forEach(function(savedEp) {
            var ep = EPISODES.find(function(e) { return e.id === savedEp.id; });
            if (ep && savedEp.questions) {
              ep.questions = savedEp.questions;
            }
          });
        }
      }
    } catch (e) {}
    if (callback) callback();
  };
  xhr.onerror = function() { if (callback) callback(); };
  xhr.send();
}

// ── Quiz-Status ───────────────────────────────────────────
let answers      = [];
let wrongIndices = [];
let retryIndices = [];
let retryPos     = 0;
let curIndex     = 0;
let isRetry      = false;

// ── Hilfsfunktionen ──────────────────────────────────────
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function hide(id) { document.getElementById(id).classList.add('hidden'); }
function show(id) { document.getElementById(id).classList.remove('hidden'); }

// ── Registrierung ────────────────────────────────────────
function doRegister() {
  var fn  = document.getElementById('inp-first').value.trim();
  var ln  = document.getElementById('inp-last').value.trim();
  var mat = document.getElementById('inp-mat').value.trim();
  var em  = document.getElementById('inp-email').value.trim();
  var ok  = true;

  function check(val, inputId, errId, testFn) {
    var inp = document.getElementById(inputId);
    var err = document.getElementById(errId);
    if (!testFn(val)) {
      inp.classList.add('error');
      err.style.display = 'block';
      ok = false;
    } else {
      inp.classList.remove('error');
      err.style.display = 'none';
    }
  }

  check(fn,  'inp-first', 'err-first', function(v) { return v.length > 0; });
  check(ln,  'inp-last',  'err-last',  function(v) { return v.length > 0; });
  check(mat, 'inp-mat',   'err-mat',   function(v) { return /^\d{13}$/.test(v); });
  check(em,  'inp-email', 'err-email', function(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); });

  if (!ok) return;

  user = { firstName: fn, lastName: ln, matrikel: mat, email: em };
  renderEpisodeList();
  showScreen('screen-episodes');
}

// ── Episodenliste rendern ─────────────────────────────────
function renderEpisodeList() {
  var grid = document.getElementById('episode-grid');
  grid.innerHTML = '';
  EPISODES.forEach(function(ep) {
    var card = document.createElement('div');
    card.className = 'ep-list-card';
    card.innerHTML =
      '<div class="ep-list-badge">' + ep.number + '</div>' +
      '<div class="ep-list-title">' + ep.title + '</div>' +
      '<div class="ep-list-desc">' + ep.description + '</div>' +
      '<button class="btn ep-list-btn">Folge anh\u00f6ren & Quiz starten \u2192</button>';
    card.querySelector('button').addEventListener('click', function() {
      selectEpisode(ep.id);
    });
    grid.appendChild(card);
  });
}

// ── Episode ausw\u00e4hlen ──────────────────────────────────────
function selectEpisode(id) {
  selectedEpisode = EPISODES.find(function(e) { return e.id === id; });
  renderEpisodeDetail();
  showScreen('screen-episode');
}

// ── Episode-Detailseite rendern ───────────────────────────
function renderEpisodeDetail() {
  var ep = selectedEpisode;

  document.getElementById('ep-badge').textContent = ep.number;
  document.getElementById('ep-title').textContent = ep.title;
  document.getElementById('ep-description').textContent = ep.description;

  // Spotify Player
  document.getElementById('ep-spotify').src = ep.spotifyEmbed;

  // Themen-Chips
  var chipsWrap = document.getElementById('ep-topics');
  chipsWrap.innerHTML = '';
  ep.topics.forEach(function(t) {
    var chip = document.createElement('div');
    chip.className = 'topic-chip';
    chip.textContent = t;
    chipsWrap.appendChild(chip);
  });
}

// ── Quiz starten ─────────────────────────────────────────
function startQuiz() {
  answers      = new Array(selectedEpisode.questions.length).fill(-1);
  wrongIndices = [];
  curIndex     = 0;
  isRetry      = false;
  document.getElementById('q-label').textContent = selectedEpisode.number + ' \u2013 Grenzgeschichten';
  showScreen('screen-quiz');
  renderQuestion(0);
}

// ── Frage rendern ─────────────────────────────────────────
function renderQuestion(idx) {
  var q     = selectedEpisode.questions[idx];
  var total = selectedEpisode.questions.length;

  document.getElementById('q-counter').textContent  = 'Frage ' + (idx + 1) + ' von ' + total;
  document.getElementById('q-eyebrow').textContent  = 'Frage ' + (idx + 1);
  document.getElementById('q-text').textContent     = q.text;
  document.getElementById('q-progress').style.width = (((idx + 1) / total) * 100) + '%';

  var optWrap = document.getElementById('q-options');
  optWrap.innerHTML = '';
  var letters = ['A', 'B', 'C', 'D'];

  q.options.forEach(function(text, i) {
    var div = document.createElement('div');
    div.className = 'option';
    div.innerHTML =
      '<div class="opt-letter">' + letters[i] + '</div>' +
      '<div class="opt-text">' + text + '</div>';
    div.addEventListener('click', function() { selectAnswer(i); });
    optWrap.appendChild(div);
  });

  var fb = document.getElementById('q-feedback');
  fb.className = 'feedback';
  fb.textContent = '';
  hide('btn-next');
}

// ── Antwort ausw\u00e4hlen ─────────────────────────────────────
function selectAnswer(chosen) {
  if (!document.getElementById('btn-next').classList.contains('hidden')) return;

  var q    = selectedEpisode.questions[curIndex];
  var opts = document.querySelectorAll('.option');

  answers[curIndex] = chosen;

  opts.forEach(function(el) {
    el.style.cursor = 'default';
    el.replaceWith(el.cloneNode(true));
  });

  document.querySelectorAll('.option').forEach(function(el, i) {
    if (i === q.correct)               el.classList.add('correct');
    if (i === chosen && i !== q.correct) el.classList.add('wrong');
    if (i === chosen && i === q.correct) el.classList.add('correct');
  });

  var fb = document.getElementById('q-feedback');
  if (chosen === q.correct) {
    fb.className = 'feedback show ok';
    fb.innerHTML = '<strong>\u2705 Richtig!</strong> ' + q.explanation;
  } else {
    fb.className = 'feedback show fail';
    fb.innerHTML = '<strong>\u274c Leider falsch.</strong> Die korrekte Antwort ist: <strong>' +
      q.options[q.correct] + '</strong>. ' + q.explanation;
  }

  show('btn-next');
}

// ── N\u00e4chste Frage ─────────────────────────────────────────
function nextQuestion() {
  if (isRetry) {
    retryPos++;
    if (retryPos < retryIndices.length) {
      curIndex = retryIndices[retryPos];
      renderQuestion(curIndex);
    } else {
      showResults();
    }
  } else {
    curIndex++;
    if (curIndex < selectedEpisode.questions.length) {
      renderQuestion(curIndex);
    } else {
      showResults();
    }
  }
}

// ── Ergebnisse ────────────────────────────────────────────
function showResults() {
  wrongIndices = [];
  answers.forEach(function(ans, i) {
    if (ans !== selectedEpisode.questions[i].correct) wrongIndices.push(i);
  });

  var nCorrect = selectedEpisode.questions.length - wrongIndices.length;

  document.getElementById('score-n').textContent = nCorrect;
  document.getElementById('score-d').textContent = 'von ' + selectedEpisode.questions.length;

  var ring = document.getElementById('score-ring');

  if (nCorrect === selectedEpisode.questions.length) {
    ring.style.background = 'var(--green)';
    document.getElementById('score-title').textContent = '\uD83C\uDF89 Ausgezeichnet \u2013 alles richtig!';
    document.getElementById('score-msg').textContent   = 'Sie haben alle Fragen korrekt beantwortet. Sie k\u00f6nnen nun Ihr Teilnahmezertifikat herunterladen.';
    hide('retry-card');
    show('success-banner');
  } else {
    ring.style.background = 'var(--orange)';
    document.getElementById('score-title').textContent = nCorrect + ' von ' + selectedEpisode.questions.length + ' Fragen richtig';
    document.getElementById('score-msg').textContent   = 'Um das Zertifikat zu erhalten, m\u00fcssen alle Fragen korrekt beantwortet werden. Bitte h\u00f6ren Sie die entsprechenden Teile der Folge noch einmal an.';

    var list = document.getElementById('wrong-list');
    list.innerHTML = wrongIndices.map(function(i) {
      return '<div class="wrong-item"><strong>Frage ' + (i + 1) + ':</strong> ' + selectedEpisode.questions[i].text + '</div>';
    }).join('');

    show('retry-card');
    hide('success-banner');
  }

  showScreen('screen-results');
}

// ── Falsche Fragen wiederholen ────────────────────────────
function retryWrong() {
  isRetry      = true;
  retryIndices = wrongIndices.slice();
  retryPos     = 0;
  curIndex     = retryIndices[0];
  retryIndices.forEach(function(i) { answers[i] = -1; });
  showScreen('screen-quiz');
  renderQuestion(curIndex);
}

// ── Zertifikat ────────────────────────────────────────────
function showCertificate() {
  document.getElementById('cert-name-out').textContent    = user.firstName + ' ' + user.lastName;
  document.getElementById('cert-mat-out').textContent     = user.matrikel;
  document.getElementById('cert-episode-out').textContent = selectedEpisode.number + ': ' + selectedEpisode.title;
  document.getElementById('cert-date-out').textContent    = new Date().toLocaleDateString('de-DE', {
    day: '2-digit', month: 'long', year: 'numeric'
  });
  showScreen('screen-certificate');
}

// ── Admin ────────────────────────────────────────────────
var ADMIN_PASSWORD = 'biergerpakt';
var adminEpisodeIndex = 0;

function adminLogin() {
  var pw = document.getElementById('admin-pw').value;
  var errEl = document.getElementById('admin-pw-error');
  if (pw === ADMIN_PASSWORD) {
    errEl.style.display = 'none';
    document.getElementById('admin-pw').value = '';
    adminEpisodeIndex = 0;
    renderAdminTabs();
    renderAdminQuestions();
    showScreen('screen-admin');
  } else {
    errEl.style.display = 'block';
  }
}

function renderAdminTabs() {
  var wrap = document.getElementById('admin-ep-tabs');
  wrap.innerHTML = '';
  EPISODES.forEach(function(ep, i) {
    var btn = document.createElement('button');
    btn.className = 'admin-ep-tab' + (i === adminEpisodeIndex ? ' active' : '');
    btn.textContent = ep.number;
    btn.addEventListener('click', function() {
      adminEpisodeIndex = i;
      renderAdminTabs();
      renderAdminQuestions();
    });
    wrap.appendChild(btn);
  });
}

function renderAdminQuestions() {
  var ep = EPISODES[adminEpisodeIndex];
  var wrap = document.getElementById('admin-questions');
  wrap.innerHTML = '';

  var header = document.createElement('div');
  header.style.cssText = 'margin-bottom:20px;';
  header.innerHTML = '<h2 style="font-size:1.1rem; font-weight:800; color:var(--dark);">' + ep.number + ': ' + ep.title + '</h2>';
  wrap.appendChild(header);

  ep.questions.forEach(function(q, qi) {
    var card = document.createElement('div');
    card.className = 'admin-q-card';

    var letters = ['A', 'B', 'C', 'D'];
    var optionsHtml = '';
    q.options.forEach(function(opt, oi) {
      var checked = oi === q.correct ? ' checked' : '';
      optionsHtml +=
        '<div class="admin-option-row">' +
          '<label class="admin-radio-label">' +
            '<input type="radio" name="admin-correct-' + qi + '"' + checked + ' data-qi="' + qi + '" data-oi="' + oi + '">' +
            '<span>' + letters[oi] + '</span>' +
          '</label>' +
          '<input type="text" data-qi="' + qi + '" data-oi="' + oi + '" class="admin-opt-input" value="' + escapeAttr(opt) + '">' +
        '</div>';
    });

    card.innerHTML =
      '<h3>Frage ' + (qi + 1) + '</h3>' +
      '<div class="admin-field">' +
        '<label>Fragetext</label>' +
        '<textarea class="admin-q-text" data-qi="' + qi + '" rows="2">' + escapeHtml(q.text) + '</textarea>' +
      '</div>' +
      '<div class="admin-field">' +
        '<label>Antwortm\u00f6glichkeiten (Korrekte Antwort ausw\u00e4hlen)</label>' +
        optionsHtml +
      '</div>' +
      '<div class="admin-field">' +
        '<label>Erkl\u00e4rung</label>' +
        '<textarea class="admin-q-expl" data-qi="' + qi + '" rows="3">' + escapeHtml(q.explanation) + '</textarea>' +
      '</div>';

    wrap.appendChild(card);
  });
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function adminSave() {
  var ep = EPISODES[adminEpisodeIndex];

  document.querySelectorAll('.admin-q-text').forEach(function(el) {
    var qi = parseInt(el.getAttribute('data-qi'));
    ep.questions[qi].text = el.value;
  });

  document.querySelectorAll('.admin-opt-input').forEach(function(el) {
    var qi = parseInt(el.getAttribute('data-qi'));
    var oi = parseInt(el.getAttribute('data-oi'));
    ep.questions[qi].options[oi] = el.value;
  });

  document.querySelectorAll('input[type="radio"]:checked').forEach(function(el) {
    var qi = parseInt(el.getAttribute('data-qi'));
    var oi = parseInt(el.getAttribute('data-oi'));
    ep.questions[qi].correct = oi;
  });

  document.querySelectorAll('.admin-q-expl').forEach(function(el) {
    var qi = parseInt(el.getAttribute('data-qi'));
    ep.questions[qi].explanation = el.value;
  });

  // Persist to server
  var toSave = EPISODES.map(function(ep) {
    return { id: ep.id, questions: ep.questions };
  });

  var saveBtn = document.getElementById('btn-admin-save');
  saveBtn.disabled = true;
  saveBtn.textContent = 'Speichern\u2026';

  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/api/questions', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    saveBtn.disabled = false;
    saveBtn.textContent = '\u00c4nderungen speichern';
    var msg = document.getElementById('admin-saved-msg');
    if (xhr.status === 200) {
      msg.style.display = 'inline';
      msg.style.color = 'var(--green)';
      msg.textContent = '\u2713 Gespeichert!';
    } else {
      msg.style.display = 'inline';
      msg.style.color = 'var(--red)';
      msg.textContent = '\u2717 Fehler beim Speichern';
    }
    setTimeout(function() { msg.style.display = 'none'; }, 2500);
  };
  xhr.onerror = function() {
    saveBtn.disabled = false;
    saveBtn.textContent = '\u00c4nderungen speichern';
    var msg = document.getElementById('admin-saved-msg');
    msg.style.display = 'inline';
    msg.style.color = 'var(--red)';
    msg.textContent = '\u2717 Verbindungsfehler';
    setTimeout(function() { msg.style.display = 'none'; }, 2500);
  };
  xhr.send(JSON.stringify(toSave));
}

function adminReset() {
  if (!confirm('Alle \u00c4nderungen werden gel\u00f6scht und die Originalfragen wiederhergestellt. Fortfahren?')) return;
  var xhr = new XMLHttpRequest();
  xhr.open('DELETE', '/api/questions', true);
  xhr.onload = function() { location.reload(); };
  xhr.onerror = function() { location.reload(); };
  xhr.send();
}

// ── Event Listeners (nach DOM-Laden) ─────────────────────
document.addEventListener('DOMContentLoaded', function() {
  // Load saved questions from server before anything else
  loadSavedEpisodes();

  document.getElementById('btn-register').addEventListener('click', doRegister);
  document.getElementById('btn-start-quiz').addEventListener('click', startQuiz);
  document.getElementById('btn-next').addEventListener('click', nextQuestion);
  document.getElementById('btn-retry').addEventListener('click', retryWrong);
  document.getElementById('btn-show-cert').addEventListener('click', showCertificate);
  document.getElementById('btn-print').addEventListener('click', function() { window.print(); });
  document.getElementById('btn-back-episode').addEventListener('click', function() { showScreen('screen-episode'); });
  document.getElementById('btn-back-episodes').addEventListener('click', function() { showScreen('screen-episodes'); });
  document.getElementById('btn-back-episodes-result').addEventListener('click', function() {
    showScreen('screen-episodes');
  });

  // Admin
  document.getElementById('btn-admin-login').addEventListener('click', adminLogin);
  document.getElementById('admin-pw').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') adminLogin();
  });
  document.getElementById('btn-admin-save').addEventListener('click', adminSave);
  document.getElementById('btn-admin-reset').addEventListener('click', adminReset);
});
