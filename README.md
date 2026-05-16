# CurrencyConverter
Sleek currency converter with a premium glassmorphic UI, dark mode, and animated gradient orbs. Uses JS to fetch live rates from er-api.com and syncs dropdowns with dynamic flags. The fluid CSS layout adapts to mobile, stacking selectors vertically on tiny screens for total visual harmony
🌍 Beautiful Glassmorphic Currency Converter
I wanted to build a financial tool that didn't feel like a boring spreadsheet, so I created this sleek, modern currency converter. It features a stunning glassmorphism UI layered over a deep slate dark mode canvas, complete with vibrant, floating gradient orbs that give the interface a dynamic, futuristic depth.
✨ Key Features
Real-Time Data: Integrates directly with the Open Exchange Rates API (er-api.com) to fetch accurate, live conversion rates whenever you hit the button.
Dynamic Flag Sync: The dropdowns are built dynamically using JavaScript. Whenever a user switches a currency code, the application instantly updates the corresponding country flag icon using the FlagsAPI.
Polished Glass Aesthetic: Built using modern CSS backdrop filters, custom gradient text typography, subtle borders, and smooth hover animations for a premium, frosted-glass feel.
Adaptive Mobile Layout: Utilizing fluid responsive design techniques like CSS clamp(), the application looks flawless on any screen. On super tight displays (under 360px), the layout intelligently stacks vertically, rotating the exchange icon by 90 degrees to maintain absolute visual harmony.
Failsafe Input Validation: The underlying script handles empty, text-based, or negative inputs by automatically defaulting back to a base calculation value of 1, preventing application crashes.
🛠️ Tech Stack
Frontend: Semantic HTML5, Vanilla JavaScript (ES6+ Async/Await), and Modern CSS3 (Flexbox, Keyframes, Pseudoelements).
Assets & Tooling: FontAwesome Icons, Poppins Google Font, FlagsAPI.
