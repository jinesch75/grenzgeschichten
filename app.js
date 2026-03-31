// ── Nutzerdaten ───────────────────────────────────────────
let user = {};
let selectedEpisode = null;

// ── Episoden ──────────────────────────────────────────────
const EPISODES = [
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
    title: 'Ausbildung und Studium in Luxemburg',
    description: 'Studienbeihilfen, Berufsausbildung und Abschlussanerkennung: Welche F\u00f6rderungen stehen Grenzg\u00e4ngern und ihren Kindern in Luxemburg zu und wie funktioniert das Bildungssystem?',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/2A7uEn44lvZtSdGfws4DzR?utm_source=generator&theme=0',
    topics: ['Studienbeihilfe (bourse d\u2019\u00e9tudes)', 'Anerkennung von Abschl\u00fcssen', 'Duale Ausbildung', 'guichet.lu', 'MENJE', 'F\u00f6rderbedingungen'],
    questions: [
      {
        text: 'Kann ein in Deutschland wohnhafter Grenzg\u00e4nger f\u00fcr sein Kind Studienbeihilfe (bourse d\u2019\u00e9tudes) in Luxemburg beantragen?',
        options: [
          'Nein, nur luxemburgische Wohnans\u00e4ssige haben Anspruch',
          'Ja, wenn mindestens ein Elternteil in Luxemburg besch\u00e4ftigt ist und bestimmte Voraussetzungen erf\u00fcllt sind',
          'Nur wenn das Kind die luxemburgische Staatsangeh\u00f6rigkeit besitzt',
          'Nur f\u00fcr ein Studium an einer luxemburgischen Universit\u00e4t'
        ],
        correct: 1,
        explanation: 'Kinder von Grenzg\u00e4ngern k\u00f6nnen luxemburgische Studienbeihilfe erhalten, sofern mindestens ein Elternteil in Luxemburg arbeitet und weitere Voraussetzungen (u.\u00a0a. Mindesteinkommen) erf\u00fcllt sind. Das Studium muss nicht in Luxemburg stattfinden.'
      },
      {
        text: 'Wo stellt man als Grenzg\u00e4nger einen Antrag auf Studienbeihilfe in Luxemburg?',
        options: [
          'Bei der deutschen Bundesagentur f\u00fcr Arbeit',
          'Beim luxemburgischen Arbeitsamt (ADEM)',
          '\u00dcber das Portal guichet.lu (B\u00fcrgerportal Luxemburgs)',
          'Beim deutschen BAf\u00f6G-Amt'
        ],
        correct: 2,
        explanation: 'Alle Antr\u00e4ge auf Studienbeihilfe in Luxemburg werden \u00fcber das offizielle B\u00fcrgerportal guichet.lu gestellt. Dort finden sich auch alle n\u00f6tigen Informationen zu Fristen, Unterlagen und Voraussetzungen.'
      },
      {
        text: 'Werden deutsche Schul- und Berufsabschl\u00fcsse in Luxemburg automatisch anerkannt?',
        options: [
          'Ja, innerhalb der EU werden alle Abschl\u00fcsse automatisch anerkannt',
          'Nein, in Luxemburg gibt es kein Anerkennungsverfahren',
          'Nicht automatisch; es ist in der Regel ein offizielles Anerkennungsverfahren beim zust\u00e4ndigen Ministerium notwendig',
          'Nur Universit\u00e4tsabschl\u00fcsse werden anerkannt, keine Berufsausbildungen'
        ],
        correct: 2,
        explanation: 'Deutsche Abschl\u00fcsse werden in Luxemburg nicht automatisch anerkannt. Das zust\u00e4ndige Ministerium (MENJE f\u00fcr Bildung) pr\u00fcft die Gleichwertigkeit und stellt eine Anerkennung aus. F\u00fcr reglementierte Berufe gibt es zus\u00e4tzliche Anforderungen.'
      },
      {
        text: 'Was ist das duale Ausbildungssystem (formation en alternance) in Luxemburg?',
        options: [
          'Eine Ausbildung, die vollst\u00e4ndig im Betrieb ohne Schulunterricht stattfindet',
          'Eine Kombination aus betrieblicher Praxis und theoretischem Unterricht an einer Berufsschule',
          'Ein ausschlie\u00dflich schulisches Programm ohne Betriebspraktika',
          'Ein Fernstudienangebot ausschlie\u00dflich f\u00fcr Grenzg\u00e4nger'
        ],
        correct: 1,
        explanation: 'Das duale Ausbildungssystem (formation en alternance) in Luxemburg verbindet praktische Ausbildung im Betrieb mit theoretischem Unterricht an einer Berufsschule \u2013 \u00e4hnlich wie in Deutschland. Grenzg\u00e4nger k\u00f6nnen diese Ausbildungsform ebenfalls nutzen.'
      },
      {
        text: 'Welche Institution ist in Luxemburg haupts\u00e4chlich f\u00fcr die Anerkennung ausl\u00e4ndischer Schul- und Bildungsabschl\u00fcsse zust\u00e4ndig?',
        options: [
          'Die ADEM (Agence pour le D\u00e9veloppement de l\u2019Emploi)',
          'Das Bildungsministerium (MENJE \u2013 Minist\u00e8re de l\u2019\u00c9ducation nationale, de l\u2019Enfance et de la Jeunesse)',
          'Die Handelskammer (Chambre de Commerce)',
          'Die Universit\u00e4t Luxemburg'
        ],
        correct: 1,
        explanation: 'Das MENJE (Bildungsministerium) ist die zust\u00e4ndige Beh\u00f6rde f\u00fcr die Anerkennung ausl\u00e4ndischer Schul- und Bildungsabschl\u00fcsse in Luxemburg. F\u00fcr Berufsqualifikationen k\u00f6nnen je nach Beruf auch andere Ministerien zust\u00e4ndig sein.'
      }
    ]
  },
  {
    id: 3,
    number: 'Folge 3',
    title: 'Rente und Mitbestimmung am Arbeitsplatz',
    description: 'Wann kann ich in Luxemburg in Rente gehen? Wie funktioniert die Krankenversicherung im Ruhestand? Und welche Mitbestimmungsrechte haben Grenzg\u00e4nger im Betrieb?',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/6oXlUxVM1GtDs9ISZc28hg?utm_source=generator&theme=0',
    topics: ['Luxemburgische Rente', 'Rentenalter', 'Krankenversicherung im Ruhestand', 'Personaldelegation', 'Sozialwahlen', 'Mitbestimmungsrechte'],
    questions: [
      {
        text: 'Wann hat ein Grenzg\u00e4nger, der ausschlie\u00dflich in Luxemburg gearbeitet hat, Anspruch auf die volle luxemburgische Rente (pension compl\u00e8te)?',
        options: [
          'Mit 60 Jahren, unabh\u00e4ngig von der Beitragszeit',
          'Nach 40 Beitragsjahren oder mit 65 Jahren nach mindestens 10 Beitragsjahren',
          'Mit 67 Jahren wie in Deutschland',
          'Erst nach 30 Jahren Besch\u00e4ftigung in Luxemburg'
        ],
        correct: 1,
        explanation: 'In Luxemburg hat man nach 40 Beitragsjahren Anspruch auf die volle Rente (unabh\u00e4ngig vom Alter). Mit 65 Jahren gen\u00fcgen mindestens 10 Beitragsjahre. Grenzg\u00e4nger haben dieselben Rentenanspruch wie in Luxemburg wohnhafte Arbeitnehmer.'
      },
      {
        text: 'Wie ist die Krankenversicherung f\u00fcr luxemburgische Rentner geregelt, die ihren Wohnsitz in Deutschland haben?',
        options: [
          'Sie sind weiterhin bei der deutschen Krankenkasse versichert',
          'Sie m\u00fcssen eine private Krankenversicherung abschlie\u00dfen',
          'Als Bezieher einer luxemburgischen Rente bleiben sie \u00fcber die CNS (luxemburgische Krankenversicherung) krankenversichert',
          'Sie haben keinen Anspruch auf Krankenversicherung'
        ],
        correct: 2,
        explanation: 'Wer eine luxemburgische Rente bezieht, bleibt \u00fcber die CNS krankenversichert \u2013 auch wenn er in Deutschland wohnt. Die CNS \u00fcbernimmt die Kosten f\u00fcr medizinische Behandlungen, die in Deutschland entstehen, im Rahmen der EU-Koordinierungsregeln.'
      },
      {
        text: 'Was sind die Sozialwahlen (d\u00e9l\u00e9gations du personnel) in Luxemburg?',
        options: [
          'Eine Volksabstimmung \u00fcber sozialpolitische Themen in Luxemburg',
          'Wahlen zum luxemburgischen Parlament (Chambre des D\u00e9put\u00e9s)',
          'Betriebsinterne Wahlen, bei denen Arbeitnehmer ihre Personalvertreter (d\u00e9l\u00e9gation du personnel) w\u00e4hlen',
          'Wahlen zur Handelskammer (Chambre de Commerce)'
        ],
        correct: 2,
        explanation: 'Alle 5 Jahre finden in luxemburgischen Betrieben Sozialwahlen statt, bei denen die Belegschaft ihre Personalvertreter (d\u00e9l\u00e9gation du personnel) w\u00e4hlt. Diese vertreten die Interessen der Arbeitnehmer gegen\u00fcber dem Arbeitgeber.'
      },
      {
        text: 'Ab wie vielen Mitarbeitern m\u00fcssen luxemburgische Unternehmen eine Personaldelegation (d\u00e9l\u00e9gation du personnel) einrichten?',
        options: [
          'Ab 5 Mitarbeitern',
          'Ab 15 Mitarbeitern',
          'Ab 50 Mitarbeitern',
          'Ab 100 Mitarbeitern'
        ],
        correct: 1,
        explanation: 'In Luxemburg m\u00fcssen Unternehmen ab 15 Mitarbeitern eine Personaldelegation einrichten. Diese vertritt alle Arbeitnehmer des Betriebs, unabh\u00e4ngig von deren Nationalit\u00e4t oder Wohnsitz.'
      },
      {
        text: 'K\u00f6nnen deutsche Grenzg\u00e4nger an den Personalwahlen (Sozialwahlen) in luxemburgischen Betrieben teilnehmen?',
        options: [
          'Nein, nur luxemburgische Staatsangeh\u00f6rige sind wahlberechtigt',
          'Nein, nur in Luxemburg wohnhafte Arbeitnehmer d\u00fcrfen w\u00e4hlen',
          'Ja, als Arbeitnehmer des Betriebs haben Grenzg\u00e4nger dasselbe aktive und passive Wahlrecht wie alle anderen Kollegen',
          'Nur als Wahlbeobachter, aber nicht als Kandidaten'
        ],
        correct: 2,
        explanation: 'Grenzg\u00e4nger haben bei den Sozialwahlen in luxemburgischen Betrieben dasselbe aktive (w\u00e4hlen) und passive (gew\u00e4hlt werden) Wahlrecht wie alle anderen Arbeitnehmer des Unternehmens. Nationalit\u00e4t oder Wohnsitz spielen keine Rolle.'
      }
    ]
  },
  {
    id: 4,
    number: 'Folge 4',
    title: 'Steuern als Grenzg\u00e4nger \u2013 Das Doppelbesteuerungsabkommen',
    description: 'Wo zahle ich Steuern? Was \u00e4ndert sich bei Homeoffice? Und wie mache ich eine Steuererkl\u00e4rung in Luxemburg? Alles Wissenswerte zum Doppelbesteuerungsabkommen Deutschland\u2013Luxemburg.',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/1tjiHJ3Hkwe0Chg4xkFeW4?utm_source=generator&theme=0',
    topics: ['Doppelbesteuerungsabkommen (DBA)', 'Steuererkl\u00e4rung Luxemburg', 'Homeoffice & Steuern', '19-Tage-Regelung', 'Steuerklassen', 'guichet.lu'],
    questions: [
      {
        text: 'Was regelt das Doppelbesteuerungsabkommen (DBA) zwischen Deutschland und Luxemburg?',
        options: [
          'Einheitliche Sozialversicherungss\u00e4tze f\u00fcr Grenzg\u00e4nger',
          'Welches Land das Besteuerungsrecht f\u00fcr welche Einkommensarten hat und wie eine Doppelbesteuerung vermieden wird',
          'Die H\u00f6he der Einkommensteuer f\u00fcr Grenzg\u00e4nger',
          'Die Anerkennung ausl\u00e4ndischer Steuerbescheide'
        ],
        correct: 1,
        explanation: 'Das DBA regelt verbindlich, welches Land (Deutschland oder Luxemburg) das Besteuerungsrecht f\u00fcr bestimmte Einkommensarten hat. F\u00fcr Arbeitseinkommen gilt: besteuert wird dort, wo die Arbeit ausgef\u00fchrt wird \u2013 also in Luxemburg.'
      },
      {
        text: 'Wie wirken sich Homeoffice-Tage eines Grenzg\u00e4ngers steuerlich aus?',
        options: [
          'Homeoffice-Tage haben keine steuerliche Relevanz',
          'Homeoffice-Tage werden immer in Luxemburg versteuert',
          'Homeoffice-Tage im Wohnsitzstaat k\u00f6nnen je nach \u00dcberschreitung der Schwelle anteilig in Deutschland steuerpflichtig werden',
          'Homeoffice-Tage werden automatisch im steuerlich g\u00fcnstigeren Land versteuert'
        ],
        correct: 2,
        explanation: 'Das DBA sieht vor, dass Einkommen an dem Ort versteuert wird, wo die Arbeit geleistet wird. Wer von zu Hause in Deutschland arbeitet, kann f\u00fcr diese Tage in Deutschland steuerpflichtig werden, sobald bestimmte Schwellenwerte (z.\u00a0B. 19 Tage/34 Tage je nach Vereinbarung) \u00fcberschritten werden.'
      },
      {
        text: 'Was passiert steuerlich, wenn ein Grenzg\u00e4nger mehr Homeoffice-Tage in Deutschland leistet als die vereinbarte Schwelle?',
        options: [
          'Keine \u00c4nderung \u2013 der gesamte Lohn bleibt in Luxemburg steuerpflichtig',
          'Das Besteuerungsrecht geht f\u00fcr die deutschen Arbeitstage anteilig auf Deutschland \u00fcber',
          'Der Grenzg\u00e4nger verliert seinen Status und muss alle Steuern in Deutschland zahlen',
          'Der Arbeitgeber zahlt eine Strafe an die luxemburgische Steuerbeh\u00f6rde'
        ],
        correct: 1,
        explanation: 'Bei \u00dcberschreitung der Schwelle wird das auf die deutschen Arbeitstage entfallende Einkommen anteilig in Deutschland steuerpflichtig. Der Rest bleibt in Luxemburg versteuert. Daher ist es wichtig, Homeoffice-Tage sorgf\u00e4ltig zu dokumentieren.'
      },
      {
        text: 'Was ist der Vorteil einer freiwilligen Jahressteuererkl\u00e4rung in Luxemburg f\u00fcr Grenzg\u00e4nger?',
        options: [
          'Man vermeidet die doppelte Steuerpflicht in Deutschland',
          'Man kann Werbungskosten, Sonderausgaben und andere Abz\u00fcge geltend machen und erh\u00e4lt unter Umst\u00e4nden eine Steuererstattung',
          'Man erh\u00e4lt automatisch die g\u00fcnstigste Steuerklasse in Luxemburg',
          'Die Abgabe der Steuererkl\u00e4rung ist f\u00fcr alle Grenzg\u00e4nger gesetzlich vorgeschrieben'
        ],
        correct: 1,
        explanation: 'Durch die freiwillige Abgabe einer luxemburgischen Steuererkl\u00e4rung (d\u00e9compte annuel) k\u00f6nnen Grenzg\u00e4nger z.\u00a0B. Pendlerkosten, Versicherungspr\u00e4mien und andere Ausgaben absetzen. H\u00e4ufig ergibt sich daraus eine Steuerr\u00fcckerstattung.'
      },
      {
        text: 'Welche Steuerklasse gilt f\u00fcr verheiratete Grenzg\u00e4nger in Luxemburg standardm\u00e4\u00dfig?',
        options: [
          'Steuerklasse 1 (wie Alleinstehende)',
          'Steuerklasse 2, sofern sie als Non-R\u00e9sidents mindestens 90\u00a0% ihres Welteinkommens in Luxemburg erzielen oder beantragen',
          'Steuerklasse 3, die automatisch f\u00fcr alle Grenzg\u00e4nger gilt',
          'Es gibt in Luxemburg keine Steuerklassen f\u00fcr Nicht-Ans\u00e4ssige'
        ],
        correct: 1,
        explanation: 'Verheiratete Grenzg\u00e4nger, die mindestens 90\u00a0% ihres Welteinkommens in Luxemburg erzielen (oder einen entsprechenden Antrag stellen), k\u00f6nnen die Steuerklasse 2 beantragen, die g\u00fcnstigere S\u00e4tze bietet. Andernfalls gilt Klasse 1.'
      }
    ]
  },
  {
    id: 5,
    number: 'Folge 5',
    title: 'Mehrsprachigkeit im Berufsleben',
    description: 'Luxemburgisch, Franz\u00f6sisch, Deutsch \u2013 der Alltag in luxemburgischen Betrieben ist mehrsprachig. Welche Sprachkenntnisse werden erwartet, welche F\u00f6rderangebote gibt es und wie gelingt die sprachliche Integration?',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/1wBIFRrEKOGdI99JXZrOnT?utm_source=generator&theme=0',
    topics: ['Amtssprachen Luxemburgs', 'Luxemburgisch im Betrieb', 'Sprachkurse (INL)', 'Arbeitsvertrag & Sprache', 'Sprachf\u00f6rderung', 'Sproochentest'],
    questions: [
      {
        text: 'Welche Sprachen werden in Luxemburg offiziell als Amtssprachen anerkannt?',
        options: [
          'Nur Luxemburgisch',
          'Luxemburgisch, Franz\u00f6sisch und Deutsch',
          'Englisch und Franz\u00f6sisch',
          'Franz\u00f6sisch und Luxemburgisch'
        ],
        correct: 1,
        explanation: 'Luxemburg hat drei offizielle Amtssprachen: Luxemburgisch, Franz\u00f6sisch und Deutsch. Im Berufsalltag wird h\u00e4ufig zwischen allen drei Sprachen gewechselt, wobei Franz\u00f6sisch in vielen Verwaltungs- und Gesch\u00e4ftskontexten \u00fcberwiegt.'
      },
      {
        text: 'Besteht f\u00fcr Grenzg\u00e4nger eine gesetzliche Pflicht, Luxemburgisch zu lernen?',
        options: [
          'Ja, das Erlernen des Luxemburgischen ist f\u00fcr alle Arbeitnehmer in Luxemburg gesetzlich vorgeschrieben',
          'Nein, es besteht keine gesetzliche Verpflichtung \u2013 Kenntnisse k\u00f6nnen jedoch die Karrierechancen erheblich verbessern',
          'Nur Arbeitnehmer im \u00f6ffentlichen Dienst m\u00fcssen Luxemburgisch lernen',
          'Ja, aber erst nach 5 Jahren Besch\u00e4ftigung in Luxemburg'
        ],
        correct: 1,
        explanation: 'Es gibt keine gesetzliche Pflicht f\u00fcr Arbeitnehmer in der Privatwirtschaft, Luxemburgisch zu lernen. Allerdings verbessern Luxemburgischkenntnisse die Integration und die beruflichen Aufstiegschancen deutlich \u2013 besonders im Kundenkontakt und im \u00f6ffentlichen Dienst.'
      },
      {
        text: 'Welche Institution bietet in Luxemburg kosteng\u00fcnstige oder subventionierte Sprachkurse f\u00fcr Berufst\u00e4tige an?',
        options: [
          'Das Institut National des Langues (INL) bietet Kurse zu erm\u00e4\u00dfigten Preisen an, auch f\u00fcr Grenzg\u00e4nger',
          'Nur private Sprachschulen, deren Kosten der Arbeitgeber \u00fcbernehmen muss',
          'Ausschlie\u00dflich die Universit\u00e4t Luxemburg f\u00fcr Akademiker',
          'Die deutsche Botschaft in Luxemburg f\u00fcr deutsche Staatsangeh\u00f6rige'
        ],
        correct: 0,
        explanation: 'Das Institut National des Langues (INL) ist die offizielle staatliche Einrichtung f\u00fcr Sprachkurse in Luxemburg. Es bietet Kurse in Luxemburgisch, Franz\u00f6sisch, Deutsch und weiteren Sprachen zu erm\u00e4\u00dfigten Preisen an \u2013 auch f\u00fcr Grenzg\u00e4nger.'
      },
      {
        text: 'In welcher Sprache m\u00fcssen Arbeitsvertr\u00e4ge in Luxemburg ausgestellt werden?',
        options: [
          'Ausschlie\u00dflich auf Franz\u00f6sisch',
          'Ausschlie\u00dflich auf Luxemburgisch',
          'Es gibt keine gesetzliche Vorschrift zur Vertragssprache; Vertr\u00e4ge k\u00f6nnen in jeder f\u00fcr beide Parteien verst\u00e4ndlichen Sprache abgefasst werden',
          'Auf Deutsch, da die meisten Grenzg\u00e4nger Deutsch sprechen'
        ],
        correct: 2,
        explanation: 'Das luxemburgische Arbeitsrecht schreibt keine bestimmte Vertragssprache vor. Arbeitsvertr\u00e4ge k\u00f6nnen in jeder Sprache abgefasst werden, die beide Parteien verstehen. In der Praxis h\u00e4ufig: Franz\u00f6sisch, Deutsch oder Englisch.'
      },
      {
        text: 'Was ist der \u201eSproochentest\u201c (Sprachtest) in Luxemburg und wof\u00fcr wird er ben\u00f6tigt?',
        options: [
          'Ein verpflichtender Einreisetest f\u00fcr alle Grenzg\u00e4nger',
          'Ein Luxemburgisch-Sprachtest, der f\u00fcr den Erwerb der luxemburgischen Staatsb\u00fcrgerschaft erforderlich ist',
          'Eine optionale Sprachzertifizierung f\u00fcr Berufseinsteiger',
          'Ein interner Test bei luxemburgischen Arbeitgebern zur Beurteilung von Kandidaten'
        ],
        correct: 1,
        explanation: 'Der Sproochentest ist eine Pr\u00fcfung der Luxemburgischkenntnisse, die unter anderem f\u00fcr die Einb\u00fcrgerung (Erwerb der luxemburgischen Staatsb\u00fcrgerschaft) erforderlich ist. F\u00fcr Grenzg\u00e4nger ohne B\u00fcrgerschaftswunsch ist er nicht verpflichtend.'
      }
    ]
  },
  {
    id: 6,
    number: 'Folge 6',
    title: 'Familienleistungen und Alltag als Grenzg\u00e4nger',
    description: 'Kindergeld, Kinderbetreuung, Familienzulagen: Welche Familienleistungen stehen Grenzg\u00e4ngern in Luxemburg zu und wie beantrage ich sie? Praktische Tipps f\u00fcr den Alltag.',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/17bJDNQazabTYgaSVaZzWJ?utm_source=generator&theme=0',
    topics: ['Kindergeld (CAF)', 'Ch\u00e8que-Service Accueil', 'Kinderbetreuung', 'Familienbeihilfen', 'CCSS-Bescheinigung', 'Formular A1'],
    questions: [
      {
        text: 'Welche Stelle ist f\u00fcr die Auszahlung von luxemburgischem Kindergeld (allocation familiale) an Grenzg\u00e4nger zust\u00e4ndig?',
        options: [
          'Die deutsche Familienkasse der Bundesagentur f\u00fcr Arbeit',
          'Das luxemburgische Finanzministerium',
          'Die CAF (Caisse pour l\u2019Avenir des Enfants) in Luxemburg',
          'Die Botschaft des Gro\u00dfherzogtums Luxemburg in Deutschland'
        ],
        correct: 2,
        explanation: 'Die CAF (Caisse pour l\u2019Avenir des Enfants) ist die zust\u00e4ndige Kasse f\u00fcr Familienleistungen in Luxemburg, einschlie\u00dflich des Kindergeldes f\u00fcr Grenzg\u00e4nger. Der Antrag kann \u00fcber guichet.lu gestellt werden.'
      },
      {
        text: 'K\u00f6nnen Kinder von Grenzg\u00e4ngern luxemburgische Kindertagesst\u00e4tten (Cr\u00e8ches) nutzen?',
        options: [
          'Nein, Betreuungsangebote stehen nur Kindern mit Wohnsitz in Luxemburg offen',
          'Ja, aber nur gegen den vollen Marktpreis ohne staatliche Zusch\u00fcsse',
          'Ja, Kinder von in Luxemburg besch\u00e4ftigten Eltern haben grunds\u00e4tzlich Zugang zu luxemburgischen Betreuungseinrichtungen',
          'Nur wenn die Kinder luxemburgische Staatsangeh\u00f6rige sind'
        ],
        correct: 2,
        explanation: 'Kinder von Grenzg\u00e4ngern, die in Luxemburg besch\u00e4ftigt sind, haben Zugang zu luxemburgischen Kindertagesst\u00e4tten. Unter bestimmten Voraussetzungen k\u00f6nnen auch Betreuungsgutscheine (Ch\u00e8que-Service Accueil) genutzt werden.'
      },
      {
        text: 'Was ist der \u201eCh\u00e8que-Service Accueil\u201c (CSA) in Luxemburg?',
        options: [
          'Ein Reisegutschein f\u00fcr Grenzg\u00e4nger',
          'Ein staatlich gesubventioniertes Gutscheinsystem, mit dem Eltern Kinderbetreuungskosten in zugelassenen Einrichtungen mitfinanzieren k\u00f6nnen',
          'Ein Parkausweis f\u00fcr Grenzg\u00e4nger in luxemburgischen St\u00e4dten',
          'Ein Einkaufsgutschein f\u00fcr Neub\u00fcrger Luxemburgs'
        ],
        correct: 1,
        explanation: 'Der Ch\u00e8que-Service Accueil (CSA) ist ein staatliches Unterst\u00fctzungssystem, das Eltern Betreuungsgutscheine zur Verf\u00fcgung stellt. Der Eigenanteil richtet sich nach dem Einkommen. Grenzg\u00e4nger k\u00f6nnen dieses System ebenfalls nutzen.'
      },
      {
        text: 'Welches Formular belegt gegen\u00fcber der deutschen Krankenkasse, dass ein Grenzg\u00e4nger in Luxemburg sozialversicherungspflichtig ist?',
        options: [
          'Das Formular E101 bzw. A1 (Bescheinigung \u00fcber die anzuwendenden Rechtsvorschriften)',
          'Eine einfache Best\u00e4tigung des Arbeitgebers gen\u00fcgt',
          'Die luxemburgische und deutsche Krankenkasse kommunizieren automatisch miteinander',
          'Kein Formular n\u00f6tig: Als Grenzg\u00e4nger ist man in beiden L\u00e4ndern versichert'
        ],
        correct: 0,
        explanation: 'Das Formular A1 (fr\u00fcher E101) best\u00e4tigt, dass ein Arbeitnehmer dem Sozialversicherungsrecht eines bestimmten EU-Mitgliedstaats unterliegt. Grenzg\u00e4nger, die in Luxemburg arbeiten, ben\u00f6tigen dieses Formular, um ihrer deutschen Krankenkasse nachzuweisen, dass sie in Luxemburg pflichtversichert sind.'
      },
      {
        text: 'Erhalten Grenzg\u00e4nger auch deutsches Kindergeld, wenn sie bereits luxemburgisches Kindergeld beziehen?',
        options: [
          'Ja, man kann beide Kindergeldleistungen gleichzeitig in voller H\u00f6he beziehen',
          'Nein, das ist v\u00f6llig ausgeschlossen',
          'Das luxemburgische Kindergeld wird prim\u00e4r ausgezahlt; Deutschland zahlt ggf. einen Differenzbetrag, falls das deutsche Kindergeld h\u00f6her ist',
          'Das ist nur m\u00f6glich, wenn beide Elternteile in verschiedenen L\u00e4ndern arbeiten'
        ],
        correct: 2,
        explanation: 'Nach EU-Recht zahlt der Besch\u00e4ftigungsstaat (Luxemburg) prim\u00e4r. Deutschland als Wohnsitzstaat zahlt nur eine Differenz, wenn der deutsche Anspruch h\u00f6her ist als der luxemburgische. Eine vollst\u00e4ndige Kumulation beider Leistungen ist nicht m\u00f6glich.'
      }
    ]
  },
  {
    id: 7,
    number: 'Folge 7',
    title: 'Mitmachen in Luxemburg \u2013 Gesellschaftliche Teilhabe',
    description: 'Wie kann ich als Grenzg\u00e4nger am gesellschaftlichen Leben in Luxemburg teilhaben? Welche Beteiligungsm\u00f6glichkeiten gibt es und was bietet der Biergerpakt?',
    spotifyEmbed: 'https://open.spotify.com/embed/episode/02BadNZkJrjzj1actHXRDb?utm_source=generator&theme=0',
    topics: ['Biergerpakt', 'Zesummeliewen', 'Vereine & Ehrenamt', 'Wahlrechte', 'Integration', 'Gesellschaftliche Teilhabe'],
    questions: [
      {
        text: 'Was ist der \u201eBiergerpakt\u201c (Citoyennet\u00e9) in Luxemburg?',
        options: [
          'Ein Gesetz, das Grenzg\u00e4nger zur Zahlung von Mitgliedsbeitr\u00e4gen verpflichtet',
          'Eine Regierungsinitiative zur F\u00f6rderung der aktiven Teilhabe aller in Luxemburg lebenden und arbeitenden Menschen am gesellschaftlichen Leben',
          'Ein bilaterales Abkommen zwischen Deutschland und Luxemburg \u00fcber Grenzpendler',
          'Ein Programm zum Erwerb der luxemburgischen Staatsb\u00fcrgerschaft'
        ],
        correct: 1,
        explanation: 'Der Biergerpakt ist eine Initiative der luxemburgischen Regierung, die das aktive gesellschaftliche Engagement aller Menschen in Luxemburg f\u00f6rdern will \u2013 unabh\u00e4ngig von Nationalit\u00e4t oder Wohnsitz. Er umfasst Sprachkurse, Orientierungsmodule, Veranstaltungen und mehr.'
      },
      {
        text: 'K\u00f6nnen Grenzg\u00e4nger ohne Wohnsitz in Luxemburg an luxemburgischen Gemeinderatswahlen (Kommunalwahlen) teilnehmen?',
        options: [
          'Ja, alle EU-Grenzg\u00e4nger haben automatisch das kommunale Wahlrecht in Luxemburg',
          'Nein, f\u00fcr die Teilnahme an Gemeinderatswahlen ist ein offizieller Wohnsitz in Luxemburg erforderlich',
          'Ja, nach 5 Jahren Besch\u00e4ftigung in Luxemburg',
          'Nur Grenzg\u00e4nger, die auch luxemburgische Steuern zahlen'
        ],
        correct: 1,
        explanation: 'Das kommunale Wahlrecht in Luxemburg ist an einen Wohnsitz in der Gemeinde gekn\u00fcpft. Grenzg\u00e4nger, die nicht in Luxemburg wohnen, k\u00f6nnen daher nicht an luxemburgischen Gemeinderatswahlen teilnehmen.'
      },
      {
        text: 'K\u00f6nnen Grenzg\u00e4nger Mitglied in luxemburgischen Vereinen (associations) werden?',
        options: [
          'Nein, Vereinsmitgliedschaften sind auf luxemburgische Staatsangeh\u00f6rige und Wohnans\u00e4ssige beschr\u00e4nkt',
          'Ja, luxemburgische Vereine stehen grunds\u00e4tzlich allen offen, unabh\u00e4ngig von Nationalit\u00e4t oder Wohnsitz',
          'Nur in Vereinen, die speziell f\u00fcr deutsche Grenzg\u00e4nger gegr\u00fcndet wurden',
          'Nur wenn der Verein eine spezielle Genehmigung des Innenministeriums hat'
        ],
        correct: 1,
        explanation: 'Luxemburgische Vereine und Organisationen stehen grundsdtlich allen Menschen offen \u2013 unabh\u00e4ngig von Nationalit\u00e4t oder Wohnsitz. Grenzg\u00e4nger k\u00f6nnen sich ehrenamtlich engagieren und am Vereinsleben teilnehmen.'
      },
      {
        text: 'Was ist das Portal \u201eZesummeliewen\u201c?',
        options: [
          'Ein deutsches Informationsportal f\u00fcr Grenzpendler nach Luxemburg',
          'Das offizielle luxemburgische Integrationsportal mit Informationen und Ressourcen zur gesellschaftlichen Teilhabe in Luxemburg',
          'Eine private Initiative luxemburgischer B\u00fcrger f\u00fcr mehr B\u00fcrgerbeteiligung',
          'Ein Sprachlernangebot ausschlie\u00dflich f\u00fcr die luxemburgische Sprache'
        ],
        correct: 1,
        explanation: 'Zesummeliewen (\u201cZusammen leben\u201c auf Luxemburgisch) ist das offizielle luxemburgische Integrationsportal der Regierung. Es b\u00fcndelt Informationen zu Integration, Teilhabe, Sprachkursen und dem Biergerpakt-Programm.'
      },
      {
        text: 'Welche Gewerkschaften sind in Luxemburg die gr\u00f6\u00dften und vertreten auch Grenzg\u00e4nger?',
        options: [
          'DGB und ver.di (deutsche Gewerkschaften)',
          'OGBL (Onofh\u00e4ngege Gewerkschaftsbond Lux\u00ebmbuerg) und LCGB (Lux\u00ebmburger Chreschteche Gewerkschaftsbond)',
          'Nur die Handelskammer (Chambre de Commerce) vertritt Arbeitnehmerinteressen',
          'Es gibt keine Gewerkschaften in Luxemburg'
        ],
        correct: 1,
        explanation: 'Die beiden gr\u00f6\u00dften Gewerkschaften in Luxemburg sind der OGBL und der LCGB. Beide vertreten alle Arbeitnehmer in Luxemburg \u2013 unabh\u00e4ngig von deren Nationalit\u00e4t oder Wohnsitz \u2013 und sind auch f\u00fcr Grenzg\u00e4nger relevante Anlaufstellen.'
      }
    ]
  }
];

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

// ── Event Listeners (nach DOM-Laden) ─────────────────────
document.addEventListener('DOMContentLoaded', function() {
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
});
