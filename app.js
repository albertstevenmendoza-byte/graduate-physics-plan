/* ══════════════════════════════════════════════════
   UNIT 1730 — Physics Tracker · app.js
   ══════════════════════════════════════════════════ */

'use strict';

/* ────────────────────────────────────────────────
   DATA: Daily Schedule
   ──────────────────────────────────────────────── */
const DAY_NAMES = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const DAY_SHORT = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

const WEEKDAY_FIXED = [
  { id:'work',     section:'morning',   time:'6:00 AM – 3:30 PM', label:'Work Shift',       sub:'Novus Foods · Plant 1730 · Inventory Control Lead', type:'work' },
  { id:'family',   section:'afternoon', time:'3:30 PM – 4:30 PM', label:'Family Time',       sub:'Home arrival · decompress · Patty & daughter',      type:'family' },
  { id:'exercise', section:'afternoon', time:'4:30 PM – 5:30 PM', label:'Strength Training', sub:'1-hour exercise block',                              type:'exercise' },
  { id:'dinner',   section:'afternoon', time:'5:30 PM – 6:00 PM', label:'Dinner',            sub:'',                                                   type:'dinner' },
];

const WEEKEND_FIXED = [
  { id:'exercise_wknd', section:'morning', time:'~ Morning', label:'Exercise',        sub:'1-hour workout',                               type:'exercise' },
  { id:'family_wknd',   section:'morning', time:'Ongoing',   label:'Family Priority', sub:'Primary weekend focus — Patty & daughter',     type:'family' },
];

// Evening/variable tasks keyed by day index (0=Sun … 6=Sat)
const EVENING = {
  0: [
    { id:'study_sun', section:'study', time:'Morning or downtime blocks', label:'Type A — Heavy Calc Block', sub:'GR / QFT deep calculations · ~2.5 hrs targeted', type:'study', session:'A' },
  ],
  1: [
    { id:'baseball_mon', section:'evening', time:'6:00 PM – 8:00 PM', label:"Daughter's Baseball",       sub:'Priority family event',                              type:'event' },
    { id:'study_mon',    section:'evening', time:'8:15 PM onward',     label:'Type C — Problem Grinding', sub:'Continue ongoing problem set · ~1.75 hrs',           type:'study', session:'C' },
  ],
  2: [
    { id:'study_tue', section:'evening', time:'6:00 PM onward', label:'Type B — New Material + Launch', sub:'Read chapter section · start new problems · ~2.5 hrs', type:'study', session:'B' },
  ],
  3: [
    { id:'baseball_wed', section:'evening', time:'6:00 PM – 7:00 PM', label:"Daughter's Baseball",       sub:'Priority family event',                             type:'event' },
    { id:'study_wed',    section:'evening', time:'7:15 PM onward',     label:'Type C — Problem Grinding', sub:'Continue problem set · ~1.75 hrs',                  type:'study', session:'C' },
  ],
  4: [
    { id:'baseball_thu', section:'evening', time:'6:00 PM – 8:00 PM', label:"Daughter's Baseball",       sub:'Most weeks — confirm schedule',                      type:'event' },
    { id:'study_thu',    section:'evening', time:'8:15 PM onward',     label:'Type C — Problem Grinding', sub:'Finish set / timed derivation drill · ~1.5 hrs',     type:'study', session:'C' },
  ],
  5: [
    { id:'study_fri', section:'evening', time:'6:00 PM onward', label:'Type D — Flex Block', sub:'Review · synthesis · or family time · 0–1.5 hrs', type:'study', session:'D' },
  ],
  6: [
    { id:'study_sat', section:'study', time:'Morning / Downtime blocks', label:'Type A — Heavy Calc Block', sub:'Primary weekend calculation session · ~3 hrs', type:'study', session:'A' },
  ],
};

/* ────────────────────────────────────────────────
   DATA: Curriculum
   item.type: 'reading' | 'problem' | 'milestone'
   ──────────────────────────────────────────────── */
const CURRICULUM = [
  {
    id: 'phase0', phase: 'Phase 0', title: 'Diagnostic Baseline',
    weeks: 'Week 1', subtitle: 'Cold assessment — no new material',
    items: [
      { id:'p0_r1',  type:'reading', label:'Goldstein Ch. 2 — review constraint problem structure' },
      { id:'p0_ps1', type:'problem', label:'Goldstein Ch. 2: 3 timed constraint problems (cold — log time & gaps)' },
      { id:'p0_ps2', type:'problem', label:'Jackson Ch. 2–3: 2 BVPs (cold — assess Green\'s function fluency)' },
      { id:'p0_ps3', type:'problem', label:'Sakurai Ch. 5: 2 perturbation theory problems (cold)' },
      { id:'p0_ps4', type:'problem', label:'Sakurai Ch. 8: Dirac equation free-particle derivation from scratch' },
    ]
  },
  {
    id: 'mod1', phase: 'Module 1', title: 'Classical Mechanics',
    weeks: 'Weeks 2–5', subtitle: 'Constraints & Hamiltonian Structure · Goldstein + L&L',
    items: [
      { id:'m1_r1',  type:'reading', label:'Goldstein Ch. 1–2: Variational principles, d\'Alembert, holonomic & non-holonomic constraints' },
      { id:'m1_r2',  type:'reading', label:'Goldstein Ch. 3: Central force problems, orbit equation' },
      { id:'m1_r3',  type:'reading', label:'Goldstein Ch. 8: Hamiltonian mechanics, Legendre transform' },
      { id:'m1_r4',  type:'reading', label:'Goldstein Ch. 9: Canonical transformations, all four generating functions F1–F4' },
      { id:'m1_r5',  type:'reading', label:'Goldstein Ch. 10: Hamilton-Jacobi theory, action-angle variables' },
      { id:'m1_r6',  type:'reading', label:'L&L Mechanics Vol. 1 §2–4: High-density supplemental problem bank' },
      { id:'m1_ps1', type:'problem', label:'Goldstein 2.1, 2.2, 2.5 — Lagrangian setup, holonomic constraints' },
      { id:'m1_ps2', type:'problem', label:'Goldstein 2.8, 2.15 — Rolling constraints, Lagrange multipliers' },
      { id:'m1_ps3', type:'problem', label:'Goldstein 2.20 — Non-holonomic rolling disk' },
      { id:'m1_ps4', type:'problem', label:'Goldstein 3.3, 3.8 — Orbit equation, Kepler problem full derivation' },
      { id:'m1_ps5', type:'problem', label:'Goldstein 8.6, 8.12 — Hamilton\'s equations, canonical transform verification' },
      { id:'m1_ps6', type:'problem', label:'Goldstein 9.1, 9.4 — Poisson bracket algebra ({L_i, L_j} = ε_ijk L_k etc.)' },
      { id:'m1_ps7', type:'problem', label:'Goldstein 10.7 — HJ equation, Kepler: separation → W → constants → frequencies' },
      { id:'m1_ms1', type:'milestone', label:'⚡ Milestone: F1–F4 for SHO — all four generating function types, prove canonical nature via PBs' },
      { id:'m1_ms2', type:'milestone', label:'⚡ Milestone: Full HJ treatment of Kepler — separation, action variables, compute frequencies (timed)' },
    ]
  },
  {
    id: 'mod2', phase: 'Module 2', title: 'Electromagnetism',
    weeks: 'Weeks 6–12', subtitle: 'Graduate Level Remediation · Jackson',
    items: [
      { id:'m2_r1',  type:'reading', label:'Jackson Ch. 1–2: Electrostatics, Green\'s functions, Dirichlet & Neumann BCs' },
      { id:'m2_r2',  type:'reading', label:'Jackson Ch. 3: Separation of variables — spherical & cylindrical, Ylm' },
      { id:'m2_r3',  type:'reading', label:'Jackson Ch. 5–6: Magnetostatics, full Maxwell equations, displacement current' },
      { id:'m2_r4',  type:'reading', label:'Jackson Ch. 7: Plane waves, polarization, dispersion' },
      { id:'m2_r5',  type:'reading', label:'Jackson Ch. 9: Radiation — oscillating sources, Larmor formula, retarded potentials' },
      { id:'m2_r6',  type:'reading', label:'Jackson Ch. 11–12: Covariant EM — 4-vectors, F_μν, covariant Maxwell, T_μν' },
      { id:'m2_ps1', type:'problem', label:'Jackson 2.1, 2.2, 2.7 — Image charges, BVPs' },
      { id:'m2_ps2', type:'problem', label:'Jackson 2.11, 2.23 — Full Green\'s function solutions for sphere geometry' },
      { id:'m2_ps3', type:'problem', label:'Jackson 3.1, 3.3, 3.6, 3.9, 3.10 — Spherical harmonic expansions, coefficient extraction' },
      { id:'m2_ps4', type:'problem', label:'Jackson 5.1, 5.3, 5.6 — Magnetic multipoles, vector potential' },
      { id:'m2_ps5', type:'problem', label:'Jackson 6.4, 6.8 — Wave equation derivation from Maxwell' },
      { id:'m2_ps6', type:'problem', label:'Jackson 7.2, 7.4, 7.19 — Plane waves, Fresnel coefficients' },
      { id:'m2_ps7', type:'problem', label:'Jackson 9.1, 9.3, 9.7, 9.16 — Dipole radiation, angular distribution, Larmor (synchrotron)' },
      { id:'m2_ps8', type:'problem', label:'Jackson 11.2, 11.5, 11.14 — 4-vectors, F_μν under Lorentz boost, compute T_μν' },
      { id:'m2_ps9', type:'problem', label:'Jackson 12.1, 12.3 — Covariant Lagrangian, derive Maxwell from L = −¼F_μν F^μν via E-L' },
      { id:'m2_ms1', type:'milestone', label:'⚡ Milestone: Larmor formula from scratch — retarded potentials → fields → Poynting → sphere integral (target 45 min)' },
      { id:'m2_ms2', type:'milestone', label:'⚡ Milestone: Covariant Maxwell — write F_μν, derive ∂_μ F^μν = J^ν from Euler-Lagrange, compute T_μν' },
    ]
  },
  {
    id: 'qm', phase: 'Interlude', title: 'Quantum Mechanics Review',
    weeks: 'Weeks 13–16', subtitle: 'Graduate Level · Sakurai (fast pace — review, not remediation)',
    items: [
      { id:'qm_r1',  type:'reading', label:'Sakurai Ch. 1–2: Bra-ket, observables, spin, density matrix, quantum dynamics' },
      { id:'qm_r2',  type:'reading', label:'Sakurai Ch. 3: Angular momentum algebra, raising/lowering operators, Clebsch-Gordan' },
      { id:'qm_r3',  type:'reading', label:'Sakurai Ch. 5: Time-independent & time-dependent perturbation theory, variational method' },
      { id:'qm_r4',  type:'reading', label:'Sakurai Ch. 6: Scattering — Born approximation, partial waves, optical theorem' },
      { id:'qm_r5',  type:'reading', label:'Sakurai Ch. 8: Relativistic QM — Klein-Gordon (and its problems), Dirac equation' },
      { id:'qm_ps1', type:'problem', label:'Sakurai 1.12, 1.21, 1.23 — Spin precession, expectation values, density matrix' },
      { id:'qm_ps2', type:'problem', label:'Sakurai 2.3, 2.7 — Time evolution operators, Heisenberg picture' },
      { id:'qm_ps3', type:'problem', label:'Sakurai 3.8, 3.33, 3.35 — CG coefficients by ladder operators, Wigner-Eckart theorem' },
      { id:'qm_ps4', type:'problem', label:'Sakurai 5.1, 5.4, 5.13, 5.17, 5.32 — PT corrections, Stark, helium variational, Fermi\'s golden rule' },
      { id:'qm_ps5', type:'problem', label:'Sakurai 6.1, 6.4 — Born approximation: Yukawa & Coulomb cross-sections' },
      { id:'qm_ms1', type:'milestone', label:'⚡ Milestone: Full H fine structure — relativistic + spin-orbit + Darwin — all three in one session' },
      { id:'qm_ms2', type:'milestone', label:'⚡ Milestone: Dirac equation — derive γ-algebra, write free-particle spinors u(p), v(p) from scratch' },
    ]
  },
  {
    id: 'geo', phase: 'Phase III', title: 'Geometry & Relativity',
    weeks: 'Weeks 17–20', subtitle: 'Math Infrastructure · Carroll + Wald',
    items: [
      { id:'geo_r1', type:'reading', label:'Carroll Ch. 1–2: SR, Minkowski metric, manifolds, tangent spaces, differential forms' },
      { id:'geo_r2', type:'reading', label:'Carroll Ch. 3: Covariant derivative (metric compat. + torsion-free → Γ), Riemann tensor, Bianchi' },
      { id:'geo_r3', type:'reading', label:'Carroll Ch. 4 §1–2: Einstein\'s equation — orientation read only' },
      { id:'geo_r4', type:'reading', label:'Wald Appendix A–B: Abstract index notation, mathematical infrastructure' },
      { id:'geo_ps1', type:'problem', label:'Index gymnastics sprint — 8 tensor identity proofs timed at 10 min each' },
      { id:'geo_ps2', type:'problem', label:'Christoffel symbols: 2-sphere metric — derive all Γ by hand' },
      { id:'geo_ps3', type:'problem', label:'Christoffel symbols: Schwarzschild metric — full calculation by hand (Type A block)' },
      { id:'geo_ps4', type:'problem', label:'Riemann tensor for Schwarzschild — compute R^ρ_{σμν}, verify R_μν = 0 (vacuum)' },
      { id:'geo_ps5', type:'problem', label:'Killing equation: derive, find all Killing vectors for Minkowski and S²' },
      { id:'geo_ps6', type:'problem', label:'Parallel transport: vector around loop on S², verify Berry phase interpretation' },
      { id:'geo_ms1', type:'milestone', label:'⚡ Milestone: Derive EFE from δS_EH/δg^μν = 0 — vary √(−g) R, handle Gibbons-Hawking term' },
    ]
  },
  {
    id: 'mod4', phase: 'Module 4', title: 'Quantum Field Theory',
    weeks: 'Weeks 21–34', subtitle: 'Peskin & Schroeder (primary) + Srednicki (path integrals)',
    items: [
      { id:'qft_r1', type:'reading', label:'P&S Ch. 2: Klein-Gordon field, canonical quantization, [φ,π]=iδ³, Feynman propagator' },
      { id:'qft_r2', type:'reading', label:'P&S Ch. 3: Dirac field, Lagrangian, canonical quantization, C·P·T discrete symmetries' },
      { id:'qft_r3', type:'reading', label:'P&S Ch. 4: Interaction picture, Dyson series, Wick\'s theorem, Feynman diagrams' },
      { id:'qft_r4', type:'reading', label:'P&S Ch. 5: Elementary QED processes, Feynman rules for QED' },
      { id:'qft_r5', type:'reading', label:'P&S Ch. 6–7: Radiative corrections, one-loop integrals, Pauli-Villars, Ward identity' },
      { id:'qft_r6', type:'reading', label:'Srednicki Ch. 6–9: Path integral formulation, generating functional Z[J], 1PI effective action' },
      { id:'qft_r7', type:'reading', label:'P&S Ch. 10–12: Renormalized PT, Wilsonian RG, Callan-Symanzik equation' },
      { id:'qft_r8', type:'reading', label:'P&S Ch. 15–16: Yang-Mills, Faddeev-Popov procedure, BRST symmetry' },
      { id:'qft_ps1',  type:'problem', label:'P&S 2.1–2.4 — KG quantization, normal ordering, Fock space, propagator contour' },
      { id:'qft_ps2',  type:'problem', label:'P&S 3.1–3.5 — Dirac field, γ-matrix trace identities (all standard traces)' },
      { id:'qft_ps3',  type:'problem', label:'P&S 4.1–4.3 — Wick contractions for φ⁴, Feynman rules, symmetry factor counting' },
      { id:'qft_ps4',  type:'problem', label:'P&S 5.1, 5.3 — e⁺e⁻ → μ⁺μ⁻: amplitude → spin sums → |M|² → cross-section' },
      { id:'qft_ps5',  type:'problem', label:'P&S 5.5 — Compton scattering: both diagrams, trace tech, full dσ/dΩ in CM frame' },
      { id:'qft_ps6',  type:'problem', label:'P&S 6.1–6.2 — One-loop electron self-energy Σ(p̸): Feynman param → Wick rotate → poles' },
      { id:'qft_ps7',  type:'problem', label:'P&S 7.1–7.2 — Dim. reg. (d=4−ε), vacuum polarization Π(q²), verify Z₁=Z₂' },
      { id:'qft_ps8',  type:'problem', label:'Srednicki Ch. 6–9 — Derive Z[J] for free scalar, verify Wick\'s theorem by functional diff.' },
      { id:'qft_ps9',  type:'problem', label:'P&S 9.1–9.4 — Faddeev-Popov for Abelian + non-Abelian, ghost Lagrangian for Yang-Mills' },
      { id:'qft_ps10', type:'problem', label:'P&S 12.1–12.2 — β(λ) for φ⁴ and β(e) for QED, solve Callan-Symanzik equation' },
      { id:'qft_ps11', type:'problem', label:'P&S 15.1–15.2 — Yang-Mills Feynman rules: 3-gluon & 4-gluon vertices, BRST nilpotency' },
      { id:'qft_ms1', type:'milestone', label:'⚡ Milestone: Compton scattering — both diagrams → Feynman rules → |M|² → dσ/dΩ — no notes, timed' },
      { id:'qft_ms2', type:'milestone', label:'⚡ Milestone: Derive β(e) = e³/12π² from Π(q²) — verify with Callan-Symanzik, interpret UV flow' },
    ]
  },
  {
    id: 'mod3', phase: 'Module 3', title: 'General Relativity',
    weeks: 'Weeks 30–39', subtitle: 'Wald (rigor) + Carroll (problem sets) · Parallel with late QFT',
    items: [
      { id:'gr_r1', type:'reading', label:'Wald Ch. 1–3: Manifolds, tensor fields, covariant derivative, abstract index notation' },
      { id:'gr_r2', type:'reading', label:'Wald Ch. 4: Einstein\'s equation, derivation from action, stress-energy tensor' },
      { id:'gr_r3', type:'reading', label:'Wald Ch. 5–6: Schwarzschild & Reissner-Nordström exact solutions' },
      { id:'gr_r4', type:'reading', label:'Wald Ch. 7: Singularities, Penrose-Carter diagrams, Kruskal extension' },
      { id:'gr_r5', type:'reading', label:'Wald Ch. 10: Linearized gravity, h_μν perturbation, TT gauge, gravitational waves' },
      { id:'gr_r6', type:'reading', label:'Wald Ch. 11–12: Causal structure, four laws of black hole mechanics, BH thermodynamics' },
      { id:'gr_r7', type:'reading', label:'Carroll Ch. 8: Cosmology — FRW metric, Friedmann equations, cosmological eras' },
      { id:'gr_ps1',  type:'problem', label:'Christoffel symbols: Schwarzschild metric — complete calculation by hand' },
      { id:'gr_ps2',  type:'problem', label:'Verify R_μν = 0 for Schwarzschild — at least two independent components' },
      { id:'gr_ps3',  type:'problem', label:'Massive geodesics: effective potential V_eff(r), circular orbits, find r_ISCO' },
      { id:'gr_ps4',  type:'problem', label:'Null geodesics: light deflection by the Sun — Δφ = 4GM/b (factor-of-2 over Newton)' },
      { id:'gr_ps5',  type:'problem', label:'Perihelion precession: perturb orbit equation → Δφ = 6πGM/a(1−e²) per orbit' },
      { id:'gr_ps6',  type:'problem', label:'Kruskal extension: define (T,X), verify metric regular at r=2GM, draw diagram' },
      { id:'gr_ps7',  type:'problem', label:'Linearized gravity: derive □h̄_μν = −16πG T_μν in Lorenz gauge from linearized EFE' },
      { id:'gr_ps8',  type:'problem', label:'GW quadrupole formula: P = −G/5⟨Ï_ij Ï^ij⟩ — derive using Isaacson effective T_μν' },
      { id:'gr_ps9',  type:'problem', label:'Hawking temperature: Euclidean Schwarzschild → periodic imaginary time → T_H = ℏc³/8πGMk_B' },
      { id:'gr_ps10', type:'problem', label:'Friedmann equations: derive from EFE with FRW metric + perfect fluid T_μν' },
      { id:'gr_ms1', type:'milestone', label:'⚡ Milestone: Schwarzschild in full — compute all Γ, verify R_μν=0, solve geodesic equation (timed)' },
      { id:'gr_ms2', type:'milestone', label:'⚡ Milestone: Linearized EFE in Lorenz gauge, TT conditions, GW energy flux (Isaacson)' },
    ]
  },
  {
    id: 'eft', phase: 'Phase V', title: 'EFT for Gravity',
    weeks: 'Weeks 40–45', subtitle: 'Burgess + Donoghue — The Endgame',
    items: [
      { id:'eft_r1', type:'reading', label:'Burgess Ch. 1–3: EFT philosophy, Wilsonian action, operator expansion, matching' },
      { id:'eft_r2', type:'reading', label:'Burgess Ch. 4–5: Systematic loop expansion in EFTs, power counting rules for gravity' },
      { id:'eft_r3', type:'reading', label:'Donoghue PRD (1994) §I–III: GR as EFT — S_EFT operator structure' },
      { id:'eft_r4', type:'reading', label:'Donoghue PRD (1994) §IV–V: One-loop corrections, non-analytic contributions to V(r)' },
      { id:'eft_r5', type:'reading', label:'Donoghue AIP (2012): EFT treatment of quantum gravity — accessible review' },
      { id:'eft_r6', type:'reading', label:'Burgess Living Reviews (2004): Quantum gravity as EFT — comprehensive reference' },
      { id:'eft_r7', type:'reading', label:'Goldberger & Rothstein (2004) §I–III: NRGR — EFT for inspiraling binary systems' },
      { id:'eft_ps1', type:'problem', label:'Power counting: identify relevant/marginal/irrelevant operators in φ⁴ with cutoff Λ' },
      { id:'eft_ps2', type:'problem', label:'Matching: integrate out heavy scalar at one loop — identify all induced operators' },
      { id:'eft_ps3', type:'problem', label:'Graviton propagator: expand S_EH to O(h²), extract propagator in harmonic gauge' },
      { id:'eft_ps4', type:'problem', label:'Higher-derivative ops: show R² and R_μν R^μν are independent; verify Gauss-Bonnet is topological' },
      { id:'eft_ps5', type:'problem', label:'Donoghue result: reproduce non-analytic q²log q² integral → quantum correction to V(r)' },
      { id:'eft_ps6', type:'problem', label:'Perturbativity breakdown: derive E_breakdown ~ M_Pl from loop power counting' },
      { id:'eft_ps7', type:'problem', label:'NRGR: leading post-Newtonian correction to binary potential — tree-level graviton exchange' },
      { id:'eft_ms1', type:'milestone', label:'⚡ FINAL MILESTONE: Write next-to-leading EFT Lagrangian for gravity · Power count quantum correction · Reproduce Donoghue V(r) from memory' },
    ]
  },
];

/* ────────────────────────────────────────────────
   STORAGE
   ──────────────────────────────────────────────── */
const store = {
  getDaily: (day, id)      => localStorage.getItem(`u1730_d_${day}_${id}`) === 'true',
  setDaily: (day, id, val) => localStorage.setItem(`u1730_d_${day}_${id}`, val),
  getCurr:  (id)           => localStorage.getItem(`u1730_c_${id}`) === 'true',
  setCurr:  (id, val)      => localStorage.setItem(`u1730_c_${id}`, val),
  resetDay: (day) => {
    Object.keys(localStorage)
      .filter(k => k.startsWith(`u1730_d_${day}_`))
      .forEach(k => localStorage.removeItem(k));
  },
};

/* ────────────────────────────────────────────────
   STATE
   ──────────────────────────────────────────────── */
let selectedDay = new Date().getDay();

/* ────────────────────────────────────────────────
   HEADER
   ──────────────────────────────────────────────── */
function initHeader() {
  const now  = new Date();
  const opts = { weekday:'short', month:'short', day:'numeric', year:'numeric' };
  document.getElementById('header-date').textContent =
    now.toLocaleDateString('en-US', opts).toUpperCase().replace(',', '');
}

/* ────────────────────────────────────────────────
   VIEW SWITCHING
   ──────────────────────────────────────────────── */
function switchView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(`view-${name}`).classList.add('active');
  document.getElementById(`nav-${name}`).classList.add('active');
}

/* ────────────────────────────────────────────────
   CALENDAR
   ──────────────────────────────────────────────── */
function buildTaskList(dayIdx) {
  const isWeekend = (dayIdx === 0 || dayIdx === 6);
  return [
    ...(isWeekend ? WEEKEND_FIXED : WEEKDAY_FIXED),
    ...(EVENING[dayIdx] || []),
  ];
}

function makeTaskCard(task, dayIdx) {
  const checked = store.getDaily(dayIdx, task.id);
  const card = document.createElement('div');
  card.className = `task-card${checked ? ' completed' : ''}`;

  let badge = '';
  if (task.session) {
    badge = `<div class="session-badge sb-${task.session.toLowerCase()}">SESSION TYPE ${task.session}</div>`;
  }

  card.innerHTML = `
    <div class="task-strip t-${task.type}"></div>
    <div class="task-body">
      <div class="task-time">${task.time}</div>
      <div class="task-label">${task.label}</div>
      ${task.sub ? `<div class="task-sub">${task.sub}</div>` : ''}
      ${badge}
    </div>
    <label class="task-check-wrap" for="tcb-${task.id}">
      <input type="checkbox" class="task-cb" id="tcb-${task.id}"${checked ? ' checked' : ''}>
    </label>
  `;

  card.querySelector('.task-cb').addEventListener('change', e => {
    store.setDaily(dayIdx, task.id, e.target.checked);
    card.classList.toggle('completed', e.target.checked);
  });

  return card;
}

function renderCalendar() {
  const wrap    = document.getElementById('timeline-wrap');
  const todayIdx = new Date().getDay();
  wrap.innerHTML = '';

  document.getElementById('day-name').textContent = DAY_SHORT[selectedDay];
  document.getElementById('day-sub').textContent  =
    selectedDay === todayIdx ? 'TODAY' : DAY_NAMES[selectedDay].toUpperCase();

  const tasks  = buildTaskList(selectedDay);
  const groups = { morning:[], afternoon:[], evening:[], study:[] };
  tasks.forEach(t => { (groups[t.section] || groups.study).push(t); });

  const labels = { morning:'MORNING', afternoon:'AFTERNOON', evening:'EVENING', study:'STUDY BLOCK' };

  ['morning','afternoon','evening','study'].forEach(sec => {
    const items = groups[sec];
    if (!items.length) return;

    const head = document.createElement('div');
    head.className = 'section-head';
    head.innerHTML = `<span class="section-label">${labels[sec]}</span><div class="section-rule"></div>`;
    wrap.appendChild(head);
    items.forEach(task => wrap.appendChild(makeTaskCard(task, selectedDay)));
  });
}

/* ────────────────────────────────────────────────
   CURRICULUM
   ──────────────────────────────────────────────── */
function getCurrProgress() {
  let total = 0, done = 0;
  CURRICULUM.forEach(mod => mod.items.forEach(item => {
    total++;
    if (store.getCurr(item.id)) done++;
  }));
  return { total, done };
}

function getModProgress(mod) {
  const total = mod.items.length;
  const done  = mod.items.filter(i => store.getCurr(i.id)).length;
  return { total, done };
}

function updateProgressUI() {
  const { total, done } = getCurrProgress();
  const pct = total > 0 ? Math.round((done / total) * 100) : 0;

  document.getElementById('prog-pct').textContent   = `${pct}%`;
  document.getElementById('prog-count').textContent = `${done} of ${total} complete`;

  const bar = document.getElementById('prog-bar');
  bar.style.width = `${pct}%`;
  bar.classList.toggle('show-dot', pct > 0);

  // Show current active phase
  let label = 'Phase V — EFT for Gravity';
  for (const mod of CURRICULUM) {
    const { total: t, done: d } = getModProgress(mod);
    if (d < t) { label = `${mod.phase} — ${mod.title}`; break; }
  }
  document.getElementById('prog-phase').textContent = label;
}

const ICONS = {
  reading:  `<svg class="sub-group-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  problem:  `<svg class="sub-group-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  milestone:`<svg class="sub-group-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
};

function buildGroupHtml(items, type, modId) {
  if (!items.length) return '';
  const label = { reading:'Readings', problem:'Problem Sets', milestone:'Milestones' }[type];
  const rows = items.map(item => {
    const checked     = store.getCurr(item.id);
    const isMilestone = item.type === 'milestone';
    return `
      <label class="curr-item${isMilestone ? ' is-milestone' : ''}${checked ? ' done' : ''}" for="ci-${item.id}">
        <input type="checkbox" class="curr-cb type-${item.type}" id="ci-${item.id}"
          data-id="${item.id}" data-mod="${modId}"${checked ? ' checked' : ''}>
        <span class="curr-item-text">${item.label}</span>
      </label>`;
  }).join('');

  return `
    <div class="sub-group-head">
      ${ICONS[type]}
      <span class="sub-group-label">${label}</span>
    </div>${rows}`;
}

function renderCurriculum() {
  const list = document.getElementById('curriculum-list');
  list.innerHTML = '';

  CURRICULUM.forEach(mod => {
    const { total, done } = getModProgress(mod);
    const readings   = mod.items.filter(i => i.type === 'reading');
    const problems   = mod.items.filter(i => i.type === 'problem');
    const milestones = mod.items.filter(i => i.type === 'milestone');

    const block = document.createElement('div');
    block.className = 'mod-block';
    block.innerHTML = `
      <div class="mod-header" role="button" aria-expanded="false">
        <div class="mod-phase">${mod.phase.toUpperCase()}</div>
        <div class="mod-info">
          <div class="mod-title">${mod.title}</div>
          ${mod.subtitle ? `<div class="mod-subtitle">${mod.subtitle}</div>` : ''}
          <div class="mod-weeks">${mod.weeks}</div>
        </div>
        <div class="mod-right">
          <div class="mod-prog-mini" id="mpp-${mod.id}">${done}/${total}</div>
          <div class="mod-chevron">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </div>
        </div>
      </div>
      <div class="mod-body">
        ${buildGroupHtml(readings,   'reading',   mod.id)}
        ${buildGroupHtml(problems,   'problem',   mod.id)}
        ${buildGroupHtml(milestones, 'milestone', mod.id)}
      </div>`;

    block.querySelector('.mod-header').addEventListener('click', () => {
      const open = block.classList.toggle('open');
      block.querySelector('.mod-header').setAttribute('aria-expanded', String(open));
    });

    list.appendChild(block);
  });

  // Delegated change handler for all curriculum checkboxes
  list.addEventListener('change', e => {
    const cb = e.target.closest('.curr-cb');
    if (!cb) return;

    const { id, mod: modId } = cb.dataset;
    store.setCurr(id, cb.checked);
    cb.closest('.curr-item').classList.toggle('done', cb.checked);

    const mod = CURRICULUM.find(m => m.id === modId);
    if (mod) {
      const { total, done } = getModProgress(mod);
      const el = document.getElementById(`mpp-${modId}`);
      if (el) el.textContent = `${done}/${total}`;
    }

    updateProgressUI();
  });

  updateProgressUI();
}

/* ────────────────────────────────────────────────
   EVENT LISTENERS
   ──────────────────────────────────────────────── */
function attachListeners() {
  document.getElementById('nav-calendar').addEventListener('click', () => switchView('calendar'));
  document.getElementById('nav-plan').addEventListener('click',     () => switchView('plan'));

  document.getElementById('btn-prev-day').addEventListener('click', () => {
    selectedDay = (selectedDay + 6) % 7;
    renderCalendar();
  });
  document.getElementById('btn-next-day').addEventListener('click', () => {
    selectedDay = (selectedDay + 1) % 7;
    renderCalendar();
  });

  document.getElementById('btn-reset-daily').addEventListener('click', () => {
    if (!confirm(`Reset all tasks for ${DAY_NAMES[selectedDay]}?`)) return;
    store.resetDay(selectedDay);
    renderCalendar();
  });
}

/* ────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  attachListeners();
  renderCalendar();
  renderCurriculum();
});
