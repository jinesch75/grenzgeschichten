// ── Nutzerdaten ───────────────────────────────────────────
let user = {};

// ── Fragen ────────────────────────────────────────────────
const QUESTIONS = [
  {
    text: "Welche luxemburgische Institution ist für die Krankenversicherung der Grenzgänger zuständig, die in Luxemburg arbeiten?",
    options: [
      "Die CNS (Caisse Nationale de Santé – Luxemburgische Nationale Gesundheitskasse)",
      "Die deutsche gesetzliche Krankenkasse (z. B. AOK, TK oder Barmer)",
      "Die ADEM (Agence pour le Développement de l'Emploi)",
      "Eine private Krankenversicherung nach eigener Wahl"
    ],
    correct: 0,
    explanation: "Als Grenzgänger, der in Luxemburg arbeitet und dem dortigen Sozialversicherungssystem angehört, ist die CNS (Caisse Nationale de Santé) für Ihre Krankenversicherung zuständig – nicht die deutsche Krankenkasse."
  },
  {
    text: "Was beschreibt das Luxemburger \u201EIndexsystem\u201C (Index)?",
    options: [
      "Ein steuerliches Bewertungsverfahren für grenzüberschreitende Einkünfte",
      "Eine automatische Anpassung von Löhnen und Sozialleistungen an die Preisentwicklung (Inflation)",
      "Ein offizielles Ranking der Arbeitgeber nach Lohnniveau",
      "Ein Registrierungsverfahren für neu ankommende Grenzgänger"
    ],
    correct: 1,
    explanation: "Das Luxemburger Indexsystem sorgt dafür, dass Löhne, Gehälter, Renten und staatliche Leistungen automatisch um 2,5 % erhöht werden, sobald der Preisindex diesen Schwellenwert überschreitet. Damit soll die Kaufkraft aller Arbeitnehmer – auch der Grenzgänger – erhalten bleiben."
  },
  {
    text: "Haben deutsche Grenzgänger, die in Luxemburg beschäftigt sind, grundsätzlich Anspruch auf luxemburgisches Elterngeld (Indemnité de congé parental)?",
    options: [
      "Nein, nur luxemburgische Staatsangehörige haben diesen Anspruch",
      "Nein, da Grenzgänger ihren Wohnsitz nicht in Luxemburg haben",
      "Ja, da Grenzgänger dem luxemburgischen Sozialversicherungssystem angehören und damit dieselben Rechte wie Inlandsarbeitnehmer genießen",
      "Nur teilweise, wenn der Ehepartner ebenfalls in Luxemburg arbeitet"
    ],
    correct: 2,
    explanation: "Da Grenzgänger vollständig dem luxemburgischen Sozialversicherungssystem angeschlossen sind, haben sie dieselben sozialen Rechte wie in Luxemburg wohnhafte Arbeitnehmer – einschließlich des Anspruchs auf luxemburgisches Elterngeld. Ein Wohnsitz in Luxemburg ist dafür nicht erforderlich."
  },
  {
    text: "In welchem Land versteuern deutsche Grenzgänger ihr in Luxemburg erzieltes Arbeitseinkommen grundsätzlich?",
    options: [
      "In Deutschland, da dort der steuerliche Wohnsitz ist",
      "In Luxemburg, da dort die Arbeit tatsächlich ausgeübt wird",
      "Zu je 50 % sowohl in Deutschland als auch in Luxemburg",
      "Der Arbeitnehmer kann das Besteuerungsland frei wählen"
    ],
    correct: 1,
    explanation: "Gemäß dem Doppelbesteuerungsabkommen (DBA) zwischen Deutschland und Luxemburg wird Arbeitseinkommen in dem Land besteuert, in dem die Arbeit ausgeübt wird – also in Luxemburg. Wichtige Ausnahme: Homeoffice-Tage im Wohnsitzland können unter bestimmten Bedingungen abweichend behandelt werden."
  },
  {
    text: "Was ist ein \u201EGrenzg\u00E4nger\u201C im Sinne des Luxemburger Arbeits- und Sozialversicherungsrechts?",
    options: [
      "Jede Person mit luxemburgischer Staatsangehörigkeit, die im Ausland wohnt",
      "Eine Person, die in einem anderen EU-Staat wohnt, in Luxemburg arbeitet und regelmäßig an ihren Wohnort zurückkehrt",
      "Nur Arbeitnehmer, die täglich zwischen Luxemburg und dem Ausland pendeln",
      "Personen, die sowohl eine deutsche als auch eine luxemburgische Arbeitsstelle haben"
    ],
    correct: 1,
    explanation: "Als Grenzgänger gilt rechtlich, wer in einem EU-/EWR-Staat oder der Schweiz wohnt, in einem anderen Staat (hier: Luxemburg) einer Beschäftigung nachgeht und grundsätzlich täglich oder zumindest einmal wöchentlich an seinen Wohnort zurückkehrt. Diese Definition ist entscheidend für die Bestimmung der Sozialversicherungs- und Steuerpflichten."
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
  showScreen('screen-episode');
}

// ── Quiz starten ─────────────────────────────────────────
function startQuiz() {
  answers      = new Array(QUESTIONS.length).fill(-1);
  wrongIndices = [];
  curIndex     = 0;
  isRetry      = false;
  showScreen('screen-quiz');
  renderQuestion(0);
}

// ── Frage rendern ─────────────────────────────────────────
function renderQuestion(idx) {
  var q     = QUESTIONS[idx];
  var total = QUESTIONS.length;

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

// ── Antwort auswählen ─────────────────────────────────────
function selectAnswer(chosen) {
  if (!document.getElementById('btn-next').classList.contains('hidden')) return;

  var q    = QUESTIONS[curIndex];
  var opts = document.querySelectorAll('.option');

  answers[curIndex] = chosen;

  opts.forEach(function(el, i) {
    el.style.cursor = 'default';
    el.replaceWith(el.cloneNode(true)); // remove all listeners
  });

  // Re-query after clone
  document.querySelectorAll('.option').forEach(function(el, i) {
    if (i === q.correct)                          el.classList.add('correct');
    if (i === chosen && i !== q.correct)          el.classList.add('wrong');
    if (i === chosen && i === q.correct)          el.classList.add('correct');
  });

  var fb = document.getElementById('q-feedback');
  if (chosen === q.correct) {
    fb.className = 'feedback show ok';
    fb.innerHTML = '<strong>✅ Richtig!</strong> ' + q.explanation;
  } else {
    fb.className = 'feedback show fail';
    fb.innerHTML = '<strong>❌ Leider falsch.</strong> Die korrekte Antwort ist: <strong>' +
      q.options[q.correct] + '</strong>. ' + q.explanation;
  }

  show('btn-next');
}

// ── Nächste Frage ─────────────────────────────────────────
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
    if (curIndex < QUESTIONS.length) {
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
    if (ans !== QUESTIONS[i].correct) wrongIndices.push(i);
  });

  var nCorrect = QUESTIONS.length - wrongIndices.length;

  document.getElementById('score-n').textContent = nCorrect;
  document.getElementById('score-d').textContent = 'von ' + QUESTIONS.length;

  var ring = document.getElementById('score-ring');

  if (nCorrect === QUESTIONS.length) {
    ring.style.background = 'var(--green)';
    document.getElementById('score-title').textContent = '🎉 Ausgezeichnet – alles richtig!';
    document.getElementById('score-msg').textContent   = 'Sie haben alle Fragen korrekt beantwortet. Sie können nun Ihr Teilnahmezertifikat herunterladen.';
    hide('retry-card');
    show('success-banner');
  } else {
    ring.style.background = 'var(--orange)';
    document.getElementById('score-title').textContent = nCorrect + ' von ' + QUESTIONS.length + ' Fragen richtig';
    document.getElementById('score-msg').textContent   = 'Um das Zertifikat zu erhalten, müssen alle Fragen korrekt beantwortet werden. Bitte hören Sie die entsprechenden Teile der Folge noch einmal an.';

    var list = document.getElementById('wrong-list');
    list.innerHTML = wrongIndices.map(function(i) {
      return '<div class="wrong-item"><strong>Frage ' + (i + 1) + ':</strong> ' + QUESTIONS[i].text + '</div>';
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
  document.getElementById('cert-name-out').textContent = user.firstName + ' ' + user.lastName;
  document.getElementById('cert-mat-out').textContent  = user.matrikel;
  document.getElementById('cert-date-out').textContent = new Date().toLocaleDateString('de-DE', {
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
});
