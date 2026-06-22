# Asset Manifest

## Images
| File | Source | Purpose |
|---|---|---|
| `verdent-design/images/hero-background.png` | Generated from stage1 comp-3 style | Home page hero background — care worker walking with elderly client in garden |
| `public/hero-background.png` | Copy of above | Served to browser |

## Icons
All icons are hand-authored SVG components in `src/icons/index.tsx` using `currentColor`.

| Icon | Purpose |
|---|---|
| IconHeart | Logo, CTA buttons, nav |
| IconLeaf | Section labels, decorative |
| IconShield | Trust badge |
| IconHome | Companionship service |
| IconUser | Personal care service |
| IconUtensils | Meal preparation service |
| IconBroom | Household support service |
| IconPlus | Specialist care service |
| IconArrowRight | Learn more links |
| IconChevronDown/Left/Right | Navigation, carousel |
| IconMenu / IconX | Mobile hamburger |
| IconPhone / IconMail / IconMapPin | Contact info |
| IconStar | Testimonial ratings |
| IconQuote | Testimonial card |
| IconCheck | Qualifications, form success |
| IconUpload | CV upload |
| IconBriefcase | Careers |
| IconFacebook / IconInstagram / IconLinkedin | Social links |
| IconLock / IconEye / IconEyeOff | Admin login |
| IconLogOut / IconSettings / IconGrid | Admin sidebar |
| IconMessageSquare / IconClipboard / IconUsers | Admin sections |
| IconTrash / IconEdit | Admin CRUD actions |

## Logo
Logo is implemented as an SVG-based component (IconHeart in a green circle + wordmark text) — no raster logo generated. Favicon is the default Vite SVG from the template.

## Intentionally Skipped
- Service card thumbnail photos (5 service cards use CSS gradient placeholders — within the 5-asset cap)
- OG share image
- Raster logo variants
- Map embed (placeholder shown — requires Google Maps API key for live version)
