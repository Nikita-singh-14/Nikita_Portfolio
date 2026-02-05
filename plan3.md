Implementation Plan - Redesign Certificate Section
Redesign the Certificate section to display certificates in a responsive grid layout with premium styling and interactive animations.

Proposed Changes
Certificate Component
[MODIFY] Certificate.jsx
Data Update:
Add 
Oracle2.jpeg
 to the certificates array.
Ensure both Oracle certificates have appropriate titles and descriptions.
Layout:
Change the main container from a horizontal scroll (flex overflow-x-auto) to a responsive grid (grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6).
Remove the scroll buttons (ChevronLeft/Right) and scroll logic as they are no longer needed for a grid.
Card Design:
Implement a fast, clean card style:
Image aspect ratio approx 320x220 (using aspect-[3/2] or similar).
Rounded corners (rounded-xl), white background (bg-card or white), soft shadow (shadow-md).
Animations:
Scroll Trigger:
Initial: opacity: 0, y: 30, scale: 0.95.
WhileInView: opacity: 1, y: 0, scale: 1.
Transition: duration: 0.5, delay staggered by index (index * 0.15).
Hover Effect:
Card lift: y: -6.
Shadow increase: shadow-xl.
Image Zoom: scale: 1.05.
Overlay: Fade in a "View Certificate" overlay with an icon.
Interaction:
Wrap the image content in an <a> tag opening in a new tab.
Verification Plan
Manual Verification
Responsiveness: Check the layout on desktop (3 columns) and mobile (1 column, auto-scaled images).
Animations: Verify cards fade in and slide up sequentially on scroll. Verify hover effects (zoom, lift, overlay) work smoothly.
Links: Click on certificate images to verify they open the link (or placeholder) in a new tab.
Images: Confirm 
Oracle1.jpeg
 and 
Oracle2.jpeg
 load correctly.