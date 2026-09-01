# Wice Waste Management UI — Technical Submission Documentation

**Objective:** Implement a pixel-accurate, cross-device responsive frontend user interface for three Figma screens (*Welcome*, *Schedule Pickup*, and *Confirmation*) featuring fluid micro-interactions and clean component architecture.

- **Figma Reference Link:** [Sample App Figma File](https://www.figma.com/design/WAyvXxbQcf6B809aKgdmaC/Sample-app)
- **Technology Stack:** React 18, Vite, Tailwind CSS, Framer Motion, Lucide Icons, Canvas Confetti
- **Target Display:** Cross-device Mobile & Tablet UI (100% Full Bleed & Safe-Area Aware)
- **DOCX Submission File:** [`Wice_Waste_Management_Documentation.docx`](file:///Users/hum-mac/Documents/fluxrendor/Wice_Waste_Management_Documentation.docx)

---

## 1. Executive Summary

This project is a high-fidelity frontend implementation of the Wice Waste Management mobile application, built directly from the provided Figma specifications. The application translates three key mobile screens into a single-page web app featuring safe-area handling, spring micro-animations, interactive sheet modals, and dynamic state management.

---

## 2. Screen-by-Screen Implementation

### 2.1 Screen 1: Welcome Screen (`E / Welcome Screen`)
- **Background & Branding:** Implemented using full-bleed `bg.png` background artwork containing the sky gradient, clouds, green hills, and `wice` logo illustration.
- **Typography System:** Integrated **Plus Jakarta Sans** Google Font family for the primary headline *"Smart Waste management Made Easy"*.
- **Interactive Actions:** Floating *"Continue with Email"* cyan button and *"Continue with Google"* white button featuring official 4-color Google logo SVG.
- **Navigation Link:** *"Already have an account? Sign In"* text link seamlessly transitioning to the Schedule screen.

### 2.2 Screen 2: Schedule Screen (`J / 04 / Pick Up Trash / Schedule / Default State`)
- **Header Navigation:** Sticky header with back arrow button and centered *"Schedule"* title text.
- **Service Card:** White card with `rounded-2xl` corners, 40% enlarged official Trash Truck SVG icon, and *"Change"* outline button.
- **Info Banner:** Inline cyan notification row with circular warning badge `(!)` and text *"This method must have minimum of 5kg of waste weight"* (`#2A7571`).
- **Date & Time Pickers:** Individual rounded cards for Date Pickup (calendar search icon) and Time Pickup (clock icon) starting in default empty state (`#C4C4C4`).
- **Empty Address State:** Rendered using `address.png` character illustration, *"No address added"* title, *"Click the add address to continue"* subtext, and *"add address"* button.
- **Conditional CTA Behavior:** Matching Figma default state, the bottom *"Continue to Confirmation"* button remains hidden initially and smoothly slides up with Framer Motion when any selection is made.

### 2.3 Screen 3: Confirmation Screen (`L / 05 / Confirmation / Default State`)
- **Centered Header:** Sticky header with back button and centered *"Confirmation"* title text.
- **Trash Bank Section:** Clean floating detail view with MapPin icon, *"BSU – Ketupat Pandan"* title, street/city address lines, Phone icon, and selected pickup date.
- **Total Weight Summary:** White card displaying itemized waste categories (`Plastic bottle`, `Glass`, `Electronic`, `Oil`) with calculated *"Estimated total weight: 7.5 Kg"*.
- **Process CTA & Celebration:** Bottom teal *"Proses"* button with Checkmark Circle icon trigger bringing up an animated Success Sheet Modal with realistic Canvas Confetti explosion.

---

## 3. Component Architecture & Design System

| Component Name | Role & Description |
| :--- | :--- |
| **`Header.jsx`** | Sticky navigation bar featuring centered page titles, back arrow button, and glassmorphism backdrop blur. |
| **`Button.jsx`** | Reusable Framer Motion action button with spring micro-interactions on tap (`whileTap={{ scale: 0.97 }}`). |
| **`SelectorRow.jsx`** | Custom picker row for Date and Time selections with icon badges and cyan chevron indicators. |
| **`DatePickerModal` / `TimePickerModal` / `AddressModal`** | Interactive bottom sheet modals for selecting dates, times, and editing location address data. |
| **`vectors.jsx`** | Centralized vector hub containing user's official Trash Truck SVG, Google SVG, and `address.png` illustration. |

---

## 4. Key Technical Highlights

1. **Micro-Animations:** Micro-tactile spring feedback on all button taps (`whileTap={{ scale: 0.97 }}`), page horizontal slide transitions, and confetti celebration effects.
2. **Cross-Device Responsiveness:** Engineered to fit 100% of modern mobile screen viewports (iPhone, Android, Tablets) with safe area notch handling and clean vertical scrolling.
3. **Design Token Accuracy:** Exact color matching (`#00C896`, `#E6FAF4`, `#0E382C`, `#EBF7F5`, `#2A7571`) and **Plus Jakarta Sans** font hierarchy.
4. **Asset Organization:** Streamlined asset architecture stored under `src/assets/images/` (`bg.png`, `logo.png`, `address.png`) with zero duplicate overhead.

---

## 5. Local Development & Production Build Guide

```bash
# Install Dependencies
npm install

# Start Development Server
npm run dev

# Build Production Static Bundle
npm run build
```

*Static Output:* Generated in `/dist` for direct static hosting.
