# Site Content — jozef.rocks

## Hero
Name: József Márton Jung
Title/tagline: Senior Backend Engineer: Go, Python, Java, distributed systems,
cloud architecture
One-liner: 16 years building backend systems, from fuel dispenser protocols to
large-scale microservices platforms.

## About (short)
16 years of backend engineering. Most recently: architecting a platform that
clients have used to migrate 1.2 million digital assets and 70+ government sites
without major incident, and currently untangling a live 60+ microservice
architecture built on Kafka. Currently centered on Go and Java, distributed
systems, and microservices architecture. That has meant leading engineering
teams, mentoring younger colleagues, and taking an active part in hiring at my
last two roles: CV review, technical interviews, structured feedback. Speaker at
GoLab 2025. Based in Novi Sad, Serbia; Hungarian (EU) and Serbian citizen.

## Skills (grouped, mirrors CV — keep lean, not exhaustive)
- **Languages:** Go, Python, Java, JavaScript, TypeScript; also worked with C#, Scala, and Kotlin
- **Databases:** PostgreSQL, MySQL, Cassandra, DynamoDB, Redis, ElasticSearch, Couchbase
- **Messaging & Streaming:** Kafka, RabbitMQ, NATS, ActiveMQ
- **Frameworks:** Spring, Django, Flask, React, Gin, Gorm
- **Cloud & Infrastructure:** AWS, GCP, Oracle Cloud, Azure, Docker, Kubernetes, CI/CD
- **Practices:** Agile (Scrum, Kanban)

## Experience (all roles, expand/collapse per entry — no curation)
Each entry: one-line summary always visible (company, dates, one-sentence gist) +
"read more" expansion with the full description and tech stack, same depth as CV.
Default state noted per entry — MeridianBet and ContentLion open by default (most
current/relevant), everything else collapsed by default. Order: reverse
chronological, matching CV.

---

### MeridianBet — 2026–present, via SmartCat *(default: expanded)*
Summary: Platform Modernisation team, consolidating a 60+ service architecture
built on Kafka, all of it live and under active development.
Full: MeridianBet runs a betting and online casino platform with a backend of
over 60 microservices, Kafka as the messaging backbone, and an architecture that
grew fast under a "new feature, new service" philosophy, and grew messy along
with it. My job now is untangling that: identifying which services actually
belong together and merging them, and rewriting others to properly use Spring's
framework capabilities instead of treating it as a glorified dependency-
injection tool. The real challenge isn't the redesign itself, it's that every
one of those 60+ services is live and under active development, so consolidation
has to happen without breaking anything currently in production or blocking the
teams still shipping features on top of it. I've also stepped outside pure
engineering to help shape a client-facing proposal and SOW for a new project, a
reminder that good architecture decisions start before the first line of code.
Tech: Oracle Cloud, Java, Cassandra, Kafka, PostgreSQL, Docker, Kubernetes

### ContentLion — 2024–2026, via SmartCat *(default: expanded)*
Summary: Led a team of 6 building a headless CMS from zero. It now handles
million-asset client migrations.
Full: ContentLion set out to do something ambitious: build a next-generation
headless CMS, site builder, and digital asset platform good enough to replace
Oracle Content Management outright, enterprise security and scale included,
running on Oracle Cloud, built entirely from scratch. I led a team of six (3
backend, 2 frontend, 1 QA) building the Go backend APIs powering content, asset,
and site-management services, and was one of a small group shaping the
microservices architecture from the ground up rather than inheriting someone
else's decisions. I also worked closely with infrastructure on CI/CD, because a
platform this size lives or dies on how smoothly it ships. Since launch, one
client migrated 1.2 million assets onto the platform, and another, gov.ky, moved
over 70 archived government sites from Oracle Content Management without major
issues.
Tech: Oracle Cloud, Go, PostgreSQL, Docker, Kubernetes, NATS

### GroceryBuddy — 2024, via Valcon *(default: collapsed)*
Summary: Backend API in Java + Python web crawlers engineered to avoid detection
and bans.
Full: Grocery Buddy helps shoppers find the best deal across stores, which
sounds simple until you need accurate, current prices from a dozen different
sources, most of which would rather you didn't scrape them. I built the Java
backend API powering the core app, and wrote the Python crawlers that kept
product data fresh. The real challenge was making them convincing enough, in
request patterns, headers, and timing, to keep operating without getting banned
by the sites they pulled from.
Tech: AWS, Java, Python, Airflow, ElasticSearch, Redis, MySQL, Couchbase, Docker, ECS

### Halfords — 2023–2024, via Valcon *(default: collapsed)*
Summary: Enhanced a legacy Java 1.6 point-of-sale application for the UK's
leading automotive and cycling retailer.
Full: Halfords runs the full journey from "I need new brake pads" to "installed
and done" through one point-of-sale system, and my work was making that journey
smoother end to end, from order placement through to parts installation, inside
a legacy codebase still running on Java 1.6. Not the most modern stack to work
in, but a good reminder that reliability at real retail scale matters more than
chasing the latest version.
Tech: AWS, Java, Spring, MySQL, Docker, ECS, AWS CodePipeline

### Partou.nl — 2023, via Valcon *(default: collapsed)*
Summary: Sole developer on a full-stack staff-planning tool for Dutch childcare
facilities, paired with a data scientist.
Full: Partou, the largest childcare organisation in the Netherlands, needed to
schedule children and staff across facilities more intelligently, a genuinely
tricky planning problem with real people on the other end of it. I was the sole
developer on the full-stack application: the React/TypeScript interface and the
Python planning API behind it, working alongside a data scientist who supplied
the underlying data. Along the way I also helped the data science team tighten
up their coding standards.
Tech: Azure, Python, JavaScript, TypeScript, React, Docker, Docker Compose

### Bauwatch — 2023, via Valcon *(default: collapsed)*
Summary: Built a self-contained Go binary for edge hardware, bridging Bauwatch's
protocol with the SIA DC-09 standard, no network required.
Full: Bauwatch keeps watch over construction sites, energy farms, and vacant
properties, often with no power and no reliable connectivity on-site. I built a
Go application from the ground up that translates between Bauwatch's internal
protocol and the SIA DC-09 industry standard, so customers with compliant
security hardware could plug straight into Bauwatch's system without custom
integration work. The constraints shaped the whole approach: it had to run as a
single self-contained binary on edge hardware, so every dependency needed real
justification, since size and speed mattered, and it had to keep working through
offline periods with no network connection at all.
Tech: Go, RabbitMQ, Docker, Docker Compose

### Coolblue Energy — 2021–2022, via Valcon *(default: collapsed)*
Summary: Built the OCPI CPO role from scratch, led two more services from zero,
and managed a team of five.
Full: Coolblue Energy (formerly Servicehouse) wanted to operate as a full charge
point operator, which meant implementing the OCPI protocol's CPO role from
scratch. The eMSP side already existed by the time I joined the project. Beyond
that, I built two more services from zero: internal tooling that tracked the
entire fulfillment journey, from buying energy products to getting them
installed at a customer's site, and a centralized service for monitoring what
was actually sellable, which I led. I also managed a team of five through all of
it.
Tech: AWS, Python, Django, RabbitMQ, PostgreSQL, Docker, Docker Compose, ECS

### M-Pioneers GmbH — 2020–2021, Remote *(default: collapsed)*
Summary: A brief stint in a different ecosystem: C#/.NET Core for a healthcare/
logistics/HR software company.
Full: M-Pioneers builds software across healthcare, logistics, and HR. A short
engagement, but a genuinely different stack from most of my work: a C#/.NET Core
backend with Entity Framework and SQL Server, tracking equipment and items
issued to employees. Useful proof that I'm not tied to one ecosystem when a
project calls for something else.
Tech: C#, .NET Core, Entity Framework, SQL Server

### METRONOM — 2018–2020, via codecentric *(default: collapsed)*
Summary: Architected ML apps for churn/growth prediction across 24 countries.
B2B transaction data at real scale, hundreds of thousands to millions of line
items daily.
Full: codecentric placed me as a consultant with METRONOM, METRO AG's digital
innovation arm, embedded in their Data Science team to support the data
scientists on the software side. I architected and built, in Python on GCP, a
machine learning application analyzing customer transaction data for churn,
decline, and growth prediction, plus a second one suggesting product substitutes
when an item was out of stock. I set up CI/CD for both, automated monthly
prediction runs with Apache Airflow, wrote the test suites, kept documentation
current, and worked with other teams to help them actually consume what the
models produced. The pipeline ran across 24 countries where METRO sells, and the
data itself was the real challenge: raw input came in as single-item lines on
bills, each bill holding multiple items, and buyers were legal entities like
hotels and restaurants rather than individual shoppers, with daily volume
swinging, from memory, somewhere between hundreds of thousands and a few million
line items depending on the country.
Tech: GCP, Python, Airflow, Kubernetes, BigQuery, Terraform, Terragrunt

### OBI Next — 2018, via codecentric *(default: collapsed)*
Summary: Designed and built a pure-serverless AWS app from scratch, also my
first project ever in Python.
Full: Another codecentric consulting placement, this time with OBI Next,
exploring digital touches for hardware store customers. I designed the high-
level architecture together with the stakeholders, then built it from scratch in
Python on a pure serverless AWS stack: an app that reads weather forecasts and
notifies the right customers at the right moment: rain coming means it's time to
think about garden covers, not after the fact. I wrote the tests, documented the
project, and integrated it into the broader OBI Next ecosystem. What made it
memorable: this was my first time writing Python, and honestly every piece of
the stack was new to me going in.
Tech: AWS, Python, Lambda, Kinesis, Firehose, Serverless framework

### Playerhunter — 2017, Part-time Remote *(default: collapsed)*
Summary: Complete backend redesign and rewrite for a sports recruitment
platform, built from scratch, one of two concurrent early-stage startup gigs.
Full: Playerhunter connects athletes, clubs, and agents. I specified, designed,
and implemented a complete redesign and rewrite of the Java/Spring backend from
scratch, and took charge of the Digital Ocean infrastructure underneath it: set
up Jenkins CI for build automation, documented the API, and worked closely with
the frontend team to get them integrated. This ran at the same time as the
Gazindo engagement below, with the same core team and the same stack. Proper
early-stage startup work, juggling two greenfield builds in parallel, part-time.
Playerhunter kept going beyond this engagement.
Tech: Digital Ocean, Java, Spring, PostgreSQL, RabbitMQ, Jenkins

### Gazindo — 2016–2017, Remote *(default: collapsed)*
Summary: Java/Spring backend and full infrastructure for a purchasing/inventory
system, built from scratch. The company later closed after running out of
funding.
Full: Gazindo aimed to run purchasing and inventory end to end: supply,
ordering, accounting, and stock, all in one solution. I built the Java/Spring
backend from zero, specifying and implementing features as the product grew, and
owned the complete Digital Ocean infrastructure, including the web frontend. I
set up Jenkins CI to automate build and deployment across the backend, web
frontend, and Android app, documented the API, helped with web and Android
integration, and built an internal Kotlin application for managing backend data,
all working alongside the same team building Playerhunter at the same time.
Gazindo eventually ran out of funding and shut down, the kind of outcome that
comes with early-stage startup work.
Tech: Digital Ocean, Java, Spring, PostgreSQL, RabbitMQ, Jenkins, Kotlin

### Improve Digital — 2015–2016, via Levi9 *(default: collapsed)*
Summary: My first data ingestion pipeline, plus Java/Spring microservices work,
on a publisher ad-monetization platform.
Full: Improve Digital's 360 Platform helps publishers automate and improve
monetization of advertising and audience across every screen, format, and sales
channel, public and private alike. I built a report delivery pipeline on Hadoop
using Python, Hive, Impala, Sqoop, and Oozie. That was my first real hands-on
work building a data ingestion pipeline. I also contributed to Phoenix, a set of
Java/Spring microservices extending the 360 Platform's backend, and built and
maintained three core applications: Data Ingest, which batch-processed bidding
data; Third Party Integration, syncing the backend with partners like AppNexus;
and Reports, which generated and uploaded reports to Amazon S3.
Tech: Java, Spring, PostgreSQL, Hadoop, Python, Hive, Impala, Sqoop, Oozie, AWS S3

### TomTom — 2011–2015, via Levi9 *(default: collapsed)*
Summary: Backend and middleware for device/subscription management, plus a new
middleware layer connecting mobile apps to the backend ecosystem.
Full: TomTom was a leading name in navigation: in-car and personal devices, in-
dash infotainment, fleet management, maps, and real-time services like TomTom HD
Traffic. I sustained Java backend applications handling device and user
management, subscription rights, and promotions, and built a new middleware
application that became the single point of contact between TomTom's mobile apps
and the rest of the backend, with everything exposed as REST or XML web
services. One feature I'm particularly proud of: extending the subscription
system to automatically notify a third-party system about refunded shippable
items, turning what had been manual busywork into something automatic. I also
worked on Java/Scala middleware sitting between devices, device-support apps,
and backend systems, and beyond feature work, handled production issues, wrote
unit/integration tests, monitored code quality with SonarQube, set up Jenkins CI
for build and release automation, and built internal tools in PHP and
JavaScript.
Tech: Java, Scala, Spring, MySQL, ActiveMQ, Jenkins, SonarQube, PHP, JavaScript

### Relatieplanet.nl — 2010–2011, via Levi9 *(default: collapsed)*
Summary: Full front-end and backend rebuild, migrating ~3.5M user accounts, plus
Solr search and a custom image pipeline.
Full: Relatieplanet was, at the time, the biggest and most-visited paid dating
site in the Netherlands, also covering Dutch-speaking Belgium. I helped rebuild
the front end from ASP/VB to JSP/JSTL and overhaul the backend, migrating
roughly 3.5 million live user accounts in the process without breaking the site
under its users. I also implemented content search using Solr and built an image
manipulation library on Java 2D to convert and transform user-uploaded images,
alongside the usual stream of bug fixes and unit tests.
Tech: Java, JSP/JSTL, Spring, MySQL, Jenkins, Solr, Java 2D

### GIA Hungaria Kft — 2013–2014, Freelance *(default: collapsed)*
Summary: Bridged German-made legacy fuel dispensers to cashier systems, working
from German-only hardware documentation.
Full: The backstory here is half the story: MOL, Hungary's state-owned oil
company, modernized its fuel dispensers and sold off the old hardware, and
smaller independent gas station owners snapped up the used dispensers, but had
no way to connect them to modern cashier systems. That's the gap this project
filled. The dispensers themselves were German-made, so the only documentation
available was in German, which was its own small challenge before any code got
written. I designed and built a Java application, installed on a PC wired to the
dispenser hardware, that bridges the fuel dispenser and the cashier system,
talking to the dispenser over serial port using the RXTX library and to the
cashier system through server sockets. I added HTTP-based log access and
maintenance via Restlet, persisted dispenser controller state in an H2 database,
and built a dispenser emulator with Com0Com and RealTerm so the whole thing
could be tested without needing real hardware on hand. Wrapped it up with a full
user manual for the client.
Tech: Java, H2 database, RXTX, Restlet

---

## GoLab 2025 talk (separate small mention, not part of the experience list)
Speaker at GoLab 2025: "Beyond the Basics: Modern Go Patterns for Large-Scale
Applications."
Link: https://golab.io/talks/beyond-basics-modern-go-patterns-for-large-scale-applications

## Personal touch (used sparingly — one line, not a section)
Outside of work: freediving, photography, and restoring old Amiga computers.
As rendered in the footer (condensed, slash-separated): `freediving / photography /
Amiga computers`

## Marquee copy (signature element — see DESIGN.md)
Facts only, all of them stated elsewhere on the page, so the marquee stays decorative
and is hidden from assistive tech:
`★ SENIOR BACKEND ENGINEER ★ GO, PYTHON, JAVA / DISTRIBUTED SYSTEMS ★ 16 YEARS OF
BACKEND ENGINEERING ★ GOLAB 2025 SPEAKER ★ NOVI SAD, SERBIA ★`
The string is duplicated in two `<span>`s for the seamless scroll — same text in both,
change them together.

## Contact / links
- Email: jung.jozsef.m@gmail.com
- Phone: +381 63 722 3028
- Location: Novi Sad, Serbia
- LinkedIn: https://www.linkedin.com/in/jungjm/
- CV download: jung_jozsef_marton_cv.pdf (shipped in the site root, served from
  https://jozef.rocks/jung_jozsef_marton_cv.pdf)

## Citizenship / eligibility note
Resolved via the design sketches: included in the hero meta row (alongside location
and the GoLab link), styled quietly rather than as a headline. Wording matches the
CV for consistency: "Hungarian (EU) & Serbian" (not "Serbian & Hungarian (EU)" —
keep the same order as the CV throughout).

## Note on the old site
An old version of this site exists but is outdated — missing SmartCat/ContentLion/
MeridianBet, references an AWS cert that has since expired, includes skills not
actually on the CV (e.g. Kotlin, Azure as core), and its tone is more playful/casual
than the professional-first direction chosen here. Do not use it as a content
reference — this file is the source of truth.

---
**Notes / open items to resolve before build:**
- GitHub: leaning toward omitting (profile doesn't have much on it yet), but not
  fully decided — still deciding. Build the contact section so a GitHub link could
  be added later without restructuring (e.g. same link-list pattern as LinkedIn),
  but don't include a placeholder for it now.

**Resolved:**
- Photo: yes, use the professional headshot (same one as the CV). Small, in the hero
  area, per DESIGN.md — not a large banner image.
- LinkedIn: real URL now in place — https://www.linkedin.com/in/jungjm/ — used both in
  the contact section and as `sameAs` in the Person JSON-LD.
- CV download: real PDF now shipped as `site/jung_jozsef_marton_cv.pdf`, linked from
  both the hero CTA and the contact section. No placeholder link left on the site.
