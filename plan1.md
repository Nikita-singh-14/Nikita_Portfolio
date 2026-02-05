Netflix-Like Animation Implementation Plan
Goal Description
Transform the "Certificates" section from a static grid into a dynamic, horizontal scrolling carousel similar to Netflix content rows. This includes:

Horizontal scrolling for certificate cards.
"Pop-out" hover effects where cards scale up and showcase more details.
Smooth transitions and responsive design.
User Review Required
NOTE

I will be removing the grid layout grid md:grid-cols-2 in favor of a horizontal scroll flex layout for the certificates.

Proposed Changes
Certificates Component
[MODIFY] 
Certificate.jsx
Replace grid layout with a scrollable container (e.g., flex overflow-x-auto).
Implement framer-motion for:
whileHover scale effect (approx 1.1x or 1.2x).
layout prop to smooth out size changes (optional, but good for "row" feel).
Add "Scroll Left/Right" buttons if content overflows (optional but recommended for UX).
Update Card styling to look more "cinematic" or cleaner to fit the horizontal row.
UI Components (Optional)
[NEW] [Carousel Components]
If I decide to use a Shadcn Carousel, I might need to add it. For now, a custom framer-motion implementation might be smoother for the specific "Netflix scale" effect.
Verification Plan
Manual Verification
Run Locally: npm run dev
Browser Check: Open the local server URL.
Scroll Test: Verify the certificate section scrolls horizontally.
Hover Test: Hover over a certificate card. It should scale up smoothly without breaking the layout or getting cut off.
Responsive Test: Check on mobile view to ensure it's touch-scrollable.