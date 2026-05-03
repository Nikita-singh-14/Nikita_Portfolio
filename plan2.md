Walkthrough - Color Theme Update
I have updated the portfolio's color theme to use the requested deep red/burgundy palette.

Changes
1. Updated CSS Variables in 
src/index.css
I replaced the existing color variables with the new HSL values derived from #33080B and #4C0507.

Dark Mode
Background: #33080B (HSL 356 73% 12%)
Cards / Popovers: #4C0507 (HSL 358 88% 16%) - Slightly lighter than background for depth.
Borders / Inputs: #4C0507 (HSL 358 88% 16%)
Light Mode
Primary Color: #4C0507 (HSL 358 88% 16%) - Used for branding elements.
Primary Foreground: White (HSL 0 0% 100%) - Ensures high contrast against the deep red.
Verification
The changes were applied directly to the CSS variables.

bg-background in dark mode will now render as Deep Burgundy.
bg-card in dark mode will render as Rich Red.
Primary buttons and accents in light mode will use the Rich Red color.