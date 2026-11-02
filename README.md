# Paarl SPCA Website - WEDE5020 Part 1
**Student Name:** Siyasanda Mjezu
**Student Number:** ST10504857
**Module:** WEDE5020

## Project Overview
A 5-page responsive website for Paarl SPCA to raise awareness and adoptions.

## Key Features
- 5 Pages: Home, About, Services, Enquiry, Contact
- Responsive Navigation
- Adoption Enquiry Form

## Sitemap
Home > About / Services / Enquiry / Contact

## References
Images: Pexels.com and Unsplash.com [Accessed 14 August 2026]
Content: Paarl SPCA Official Website [Accessed 14 August 2026]
## Changelog

### Part 1 Feedback Fixes - 17 Sept 2026
- Fixed double file extensions: Renamed index.html.html to index.html (and about, contact, enquiry, services) - Files were not loading due to incorrect naming
- Added missing folder structure: Created css/ and js/ directories as required by brief
- Increased commit history: Added descriptive commits for each file rename to show progression (from 1 commit to 8+ commits)
- Updated navigation: Verified all href links point to correct .html files

### Part 2 Changes - 17 Sept 2026
- Created external stylesheet: css/style.css linked to all 5 HTML pages
- Added base styles: CSS reset, font family, colour scheme (#2d6a4f), margin/padding
- Implemented layout: Flexbox for header/nav, Grid for content sections
- Added visual styles: hover, focus, box-shadow, border-radius
- Made responsive: Media queries for desktop (1024px+), tablet (768px), mobile (480px) with relative units (rem, %, em)


### Part 3 Changes - 02 Nov 2026
- Implemented JS interactivity: Form validation, live search ID animalSearch, dynamic year currentYear, donation selector - js/script.js 71 lines (was 1 line)
- Added SEO: Unique title, meta description, keywords, author ST10504857, OG tags on all 5 HTML pages
- Integrated interactive map: Leaflet.js 1.9.4 at Paarl coords -33.7345,18.9622 on index, about, contact pages
- Enhanced forms: IDs contactForm, adoptionForm with required + JS validation regex
- Updated search: Filter for .animal-card and .service-card classes

## GitHub Repository
https://github.com/ST10504857/WEDE5020-Paarl-SPCA

## Website Live Link (for Part 3)
https://st10504857.github.io/WEDE5020-Paarl-SPCA/
