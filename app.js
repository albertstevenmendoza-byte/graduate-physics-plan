/* ══════════════════════════════════════════════════
   UNIT 1730 — Physics Tracker · app.js
   Views: Curriculum + Problem Sets
   ══════════════════════════════════════════════════ */
'use strict';

/* ────────────────────────────────────────────────
   DATA: Curriculum
   problem items: shorter labels + psModule field
   ──────────────────────────────────────────────── */
const CURRICULUM = [
  {
    id:'phase0', phase:'Phase 0', title:'Diagnostic Baseline',
    weeks:'Week 1', subtitle:'Cold assessment — no new material',
    items:[
      { id:'p0_r1',  type:'reading',   label:'Goldstein Ch. 2 — review constraint problem structure' },
      { id:'p0_ps1', type:'problem',   label:'Goldstein 2.5 — particle on sphere (cold, timed)', psModule:'phase0' },
      { id:'p0_ps2', type:'problem',   label:'Jackson 2.2 — point charge + grounded sphere (cold)', psModule:'phase0' },
      { id:'p0_ps3', type:'problem',   label:'Sakurai 5.1 — SHO with λx³ perturbation (cold)', psModule:'phase0' },
      { id:'p0_ps4', type:'problem',   label:'Dirac equation derivation from scratch (cold)', psModule:'phase0' },
    ]
  },
  {
    id:'mod1', phase:'Module 1', title:'Classical Mechanics',
    weeks:'Weeks 2–5', subtitle:'Constraints & Hamiltonian Structure · Goldstein + L&L',
    items:[
      { id:'m1_r1', type:'reading', label:'Goldstein Ch. 1–2: Variational principles, holonomic & non-holonomic constraints' },
      { id:'m1_r2', type:'reading', label:'Goldstein Ch. 3: Central force problems, orbit equation' },
      { id:'m1_r3', type:'reading', label:'Goldstein Ch. 8: Hamiltonian mechanics, Legendre transform' },
      { id:'m1_r4', type:'reading', label:'Goldstein Ch. 9: Canonical transformations, F1–F4 generating functions' },
      { id:'m1_r5', type:'reading', label:'Goldstein Ch. 10: Hamilton-Jacobi theory, action-angle variables' },
      { id:'m1_r6', type:'reading', label:'L&L Mechanics Vol. 1 §2–4: Supplemental problem bank' },
      { id:'m1_ps1', type:'problem', label:'Goldstein 2.1, 2.2, 2.5 — Lagrangian + holonomic constraints', psModule:'mod1' },
      { id:'m1_ps2', type:'problem', label:'Goldstein 2.8, 2.15 — Rolling constraints, Lagrange multipliers', psModule:'mod1' },
      { id:'m1_ps3', type:'problem', label:'Goldstein 2.20 — Non-holonomic rolling disk', psModule:'mod1' },
      { id:'m1_ps4', type:'problem', label:'Goldstein 3.3, 3.8 — Orbit equation, Kepler problem', psModule:'mod1' },
      { id:'m1_ps5', type:'problem', label:'Goldstein 8.6, 8.12 — Hamilton\'s equations, canonical transforms', psModule:'mod1' },
      { id:'m1_ps6', type:'problem', label:'Goldstein 9.1, 9.4 — Poisson bracket algebra', psModule:'mod1' },
      { id:'m1_ps7', type:'problem', label:'Goldstein 10.7 — HJ equation, Kepler separation', psModule:'mod1' },
      { id:'m1_ms1', type:'milestone', label:'⚡ Milestone: F1–F4 for SHO — all four generating function types' },
      { id:'m1_ms2', type:'milestone', label:'⚡ Milestone: Full HJ treatment of Kepler — derive frequencies (timed)' },
    ]
  },
  {
    id:'mod2', phase:'Module 2', title:'Electromagnetism',
    weeks:'Weeks 6–12', subtitle:'Graduate Level Remediation · Jackson (3rd ed.)',
    items:[
      { id:'m2_r1', type:'reading', label:'Jackson Ch. 1–2: Electrostatics, Green\'s functions, BCs' },
      { id:'m2_r2', type:'reading', label:'Jackson Ch. 3: Separation of variables — spherical & cylindrical' },
      { id:'m2_r3', type:'reading', label:'Jackson Ch. 5–6: Magnetostatics, full Maxwell equations' },
      { id:'m2_r4', type:'reading', label:'Jackson Ch. 7: Plane waves, polarization, dispersion' },
      { id:'m2_r5', type:'reading', label:'Jackson Ch. 9: Radiation — Larmor formula, retarded potentials' },
      { id:'m2_r6', type:'reading', label:'Jackson Ch. 11–12: Covariant EM — F\u03bc\u03bd, 4-vectors, T\u03bc\u03bd' },
      { id:'m2_ps1', type:'problem', label:'Jackson 2.1, 2.2, 2.7 — Image charges, BVPs', psModule:'mod2' },
      { id:'m2_ps2', type:'problem', label:'Jackson 2.11, 2.23 — Green\'s function solutions', psModule:'mod2' },
      { id:'m2_ps3', type:'problem', label:'Jackson 3.1, 3.3, 3.6 — Azimuthal symmetry, Legendre expansion', psModule:'mod2' },
      { id:'m2_ps4', type:'problem', label:'Jackson 3.9, 3.10 — Full spherical harmonic expansion', psModule:'mod2' },
      { id:'m2_ps5', type:'problem', label:'Jackson 5.1, 5.3, 5.6 — Magnetic multipoles', psModule:'mod2' },
      { id:'m2_ps6', type:'problem', label:'Jackson 6.4, 6.8 — Wave equation from Maxwell', psModule:'mod2' },
      { id:'m2_ps7', type:'problem', label:'Jackson 7.2, 7.4, 7.19 — Plane waves, Fresnel', psModule:'mod2' },
      { id:'m2_ps8', type:'problem', label:'Jackson 9.1, 9.3, 9.7, 9.16 — Radiation, Larmor, synchrotron', psModule:'mod2' },
      { id:'m2_ps9', type:'problem', label:'Jackson 11.2, 11.5, 11.14 — 4-vectors, F\u03bc\u03bd, T\u03bc\u03bd', psModule:'mod2' },
      { id:'m2_ps10', type:'problem', label:'Jackson 12.1, 12.3 — Covariant Lagrangian, E-L \u2192 Maxwell', psModule:'mod2' },
      { id:'m2_ms1', type:'milestone', label:'⚡ Milestone: Larmor formula from retarded potentials (timed, 45 min)' },
      { id:'m2_ms2', type:'milestone', label:'⚡ Milestone: Derive Maxwell from L = \u2212\u00bcF\u03bc\u03bdF^\u03bc\u03bd via E-L' },
    ]
  },
  {
    id:'qm', phase:'Interlude', title:'Quantum Mechanics Review',
    weeks:'Weeks 13–16', subtitle:'Graduate Level · Sakurai',
    items:[
      { id:'qm_r1', type:'reading', label:'Sakurai Ch. 1–2: Bra-ket, spin, density matrix, quantum dynamics' },
      { id:'qm_r2', type:'reading', label:'Sakurai Ch. 3: Angular momentum algebra, Clebsch-Gordan' },
      { id:'qm_r3', type:'reading', label:'Sakurai Ch. 5: Time-independent & time-dependent perturbation theory' },
      { id:'qm_r4', type:'reading', label:'Sakurai Ch. 6: Scattering — Born, partial waves, optical theorem' },
      { id:'qm_r5', type:'reading', label:'Sakurai Ch. 8: Relativistic QM — Klein-Gordon, Dirac equation' },
      { id:'qm_ps1', type:'problem', label:'Sakurai 1.12, 1.21, 1.23 — Spin, density matrix', psModule:'qm' },
      { id:'qm_ps2', type:'problem', label:'Sakurai 2.3, 2.7 — Time evolution, Heisenberg picture', psModule:'qm' },
      { id:'qm_ps3', type:'problem', label:'Sakurai 3.8, 3.33, 3.35 — CG coefficients, Wigner-Eckart', psModule:'qm' },
      { id:'qm_ps4', type:'problem', label:'Sakurai 5.1, 5.4, 5.13, 5.17, 5.32 — PT, Stark, variational, golden rule', psModule:'qm' },
      { id:'qm_ps5', type:'problem', label:'Sakurai 6.1, 6.4 — Born approximation cross-sections', psModule:'qm' },
      { id:'qm_ms1', type:'milestone', label:'⚡ Milestone: Full H fine structure — relativistic + spin-orbit + Darwin' },
      { id:'qm_ms2', type:'milestone', label:'⚡ Milestone: Dirac equation — derive \u03b3-algebra, write u(p), v(p)' },
    ]
  },
  {
    id:'geo', phase:'Phase III', title:'Geometry & Relativity',
    weeks:'Weeks 17–20', subtitle:'Carroll + Wald — Math Infrastructure',
    items:[
      { id:'geo_r1', type:'reading', label:'Carroll Ch. 1–2: SR, manifolds, tangent spaces, differential forms' },
      { id:'geo_r2', type:'reading', label:'Carroll Ch. 3: Covariant derivative, Riemann tensor, Bianchi' },
      { id:'geo_r3', type:'reading', label:'Carroll Ch. 4 §1–2: Einstein\'s equation — orientation only' },
      { id:'geo_r4', type:'reading', label:'Wald Appendix A–B: Abstract index notation' },
      { id:'geo_ps1', type:'problem', label:'Index gymnastics sprint — 8 tensor identity proofs', psModule:'geo' },
      { id:'geo_ps2', type:'problem', label:'Christoffel symbols: 2-sphere (S²) — full calculation', psModule:'geo' },
      { id:'geo_ps3', type:'problem', label:'Christoffel symbols: Schwarzschild metric — full calculation', psModule:'geo' },
      { id:'geo_ps4', type:'problem', label:'Riemann tensor for Schwarzschild, verify R\u03bc\u03bd = 0', psModule:'geo' },
      { id:'geo_ps5', type:'problem', label:'Killing equation: find all KVs for Minkowski and S²', psModule:'geo' },
      { id:'geo_ps6', type:'problem', label:'Parallel transport around loop on S²', psModule:'geo' },
      { id:'geo_ms1', type:'milestone', label:'⚡ Milestone: Derive EFE from \u03b4S\u2095/\u03b4g^\u03bc\u03bd = 0' },
    ]
  },
  {
    id:'mod4', phase:'Module 4', title:'Quantum Field Theory',
    weeks:'Weeks 21–34', subtitle:'Peskin & Schroeder + Srednicki',
    items:[
      { id:'qft_r1', type:'reading', label:'P&S Ch. 2: Klein-Gordon, canonical quantization, Feynman propagator' },
      { id:'qft_r2', type:'reading', label:'P&S Ch. 3: Dirac field, quantization, C·P·T symmetries' },
      { id:'qft_r3', type:'reading', label:'P&S Ch. 4: Wick\'s theorem, Feynman diagrams' },
      { id:'qft_r4', type:'reading', label:'P&S Ch. 5: Elementary QED processes' },
      { id:'qft_r5', type:'reading', label:'P&S Ch. 6–7: Radiative corrections, dim. reg., Ward identity' },
      { id:'qft_r6', type:'reading', label:'Srednicki Ch. 6–9: Path integral, Z[J], 1PI effective action' },
      { id:'qft_r7', type:'reading', label:'P&S Ch. 10–12: Renormalization, Wilsonian RG, Callan-Symanzik' },
      { id:'qft_r8', type:'reading', label:'P&S Ch. 15–16: Yang-Mills, Faddeev-Popov, BRST' },
      { id:'qft_ps1',  type:'problem', label:'P&S 2.1–2.4 — KG quantization, Fock space, propagator', psModule:'mod4' },
      { id:'qft_ps2',  type:'problem', label:'P&S 3.1–3.5 — Dirac field, \u03b3-matrix trace identities', psModule:'mod4' },
      { id:'qft_ps3',  type:'problem', label:'P&S 4.1–4.3 — Wick contractions, \u03c6\u2074 Feynman rules', psModule:'mod4' },
      { id:'qft_ps4',  type:'problem', label:'P&S 5.1, 5.3 — e\u207ae\u207b \u2192 \u03bc\u207a\u03bc\u207b: amplitude, |M|², \u03c3', psModule:'mod4' },
      { id:'qft_ps5',  type:'problem', label:'P&S 5.5 — Compton scattering: both diagrams, full d\u03c3/d\u03a9', psModule:'mod4' },
      { id:'qft_ps6',  type:'problem', label:'P&S 6.1–6.2 — One-loop electron self-energy \u03a3(p\u0338)', psModule:'mod4' },
      { id:'qft_ps7',  type:'problem', label:'P&S 7.1–7.2 — Dim. reg., vacuum polarization \u03a0(q²)', psModule:'mod4' },
      { id:'qft_ps8',  type:'problem', label:'Srednicki Ch. 6–9 — Z[J] derivation, functional derivatives', psModule:'mod4' },
      { id:'qft_ps9',  type:'problem', label:'P&S 9.1–9.4 — Faddeev-Popov, ghost Lagrangian', psModule:'mod4' },
      { id:'qft_ps10', type:'problem', label:'P&S 12.1–12.2 — \u03b2-functions for \u03c6\u2074 and QED', psModule:'mod4' },
      { id:'qft_ps11', type:'problem', label:'P&S 15.1–15.2 — Yang-Mills Feynman rules, BRST nilpotency', psModule:'mod4' },
      { id:'qft_ms1', type:'milestone', label:'⚡ Milestone: Compton scattering — full derivation, no notes, timed' },
      { id:'qft_ms2', type:'milestone', label:'⚡ Milestone: Derive \u03b2(e) = e³/12\u03c0² from \u03a0(q²), verify CS equation' },
    ]
  },
  {
    id:'mod3', phase:'Module 3', title:'General Relativity',
    weeks:'Weeks 30–39', subtitle:'Wald + Carroll · Parallel with late QFT',
    items:[
      { id:'gr_r1', type:'reading', label:'Wald Ch. 1–3: Manifolds, tensor fields, covariant derivative' },
      { id:'gr_r2', type:'reading', label:'Wald Ch. 4: Einstein\'s equation, stress-energy tensor' },
      { id:'gr_r3', type:'reading', label:'Wald Ch. 5–6: Schwarzschild, Reissner-Nordström solutions' },
      { id:'gr_r4', type:'reading', label:'Wald Ch. 7: Singularities, Penrose-Carter diagrams' },
      { id:'gr_r5', type:'reading', label:'Wald Ch. 10: Linearized gravity, gravitational waves, TT gauge' },
      { id:'gr_r6', type:'reading', label:'Wald Ch. 11–12: BH thermodynamics, four laws' },
      { id:'gr_r7', type:'reading', label:'Carroll Ch. 8: Cosmology — FRW metric, Friedmann equations' },
      { id:'gr_ps1',  type:'problem', label:'Schwarzschild Christoffel symbols — complete (Type A block)', psModule:'mod3' },
      { id:'gr_ps2',  type:'problem', label:'Verify R\u03bc\u03bd = 0 for Schwarzschild (vacuum EFE)', psModule:'mod3' },
      { id:'gr_ps3',  type:'problem', label:'Massive geodesics: effective potential, r_ISCO', psModule:'mod3' },
      { id:'gr_ps4',  type:'problem', label:'Null geodesics: light deflection \u0394\u03c6 = 4GM/b', psModule:'mod3' },
      { id:'gr_ps5',  type:'problem', label:'Perihelion precession: \u0394\u03c6 = 6\u03c0GM/a(1\u2212e²)', psModule:'mod3' },
      { id:'gr_ps6',  type:'problem', label:'Kruskal extension: define (T,X), verify regularity at r=2GM', psModule:'mod3' },
      { id:'gr_ps7',  type:'problem', label:'Linearized gravity: derive \u25a1h\u0304\u03bc\u03bd = \u221216\u03c0G T\u03bc\u03bd', psModule:'mod3' },
      { id:'gr_ps8',  type:'problem', label:'GW quadrupole formula: P = \u2212G/5\u27e8\u00cf4\u1d62\u02c7\u00cf4^ij\u27e9', psModule:'mod3' },
      { id:'gr_ps9',  type:'problem', label:'Hawking temperature via Euclidean Schwarzschild', psModule:'mod3' },
      { id:'gr_ps10', type:'problem', label:'Friedmann equations from EFE + FRW + perfect fluid', psModule:'mod3' },
      { id:'gr_ms1', type:'milestone', label:'⚡ Milestone: Schwarzschild — \u0393, R\u03bc\u03bd=0, geodesics (timed)' },
      { id:'gr_ms2', type:'milestone', label:'⚡ Milestone: Linearized EFE, TT conditions, Isaacson GW energy flux' },
    ]
  },
  {
    id:'eft', phase:'Phase V', title:'EFT for Gravity',
    weeks:'Weeks 40–45', subtitle:'Burgess + Donoghue — The Endgame',
    items:[
      { id:'eft_r1', type:'reading', label:'Burgess Ch. 1–3: EFT philosophy, Wilsonian action, matching' },
      { id:'eft_r2', type:'reading', label:'Burgess Ch. 4–5: Loop expansion, power counting for gravity' },
      { id:'eft_r3', type:'reading', label:'Donoghue PRD (1994) §I–III: GR as EFT — S_EFT operator structure' },
      { id:'eft_r4', type:'reading', label:'Donoghue PRD (1994) §IV–V: One-loop, non-analytic contributions' },
      { id:'eft_r5', type:'reading', label:'Donoghue AIP (2012): EFT treatment of quantum gravity' },
      { id:'eft_r6', type:'reading', label:'Burgess Living Reviews (2004): Quantum gravity as EFT' },
      { id:'eft_r7', type:'reading', label:'Goldberger & Rothstein (2004): NRGR for binary systems' },
      { id:'eft_ps1', type:'problem', label:'Power counting in \u03c6\u2074 with cutoff \u039b', psModule:'eft' },
      { id:'eft_ps2', type:'problem', label:'Matching: integrate out heavy scalar, find induced operators', psModule:'eft' },
      { id:'eft_ps3', type:'problem', label:'Graviton propagator from S_EH expanded to O(h²)', psModule:'eft' },
      { id:'eft_ps4', type:'problem', label:'Higher-derivative operators: R², R\u03bc\u03bdR^\u03bc\u03bd, Gauss-Bonnet', psModule:'eft' },
      { id:'eft_ps5', type:'problem', label:'Donoghue result: q²log q² integral \u2192 quantum correction to V(r)', psModule:'eft' },
      { id:'eft_ps6', type:'problem', label:'Perturbativity breakdown: derive E_breakdown ~ M_Pl', psModule:'eft' },
      { id:'eft_ps7', type:'problem', label:'NRGR: leading-PN binary potential from tree-level graviton exchange', psModule:'eft' },
      { id:'eft_ms1', type:'milestone', label:'⚡ FINAL MILESTONE: Write next-to-leading EFT Lagrangian, power count V(r) correction, reproduce Donoghue from memory' },
    ]
  },
];

/* ────────────────────────────────────────────────
   DATA: Problem Sets
   Individual problem entries with statements + solution steps
   ──────────────────────────────────────────────── */
const PROBLEM_SETS = [
  {
    moduleId: 'phase0', phase: 'Phase 0', label: 'Diagnostic Baseline',
    problems: [
      {
        id:'ps_d1', ref:'Goldstein 2.5', currId:'p0_ps1',
        title:'Particle on the Surface of a Sphere',
        statement:'A particle of mass m is constrained to move without friction on the inner surface of a sphere of radius R. Gravity acts downward. Using spherical angles (θ, φ) as generalized coordinates: (a) write the Lagrangian, (b) derive both equations of motion, and (c) identify the conserved quantity and its physical meaning. This is a cold timed diagnostic — record your time.',
        solution:[
          'Constraint r = R (holonomic) reduces 3D motion to 2 DOF. Use θ (polar from top) and φ (azimuthal).',
          'T = ½mR²(θ̇² + sin²θ φ̇²). V = mgR cosθ (height z = R cosθ). Lagrangian: L = ½mR²(θ̇² + sin²θ φ̇²) − mgR cosθ.',
          'E-L for θ: mR²θ̈ − mR²sinθ cosθ φ̇² + mgR sinθ = 0. This gives the θ-oscillator with centrifugal coupling.',
          'E-L for φ: d/dt(mR² sin²θ φ̇) = 0 → L_z = mR² sin²θ φ̇ = const. Azimuthal angular momentum is conserved (no φ dependence in L).',
          'Benchmark: full setup through both EOM should take ≤ 15 min. If setup alone exceeds 20 min, constraint machinery needs review before Module 1.',
        ]
      },
      {
        id:'ps_d2', ref:'Jackson 2.2', currId:'p0_ps2',
        title:'Point Charge and Grounded Conducting Sphere',
        statement:'A point charge q is located at distance d from the center of a grounded conducting sphere of radius a < d. Using the method of images: (a) find the image charge magnitude q\' and its position d\' inside the sphere, (b) write Φ(x) outside the sphere, and (c) compute the induced surface charge density σ(θ) where θ is measured from the axis through q. Verify that the total induced charge equals q\'.',
        solution:[
          'Image charge: q\' = −(a/d)q located at d\' = a²/d from the center (inside the sphere on the line from center to q).',
          'Potential outside: Φ(x) = (1/4πε₀)[q/|x − d ẑ| + q\'/|x − d\' ẑ|]. This automatically satisfies Φ = 0 on the sphere.',
          'Surface charge: σ(θ) = −ε₀(∂Φ/∂r)|_{r=a}. After differentiating: σ(θ) = −q(d²−a²) / [4πa(d²+a²−2ad cosθ)^(3/2)].',
          'Verify total charge: ∫σ dA = ∫₀^π σ(θ) 2πa² sinθ dθ = q\' = −qa/d. Use substitution u = d²+a²−2ad cosθ.',
          'Benchmark: image charge placement should be immediate (no derivation). If you needed to re-derive d\', Green\'s function intuition needs work before EM.',
        ]
      },
      {
        id:'ps_d3', ref:'Sakurai 5.1', currId:'p0_ps3',
        title:'Perturbed SHO — Cubic Term',
        statement:'A 1D harmonic oscillator H₀ = p²/2m + mω²x²/2 is perturbed by H\' = λx³. Compute the first-order correction to all energy eigenvalues E_n^(1) = ⟨n|λx³|n⟩. Express x in terms of ladder operators a and a†. State why the answer takes the value it does without explicit calculation.',
        solution:[
          'Express x = √(ℏ/2mω)(a + a†). Then x³ = (ℏ/2mω)^(3/2)(a + a†)³.',
          'Expand (a + a†)³ = a³ + a†³ + a²a† + aa†a + a†a² + a†²a + a†a†a + aa†a† and use [a,a†]=1 to normal-order.',
          '⟨n|x³|n⟩ = 0 for all n. Reason: x³ is an odd function of x, and |ψ_n(x)|² is always even in x (for any parity eigenstate), so the integrand ψ_n* x³ ψ_n is odd → integral vanishes.',
          'Parity argument: H₀ eigenstates have definite parity (−1)^n. x³ has odd parity. ⟨n|x³|n⟩ = matrix element of odd-parity operator between same-parity states = 0.',
          'Result: E_n^(1) = 0 for all n. First non-trivial correction appears at second order E_n^(2) ≠ 0.',
        ]
      },
      {
        id:'ps_d4', ref:'Sakurai Ch. 8 — Dirac', currId:'p0_ps4',
        title:'Deriving the Dirac Equation from First Principles',
        statement:'The Klein-Gordon equation (∂² + m²)ψ = 0 is second order in time and has negative-probability-density solutions. Derive an equation that is (i) first order in both ∂_t and ∇, (ii) Lorentz covariant, and (iii) implies the KG equation for each component. Find the conditions on the matrices α and β, prove they must be at least 4×4, and write the final equation in covariant form with γ^μ matrices.',
        solution:[
          'Require: i∂_t ψ = (α·p + βm)ψ. Squaring both sides must give i²∂_t² ψ = (−∇²+m²)ψ (KG), so: αᵢαⱼ + αⱼαᵢ = 2δᵢⱼ, αᵢβ + βαᵢ = 0, β² = 1. These are anti-commutation relations.',
          'These relations cannot be satisfied by numbers. Attempt 2×2: Pauli matrices anti-commute but {σᵢ,σⱼ} = 2δᵢⱼI only — β cannot anti-commute with all three αᵢ in 2D. Smallest representation is 4×4 (Dirac representation).',
          'Explicit 4×4 Dirac representation: β = γ⁰ = diag(I, −I), αᵢ = γ⁰γⁱ where γⁱ = [[0, σᵢ],[−σᵢ, 0]]. Verify {γ^μ, γ^ν} = 2g^μν (the Clifford algebra).',
          'Multiply i∂_t ψ = (α·p + βm)ψ on left by β and rearrange to get the covariant form: (iγ^μ∂_μ − m)ψ = 0, where we define γ^μ = (β, βα).',
          'Benchmark: if the α/β algebra and 4×4 size argument took > 20 min, QFT Chapter 3 (Dirac field) will need extra time. The covariant form should feel like a natural rewrite.',
        ]
      },
    ]
  },
  {
    moduleId: 'mod1', phase: 'Module 1', label: 'Classical Mechanics',
    problems: [
      {
        id:'ps_g21', ref:'Goldstein 2.1', currId:'m1_ps1',
        title:'Lagrangian in Polar Coordinates',
        statement:'A particle moves in a plane under a central force F(r). Write the Lagrangian in polar coordinates (r, φ), derive the two Euler-Lagrange equations, and identify all conserved quantities. Show that the conservation law for φ is equivalent to Kepler\'s second law.',
        solution:[
          'T = ½m(ṙ² + r²φ̇²), V = V(r). Lagrangian: L = ½m(ṙ² + r²φ̇²) − V(r).',
          'E-L for r: mr̈ − mrφ̇² + dV/dr = 0. The term −mrφ̇² is the centrifugal force.',
          'E-L for φ: d/dt(mr²φ̇) = 0 → ℓ = mr²φ̇ = const. This is conservation of angular momentum.',
          'Kepler\'s 2nd law: dA/dt = ½r²φ̇ = ℓ/2m = const. Equal areas in equal times follows directly from ∂L/∂φ = 0.',
        ]
      },
      {
        id:'ps_g22', ref:'Goldstein 2.2', currId:'m1_ps1',
        title:'Atwood\'s Machine via Lagrangian',
        statement:'Two masses m₁ and m₂ are connected by an inextensible massless string over a frictionless pulley. Using the displacement x of m₁ as the single generalized coordinate: (a) write the Lagrangian, (b) derive the equation of motion, and (c) find the acceleration and the tension T in the string.',
        solution:[
          'Constraint: x₁ + x₂ = L (string length, constant). So ẋ₂ = −ẋ₁ = −ẋ. One DOF: x (downward displacement of m₁).',
          'T = ½(m₁+m₂)ẋ². V = −m₁gx − m₂g(L−x) + const. L = ½(m₁+m₂)ẋ² + (m₁−m₂)gx.',
          'E-L: (m₁+m₂)ẍ = (m₁−m₂)g → ẍ = (m₁−m₂)g/(m₁+m₂). This is the standard Atwood result.',
          'Tension: T = m₁(g−ẍ) = 2m₁m₂g/(m₁+m₂). The Lagrangian method doesn\'t give T directly — use Newton\'s law for one mass after finding ẍ.',
        ]
      },
      {
        id:'ps_g25', ref:'Goldstein 2.5', currId:'m1_ps1',
        title:'Particle on a Cone Surface',
        statement:'A particle of mass m slides without friction on the inner surface of a right circular cone with half-angle α, vertex down, axis vertical. Set up the Lagrangian using cylindrical coordinates (r, φ, z), apply the holonomic constraint, reduce to two DOF, and derive the equations of motion. Find the condition for circular orbit.',
        solution:[
          'Holonomic constraint: z = r cotα (surface of cone). Reduce to (r, φ): ż = ṙ cotα.',
          'T = ½m(ṙ² + r²φ̇² + ż²) = ½m(ṙ²/sin²α + r²φ̇²). V = mgr cotα.',
          'E-L for r: mṙ̈/sin²α − mrφ̇² + mg cotα = 0. E-L for φ: d/dt(mr²φ̇) = 0 → ℓ = mr²φ̇ = const.',
          'Circular orbit (ṙ = r̈ = 0): mrφ̇² = mg cotα → r₀φ̇² = g cosα sinα. Using ℓ = mr₀²φ̇: r₀ = (ℓ² sin²α / m² g cosα sinα)^(1/3).',
        ]
      },
      {
        id:'ps_g28', ref:'Goldstein 2.8', currId:'m1_ps2',
        title:'Bead on a Rotating Wire',
        statement:'A bead of mass m slides freely on a straight wire that rotates in a horizontal plane with constant angular velocity ω. The distance r of the bead from the pivot is the only generalized coordinate. Write the Lagrangian, derive the equation of motion, and solve it. Find the constraint force (the normal force from the wire) using the Lagrange multiplier method.',
        solution:[
          'Constraint: φ = ωt (imposed rotation). One DOF: r. T = ½m(ṙ² + r²ω²), V = 0.',
          'E-L for r: mr̈ − mrω² = 0 → r̈ = rω². This is a repulsive centrifugal equation.',
          'General solution: r(t) = Ae^(ωt) + Be^(−ωt). With initial conditions r(0) = r₀, ṙ(0) = 0: r(t) = r₀ cosh(ωt).',
          'Lagrange multiplier for the φ-constraint: add λ(φ − ωt) to L. The constraint force in the φ-direction is Q_φ = λ. This gives the normal force (torque) keeping φ = ωt: N = −2mṙω (Coriolis force that the wire must supply).',
        ]
      },
      {
        id:'ps_g215', ref:'Goldstein 2.15', currId:'m1_ps2',
        title:'Disk Rolling Down an Inclined Plane',
        statement:'A uniform disk of mass m and radius R rolls without slipping down a plane inclined at angle α. The displacement x of the center of mass along the plane is one generalized coordinate. (a) Write the rolling constraint, identify it as holonomic, (b) write the Lagrangian, (c) find ẍ, and (d) use Lagrange multipliers to find the friction force.',
        solution:[
          'Rolling constraint: ẋ = Rθ̇ (no slipping). Since this integrates to x = Rθ + const, it is holonomic. One DOF after substitution: x.',
          'T = ½mẋ² + ½Iθ̇² = ½mẋ² + ½(½mR²)(ẋ/R)² = ¾mẋ². V = −mgx sinα. L = ¾mẋ² + mgx sinα.',
          'E-L: (3/2)mẍ = mg sinα → ẍ = (2/3)g sinα. Compare to sliding without friction (g sinα) and with slipping (g sinα − μg cosα).',
          'Friction via multiplier: add λ(ẋ − Rθ̇) to L. The generalized force in x is λ (friction f), in θ is −λR (torque). From both E-L equations: f = λ = ⅓mg sinα. Verify: f ≤ μₛmg cosα requires μₛ ≥ tanα/3.',
        ]
      },
      {
        id:'ps_g220', ref:'Goldstein 2.20', currId:'m1_ps3',
        title:'Sphere Rolling on a Plane — Non-Holonomic',
        statement:'A uniform solid sphere of mass m and radius R rolls without slipping on a flat horizontal plane. The position of the center is (x, y) and the orientation is given by Euler angles. Write the rolling constraints and show they are non-holonomic (non-integrable). Derive the equations of motion using the Lagrange multiplier method for non-holonomic constraints.',
        solution:[
          'Rolling constraints: ẋ = Rω_y (x-constraint), ẏ = −Rω_x (y-constraint), where ω = (ω_x, ω_y, ω_z) is the angular velocity. These involve velocities only.',
          'Non-holonomic test: check if ẋ = Rω_y can be written as dF/dt = 0 for some F(x, y, angles). The constraints cannot be integrated because ω_x, ω_y depend on all Euler angles in a path-dependent way.',
          'Use Lagrange multipliers: add λ₁(ẋ − Rω_y) + λ₂(ẏ + Rω_x) to the variational principle (d\'Alembert-Lagrange). This yields 5 EOM with 2 multipliers.',
          'Key result: the sphere\'s center moves as a free particle (no net horizontal force on average), but the trajectory of a point on the sphere is not closed in general — this is the geometric phase / holonomy of rolling.',
        ]
      },
      {
        id:'ps_g33', ref:'Goldstein 3.3', currId:'m1_ps4',
        title:'Orbit Equation for Central Force',
        statement:'Derive the orbit equation u(φ) where u = 1/r for a particle in a central force F(r) = −dV/dr. Starting from the Lagrangian, use the substitution u = 1/r and ℓ = mr²φ̇ to convert the radial equation of motion into the Binet equation: d²u/dφ² + u = −m/(ℓ²u²) F(1/u).',
        solution:[
          'From E-L: mr̈ − mrφ̇² = F(r). With ℓ = mr²φ̇ → φ̇ = ℓ/mr², eliminate t: ṙ = dr/dt = (dr/dφ)φ̇ = −(ℓ/m)du/dφ.',
          'Second derivative: r̈ = −(ℓ²u²/m) d²u/dφ². Substitute into radial EOM: −(ℓ²u²/m)d²u/dφ² − (ℓ²u³/m) = F/m · (−1/u²) [using r = 1/u].',
          'Divide by −ℓ²u²/m to get the Binet equation: d²u/dφ² + u = −m/(ℓ²u²) F(1/u).',
          'For gravity F = −k/r² = −ku²: d²u/dφ² + u = mk/ℓ². This is SHM → u = A cos(φ−φ₀) + mk/ℓ² → r = (ℓ²/mk) / (1 + e cos(φ−φ₀)). This is a conic section with e = Aℓ²/mk.',
        ]
      },
      {
        id:'ps_g38', ref:'Goldstein 3.8', currId:'m1_ps4',
        title:'Kepler Problem — Complete Solution',
        statement:'For the inverse-square gravitational force, solve the orbit equation completely. Find r(φ), identify the orbit as a conic section, express the eccentricity e and semi-latus rectum ℓ²/mk in terms of energy E and angular momentum ℓ, and derive Kepler\'s third law T² ∝ a³ using the area method.',
        solution:[
          'Orbit: r(φ) = a(1−e²)/(1 + e cosφ), where a = semi-major axis = k/2|E| (for bound orbit E < 0), e = √(1 + 2Eℓ²/mk²).',
          'Classification: E < 0 → e < 1 (ellipse), E = 0 → e = 1 (parabola), E > 0 → e > 1 (hyperbola).',
          'Area: dA/dt = ℓ/2m. Full area of ellipse A = πab = πa²√(1−e²). Period: T = A/(dA/dt) = 2πmab/ℓ.',
          'Using ℓ² = mka(1−e²) and b² = a²(1−e²): T = 2πa^(3/2)√(m/k). Thus T² = 4π²m/k · a³ → Kepler\'s 3rd law.',
        ]
      },
      {
        id:'ps_g86', ref:'Goldstein 8.6', currId:'m1_ps5',
        title:'Hamilton\'s Equations from a Given H',
        statement:'Given the Hamiltonian H = p²/2m + V(q) for a 1D system, (a) write Hamilton\'s canonical equations q̇ = ∂H/∂p and ṗ = −∂H/∂q. (b) Show they are equivalent to the Lagrange EOM. (c) For V = ½mω²q², solve the canonical equations and verify that q(t) is simple harmonic motion.',
        solution:[
          'q̇ = ∂H/∂p = p/m → p = mq̇. ṗ = −∂H/∂q = −dV/dq → mq̈ = −dV/dq. This is Newton\'s 2nd law / Lagrange EOM.',
          'For SHO: q̇ = p/m, ṗ = −mω²q. Take time derivative of first: q̈ = ṗ/m = −ω²q → q(t) = A cos(ωt + φ).',
          'Phase space picture: (q, p) traces an ellipse p²/2m + ½mω²q² = E = const. The trajectory is q = √(2E/mω²) cos(ωt+φ), p = −√(2mE) sin(ωt+φ).',
          'Liouville: the phase space "fluid" is incompressible. Verify: ∂q̇/∂q + ∂ṗ/∂p = ∂(p/m)/∂q + ∂(−mω²q)/∂p = 0. ✓',
        ]
      },
      {
        id:'ps_g812', ref:'Goldstein 8.12', currId:'m1_ps5',
        title:'Canonical Transformation Verification',
        statement:'Verify that the transformation Q = log(sin p / q), P = q cot p is canonical using: (a) the Poisson bracket criterion {Q, P}_{q,p} = 1, and (b) finding the generating function F₂(q, P) that generates this transformation.',
        solution:[
          'Compute {Q,P} = (∂Q/∂q)(∂P/∂p) − (∂Q/∂p)(∂P/∂q). Partial derivatives: ∂Q/∂q = −1/q, ∂Q/∂p = cot p, ∂P/∂q = cot p, ∂P/∂p = −q/sin²p.',
          '{Q,P} = (−1/q)(−q/sin²p) − (cot p)(cot p) = 1/sin²p − cos²p/sin²p = (1−cos²p)/sin²p = 1. ✓ Canonical.',
          'For F₂(q,P): relations p = ∂F₂/∂q and Q = ∂F₂/∂P. From Q = log(sin p / q) and P = q cot p → p = arccot(P/q).',
          'F₂ = q · arccot(P/q) + ½ log(q²+P²) + const. Verify by differentiating: ∂F₂/∂q = p ✓, ∂F₂/∂P = Q ✓.',
        ]
      },
      {
        id:'ps_g91', ref:'Goldstein 9.1', currId:'m1_ps6',
        title:'Poisson Bracket Algebra',
        statement:'Compute the following Poisson brackets directly from the definition {f,g} = Σᵢ(∂f/∂qᵢ ∂g/∂pᵢ − ∂f/∂pᵢ ∂g/∂qᵢ): (a) {qᵢ, pⱼ} = δᵢⱼ, (b) {Lᵢ, Lⱼ} = εᵢⱼₖ Lₖ, (c) {L², Lᵢ} = 0. Use L = r × p.',
        solution:[
          '{qᵢ, pⱼ} = Σₖ(∂qᵢ/∂qₖ ∂pⱼ/∂pₖ − ∂qᵢ/∂pₖ ∂pⱼ/∂qₖ) = Σₖ δᵢₖ δⱼₖ = δᵢⱼ. Fundamental Poisson bracket.',
          '{Lₓ, L_y}: Lₓ = ypz−zpy, L_y = zpx−xpz. Compute {Lₓ,L_y} = {ypz,zpx} + {−zpy,−xpz} = y{pz,z}px + (−z)(−1){py,x}pz ... [use {f,gh} = g{f,h}+{f,g}h]. Result: {Lₓ,L_y} = Lz.',
          'By cyclic symmetry: {Ly,Lz} = Lx, {Lz,Lx} = Ly. General: {Lᵢ,Lⱼ} = εᵢⱼₖ Lₖ.',
          '{L²,Lz}: L² = Lx²+Ly²+Lz². {Lx²,Lz} = Lx{Lx,Lz}+{Lx,Lz}Lx = −LxLy−LyLx. {Ly²,Lz} = LyLx+LxLy. Sum = 0. {Lz²,Lz} = 0. So {L²,Lz} = 0. ✓',
        ]
      },
      {
        id:'ps_g94', ref:'Goldstein 9.4', currId:'m1_ps6',
        title:'Canonical Transformation via Poisson Brackets',
        statement:'Show that the transformation Q = √(2q) e^(ip) sinφ, P = √(2q) e^(ip) cosφ (where φ is a parameter) is canonical. Interpret this geometrically as a rotation in phase space, and find the generating function F₁(q,Q).',
        solution:[
          'Compute {Q,P}_{q,p}. Use the chain rule: ∂Q/∂q = e^(ip)sinφ/√(2q), ∂Q/∂p = i√(2q)e^(ip)sinφ, and similarly for P.',
          '{Q,P} = (∂Q/∂q)(∂P/∂p) − (∂Q/∂p)(∂P/∂q). After careful algebra using e^(ip)·e^(−ip) = 1: {Q,P} = cos²φ + sin²φ = 1. ✓',
          'Geometric interpretation: if we set P\' = √(2H/ω) cosθ, Q\' = √(2H/ω) sinθ for the SHO, then this is a rotation by φ in action-angle space. The transformation maps (q,p) to (Q,P) = rotated copy.',
          'Generating function F₁(q,Q): use p = ∂F₁/∂q and P = −∂F₁/∂Q. With Q = √(2q)sinφ e^(ip), invert for p: F₁ = function of q and Q involving arcsin. Messy explicit form; verify by differentiating.',
        ]
      },
      {
        id:'ps_g107', ref:'Goldstein 10.7', currId:'m1_ps7',
        title:'Hamilton-Jacobi Equation for the Kepler Problem',
        statement:'Apply the Hamilton-Jacobi method to the Kepler problem with H = (p_r² + p_φ²/r²)/2m − k/r. Separate the HJ equation using W = W_r(r) + W_φ(φ), find the complete solution W, identify the action variables J_r and J_φ, and express the Hamiltonian in terms of J_r and J_φ alone to derive the orbit frequency.',
        solution:[
          'HJ equation: (∂W/∂r)² + (∂W/∂φ)²/r² = 2m(E + k/r). Separation: (∂W/∂φ)² = α² (constant, = ℓ²). Then ∂W/∂r = √(2m(E+k/r) − α²/r²).',
          'Action variables: J_φ = ∮ p_φ dφ = 2πα (full revolution). J_r = ∮ p_r dr = 2π(mk/√(−2mE) − α). Invert: E = −m²k²/2(J_r+J_φ)².',
          'H(J_r,J_φ) = −m²k²/2(J_r+J_φ)². Angle frequencies: ω_r = ∂H/∂J_r = mk²m/(J_r+J_φ)³. ω_φ = ∂H/∂J_φ = same. Since ω_r = ω_φ, orbits close → ellipses (no precession for pure 1/r potential).',
          'This is the deep reason: the degeneracy ω_r = ω_φ is a consequence of a hidden symmetry (Runge-Lenz vector). Perturbations that break 1/r form cause ω_r ≠ ω_φ → precession (as in GR).',
        ]
      },
    ]
  },
  {
    moduleId: 'mod2', phase: 'Module 2', label: 'Electromagnetism',
    problems: [
      {
        id:'ps_j21', ref:'Jackson 2.1', currId:'m2_ps1',
        title:'Point Charge Between Two Grounded Planes',
        statement:'A point charge q is located at distance d from a grounded conducting plane (z=0). (a) Find the image charge, (b) write the potential for z > 0, (c) compute the surface charge density σ(ρ) where ρ is the radial distance from the foot of the perpendicular, and (d) verify that the total induced surface charge equals −q.',
        solution:[
          'Image charge: q\' = −q at position z = −d (mirror image). Potential: Φ = (q/4πε₀)[1/r₊ − 1/r₋] where r₊ = √(ρ²+(z−d)²), r₋ = √(ρ²+(z+d)²).',
          'σ(ρ) = −ε₀ ∂Φ/∂z|_{z=0} = −qd/2π(ρ²+d²)^(3/2). Negative everywhere: charge of opposite sign is induced.',
          'Total charge: ∫₀^∞ σ(ρ) 2πρ dρ = −qd ∫₀^∞ ρ dρ/(ρ²+d²)^(3/2) = −qd [−1/√(ρ²+d²)]₀^∞ = −q. ✓',
          'Force on q: F = qq\'/(4πε₀)(2d)² = −q²/(16πε₀d²) (attractive toward plane). This is the image force.',
        ]
      },
      {
        id:'ps_j22', ref:'Jackson 2.2', currId:'m2_ps1',
        title:'Point Charge and Grounded Sphere (see Diagnostic)',
        statement:'(This is the diagnostic problem — see Phase 0 entry ps_d2 for full statement and solution.) Extended version: after finding σ(θ), compute the total force on the sphere using the Maxwell stress tensor. Verify it equals the Coulomb force between q and q\'.',
        solution:[
          'From Phase 0 solution: q\' = −qa/d at d\' = a²/d from center.',
          'Force on sphere = force on image charge from q: F = qq\'/4πε₀(d−d\')² = q(−qa/d)/4πε₀(d−a²/d)² = −q²ad/4πε₀(d²−a²)². (Attractive.)',
          'Maxwell stress tensor alternative: T_ij = ε₀(E_iE_j − ½δ_ij E²). Integrate T·n̂ over the sphere surface. With E from the full potential (q + image), this should give the same force.',
          'Limiting cases: d ≫ a → F ≈ −q²a³/4πε₀d⁴ (dipole field at large distance). d → a → F → ∞ (charge approaching sphere surface: divergent force).',
        ]
      },
      {
        id:'ps_j27', ref:'Jackson 2.7', currId:'m2_ps1',
        title:'Image Charge for a Line Charge Near a Cylinder',
        statement:'A line charge λ (C/m) is located at distance d from the axis of a grounded conducting cylinder of radius a < d. Find the image line charge (magnitude and position) that satisfies the boundary condition Φ = 0 on the cylinder surface. Compute the potential outside the cylinder.',
        solution:[
          'By the 2D analog of the sphere: image line charge λ\' = −λ located at d\' = a²/d from the axis (inside the cylinder on the line from axis to λ).',
          'Potential: Φ = −λ/2πε₀ [ln|r − dẑ| − ln|r − d\'ẑ|] + const, where we use the 2D Green\'s function G = −ln r/2π.',
          'Verify BC: at r = a, |r − dẑ|/|r − d\'ẑ| = a/d\' · d/a = 1 (by geometry of inversion). So the log ratio = 0, confirming Φ = 0 on cylinder. ✓',
          'Surface charge: σ = −ε₀ ∂Φ/∂r|_{r=a} = λ(d²−a²)/2πa(d²+a²−2ad cosφ). Similar to sphere case with 2D geometry.',
        ]
      },
      {
        id:'ps_j211', ref:'Jackson 2.11', currId:'m2_ps2',
        title:'Green\'s Function for a Sphere — Dirichlet Problem',
        statement:'Construct the Dirichlet Green\'s function G(x, x\') for the exterior of a sphere of radius a. Starting from G = 1/|x−x\'| + F(x,x\') where F solves ∇²F = 0 with F = −1/|x−x\'| on the sphere, show that G = 1/|x−x\'| − a/x\' · 1/|x − (a²/x\'²)x\'|. Then write the formal solution to ∇²Φ = 0 with Φ = f(θ,φ) on the sphere.',
        solution:[
          'Image construction: for field point x and source x\', the image of x\' in the sphere is x̃\' = (a²/x\'²)x\'. Image charge magnitude a/x\' ensures G = 0 on the sphere.',
          'G(x,x\') = 1/|x−x\'| − (a/|x\'|) · 1/|x − (a/|x\'|)²x\'|. Verify: at |x| = a, |x − x\'| and (a/|x\'|)|x − (a/|x\'|)²x\'| are equal by the geometry of inversion (similar triangles). G = 0 ✓.',
          'Formal solution: Φ(x) = −(1/4π)∮ f(θ\',φ\') ∂G/∂n\'|_{surface} dA\'. The normal derivative of G on the sphere is the Poisson kernel.',
          '∂G/∂n\'|_{r\'=a} = −(x²−a²)/(4πa(x²+a²−2ax cosγ)^(3/2)) where cosγ = x̂·x̂\'. This is the Poisson kernel for the sphere, giving Φ as a weighted average of boundary values.',
        ]
      },
      {
        id:'ps_j31', ref:'Jackson 3.1', currId:'m2_ps3',
        title:'Laplace\'s Equation Between Concentric Spheres',
        statement:'Two concentric spheres of radii a and b (a < b). Inner sphere at potential V₀ cosθ, outer sphere grounded. Solve ∇²Φ = 0 in the gap a ≤ r ≤ b using separation of variables. Write the full solution Φ(r,θ) with explicit coefficients.',
        solution:[
          'Separation: Φ = R(r)Θ(θ). Legendre equation for Θ → Pℓ(cosθ). Radial equation → R = Aℓrℓ + Bℓr^(−ℓ−1). General solution: Φ = Σℓ (Aℓrℓ + Bℓr^(−ℓ−1)) Pℓ(cosθ).',
          'Boundary condition at r = b (outer sphere grounded): Φ(b,θ) = 0 → Aℓbℓ + Bℓb^(−ℓ−1) = 0 → Bℓ = −Aℓb^(2ℓ+1).',
          'Boundary condition at r = a: Φ(a,θ) = V₀ cosθ = V₀ P₁(cosθ). Matching: only ℓ=1 term survives (orthogonality of Pℓ). A₁(a − b³/a²) = V₀.',
          'Solve: A₁ = V₀a²/(a³−b³), B₁ = −A₁b³. Final: Φ(r,θ) = V₀a²/(a³−b³) · (r − b³/r²) · cosθ. Verify BCs by substitution.',
        ]
      },
      {
        id:'ps_j33', ref:'Jackson 3.3', currId:'m2_ps3',
        title:'Sphere with Hemispheres at Opposite Potentials',
        statement:'A sphere of radius R has its upper hemisphere (θ < π/2) held at potential +V and lower hemisphere at −V. Find the potential inside and outside the sphere as a Legendre series. The key challenge is computing the expansion coefficients using the orthogonality of Pℓ.',
        solution:[
          'By symmetry, only odd-ℓ Legendre polynomials appear (antisymmetric under θ → π−θ). BC: f(θ) = +V (θ<π/2), −V (θ>π/2). Note f(θ) is an odd function about θ=π/2.',
          'Outside: Φ = Σ Aℓ (R/r)^(ℓ+1) Pℓ(cosθ). Inside: Φ = Σ Bℓ (r/R)^ℓ Pℓ(cosθ). Continuity at r=R: Aℓ = Bℓ.',
          'Coefficients: Aℓ = (2ℓ+1)/2 · ∫₀^π f(θ) Pℓ(cosθ) sinθ dθ. Split integral into [0,π/2] with +V and [π/2,π] with −V.',
          'For ℓ=1: A₁ = 3V/4 · ∫₀^1 cosθ d(cosθ) − 3V/4·∫₋₁^0 cosθ d(cosθ) = 3V/4. For ℓ=3: A₃ involves P₃(0)=0 identity. Series: Φ_out = V(R/r)²[3/2 cosθ − 7/8(R/r)²P₃(cosθ) + ...].',
        ]
      },
      {
        id:'ps_j910', ref:'Jackson 9.1 / 9.3', currId:'m2_ps8',
        title:'Electric Dipole Radiation — Power and Angular Distribution',
        statement:'An oscillating electric dipole p(t) = p₀ cosωt ẑ. (a) Write the retarded vector potential A and scalar potential Φ in the radiation zone (r ≫ λ ≫ d). (b) Find the radiation fields E and B. (c) Compute the time-averaged Poynting vector ⟨S⟩ and (d) integrate over a sphere to get the total radiated power P = μ₀ω⁴p₀²/12πc.',
        solution:[
          'Radiation zone: A(x,t) = μ₀/4π · ṗ(t_ret)/r where t_ret = t − r/c. For p̈ = −ω²p₀cosωt → A = −μ₀ω²p₀cos(kr−ωt)/4πr ẑ.',
          'Radiation fields: B = ∇×A → B = (μ₀ω²p₀/4πc) sin(kr−ωt) sinθ/r φ̂. E = cB×r̂ = cBθ̂.',
          'Poynting vector: S = (E×B)/μ₀ = (μ₀ω⁴p₀²/32π²c) sin²θ/r² r̂ cos²(kr−ωt). Time average: ⟨S⟩ = μ₀ω⁴p₀²sin²θ/32π²cr² r̂.',
          'Total power: P = ∫⟨S⟩·dA = μ₀ω⁴p₀²/32π²c ∫ sin²θ · r² sinθ dθ dφ = μ₀ω⁴p₀²/32π²c · 8π/3 = μ₀ω⁴p₀²/12πc. This is the Larmor formula for electric dipole.',
        ]
      },
      {
        id:'ps_j11_cov', ref:'Jackson 11.5', currId:'m2_ps9',
        title:'Electromagnetic Field Tensor F\u03bc\u03bd and Lorentz Transformation',
        statement:'(a) Write the electromagnetic field tensor F^μν explicitly in terms of E and B components. (b) Write the dual tensor G^μν = ½ε^μνρσ F_ρσ. (c) Show that the two Maxwell equations ∂_μ F^μν = J^ν/ε₀c and ∂_μ G^μν = 0 reproduce all four Maxwell equations. (d) Compute the Lorentz invariants F_μν F^μν and G_μν F^μν.',
        solution:[
          'F^μν (metric +−−−): rows/cols in order (t,x,y,z). F^01 = Ex/c, F^02 = Ey/c, F^03 = Ez/c, F^12 = −Bz, F^13 = By, F^23 = −Bx. Antisymmetric: F^μν = −F^νμ.',
          '∂_μ F^μν = J^ν: for ν=0: ∂_i F^i0 = −∂_i(Ei/c) = ρ/ε₀c → ∇·E = ρ/ε₀. For ν=1: ∂_t F^t1 + ∂_j F^j1 → ∂E/∂t term + ∇×B terms → Ampere-Maxwell. ✓',
          'Dual G^μν: replace E→B, B→−E in F^μν. ∂_μ G^μν = 0 gives ∇·B = 0 (ν=0) and Faraday\'s law (ν=space). ✓',
          'Invariants: F_μν F^μν = 2(B²−E²/c²) (sign convention dependent). G_μν F^μν = −4E·B/c. These are the only independent algebraic invariants of the EM field.',
        ]
      },
      {
        id:'ps_j12_lag', ref:'Jackson 12.1', currId:'m2_ps10',
        title:'Covariant Lagrangian for Electromagnetism',
        statement:'The covariant Lagrangian density for electromagnetism is L = −(1/4μ₀) F_μν F^μν − J^μ A_μ. (a) Write F_μν in terms of A_μ. (b) Apply the Euler-Lagrange equation for fields ∂_μ(∂L/∂(∂_μ A_ν)) − ∂L/∂A_ν = 0 to derive Maxwell\'s equations ∂_μ F^μν = μ₀ J^ν.',
        solution:[
          'F_μν = ∂_μ A_ν − ∂_ν A_μ. So ∂(F_αβ)/∂(∂_μ A_ν) = δ^μ_α δ^ν_β − δ^μ_β δ^ν_α.',
          '∂L/∂(∂_μ A_ν) = −(1/2μ₀) F^μν (using the above with F^αβ δ^μ_α δ^ν_β = F^μν and the antisymmetry). Factor of 2 from both terms in F².',
          '∂L/∂A_ν = −J^ν. Euler-Lagrange: ∂_μ(−F^μν/μ₀) + J^ν = 0 → ∂_μ F^μν = μ₀ J^ν. ✓ Maxwell\'s equations in covariant form.',
          'The homogeneous equations ∂_[μ F_νρ] = 0 follow automatically from F_μν = ∂_μ A_ν − ∂_ν A_μ (a Bianchi identity for the curvature of a U(1) gauge connection).',
        ]
      },
    ]
  },
  {
    moduleId: 'qm', phase: 'Interlude', label: 'Quantum Mechanics',
    problems: [
      {
        id:'ps_s51', ref:'Sakurai 5.1', currId:'qm_ps4',
        title:'Perturbed SHO — Cubic Perturbation (see Diagnostic)',
        statement:'See Phase 0 entry ps_d3. Extended: compute the second-order energy correction E_n^(2) using the sum-over-states formula. Show that only states |n±1⟩ and |n±3⟩ contribute (all others vanish by the selection rule from x³ = ladder operator expansion).',
        solution:[
          'E_n^(2) = Σ_{m≠n} |⟨m|λx³|n⟩|²/(E_n^(0) − E_m^(0)). Need all non-zero matrix elements ⟨m|x³|n⟩.',
          'x³ = (ℏ/2mω)^(3/2)(a+a†)³. Expanding: (a+a†)³ creates terms that change n by ±1 and ±3 only. So only |m⟩ = |n±1⟩, |n±3⟩ contribute.',
          'Compute: ⟨n+1|x³|n⟩ = (ℏ/2mω)^(3/2)[3(n+1)^(3/2)/... + √(n+1)...]. After careful ladder operator algebra: ⟨n+1|x³|n⟩ = (ℏ/2mω)^(3/2) · 3√(n+1)(n+1+n)/... Full matrix element = (ℏ/2mω)^(3/2) · 3√n+1 · ... (messy algebra).',
          'Final result: E_n^(2) = −(λ²/2m²ω²)(ℏ/2mω)[30n²+30n+11] · ... Proportional to λ²ℏ/m³ω⁴ with a polynomial in n. Verify dimensions and signs.',
        ]
      },
      {
        id:'ps_s513', ref:'Sakurai 5.13', currId:'qm_ps4',
        title:'Linear Stark Effect in Hydrogen',
        statement:'Hydrogen in a uniform electric field E in the z-direction. The perturbation is H\' = eEz = eEr cosθ. (a) Show that the ground state (n=1) has no first-order Stark shift. (b) For the first excited level (n=2), treat the four degenerate states and find the linear Stark effect by diagonalizing H\' in the degenerate subspace.',
        solution:[
          'Ground state n=1: E_1^(1) = e E ⟨1,0,0|z|1,0,0⟩ = 0. Argument: |ψ_{100}|² is spherically symmetric (even under r→−r), z is odd → integrand is odd → integral = 0. Equivalently: parity of z is odd; |100⟩ has definite parity (+1) → ⟨100|z|100⟩ = 0.',
          'For n=2: four states |2,0,0⟩, |2,1,0⟩, |2,1,1⟩, |2,1,−1⟩. Parity: |200⟩ has parity +1, |21m⟩ have parity −1. Only off-diagonal elements ⟨200|z|210⟩ can be non-zero (different parity).',
          '⟨200|z|210⟩ = ∫ ψ*_{200} r cosθ ψ_{210} d³r = −3√6 a₀ (in appropriate units). This is the key matrix element.',
          'Diagonalize 2×2 block for {|200⟩,|210⟩}: eigenvalues ±|e E ⟨200|z|210⟩| = ±3eEa₀. The m=±1 states are unshifted. Result: 4-fold degeneracy splits into 3 levels at energies E_2 − 3eEa₀, E_2, E_2 + 3eEa₀ (last is doubly degenerate).',
        ]
      },
      {
        id:'ps_s61', ref:'Sakurai 6.1', currId:'qm_ps5',
        title:'Born Approximation — Yukawa and Coulomb',
        statement:'Apply the Born approximation f(θ) = −(m/2πℏ²) ∫ e^(−iq·r) V(r) d³r where q = k\' − k is the momentum transfer. (a) Compute f(θ) for the Yukawa potential V = −V₀e^(−μr)/r. (b) Take μ → 0 to recover the Rutherford scattering formula. (c) Show that the Born approximation is valid when |V₀| ≪ ℏ²μ/m.',
        solution:[
          'Yukawa: f(θ) = −(m/2πℏ²)∫₀^∞∫₋₁^1 e^(−iqr cosα)(−V₀e^(−μr)/r) r² dr d(cosα) · 2π. Angular integral: ∫e^(−iqr cosα)d(cosα) = 2sinqr/qr.',
          'Radial integral: ∫₀^∞ e^(−μr) · 2sinqr/q dr = 4/(μ²+q²) (use ∫₀^∞ e^(−μr)sinqr dr = q/(μ²+q²)).',
          'Result: f(θ) = (2mV₀/ℏ²) · 1/(μ²+q²) where q² = 4k²sin²(θ/2) = 2k²(1−cosθ). Differential cross section: dσ/dΩ = |f|² = (2mV₀/ℏ²)²/(μ²+4k²sin²θ/2)².',
          'Rutherford: μ→0, V₀→e²/4πε₀ (Coulomb). dσ/dΩ = (Ze²/4E)²/sin⁴(θ/2). This is the classical Rutherford formula — the Born approximation reproduces it exactly (a non-trivial result).',
        ]
      },
      {
        id:'ps_dirac', ref:'Dirac Equation (Ch. 8)', currId:'qm_ms2',
        title:'Free-Particle Dirac Spinors u(p) and v(p)',
        statement:'Starting from the free Dirac equation (iγ^μ∂_μ − m)ψ = 0, derive the momentum-space equation (p̸ − m)u(p) = 0. Find the four independent solutions: two positive-energy spinors u^s(p) (s=1,2) and two negative-energy spinors v^s(p). Write them explicitly in the Dirac representation. Verify the completeness relations Σ_s u^s(p)ū^s(p) = p̸ + m and Σ_s v^s(p)v̄^s(p) = p̸ − m.',
        solution:[
          'Plane wave ansatz ψ = u(p)e^(−ip·x). Dirac equation → (γ^μp_μ − m)u = (p̸ − m)u = 0. In Dirac representation γ⁰ = diag(I,−I), γⁱ = [[0,σⁱ],[−σⁱ,0]].',
          'Write u = [φ, χ]^T (two 2-component spinors). p̸u = m u gives: (E−m)φ = σ·p χ and (E+m)χ = σ·p φ. For positive energy: χ = (σ·p)/(E+m) φ.',
          'Two independent choices for φ: φ^1 = [1,0]^T, φ^2 = [0,1]^T. Normalized spinors: u^s(p) = √(E+m)[φ^s, (σ·p)/(E+m)φ^s]^T.',
          'Negative-energy (antiparticle) solutions v^s: obtained by p → −p and reversing sign convention. v^s(p) = √(E+m)[(σ·p)/(E+m)χ^s, χ^s]^T.',
          'Completeness: Σ_s u^s ū^s = (p̸+m) and Σ_s v^s v̄^s = (p̸−m). Prove by explicit matrix multiplication. These spin-sum identities are used in every QED trace calculation.',
        ]
      },
    ]
  },
  {
    moduleId: 'geo', phase: 'Phase III', label: 'Geometry & Relativity',
    problems: [
      {
        id:'ps_geo_s2', ref:'Christoffel Symbols — S²', currId:'geo_ps2',
        title:'Christoffel Symbols for the 2-Sphere',
        statement:'For the 2-sphere with metric ds² = R²(dθ² + sin²θ dφ²), compute all non-zero Christoffel symbols Γ^α_{μν} from the formula Γ^σ_{μν} = ½g^{σρ}(∂_μg_{ρν} + ∂_νg_{ρμ} − ∂_ρg_{μν}). Then compute the Riemann scalar curvature R = 2/R².',
        solution:[
          'Metric components: g_{θθ} = R², g_{φφ} = R²sin²θ, all others zero. Inverse: g^{θθ} = 1/R², g^{φφ} = 1/(R²sin²θ).',
          'Non-zero Christoffel symbols: Γ^θ_{φφ} = −sinθ cosθ (from ∂_θ g_{φφ}/2g^{θθ} = −R²sinθcosθ/R² = −sinθcosθ). Γ^φ_{θφ} = Γ^φ_{φθ} = cosθ/sinθ = cotθ.',
          'All other Γs = 0 (only derivatives of g_{φφ} with respect to θ are non-zero).',
          'Riemann tensor: R^θ_{φθφ} = ∂_θΓ^θ_{φφ} − ∂_φΓ^θ_{θφ} + Γ^θ_{θλ}Γ^λ_{φφ} − Γ^θ_{φλ}Γ^λ_{θφ} = cos²θ−sin²θ − 0 + 0 − (−sinθcosθ)(cotθ) = sin²θ.',
          'Ricci scalar: R = 2R^θ_{φθφ}/g_{φφ} · g^{θθ} ... = 2/R². This confirms S² has constant positive curvature — the geometric invariant of the sphere.',
        ]
      },
      {
        id:'ps_geo_schw', ref:'Christoffel Symbols — Schwarzschild', currId:'geo_ps3',
        title:'Christoffel Symbols for the Schwarzschild Metric',
        statement:'For the Schwarzschild metric ds² = (1−2M/r)dt² − (1−2M/r)⁻¹dr² − r²dθ² − r²sin²θ dφ² (units G=c=1), compute all non-zero Christoffel symbols. There are 9 non-zero independent components. Budget 3 hours for a Type A block.',
        solution:[
          'Let f = 1−2M/r. Non-zero Γ values: Γ^t_{tr} = Γ^t_{rt} = M/r²f. Γ^r_{tt} = Mf/r². Γ^r_{rr} = −M/r²f. Γ^r_{θθ} = −rf. Γ^r_{φφ} = −rf sin²θ.',
          'Γ^θ_{rθ} = Γ^θ_{θr} = 1/r. Γ^θ_{φφ} = −sinθ cosθ. Γ^φ_{rφ} = Γ^φ_{φr} = 1/r. Γ^φ_{θφ} = Γ^φ_{φθ} = cotθ.',
          'Derivation strategy: only derivatives of f(r) and of g_{θθ}, g_{φφ} are non-zero. Group by which metric component generates each term.',
          'Check: in the limit M→0 (flat spacetime in spherical coords), Γ^r_{θθ} → −r, Γ^r_{φφ} → −r sin²θ, Γ^θ_{rθ} → 1/r, Γ^φ_{rφ} → 1/r, Γ^φ_{θφ} → cotθ. These match flat-space spherical coordinate Christoffel symbols. ✓',
        ]
      },
      {
        id:'ps_geo_ricci', ref:'Ricci Tensor — Schwarzschild', currId:'geo_ps4',
        title:'Verify R\u03bc\u03bd = 0 for Schwarzschild',
        statement:'Using the Christoffel symbols computed in the previous problem, compute at least two independent components of the Ricci tensor R_{μν} = ∂_ρΓ^ρ_{μν} − ∂_νΓ^ρ_{μρ} + Γ^ρ_{ρλ}Γ^λ_{μν} − Γ^ρ_{νλ}Γ^λ_{μρ} and verify they vanish. This confirms the Schwarzschild metric solves the vacuum Einstein equations.',
        solution:[
          'Compute R_{tt}: R_{tt} = ∂_rΓ^r_{tt} − ∂_tΓ^r_{tr} + Γ^r_{rλ}Γ^λ_{tt} − Γ^r_{tλ}Γ^λ_{rt}. With only r-dependent terms, this reduces to a calculation with the 9 Christoffel symbols.',
          'Explicit: ∂_r(Mf/r²) − 0 + Γ^r_{rr}Γ^r_{tt} − Γ^r_{tr}Γ^t_{rt} · g_{...}. After careful algebra: R_{tt} = 0. ✓',
          'Compute R_{rr}: similar calculation with 4-5 non-zero Γ-products. Result: R_{rr} = 0. ✓',
          'Angular components R_{θθ} and R_{φφ}: involve the angular Christoffel symbols. Each gives 0, confirming that Schwarzschild is a vacuum solution everywhere except r=0 (where the matter source is). This is the Birkhoff theorem in practice.',
        ]
      },
      {
        id:'ps_geo_kill', ref:'Killing Vectors', currId:'geo_ps5',
        title:'Killing Equation and Conserved Quantities',
        statement:'A Killing vector field ξ^μ satisfies ∇_(μ ξ_ν) = 0 (the metric is Lie-dragged along ξ). (a) For Minkowski spacetime, find all Killing vectors and identify the corresponding conserved quantities. (b) For the Schwarzschild metric, identify the two obvious Killing vectors ∂_t and ∂_φ, and write the corresponding conserved quantities for geodesics.',
        solution:[
          'Killing equation in Minkowski: ∂_μξ_ν + ∂_νξ_μ = 0. General solution: ξ^μ = a^μ + ω^μ_ν x^ν where a^μ = const (4 translations) and ω^μν = −ω^νμ (6 Lorentz transformations). Total: 10 Killing vectors = dimension of the Poincaré group.',
          'Translations ∂_μ → conserved 4-momentum P^μ. Lorentz rotations → conserved angular momentum J^μν = x^μP^ν − x^νP^μ.',
          'Schwarzschild: ∂_t is timelike Killing vector (metric independent of t) → conserved energy: E = −g_{tt}(dt/dτ) = (1−2M/r)(dt/dτ) = const along geodesic.',
          '∂_φ is spacelike Killing vector → conserved angular momentum: L = g_{φφ}(dφ/dτ) = r²sin²θ(dφ/dτ) = const. These two constants E and L, plus the normalization condition g_{μν}u^μu^ν = 1 (or 0 for null), fully determine the geodesic.',
        ]
      },
      {
        id:'ps_geo_par', ref:'Parallel Transport on S²', currId:'geo_ps6',
        title:'Geometric Phase from Parallel Transport',
        statement:'Transport a vector V around a closed loop on S² (a circle of constant latitude θ₀). Show that the vector undergoes a rotation by angle Ω = 2π cosθ₀ (the solid angle subtended by the cap) when returned to the starting point. Connect this to Berry\'s geometric phase.',
        solution:[
          'Parallel transport equation: dV^μ/dτ + Γ^μ_{νρ}(dx^ρ/dτ)V^ν = 0. For a circle φ ∈ [0,2π] at θ = θ₀, we have θ̇ = 0 and φ̇ = const.',
          'Along this curve, only Γ^φ_{θφ} = cotθ and Γ^θ_{φφ} = −sinθcosθ enter. The transport equations become: dV^θ/dφ = sinθ₀cosθ₀ V^φ and dV^φ/dφ = −cotθ₀ V^θ.',
          'This is a rotation ODE: the vector rotates as it is transported. After a full circuit φ: 0 → 2π, the rotation angle is Ω = 2π cosθ₀.',
          'Geometric interpretation: Ω equals the solid angle Ω = 2π(1−cosθ₀)... wait, that\'s the solid angle of the cap. The rotation by 2π cosθ₀ = 2π − Ω_cap where Ω_cap is the solid angle. This is the holonomy of the connection — the Berry phase for a spin-½ particle with the spin direction tracing this curve on the Bloch sphere.',
        ]
      },
    ]
  },
  {
    moduleId: 'mod4', phase: 'Module 4', label: 'Quantum Field Theory',
    problems: [
      {
        id:'ps_ps_compton', ref:'P&S 5.5', currId:'qft_ps5',
        title:'Compton Scattering — Complete Calculation',
        statement:'Compute the differential cross section dσ/dΩ for Compton scattering e⁻γ → e⁻γ in the center-of-mass frame. Draw both Feynman diagrams (s-channel and u-channel), apply the QED Feynman rules, compute the spin-averaged amplitude squared |M̄|² using trace technology, and integrate over phase space.',
        solution:[
          'Two diagrams: (s-channel) e⁻+γ → virtual e⁻ → e⁻+γ. Propagator 1/(p̸+k̸−m). (u-channel) e⁻+γ → virtual e⁻ (crossed) → e⁻+γ. Propagator 1/(p̸−k̸\'−m). Total: M = M_s + M_u.',
          'M_s = ε*_ν ε_μ · ū(p\')γ^ν(p̸+k̸+m)/((p+k)²−m²)γ^μ u(p). Denominator s−m² = 2p·k. Similarly M_u with s→u.',
          'Spin average: |M̄|² = ½ Σ_{spins} |M|². Use spin sums Σ_s u^s ū^s = p̸+m, Σ_ε ε_μ ε*_ν = −g_{μν}. Expand |M_s+M_u|² = |M_s|² + |M_u|² + 2Re(M_s M_u*).',
          'Trace evaluation of |M_s|²: involves Tr[γ^ν(p̸\'+m)γ^μ(p̸+k̸+m)γ_ν(p̸+m)γ_μ(p̸+k̸+m)]. Apply γ_μγ^μ = 4, γ_μp̸γ^μ = −2p̸, then standard trace formulas for Tr[γ^μγ^νγ^ργ^σ].',
          'Klein-Nishina result: dσ/dΩ = (α²/m²)(ω\'/ω)² [(ω/ω\') + (ω\'/ω) − sin²θ]/2. In low-energy limit ω≪m: dσ/dΩ → (α²/m²)(1+cos²θ)/2. This is the Thomson cross section.',
        ]
      },
      {
        id:'ps_ps_selfenergy', ref:'P&S 6.1', currId:'qft_ps6',
        title:'One-Loop Electron Self-Energy',
        statement:'Compute the one-loop self-energy diagram for the electron: a photon loop attaches at both ends to the electron line. The diagram gives −iΣ(p̸). Set up the integral using Feynman parameterization, Wick-rotate to Euclidean space, and extract the divergence structure. Show Σ(p̸) = A + B(p̸−m) + finite terms where A, B are divergent.',
        solution:[
          'Feynman rule for diagram: −iΣ(p̸) = (−ie)² ∫d⁴k/(2π)⁴ γ^μ · i(p̸+k̸+m)/((p+k)²−m²) · γ_μ · (−i)/(k²). Apply Feynman parametrization for two propagators: 1/(AB) = ∫₀^1 dx 1/[xA+(1−x)B]².',
          'Shift loop momentum: ℓ = k + xp. Denominator: Δ = x(p+k)²+(1−x)k²−xm² = ℓ²−Δ₀ where Δ₀ = x²p²−x(p²−m²)−(1−x)·0 = −x(1−x)p² + xm² (after careful algebra).',
          'Wick rotation to Euclidean: k⁰ → ik_E⁰. Euclidean integral: ∫d⁴ℓ_E/(ℓ_E²+Δ)^n. For n=2: = iπ²/Δ (finite for n=2 in d=4? No — d=4 gives log divergence for n=2).',
          'Divergence structure: use dimensional regularization d=4−ε. The integral goes as 1/ε (log divergence). Write Σ = (mass renorm) + (wavefunction renorm)(p̸−m) + finite. This identifies δm (mass counterterm) and δZ₂ (field renorm counterterm).',
          'Ward identity: Z₁ = Z₂ (vertex renorm = field renorm). This follows from ∂Σ/∂p̸ = δZ₂ and the structure of the vertex correction. Physically: charge is not renormalized by QED (only screened).',
        ]
      },
      {
        id:'ps_ps_beta', ref:'P&S 12.2', currId:'qft_ps10',
        title:'QED \u03b2-Function from Vacuum Polarization',
        statement:'The vacuum polarization Π(q²) contributes to the running of the QED coupling. At one loop, Π(q²) = −(α/3π)(q²/ε + ...) in dim. reg. Use the Callan-Symanzik equation μ(dg/dμ) = β(g) and the requirement that physical observables be μ-independent to derive β(e) = e³/12π². Show QED is UV-free at low energies but hits a Landau pole.',
        solution:[
          'Renormalized photon propagator: D_R(q²) = −i/[q²(1+Π(q²))]. Physical amplitude for e⁻e⁻ scattering: |M|² ∝ e²/(q²(1+Π(q²))) = e_R²(μ)/q² where e_R²(μ) = e₀²/(1+Π(q²,μ)).',
          'Callan-Symanzik: μ d/dμ [e_R(μ)] = β(e_R). From the 1-loop result Π = (α/3π)log(q²/μ²) + ..., the μ-dependence of e_R(μ) is: e_R²(μ) = e_R²(μ₀)/(1 − (e²/12π²)log(μ/μ₀)).',
          'β-function: β(e) = μ de/dμ = e³/12π². Positive → coupling increases with μ. QED is not asymptotically free (opposite to QCD).',
          'Landau pole: e²(μ) = e²(m_e)/(1−(e²/6π²)log(μ/m_e)) diverges at μ_LP = m_e exp(3π/2α) ≈ 10^286 eV. Far beyond any physical scale, but signals non-perturbative breakdown.',
          'CS equation: [μ∂_μ + β(e)∂_e − nγ_ψ − m_γ γ_A]G^(n,m) = 0 relates correlators at different scales. Verify that your β reproduces the known running of α from low-energy QED.',
        ]
      },
    ]
  },
  {
    moduleId: 'mod3', phase: 'Module 3', label: 'General Relativity',
    problems: [
      {
        id:'ps_gr_peri', ref:'Perihelion Precession', currId:'gr_ps5',
        title:'Perihelion Precession of Mercury',
        statement:'Starting from the geodesic equation for a massive particle in Schwarzschild, derive the orbit equation d²u/dφ² + u = M/L² + 3Mu², where u = 1/r and L is the angular momentum per unit mass. Treat the 3Mu² term as a perturbation and show it leads to a precession Δφ = 6πM/a(1−e²) per orbit.',
        solution:[
          'Geodesic in Schwarzschild: use E, L conservation and normalization g_{μν}u^μu^ν = 1. Write (dr/dτ)² = E² − (1−2M/r)(1 + L²/r²). Convert to u(φ) using L = r²dφ/dτ.',
          'Orbit equation: d²u/dφ² + u = M/L² + 3Mu². The 3Mu² term is the GR correction (absent in Newtonian gravity where d²u/dφ²+u = M/L² gives ellipses).',
          'Perturbation: u = u₀ + δu where u₀ = (M/L²)(1+e cosφ) is the Keplerian ellipse. Substitute and linearize: d²(δu)/dφ² + δu = 3Mu₀² ≈ 3M(M/L²)²(1+2e cosφ + e²cos²φ).',
          'The secular (growing) term: the 2e cosφ part drives a resonance. Solution: δu = 3M(M/L²)² · eφ sinφ. This gives u ≈ (M/L²)(1 + e cos(φ(1−3M²/L²))). Orbit doesn\'t close: precession per orbit Δφ = 6πM²/L² = 6πM/a(1−e²).',
          'For Mercury: a = 5.79×10^10 m, e = 0.206, M_Sun = 1.476 km (in geometric units). Result: 43 arcsec/century. ✓ Matches observation.',
        ]
      },
      {
        id:'ps_gr_hawking', ref:'Hawking Temperature', currId:'gr_ps9',
        title:'Hawking Temperature via Euclidean Method',
        statement:'Wick-rotate the Schwarzschild metric to Euclidean signature t → −iτ. Show that the metric is regular at r = 2M only if τ is periodic with period β = 8πM. Identify β = 1/k_B T to read off T_H = 1/8πM (in units G = c = ℏ = k_B = 1). Restore physical units to get T_H = ℏc³/8πGMk_B.',
        solution:[
          'Euclidean Schwarzschild: ds² = (1−2M/r)dτ² + (1−2M/r)⁻¹dr² + r²dΩ². Near r = 2M: let r = 2M+ρ²/8M. Then 1−2M/r ≈ ρ²/8M. Metric near horizon: ds² ≈ (ρ²/8M)dτ² + dρ² + ...',
          'This is polar coordinates in the (ρ,τ) plane: ds² = ρ²dθ² + dρ² where θ = τ/√(8M). For this to be regular at ρ=0 (the horizon), θ must be an angular coordinate with period 2π.',
          'Period of τ: θ has period 2π → τ = √(8M)θ has period 2π√(8M). Actually: from the (ρ²/8M)dτ² form, we need (1/√(8M)) · τ to have period 2π → τ has period β = 8πM (in G=c=ℏ=1 units).',
          'Thermal partition function: Z = Tr[e^(−βH)] has β = 1/T. Identifying the Euclidean period with the inverse temperature: T_H = 1/β = 1/8πM.',
          'In physical units: T_H = ℏc³/(8πGMk_B). For a 1 solar mass BH: T_H ≈ 6×10^{−8} K. For a stellar BH: unobservably cold. For primordial BH with M ~ 10^15 g: T ~ 10^11 K → observable Hawking radiation.',
        ]
      },
      {
        id:'ps_gr_friedmann', ref:'Friedmann Equations', currId:'gr_ps10',
        title:'Friedmann Equations from Einstein\'s Field Equations',
        statement:'Take the FRW metric ds² = dt² − a(t)²[dr²/(1−kr²) + r²dΩ²]. For a perfect fluid T^μ_ν = diag(ρ, −p, −p, −p), compute the non-trivial components of the Einstein tensor G_{μν} and derive the two Friedmann equations: H² = 8πGρ/3 − k/a² and ä/a = −4πG(ρ+3p)/3.',
        solution:[
          'Compute Christoffel symbols for FRW metric. Non-zero: Γ^t_{ij} = aȧg̃_{ij} (where g̃ is spatial metric), Γ^i_{tj} = (ȧ/a)δ^i_j, spatial Christoffel symbols from g̃_{ij}.',
          'Ricci tensor: R_{tt} = −3ä/a. R_{ij} = −[aä + 2ȧ² + 2k]g̃_{ij}. Ricci scalar: R = −6[ä/a + (ȧ/a)² + k/a²].',
          'Einstein tensor: G_{tt} = 3[(ȧ/a)² + k/a²]. G_{ij} = −[2ä/a + (ȧ/a)² + k/a²]g̃_{ij}.',
          'EFE G_{μν} = 8πG T_{μν}: (tt)-component → 3(ȧ/a)² + 3k/a² = 8πGρ → H² + k/a² = 8πGρ/3. (ij)-component → 2ä/a + H² + k/a² = −8πGp → using Friedmann 1: ä/a = −4πG(ρ+3p)/3.',
          'Conservation: ∇_μ T^μν = 0 gives ρ̇ + 3H(ρ+p) = 0. With equation of state p = wρ: ρ ∝ a^{−3(1+w)}. w=0 (matter): ρ ∝ a^{−3}. w=1/3 (radiation): ρ ∝ a^{−4}. w=−1 (Λ): ρ = const.',
        ]
      },
    ]
  },
  {
    moduleId: 'eft', phase: 'Phase V', label: 'EFT for Gravity',
    problems: [
      {
        id:'ps_eft_pc', ref:'Power Counting in EFT', currId:'eft_ps1',
        title:'Relevant, Marginal, and Irrelevant Operators',
        statement:'Consider a scalar field theory with cutoff Λ and canonical kinetic term (∂φ)². For each of the following operators, determine whether it is relevant, marginal, or irrelevant at long distances (in the Wilsonian RG sense): φ², φ⁴, (∂φ)⁴, φ²(∂φ)², φ⁶. Explain the criterion in terms of mass dimension and the coupling constant\'s scaling with Λ.',
        solution:[
          'Criterion: an operator O_d of mass dimension d in 4D. Coupling [λ] = 4−d in mass units. Relevant: d < 4 (coupling grows as Λ → 0). Marginal: d = 4 (coupling constant). Irrelevant: d > 4 (coupling → 0 as Λ → 0).',
          'φ² has dimension 2: relevant. Coupling has dimension [m²] = Λ². This is the mass term — the hierarchy problem arises from this term being quadratically sensitive to Λ.',
          'φ⁴ has dimension 4: marginal. Coupling λ is dimensionless. Whether it\'s marginally relevant or irrelevant determined by sign of β(λ). For φ⁴ in 4D: β > 0, so it\'s marginally relevant (coupling grows in UV).',
          '(∂φ)⁴ has dimension 8: irrelevant. Coupling has dimension 1/Λ⁴. Suppressed at low energies E ≪ Λ by (E/Λ)⁴. This is the operator relevant for light-by-light scattering at low energies in the EFT below the electron mass.',
          'φ⁶ has dimension 6: irrelevant. Coupling 1/Λ². φ²(∂φ)² has dimension 6: irrelevant, coupling 1/Λ². Key lesson: at energies E ≪ Λ, only a finite number of operators contribute at any given order in E/Λ.',
        ]
      },
      {
        id:'ps_eft_donoghue', ref:'Donoghue Quantum Correction', currId:'eft_ps5',
        title:'Quantum Correction to the Newtonian Potential',
        statement:'In the EFT of gravity, the leading quantum correction to the Newtonian potential V(r) = −GmM/r comes from the non-analytic part of the one-loop graviton scattering amplitude. The key integral produces a term ∝ q² log q². Show that Fourier-transforming q² log q² from momentum to position space gives a 1/r³ correction, and reproduce Donoghue\'s result V(r) = −GmM/r[1 + 41G ℏ/10π r²c³].',
        solution:[
          'The scattering amplitude at one loop in graviton exchange has two types of contributions: analytic (∝ q², q⁴, ...) and non-analytic (∝ q² log q², √q²). Only non-analytic terms survive in the potential — analytic terms give contact interactions (delta functions in position space).',
          'Fourier transform of non-analytic term: ∫d³q/(2π)³ e^(iq·r) q² log q² = ? Use spherical coordinates. ∫₀^∞ q² · q² log q² · (sinqr/qr) · 4πq² dq/(2π)³... After integration by parts and using ∫d³q e^(iq·r)/q² = 1/r (standard), and ∫d³q e^(iq·r) log q²/q² = −2π²/r³.',
          'Result: the q² log q² term in momentum space → constant × 1/r³ in position space. This is the quantum correction that cannot be mimicked by any classical GR term.',
          'Full Donoghue potential (G=c=1): V(r) = −GmM/r [1 + 3G(m+M)/r + 41Gℏ/10πr²]. First correction: classical GR (general relativistic). Second correction: quantum gravitational (proportional to ℏ).',
          'Predictive power: despite GR being non-renormalizable, this quantum correction is unambiguous — it comes from the long-distance (infrared) part of the loop integral, which is not sensitive to the UV completion (string theory, loop quantum gravity, etc.). This is the EFT philosophy: we cannot compute the counterterms, but we can compute the non-analytic terms.',
        ]
      },
    ]
  },
];

/* ────────────────────────────────────────────────
   STORAGE
   ──────────────────────────────────────────────── */
const store = {
  getCurr:  (id)       => localStorage.getItem(`u1730_c_${id}`) === 'true',
  setCurr:  (id, val)  => localStorage.setItem(`u1730_c_${id}`, val),
  getProb:  (id)       => localStorage.getItem(`u1730_p_${id}`) === 'true',
  setProb:  (id, val)  => localStorage.setItem(`u1730_p_${id}`, val),
};

/* ────────────────────────────────────────────────
   STATE
   ──────────────────────────────────────────────── */
let currentProblemFilter = 'all';

/* ────────────────────────────────────────────────
   HEADER
   ──────────────────────────────────────────────── */
function initHeader() {
  const now  = new Date();
  const opts = { weekday:'short', month:'short', day:'numeric', year:'numeric' };
  document.getElementById('header-date').textContent =
    now.toLocaleDateString('en-US', opts).toUpperCase().replace(',','');
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

/* Navigate from curriculum to problems page, filtered to a module */
function goToProblems(moduleId) {
  currentProblemFilter = moduleId;
  switchView('problems');
  renderProblems();
  // Scroll to module section
  setTimeout(() => {
    const head = document.getElementById(`ps-head-${moduleId}`);
    if (head) head.scrollIntoView({ behavior:'smooth', block:'start' });
  }, 80);
}

/* ────────────────────────────────────────────────
   CURRICULUM
   ──────────────────────────────────────────────── */
function getCurrProgress() {
  let total = 0, done = 0;
  CURRICULUM.forEach(mod => mod.items.forEach(item => { total++; if (store.getCurr(item.id)) done++; }));
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
  let label = 'Phase V — EFT for Gravity';
  for (const mod of CURRICULUM) {
    const { total:t, done:d } = getModProgress(mod);
    if (d < t) { label = `${mod.phase} — ${mod.title}`; break; }
  }
  document.getElementById('prog-phase').textContent = label;
}

const ICONS = {
  reading:  `<svg class="sub-group-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>`,
  problem:  `<svg class="sub-group-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
  milestone:`<svg class="sub-group-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>`,
};

const NAV_ARROW_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>`;

function buildGroupHtml(items, type, modId) {
  if (!items.length) return '';
  const label = { reading:'Readings', problem:'Problem Sets', milestone:'Milestones' }[type];
  const rows = items.map(item => {
    const checked     = store.getCurr(item.id);
    const isMilestone = item.type === 'milestone';
    const psBtn = (type === 'problem' && item.psModule)
      ? `<button class="curr-ps-link" onclick="goToProblems('${item.psModule}')" title="View in Problem Sets">${NAV_ARROW_SVG}</button>`
      : '';
    return `
      <label class="curr-item${isMilestone ? ' is-milestone' : ''}${checked ? ' done' : ''}" for="ci-${item.id}">
        <input type="checkbox" class="curr-cb type-${item.type}" id="ci-${item.id}"
          data-id="${item.id}" data-mod="${modId}"${checked ? ' checked' : ''}>
        <span class="curr-item-text">${item.label}</span>
        ${psBtn}
      </label>`;
  }).join('');
  return `<div class="sub-group-head">${ICONS[type]}<span class="sub-group-label">${label}</span></div>${rows}`;
}

function renderCurriculum() {
  const list = document.getElementById('curriculum-list');
  list.innerHTML = '';
  CURRICULUM.forEach(mod => {
    const { total, done } = getModProgress(mod);
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6,9 12,15 18,9"/></svg>
          </div>
        </div>
      </div>
      <div class="mod-body">
        ${buildGroupHtml(mod.items.filter(i=>i.type==='reading'),  'reading',   mod.id)}
        ${buildGroupHtml(mod.items.filter(i=>i.type==='problem'),  'problem',   mod.id)}
        ${buildGroupHtml(mod.items.filter(i=>i.type==='milestone'),'milestone', mod.id)}
      </div>`;
    block.querySelector('.mod-header').addEventListener('click', () => {
      const open = block.classList.toggle('open');
      block.querySelector('.mod-header').setAttribute('aria-expanded', String(open));
    });
    list.appendChild(block);
  });
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
   PROBLEM SETS
   ──────────────────────────────────────────────── */
function renderProblemFilters() {
  const bar = document.getElementById('ps-filters');
  bar.innerHTML = '';

  const allBtn = document.createElement('button');
  allBtn.className = `ps-filter-btn${currentProblemFilter === 'all' ? ' active' : ''}`;
  allBtn.textContent = 'ALL';
  allBtn.addEventListener('click', () => { currentProblemFilter = 'all'; renderProblems(); });
  bar.appendChild(allBtn);

  PROBLEM_SETS.forEach(section => {
    const btn = document.createElement('button');
    btn.className = `ps-filter-btn${currentProblemFilter === section.moduleId ? ' active' : ''}`;
    btn.textContent = section.phase.toUpperCase();
    btn.addEventListener('click', () => { currentProblemFilter = section.moduleId; renderProblems(); });
    bar.appendChild(btn);
  });
}

function renderProblems() {
  renderProblemFilters();
  const list = document.getElementById('ps-list');
  list.innerHTML = '';

  const sectionsToShow = currentProblemFilter === 'all'
    ? PROBLEM_SETS
    : PROBLEM_SETS.filter(s => s.moduleId === currentProblemFilter);

  if (!sectionsToShow.length) {
    list.innerHTML = '<div style="padding:24px;text-align:center;color:var(--text-dim);font-family:var(--font-mono);font-size:12px;">No problems for this filter.</div>';
    return;
  }

  sectionsToShow.forEach(section => {
    // Module group header
    const head = document.createElement('div');
    head.className = 'ps-module-head';
    head.id = `ps-head-${section.moduleId}`;
    head.innerHTML = `
      <div class="ps-module-tag">${section.phase.toUpperCase()}</div>
      <div class="ps-module-title">${section.label}</div>
      <div class="ps-module-rule"></div>`;
    list.appendChild(head);

    // Problem cards
    section.problems.forEach(prob => {
      const solved = store.getProb(prob.id);
      const card = document.createElement('div');
      card.className = `prob-card${solved ? ' solved' : ''}`;
      card.id = prob.id;

      const stepsHtml = prob.solution.map(s => `<li><span>${s}</span></li>`).join('');

      card.innerHTML = `
        <div class="prob-top">
          <div class="prob-ref">${prob.ref}</div>
          <div class="prob-title-block">
            <div class="prob-title">${prob.title}</div>
          </div>
          <div class="prob-solved-wrap">
            <span class="prob-solved-label">SOLVED</span>
            <input type="checkbox" class="prob-cb" id="pcb-${prob.id}"${solved ? ' checked' : ''}>
          </div>
        </div>
        <div class="prob-statement">${prob.statement}</div>
        <button class="prob-sol-toggle" aria-expanded="false">
          <span class="prob-sol-toggle-label">Solution Steps</span>
          <span class="prob-sol-toggle-arrow">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="6,9 12,15 18,9"/></svg>
          </span>
        </button>
        <div class="prob-sol-body">
          <ol class="prob-sol-steps">${stepsHtml}</ol>
        </div>`;

      // Solved checkbox
      card.querySelector('.prob-cb').addEventListener('change', e => {
        store.setProb(prob.id, e.target.checked);
        card.classList.toggle('solved', e.target.checked);
      });

      // Solution toggle
      const toggle = card.querySelector('.prob-sol-toggle');
      const body   = card.querySelector('.prob-sol-body');
      toggle.addEventListener('click', () => {
        const open = !body.classList.contains('open');
        body.classList.toggle('open', open);
        toggle.classList.toggle('open', open);
        toggle.setAttribute('aria-expanded', String(open));
      });

      list.appendChild(card);
    });
  });
}

/* ────────────────────────────────────────────────
   EVENT LISTENERS
   ──────────────────────────────────────────────── */
function attachListeners() {
  document.getElementById('nav-plan').addEventListener('click',     () => switchView('plan'));
  document.getElementById('nav-problems').addEventListener('click', () => {
    switchView('problems');
    renderProblems();
  });
}

/* ────────────────────────────────────────────────
   INIT
   ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  attachListeners();
  renderCurriculum();
  renderProblems();
});
