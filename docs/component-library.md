# SHPE Website Component Library v1.0 (Draft)

## Purpose

This document defines reusable UI components for the SHPE Northeastern website. The goal is to promote consistency, reduce duplicate development effort, and provide a shared user experience across all pages.

## Design Principles

Components should:

- Be reusable across multiple pages
- Maintain a consistent appearance and behavior
- Follow approved website design guidelines
- Support responsive layouts
- Meet accessibility standards

---

## Component Inventory

### Button Component

#### Purpose

Used for primary and secondary actions throughout the website.

#### Usage Examples

- Join SHPE
- Register for Event
- Donate Now
- Learn More
- Contact Us

#### Variants

##### Primary Button

Used for main calls to action.

Styling standards for colors, typography, spacing, and branding should follow the definitions established in `design-guidelines.md`.

---

##### Secondary Button

Used for less prominent actions.

Styling standards for colors, typography, spacing, and branding should follow the definitions established in `design-guidelines.md`.

#### Sizes

##### Small

- Dimensions: __________

##### Medium

- Dimensions: __________

##### Large

- Dimensions: __________

#### States

- Default
- Hover
- Disabled

---

### Navigation Bar Component

#### Purpose

Provides consistent navigation throughout the website.

#### Potential Content

- SHPE Northeastern Logo
- Home
- About
- Events
- Projects
- Donations

#### Decisions Needed

- Sticky Navigation: Enabled
- Dropdown Usage: __________
- Logo Placement: __________

#### Requirement

Navigation components must be mobile friendly and responsive across supported device sizes.

---

### Footer Component

#### Purpose

Provides common information across all pages.

#### Potential Content

- SHPE Northeastern
- Contact Information
- Social Media Links
- Copyright Information

#### Decisions Needed

- Footer Layout: Logo, navigation links, and contact/social links
- Social Links: Email, Linktree, Instagram, LinkedIn, and other approved chapter platforms
- Contact Information Display: __________

---

### Card Component

#### Purpose

Displays grouped information in a consistent format.

#### Potential Uses

##### Event Card

- Event Name
- Date
- Description
- Registration Button

##### Officer Card

- Name
- Position
- Photo

##### Project Card

- Project Name
- Description
- Links

##### Sponsor Card

- Sponsor Name
- Sponsor Logo

#### Decisions Needed

Card standardization is currently under discussion.

Potential approach:

- Create a generic reusable card component
- Allow page owners to pass colors and content based on page needs

Status:

- TBD

---

### Section Header Component

#### Purpose

Provides consistent section titles throughout the website.

#### Examples

- Upcoming Events
- Meet Our Board
- Featured Projects
- Support SHPE

#### Decisions Needed

- Typography Style: See design-guidelines.md
- Alignment: __________
- Divider Usage: __________

---

### Hero Section Component

#### Purpose

Provides a prominent introduction section at the top of key pages.

#### Potential Content

- Headline
- Supporting Text
- Call-to-Action Button
- Background Image or Graphic

#### Decisions Needed

- Layout Style: __________
- Background Image Usage: __________
- CTA Placement: __________
- Section Height: __________

---

## Future Components

Potential additions after MVP completion:

- Event Calendar Component
- Sponsor Showcase Component
- Member Spotlight Component
- Testimonial Component
- Announcement Banner Component
- Contact Form Component

---

## Component Governance

Before developing a new component, contributors should:

1. Check whether a reusable version already exists.
2. Reuse existing styles where possible.
3. Propose additions through team discussion.
4. Update this document when new shared components are created.
5. Page owners should be notified when shared components are added, modified, or deprecated.

---

## Approval & Revision History

**Version:** 1.0 Draft

**Created By:** Jorge Lopez

**Date:** __________

**Reviewed By:** __________

**Notes:** __________
