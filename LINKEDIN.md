# LinkedIn profile copy (paste-ready)

Derived from `CONTENT.md` and `Jung_Jozsef_CV_draft.md`. Not part of the site, not published.

**Why this is manual:** LinkedIn has no write API for profile positions or projects (the
Profile API is read-only, partner-gated), and automating the UI breaks their User
Agreement and risks the account. So: copy, paste, done. Nothing here needs rewriting.

Copy is em-dash free, matching the site's tone.

## Before you start

1. **Silence the notifications first.** Settings → Visibility → *Share profile updates
   with your network* → **Off**. Otherwise a dozen edits spam your feed. Turn it back on
   afterwards if you want the "open to work" style signal.
2. **Grouping positions under one company:** add a position and pick the *same* company
   from the dropdown (not free text). LinkedIn then nests them automatically, so SmartCat
   shows once with two roles under it.
3. **Featured section:** Add profile section → Recommended → *Add featured*. There is no
   Projects section here on purpose, see §4.
4. **Dates:** LinkedIn wants month + year. `CONTENT.md` only records years, so pick the
   months yourself. Anything below is marked `[month?]`.
5. **Titles:** neither `CONTENT.md` nor the CV records official job titles for the older
   roles. The titles below are reasonable labels, not sourced facts. **Check each one**
   before pasting, marked `[title?]`.
6. **Field limits** (as of my knowledge, verify against the UI if something gets cut):
   headline 220, About 2,600, position title 100, position description 2,000,
   skills 100 total with 3 pinned.

---

# 1. Headline

Pick one. All three fit the 220-char limit; counts are in the audit at the bottom.

**Option A — keyword-dense (best for recruiter search)**
```
Senior Backend Engineer | Go, Python, Java | Distributed systems, microservices, cloud architecture | 16 years | GoLab 2025 speaker
```

**Option B — adds EU work eligibility, which recruiters filter on**
```
Senior Backend Engineer | 16 years in Go, Python and Java | Distributed systems and microservices at scale | GoLab 2025 speaker | Hungarian (EU) & Serbian citizen
```

**Option C — short and plain**
```
Senior Backend Engineer | Go and Java, distributed systems, microservices architecture
```

---

# 2. About

```
16 years of backend engineering, from fuel dispenser protocols to large-scale microservices platforms.

Most recently: architecting a platform that clients have used to migrate 1.2 million digital assets and 70+ government sites without major incident, and currently untangling a live 60+ microservice architecture built on Kafka.

Currently centered on Go and Java, distributed systems, and microservices architecture. That has meant leading engineering teams, mentoring younger colleagues, and taking an active part in hiring at my last two roles: CV review, technical interviews, structured feedback.

Speaker at GoLab 2025: "Beyond the Basics: Modern Go Patterns for Large-Scale Applications".
https://golab.io/talks/beyond-basics-modern-go-patterns-for-large-scale-applications

What I tend to be brought in for: consolidating architectures that grew faster than they were designed, building services from zero, and getting platforms to ship smoothly (CI/CD, Kubernetes, Kafka, NATS).

Languages: Go, Python, Java, JavaScript, TypeScript. Also worked with C#, Scala and Kotlin.
Databases: PostgreSQL, MySQL, Cassandra, DynamoDB, Redis, ElasticSearch, Couchbase.
Messaging: Kafka, RabbitMQ, NATS, ActiveMQ.
Cloud and infrastructure: AWS, GCP, Oracle Cloud, Azure, Docker, Kubernetes, CI/CD.

Based in Novi Sad, Serbia. Hungarian (EU) and Serbian citizen.
Outside of work: freediving, photography, and restoring old Amiga computers.

Reachable at jung.jozsef.m@gmail.com, more at jozef.rocks
```

---

# 3. Experience

Six companies, eight positions. Reverse chronological, matching the CV.

## 3.1 SmartCat — position 1 of 2

- **Title:** Senior Backend Engineer
- **Company:** SmartCat
- **Employment type:** Full-time
- **Dates:** [month?] 2026 – Present
- **Location:** Novi Sad, Serbia (or Hybrid/Remote as applicable)

```
Client: MeridianBet, a betting and online casino platform. Part of the Platform Modernisation team, working on a backend of 60+ live microservices with Kafka as the messaging backbone.

• Consolidating services that grew over-fragmented under an earlier "new feature, new service" philosophy: identifying which services actually belong together and merging them.
• Rewriting others to properly leverage the Spring Framework rather than using it purely for dependency injection.
• Doing all of it without downtime, since every one of those services is live and under active development, so consolidation cannot break production or block teams still shipping features.
• Contributing to a client-facing proposal and SOW for a new project.

Tech: Oracle Cloud, Java, Spring, Cassandra, Kafka, PostgreSQL, Docker, Kubernetes
```

## 3.2 SmartCat — position 2 of 2

- **Title:** Senior Backend Engineer / Team Lead `[title?]` (you led 6 people here, worth reflecting)
- **Company:** SmartCat
- **Employment type:** Full-time
- **Dates:** [month?] 2024 – [month?] 2026
- **Location:** Novi Sad, Serbia

```
Client: ContentLion, a next-generation headless CMS, site builder and digital asset platform, built from scratch to replace Oracle Content Management, with enterprise-grade security on Oracle Cloud.

• Led a team of six (3 backend, 2 frontend, 1 QA).
• Built the Go backend APIs powering content, asset and site-management services.
• Helped drive the platform's microservices architecture from the ground up rather than inheriting someone else's decisions.
• Worked closely with infrastructure on CI/CD, because a platform this size lives or dies on how smoothly it ships.

Results since launch: one client migrated 1.2 million assets onto the platform, and another, gov.ky, moved over 70 archived government sites off Oracle Content Management without major issues.

Tech: Oracle Cloud, Go, PostgreSQL, Docker, Kubernetes, NATS
```

## 3.3 Valcon

- **Title:** Senior Backend Engineer `[title?]`
- **Company:** Valcon
- **Employment type:** Full-time
- **Dates:** [month?] 2021 – [month?] 2024
- **Location:** Novi Sad, Serbia

```
Backend and full-stack engineering across five client engagements.

GroceryBuddy (2024): built the Java backend API for a grocery price-comparison platform, and wrote the Python crawlers keeping product data current. The real challenge was making them convincing enough, in request patterns, headers and timing, to keep operating without getting banned.

Halfords (2023-2024): enhanced the point-of-sale application covering the full workflow from order placement to parts installation, inside a legacy codebase still running on Java 1.6.

Partou.nl (2023): sole developer on a full-stack staff-planning tool for the largest childcare organisation in the Netherlands. Built the React/TypeScript UI and the Python planning API, working alongside a data scientist, and helped that team improve their Python coding standards.

Bauwatch (2023): built a Go application from scratch bridging Bauwatch's internal protocol with the SIA DC-09 standard. It had to run as a single self-contained binary on edge hardware and keep working through offline periods with no network at all.

Coolblue Energy (2021-2022): implemented the OCPI protocol's charge point operator role from scratch, built two further services from zero (fulfillment tracking, and a centralised sellable-product monitor which I led), and managed a team of five.

Tech: AWS, Azure, Java, Python, Go, Spring, Django, React, TypeScript, RabbitMQ, PostgreSQL, MySQL, ElasticSearch, Redis, Couchbase, Airflow, Docker, ECS
```

## 3.4 M-Pioneers GmbH

- **Title:** Backend Engineer `[title?]`
- **Company:** M-Pioneers GmbH
- **Employment type:** Full-time (or Contract, whichever it was)
- **Dates:** [month?] 2020 – [month?] 2021
- **Location:** Remote

```
Healthcare, logistics and HR software company. Developed and maintained a C#/.NET Core backend for tracking items issued to employees. A short engagement in a stack outside my usual toolset, and useful proof of not being tied to one ecosystem.

Tech: C#, .NET Core, Entity Framework, SQL Server
```

## 3.5 codecentric

- **Title:** Software Consultant `[title?]`
- **Company:** codecentric
- **Employment type:** Full-time
- **Dates:** [month?] 2017 – [month?] 2020
- **Location:** Novi Sad, Serbia

```
Consultant on two client engagements.

METRONOM (2018-2020), METRO AG's digital innovation arm: embedded with their Data Science team on the software side. Architected and built ML applications in Python on GCP for churn, decline and growth prediction, plus a second one suggesting product substitutes for out-of-stock items. Set up CI/CD for both, automated monthly prediction runs with Airflow, wrote the test suites, and worked with other teams to help them consume what the models produced. The pipeline ran across 24 countries. The data was the real challenge: raw input arrived as single-item lines on bills, buyers were legal entities like hotels and restaurants rather than consumers, and daily volume ranged from hundreds of thousands to a few million line items.

OBI Next (2018): designed the high-level architecture with stakeholders, then built it from scratch in Python on a pure serverless AWS stack, an app reading weather forecasts to notify the right customers at the right moment. Also my first project ever in Python.

Tech: GCP, AWS, Python, Airflow, Kubernetes, BigQuery, Terraform, Terragrunt, Lambda, Kinesis, Firehose
```

## 3.6 Playerhunter

- **Title:** Backend Engineer `[title?]`
- **Company:** Playerhunter
- **Employment type:** Part-time
- **Dates:** [month?] 2017 – [month?] 2017
- **Location:** Remote

```
Sports recruitment platform and social network. Specified, designed and implemented a complete redesign and rewrite of the Java/Spring backend from scratch, and took charge of the Digital Ocean infrastructure underneath it: Jenkins CI for build automation, API documentation, and close work with the frontend team on integration. Ran concurrently with Gazindo, same core team and stack. Playerhunter continued operating beyond this engagement.

Tech: Digital Ocean, Java, Spring, PostgreSQL, RabbitMQ, Jenkins
```

## 3.7 Gazindo

- **Title:** Backend Engineer `[title?]`
- **Company:** Gazindo
- **Employment type:** Contract (or Part-time)
- **Dates:** [month?] 2016 – [month?] 2017
- **Location:** Remote

```
Purchasing and inventory management system covering supply, ordering, accounting and stock in one solution, built from scratch. Developed the Java/Spring backend, owned the complete Digital Ocean infrastructure including the web frontend, and set up Jenkins CI across backend, web and Android builds. Also built an internal Kotlin application for managing backend data. Ran concurrently with Playerhunter, same team and stack. The company later closed after running out of funding.

Tech: Digital Ocean, Java, Spring, PostgreSQL, RabbitMQ, Jenkins, Kotlin
```

## 3.8 GIA Hungaria Kft

- **Title:** Software Engineer, Freelance `[title?]`
- **Company:** GIA Hungaria Kft
- **Employment type:** Freelance
- **Dates:** [month?] 2013 – [month?] 2014
- **Location:** Remote / Hungary

```
MOL, Hungary's state-owned oil company, modernised its fuel dispensers and sold off the old hardware. Independent station owners who bought the used dispensers had no way to connect them to modern cashier systems, which is the gap this project filled, working from German-only hardware documentation.

Built a Java application bridging fuel dispensers and cashier systems, talking to the dispenser over serial port using RXTX and to the cashier system through server sockets, with H2-based state persistence and an HTTP/Restlet maintenance API. Tested with a custom dispenser emulator so the system could be validated without physical hardware. Delivered with a full user manual.

Tech: Java, H2, RXTX, Restlet
```

## 3.9 Levi9

- **Title:** Backend Engineer `[title?]`
- **Company:** Levi9
- **Employment type:** Full-time
- **Dates:** [month?] 2010 – [month?] 2016
- **Location:** Novi Sad, Serbia

```
Backend engineering across three client engagements.

Improve Digital (2015-2016), the 360 Platform for publisher ad monetization: built a report delivery pipeline on Hadoop using Python, Hive, Impala, Sqoop and Oozie, my first hands-on data ingestion pipeline. Contributed to Phoenix, a set of Java/Spring microservices extending the platform, and built and maintained three core applications: Data Ingest (batch-processed bidding data), Third Party Integration (partners such as AppNexus), and Reports.

TomTom (2011-2015): sustained Java backend applications for device, user and subscription management, and built a new middleware application that became the single point of contact between TomTom's mobile apps and the backend, exposed as REST and XML web services. Extended the subscription system to automatically notify a third party about refunded shippable items, replacing manual work. Also worked on Java/Scala middleware, handled production issues, and owned code quality via SonarQube and CI via Jenkins.

Relatieplanet.nl (2010-2011), then the biggest paid dating site in the Netherlands and Dutch-speaking Belgium: rebuilt the front end from ASP/VB to JSP/JSTL and overhauled the backend, migrating roughly 3.5 million live user accounts without breaking the site under its users. Implemented content search with Solr and built an image manipulation library on Java 2D.

Tech: Java, Scala, Spring, MySQL, PostgreSQL, Hadoop, Python, Hive, Impala, Sqoop, Oozie, Solr, ActiveMQ, Jenkins, SonarQube, AWS S3
```

---

# 4. Featured (instead of a Projects section)

**Projects was cut.** Six of the seven entries described client work already covered in
Experience, one section below it and collapsed by default, so a recruiter reading in order
hits the same paragraphs twice. That reads as padding. The keyword argument does not hold
either: those terms are already in the Experience text on the same profile.

Projects earns its place when work cannot hang off an employer entry: open source, side
projects, anything with an artifact of its own. Revisit it if that changes.

The one entry that was worth keeping is the GoLab talk, and Featured suits it better,
because it renders as a card near the top of the profile with a link preview.

**Add profile section → Recommended → Add featured.** Pin three links, in this order:

1. **GoLab 2025 talk**
   `https://golab.io/talks/beyond-basics-modern-go-patterns-for-large-scale-applications`
   Suggested caption:
   ```
   My GoLab 2025 talk: Beyond the Basics, Modern Go Patterns for Large-Scale Applications.
   ```

2. **jozef.rocks** (the site: full work history, all 16 engagements, expandable)
   `https://jozef.rocks/`
   Suggested caption:
   ```
   Full work history and tech stack, 16 years of backend engineering.
   ```

3. **CV (PDF)**
   `https://jozef.rocks/jung_jozsef_marton_cv.pdf`
   Suggested caption:
   ```
   CV, PDF.
   ```

Featured also covers what Projects would have: the client engagements stay in Experience
where the dates give them context, and anyone who wants the full detail follows the site
link, which already carries every role.

# 5. Skills

LinkedIn allows 100 skills and 3 pinned. Pin the three that match the roles you want:

**Pin these 3:** Go (Programming Language) · Distributed Systems · Microservices Architecture

Then add, in this order (recruiter-search relevance first):

```
Go (Programming Language)
Distributed Systems
Microservices Architecture
Backend Development
Software Architecture
Java
Spring Framework
Python
Apache Kafka
Kubernetes
Docker
PostgreSQL
CI/CD
Cloud Architecture
Amazon Web Services (AWS)
Google Cloud Platform (GCP)
Oracle Cloud Infrastructure
Microsoft Azure
RabbitMQ
NATS
ActiveMQ
Apache Cassandra
MySQL
Redis
Elasticsearch
DynamoDB
Couchbase
REST APIs
Apache Airflow
Terraform
Django
Flask
Gin
GORM
React
TypeScript
JavaScript
C#
Scala
Kotlin
Jenkins
SonarQube
Technical Leadership
Team Leadership
Mentoring
Technical Interviewing
Agile Methodologies
Scrum
Kanban
```

**Attach skills to positions.** LinkedIn weights a skill more when it is linked to a
role. Worth doing for the top ~10 on the SmartCat and Valcon entries at minimum.

---

# 6. Things only you can decide

- Every `[title?]` above: the actual titles you held.
- Every `[month?]`: LinkedIn wants month granularity.
- Employment type per entry (Full-time / Contract / Freelance / Part-time).
- Whether to name clients at all. Some outsourcing contracts restrict it. The CV and the
  site already name them, so this is presumably fine, but LinkedIn is more public.
- Whether the ContentLion role gets a lead-flavoured title, given you led six people.
