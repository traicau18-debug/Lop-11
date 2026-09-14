import React from 'react';

/**
 * Standard Chemical Formatting Utility for Grade 11 Chemistry (Hoá học 11)
 * Adheres strictly to Vietnamese and IUPAC chemical typography:
 * - Subscripts for chemical formulas (H₂O, CO₂, Al₂(SO₄)₃, C₆H₁₂O₆, CₙH₂ₙ₊₂, etc.)
 * - Superscripts for ions and charges (H⁺, OH⁻, SO₄²⁻, NH₄⁺, Fe³⁺, etc.)
 * - Thermodynamic notations (ΔᵣH°₂₉₈, ΔբH°₂₉₈)
 * - Electron configurations (1s² 2s² 2p⁶ 3s² 3p³...)
 * - Chemical bonds & arrows (⇌, →, N≡N, C≡C, en-dash bond –CH₃)
 * - Atomic symbol notation with Mass number A and Atomic number Z:
 *   ^{14}_{7}N, ^14_7N, [14,7]N -> stacked A over Z right before element symbol
 */

// Subscript mappings
const SUB_MAP: Record<string, string> = {
  '0': '₀', '1': '₁', '2': '₂', '3': '₃', '4': '₄',
  '5': '₅', '6': '₆', '7': '₇', '8': '₈', '9': '₉',
  '+': '₊', '-': '₋', '=': '₌', '(': '₍', ')': '₎',
  'a': 'ₐ', 'e': 'ₑ', 'h': 'ₕ', 'i': 'ᵢ', 'j': 'ⱼ',
  'k': 'ₖ', 'l': 'ₗ', 'm': 'ₘ', 'n': 'ₙ', 'o': 'ₒ',
  'p': 'ₚ', 'r': 'ᵣ', 's': 'ₛ', 't': 'ₜ', 'u': 'ᵤ',
  'v': 'ᵥ', 'x': 'ₓ'
};

// Superscript mappings
const SUPER_MAP: Record<string, string> = {
  '0': '⁰', '1': '¹', '2': '²', '3': '³', '4': '⁴',
  '5': '⁵', '6': '⁶', '7': '⁷', '8': '⁸', '9': '⁹',
  '+': '⁺', '-': '⁻', '=': '⁼', '(': '⁽', ')': '⁾',
  'n': 'ⁿ', 'o': 'ᵒ', 'r': 'ʳ', 't': 'ᵗ'
};

export function toSubscript(str: string): string {
  return str.split('').map(c => SUB_MAP[c] || c).join('');
}

export function toSuperscript(str: string): string {
  return str.split('').map(c => SUPER_MAP[c] || c).join('');
}

// List of chemical elements to safely identify formula tokens
const ELEMENTS = [
  'Ac', 'Ag', 'Al', 'Am', 'Ar', 'As', 'At', 'Au', 'Ba', 'Be', 'Bh', 'Bi', 'Bk', 'Br',
  'Ca', 'Cd', 'Ce', 'Cf', 'Cl', 'Cm', 'Cn', 'Co', 'Cr', 'Cs', 'Cu', 'Db', 'Ds', 'Dy',
  'Er', 'Es', 'Eu', 'Fe', 'Fl', 'Fm', 'Fr', 'Ga', 'Gd', 'Ge', 'He', 'Hf', 'Hg', 'Ho',
  'Hs', 'In', 'Ir', 'Kr', 'La', 'Li', 'Lr', 'Lu', 'Lv', 'Mc', 'Md', 'Mg', 'Mn', 'Mo',
  'Mt', 'Na', 'Nb', 'Nd', 'Ne', 'Nh', 'Ni', 'No', 'Np', 'Og', 'Os', 'Pa', 'Pb', 'Pd',
  'Pm', 'Po', 'Pr', 'Pt', 'Pu', 'Ra', 'Rb', 'Re', 'Rf', 'Rg', 'Rh', 'Rn', 'Ru', 'Sb',
  'Sc', 'Se', 'Sg', 'Si', 'Sm', 'Sn', 'Sr', 'Ta', 'Tb', 'Tc', 'Te', 'Th', 'Ti', 'Tl',
  'Tm', 'Ts', 'Xe', 'Yb', 'Zn', 'Zr',
  // Single letter elements
  'B', 'C', 'F', 'H', 'I', 'K', 'N', 'O', 'P', 'S', 'U', 'V', 'W', 'Y'
];

const ELEMENT_REGEX_PART = ELEMENTS.join('|');

/**
 * Format string with chemistry typography
 */
export function formatChemString(text: string): string {
  if (!text) return '';

  let res = text;

  // 1. Standardize Reaction Arrows & Equilibrium
  res = res.replace(/<=>/g, '⇌')
           .replace(/<==>/g, '⇌')
           .replace(/<->/g, '⇌');

  // 2. Thermodynamic Enthalpy notations (Hoá học 11 - Cánh Diều / KNTT / Chân Trời Sáng Tạo)
  res = res.replace(/ΔrH°?298/g, 'ΔᵣH°₂₉₈')
           .replace(/ΔrHo_?298/g, 'ΔᵣH°₂₉₈')
           .replace(/ΔrHo298/g, 'ΔᵣH°₂₉₈')
           .replace(/ΔrH0_?298/g, 'ΔᵣH°₂₉₈')
           .replace(/ΔfH°?298/g, 'ΔբH°₂₉₈')
           .replace(/ΔfHo_?298/g, 'ΔբH°₂₉₈')
           .replace(/ΔfHo298/g, 'ΔբH°₂₉₈')
           .replace(/ΔfH0_?298/g, 'ΔբH°₂₉₈')
           .replace(/ΔrH\b/g, 'ΔᵣH')
           .replace(/ΔfH\b/g, 'ΔբH');

  // 3. Powers of 10 and scientific exponents (e.g., 10^-14, 10^-7, 10^14)
  res = res.replace(/10\^(-?\d+)/g, (_, exp) => `10${toSuperscript(exp)}`);

  // 4. Electron configurations: 1s2, 2s2, 2p3, 2p6, 3s2, 3p6, 3d10, 4s1, 4s2, 4p6...
  res = res.replace(/\b([1-7][spdf])([1-9]|1[0-4])\b/g, (_, orb, num) => `${orb}${toSuperscript(num)}`);

  // 5. General Organic Formula Series
  res = res.replace(/\bCnH2n\+2\b/g, 'CₙH₂ₙ₊₂')
           .replace(/\bCnH2n\-2\b/g, 'CₙH₂ₙ₋₂')
           .replace(/\bCnH2n\-6\b/g, 'CₙH₂ₙ₋₆')
           .replace(/\bCnH2n\+1OH\b/g, 'CₙH₂ₙ₊₁OH')
           .replace(/\bCnH2nO2\b/g, 'CₙH₂ₙO₂')
           .replace(/\bCnH2nO\b/g, 'CₙH₂ₙO')
           .replace(/\bCnH2n\b/g, 'CₙH₂ₙ')
           .replace(/\(C6H10O5\)n/g, '(C₆H₁₀O₅)ₙ');

  // 6. Common Complex Ions with multi-charges
  res = res.replace(/\bSO4\s*2\-/g, 'SO₄²⁻')
           .replace(/\bSO4\^2\-/g, 'SO₄²⁻')
           .replace(/\bSO3\s*2\-/g, 'SO₃²⁻')
           .replace(/\bSO3\^2\-/g, 'SO₃²⁻')
           .replace(/\bCO3\s*2\-/g, 'CO₃²⁻')
           .replace(/\bCO3\^2\-/g, 'CO₃²⁻')
           .replace(/\bPO4\s*3\-/g, 'PO₄³⁻')
           .replace(/\bPO4\^3\-/g, 'PO₄³⁻')
           .replace(/\bHPO4\s*2\-/g, 'HPO₄²⁻')
           .replace(/\bH2PO4\-/g, 'H₂PO₄⁻')
           .replace(/\bHCO3\-/g, 'HCO₃⁻')
           .replace(/\bHSO4\-/g, 'HSO₄⁻')
           .replace(/\bHSO3\-/g, 'HSO₃⁻')
           .replace(/\bNO3\-/g, 'NO₃⁻')
           .replace(/\bNO2\-/g, 'NO₂⁻')
           .replace(/\bOH\-/g, 'OH⁻')
           .replace(/\bCH3COO\-/g, 'CH₃COO⁻')
           .replace(/\bNH4\+/g, 'NH₄⁺')
           .replace(/\bH3O\+/g, 'H₃O⁺')
           .replace(/\bH\+/g, 'H⁺')
           .replace(/\bCl\-/g, 'Cl⁻')
           .replace(/\bBr\-/g, 'Br⁻')
           .replace(/\bI\-/g, 'I⁻')
           .replace(/\bF\-/g, 'F⁻')
           .replace(/\bS\s*2\-/g, 'S²⁻')
           .replace(/\bNa\+/g, 'Na⁺')
           .replace(/\bK\+/g, 'K⁺')
           .replace(/\bLi\+/g, 'Li⁺')
           .replace(/\bAg\+/g, 'Ag⁺')
           .replace(/\bBa2\+/g, 'Ba²⁺')
           .replace(/\bCa2\+/g, 'Ca²⁺')
           .replace(/\bMg2\+/g, 'Mg²⁺')
           .replace(/\bZn2\+/g, 'Zn²⁺')
           .replace(/\bCu2\+/g, 'Cu²⁺')
           .replace(/\bFe2\+/g, 'Fe²⁺')
           .replace(/\bFe3\+/g, 'Fe³⁺')
           .replace(/\bAl3\+/g, 'Al³⁺')
           .replace(/\bCr3\+/g, 'Cr³⁺')
           .replace(/\bPb2\+/g, 'Pb²⁺');

  // Hydrate dot (CuSO4.5H2O -> CuSO₄·5H₂O, CaSO4.2H2O -> CaSO₄·2H₂O)
  res = res.replace(/([A-Za-z0-9\)]+)\.([0-9]+H2O)/g, '$1·$2');

  // 7. General chemical formulas subscripting:
  // Matches element followed by digits, e.g. H2, O2, C6, Cl2, N2, Na2, Ca3, etc.
  // We use word-boundary or non-letter boundary to avoid matching accidental text.
  const elementSubscriptRegex = new RegExp(`(?<![a-zA-Z])(${ELEMENT_REGEX_PART})(\\d+)(?![a-zA-Z])`, 'g');
  res = res.replace(elementSubscriptRegex, (_, elem, digits) => `${elem}${toSubscript(digits)}`);

  // Matches closing parenthesis followed by digits: (OH)2, (SO4)3, (NH4)2, (CH3)4, etc.
  res = res.replace(/\)(\d+)/g, (_, digits) => `)${toSubscript(digits)}`);

  // Matches multi-element formulas with chained elements: e.g. C2H5OH, CH3COOH, H2SO4, etc.
  // Sometimes multiple elements are in a single formula like C6H12O6:
  // The first pass matched C6, but inside C6H12O6, H12 had C6 in front (which is now C₆).
  // Run element subscripting pass for elements following unicode subscripts or other elements:
  const chainedSubscriptRegex = new RegExp(`([₀-₉])(${ELEMENT_REGEX_PART})(\\d+)`, 'g');
  res = res.replace(chainedSubscriptRegex, (_, prevSub, elem, digits) => `${prevSub}${elem}${toSubscript(digits)}`);

  // Repeat for 3rd or 4th element in formula (e.g. C₆H₁₂O₆)
  res = res.replace(chainedSubscriptRegex, (_, prevSub, elem, digits) => `${prevSub}${elem}${toSubscript(digits)}`);

  // 8. Structural Organic Representations & Bonds
  res = res.replace(/N≡N/g, 'N≡N')
           .replace(/N=N/g, 'N=N')
           .replace(/C≡C/g, 'C≡C')
           .replace(/\bCH3\-/g, 'CH₃–')
           .replace(/\bC2H5\-/g, 'C₂H₅–')
           .replace(/\bC6H5\-/g, 'C₆H₅–')
           .replace(/\-CH3\b/g, '–CH₃')
           .replace(/\-C2H5\b/g, '–C₂H₅')
           .replace(/\-OH\b/g, '–OH')
           .replace(/\-CHO\b/g, '–CHO')
           .replace(/\-COOH\b/g, '–COOH')
           .replace(/\-NH2\b/g, '–NH₂')
           .replace(/\-NO2\b/g, '–NO₂')
           .replace(/CH3-CH2-/g, 'CH₃–CH₂–')
           .replace(/CH3-CO-/g, 'CH₃–CO–')
           .replace(/CH2=CH2/g, 'CH₂=CH₂')
           .replace(/CH≡CH/g, 'CH≡CH');

  // Equilibrium constant subscripts
  res = res.replace(/\bKc\b/g, 'K꜀')
           .replace(/\bKp\b/g, 'Kₚ')
           .replace(/\bKw\b/g, 'K_w')
           .replace(/\bKa\b/g, 'Kₐ')
           .replace(/\bKb\b/g, 'K_b');

  // Concentrations like [H+], [OH-]
  res = res.replace(/\[H\+\]/g, '[H⁺]')
           .replace(/\[OH\-\]/g, '[OH⁻]');

  return res;
}

/**
 * Render text with atomic notation (A, Z element) and chemical typography into clean JSX.
 * Handles formats:
 * - ^{14}_{7}N, ^{12}_{6}C, ^{1}_{1}H
 * - _{7}^{14}N
 * - ^14_7N, _7^14N
 * - [14,7]N, [14/7]N
 */
export function renderChemicalJSX(text: string): React.ReactNode {
  if (!text) return null;

  // First apply Unicode chemistry typography
  const formatted = formatChemString(text);

  // Regex pattern for atomic symbols with Mass number A and Atomic number Z:
  // 1: ^{A}_{Z}X
  // 2: _{Z}^{A}X
  // 3: ^A_ZX
  // 4: _Z^AX
  // 5: [A,Z]X or [A/Z]X
  const isotopeRegex = /(\^\{([0-9]+)\}_\{([0-9]+)\}([A-Z][a-z]?))|(_\{([0-9]+)\}\^\{([0-9]+)\}([A-Z][a-z]?))|(\^([0-9]+)_([0-9]+)([A-Z][a-z]?))|(_([0-9]+)\^([0-9]+)([A-Z][a-z]?))|(\[([0-9]+)[,\/]([0-9]+)\]([A-Z][a-z]?))/g;

  if (!isotopeRegex.test(formatted)) {
    return formatted;
  }

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  const regex = new RegExp(isotopeRegex.source, 'g');
  let match: RegExpExecArray | null;

  while ((match = regex.exec(formatted)) !== null) {
    if (match.index > lastIndex) {
      parts.push(formatted.slice(lastIndex, match.index));
    }

    let a = '';
    let z = '';
    let elem = '';

    if (match[1]) {
      // ^{A}_{Z}Elem
      a = match[2];
      z = match[3];
      elem = match[4];
    } else if (match[5]) {
      // _{Z}^{A}Elem
      z = match[6];
      a = match[7];
      elem = match[8];
    } else if (match[9]) {
      // ^A_ZElem
      a = match[10];
      z = match[11];
      elem = match[12];
    } else if (match[13]) {
      // _Z^AElem
      z = match[14];
      a = match[15];
      elem = match[16];
    } else if (match[17]) {
      // [A,Z]Elem
      a = match[18];
      z = match[19];
      elem = match[20];
    }

    parts.push(
      <span key={match.index} className="inline-flex items-center align-baseline mx-0.5 select-none">
        <span className="inline-flex flex-col text-[0.62em] leading-none text-right mr-0.5 font-mono">
          <span className="font-semibold text-slate-800">{a}</span>
          <span className="font-semibold text-slate-600">{z}</span>
        </span>
        <span className="font-bold text-slate-900">{elem}</span>
      </span>
    );

    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < formatted.length) {
    parts.push(formatted.slice(lastIndex));
  }

  return <>{parts}</>;
}
