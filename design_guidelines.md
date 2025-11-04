# FreelanceConnect Design Guidelines

## Design Approach
**Hybrid Approach**: Drawing from successful freelance platforms (Upwork, Fiverr, Freelancer.com) while implementing Material Design principles for information-dense, trustworthy interface.

**Core Principles**:
- Professional credibility through clean, structured layouts
- Efficient information hierarchy for quick scanning
- Trust-building through clear visual organization
- Accessible, functional design over decorative elements

## Typography System

**Font Families**: 
- Primary: Inter (headings, UI elements)
- Secondary: System font stack (body text, descriptions)

**Hierarchy**:
- Page Titles: text-3xl to text-4xl, font-semibold
- Section Headers: text-2xl, font-semibold
- Card Titles: text-xl, font-medium
- Body Text: text-base, font-normal
- Labels: text-sm, font-medium
- Captions/Meta: text-xs to text-sm, font-normal

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20
- Tight spacing: p-2, gap-2 (badges, tight lists)
- Standard spacing: p-4, gap-4 (cards, form fields)
- Section spacing: p-6 to p-8 (card interiors)
- Large spacing: p-12 to p-20 (page sections)

**Grid System**:
- Dashboard layouts: 12-column grid with sidebar navigation
- Profile sections: 2-column layout (main content + sidebar)
- Search results: Responsive grid (1 col mobile, 2-3 cols tablet/desktop)
- Container max-width: max-w-7xl for main content areas

## Component Library

### Navigation
**Primary Navigation**:
- Fixed top navbar with logo, search, navigation links, user menu
- Height: h-16
- Include notification bell icon and profile avatar dropdown

**Sidebar Navigation** (Dashboard):
- Fixed left sidebar, width: w-64
- Collapsible on mobile
- Clear active states for current page
- Group related items with subtle dividers

### Profile Components

**Profile Header**:
- Large avatar (w-24 h-24 to w-32 h-32)
- User name, title/profession prominently displayed
- Rating stars and review count
- Action buttons (Edit Profile, Message, Hire)
- Verification badges if applicable

**Profile Sections**:
- About/Bio section with full-width text area
- Skills as rounded tags/badges with subtle borders
- Portfolio grid (2-3 columns) with thumbnail images
- Experience timeline with left border accent
- Education cards with institution logos
- Reviews/Testimonials with star ratings

**Stats Display**:
- Horizontal cards showing key metrics (Jobs Completed, Rating, Response Time)
- Icons paired with numbers
- Arranged in grid: grid-cols-2 md:grid-cols-4

### Forms & Inputs

**Profile Edit Forms**:
- Clear section groupings with headers
- Labels above inputs with required field indicators
- Input fields: rounded-lg border with focus states
- Textareas for descriptions: min-h-32
- File upload areas with drag-and-drop zones
- Save/Cancel buttons fixed at bottom or top-right

**Form Layout**:
- Full-width inputs on mobile
- 2-column layout on desktop for shorter fields
- Generous spacing between form groups (space-y-6)

### Cards & Lists

**Freelancer/Job Cards**:
- Rounded corners: rounded-lg
- Border with subtle shadow
- Padding: p-6
- Image/avatar on left or top
- Title, description, metadata in organized hierarchy
- Price/rate prominently displayed
- Action buttons (View Profile, Contact, Apply)

**List Items**:
- Clear separation with borders or spacing
- Hover states for interactive lists
- Include avatars, titles, timestamps, status indicators

### Messaging Interface

**Chat Layout**:
- Split view: conversation list (w-80) + active chat
- Message bubbles with different alignment for sent/received
- Timestamp below messages
- Input area fixed at bottom with file attachment option

### Buttons & CTAs

**Button Hierarchy**:
- Primary actions: Solid background, rounded-lg, px-6 py-3
- Secondary actions: Outlined style with border
- Tertiary actions: Text-only with subtle hover
- Icon buttons: Circular or square, p-2 to p-3

**CTA Placement**:
- Profile pages: Top-right of header section
- Cards: Bottom-right or spanning full width
- Forms: Right-aligned or full-width on mobile

### Data Display

**Tables** (for job history, earnings):
- Responsive table with horizontal scroll on mobile
- Alternating row backgrounds for readability
- Sticky headers on long tables
- Sort indicators on column headers

**Progress Indicators**:
- Profile completion: Horizontal bar with percentage
- Skill levels: Progress bars or badge levels
- Milestone tracking: Stepped progress indicator

## Icons
Use **Heroicons** via CDN for consistent, professional iconography throughout the application. Apply icons for:
- Navigation menu items
- Profile section headers
- Skill badges
- Action buttons
- Status indicators
- File types

## Images

**Profile/Portfolio Images**:
- High-quality professional photos for freelancer profiles
- Portfolio work samples in grid layouts
- Client company logos in testimonials
- Placeholder avatars for users without photos

**No Hero Image**: This is a web application, not a marketing site. Focus on functional dashboard layouts rather than marketing hero sections.

## Responsive Behavior

**Breakpoints**:
- Mobile: Stack all columns, full-width cards, collapsible sidebar
- Tablet (md:): 2-column grids, visible sidebar with toggle
- Desktop (lg:): Full multi-column layouts, persistent sidebar

**Mobile Optimizations**:
- Bottom navigation bar for key actions
- Collapsible filters/sidebar
- Swipeable cards where appropriate
- Touch-friendly button sizes (min 44px)

## Accessibility
- Maintain WCAG AA contrast ratios
- Keyboard navigation for all interactive elements
- ARIA labels for icon-only buttons
- Focus indicators visible on all focusable elements
- Form validation messages clearly associated with inputs

## Key Pages Layout

**Dashboard**: Sidebar navigation + main content area with stats overview, recent activity, and quick actions

**Profile View**: Header with avatar and key info + tabbed sections (About, Portfolio, Reviews, History)

**Search/Browse**: Filter sidebar + results grid with sorting options

**Job/Project Detail**: Full-width header + 2-column layout (description + sidebar with actions/details)