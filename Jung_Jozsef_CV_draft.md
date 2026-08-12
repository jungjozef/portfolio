# József Márton Jung
*(Serbian: Jožef Marton Jung)*

Novi Sad, Serbia | +381 63 722 3028 | jung.jozsef.m@gmail.com | jozef.rocks
Citizenship: Hungarian (EU) & Serbian

---

## Profile

16 years of backend engineering. Most recently: architecting a platform that clients have used to migrate 1.2 million digital assets and 70+ government sites without major incident, and currently untangling a live 60+ microservice architecture built on Kafka. Speaker at GoLab 2025 on large-scale Go patterns.

Currently centered on Go, distributed systems, and microservices architecture — leading engineering teams of up to six, mentoring engineers since 2018, and actively involved in technical hiring at my last two roles.

Outside of work: freediving, photography, and playing with my old Amiga computers.

---

## Skills Overview

**Languages:** Go, Python, Java, JavaScript, TypeScript — also worked with C#, Scala, and Kotlin

Speaker at GoLab 2025: "Beyond the Basics: Modern Go Patterns for Large-Scale Applications" ([link](https://golab.io/talks/beyond-basics-modern-go-patterns-for-large-scale-applications))

**Databases:** PostgreSQL, MySQL, Cassandra, DynamoDB, Redis, ElasticSearch, Couchbase

**Messaging & Streaming:** Kafka, RabbitMQ, NATS, ActiveMQ

**Frameworks:** Spring, Django, Flask, React, Gin, Gorm

**Cloud & Infrastructure:** AWS, GCP, Oracle Cloud, Azure, Docker, Kubernetes, CI/CD pipelines

**Practices:** Agile (Scrum, Kanban)

**Tools:** JetBrains IDEs (IntelliJ IDEA, GoLand, PyCharm, WebStorm, DataGrip), Visual Studio, Git, API testing/client tools, Unix/Linux CLI tools (grep, awk, sed, top, htop), AI tools (Claude Code & ChatGPT Codex)

*Broader experience across data pipelines (Airflow, BigQuery, Hadoop), serverless (AWS Lambda), and legacy stacks — see work history below for specifics.*

---

## Experience

*Note: SmartCat, Valcon, codecentric, and Levi9 are IT outsourcing/staffing companies — each represents a single continuous employer, with client engagements (projects) listed underneath. M-Pioneers, Playerhunter, Gazindo, and GIA Hungaria Kft were direct/freelance/remote engagements.*

### 2024 – present: SmartCat, Novi Sad *(IT outsourcing company)*

**2026 – present: MeridianBet** *(outsourced via SmartCat)*
MeridianBet is a betting and online casino platform. Part of the Platform Modernisation team, working on a backend of 60+ live microservices with Kafka as the messaging backbone. Focused on consolidating services that grew over-fragmented under an earlier "new feature means new service" philosophy, and rewriting others to properly leverage Spring Framework rather than using it purely for dependency injection — all without downtime, since every service is under active development. Also contributing to a client-facing proposal and SOW for a new project.
Technologies: Oracle Cloud, Java, Cassandra, Kafka, PostgreSQL, Docker, Kubernetes

**2024 – 2026: ContentLion**
A next-generation headless CMS, site builder, and DAM platform built from scratch to replace Oracle Content Management, with enterprise-grade security on Oracle Cloud. Led a team of six (3 backend, 2 frontend, 1 QA) building Go backend APIs for content, asset, and site-management services, and helped drive the platform's microservices architecture from the ground up. Since launch, one client migrated 1.2 million assets onto the platform; another (gov.ky) migrated 70+ archived government sites without major issues.
Technologies: Oracle Cloud, Golang, PostgreSQL, Docker, Kubernetes, NATS

### 2021 – 2024: Valcon, Novi Sad *(IT outsourcing company)*

**2024: GroceryBuddy**
A grocery price-comparison and store-recommendation platform. Built the Java backend API powering core functionality, and wrote Python web crawlers to keep product data current — the main challenge being to make the crawlers convincing enough, in request patterns, headers, and timing, to avoid detection and bans on the target sites.
Technologies: AWS, Java, Python, Airflow, ElasticSearch, Redis, MySQL, Couchbase, Docker, ECS

**2023 – 2024: Halfords**
The UK's leading automotive, cycling, and leisure retailer. Enhanced the point-of-sale application managing the full workflow from order placement to parts installation, working within a legacy codebase still running on Java 1.6.
Technologies: AWS, Java, Spring, MySQL, Docker, ECS, AWS CodePipeline

**2023: Partou.nl**
The largest childcare organisation in the Netherlands. Sole developer on a full-stack staff-planning tool — built the React/TypeScript UI and the Python planning API, working alongside a data scientist who supplied the underlying data, and helped the data science team improve their Python coding standards.
Technologies: Azure, Python, JavaScript, TypeScript, React, Docker, Docker Compose

**2023: Bauwatch**
CCTV protection for construction sites, energy farms, and vacant properties without power. Built a Go application from scratch bridging Bauwatch's internal protocol with the SIA DC-09 standard. A key constraint: the app had to run as a single self-contained binary on edge hardware, so every dependency needed real justification for size and speed, and it had to keep working through offline periods with no network connection at all.
Technologies: Golang, RabbitMQ, Docker, Docker Compose

**2021 – 2022: Coolblue Energy** *(formerly Servicehouse)*
Sustainable energy and mobility services. Implemented the OCPI protocol's charge point operator (CPO) role from scratch, enabling the company to operate as a charge point operator — the eMSP side had already been built before I joined. Also built two more services from zero: internal tooling to track the full fulfillment process from purchasing energy products to installation, and a centralized service to monitor sellable products, which I led. Managed a team of five.
Technologies: AWS, Python, Django, RabbitMQ, PostgreSQL, Docker, Docker Compose, ECS

### 2020 – 2021: M-Pioneers GmbH *(Remote)*
A healthcare/logistics/HR software company. A brief engagement in a stack outside my usual toolset — developed and maintained a C#/.NET Core backend for tracking items issued to employees.
Technologies: C#, .NET Core, Entity Framework, SQL Server

### 2017 – 2020: codecentric, Novi Sad *(IT consulting company)*

**2018 – 2020: METRONOM**
Consultant embedded with METRONOM, METRO AG's digital innovation arm, supporting their Data Science team on the software side. Architected and built ML applications in Python on GCP for churn/decline/growth prediction and product substitution, operating across 24 countries where METRO sells. Set up CI/CD pipelines and automated monthly prediction runs with Airflow. The data itself was a core challenge: raw input came as single-item lines on bills, each bill holding multiple items, with buyers being legal entities like hotels rather than individual consumers — daily volume ranging roughly from hundreds of thousands to a few million line items, from memory.
Technologies: GCP, Python, Airflow, Kubernetes, BigQuery, Terraform, Terragrunt

**2018: OBI Next**
Digital enhancements for OBI hardware stores. Designed the high-level architecture together with stakeholders, then built it from scratch in Python on a pure serverless AWS stack — an app reading weather forecasts to notify the right customers at the right moment. Notable at the time: this was my first project in Python, and every technology in the stack was new to me going in.
Technologies: AWS, Python, Lambda, Kinesis, Firehose, Serverless framework

### 2017: Playerhunter *(Part-time, Remote)*
A sports recruitment platform and social network. Specified, designed, and implemented a complete redesign and rewrite of the Java/Spring backend, and took charge of infrastructure setup on Digital Ocean, including Jenkins CI for build automation. Ran concurrently with the Gazindo engagement below, same core team and stack — early-stage startup work. Playerhunter continued operating beyond this engagement.
Technologies: Digital Ocean, Java, Spring, PostgreSQL, RabbitMQ, Jenkins

### 2016 – 2017: Gazindo *(Remote)*
A purchasing and inventory management system covering supply, ordering, accounting, and inventory in one solution, built from scratch. Developed the Java/Spring backend and owned the complete infrastructure on Digital Ocean, including the web frontend and an Android build pipeline via Jenkins CI. Also built an internal Kotlin application for managing backend data. Ran concurrently with Playerhunter above, same team and stack. Gazindo later shut down after running out of funding — a common outcome in early-stage startup work.
Technologies: Digital Ocean, Java, Spring, PostgreSQL, RabbitMQ, Jenkins, Kotlin

### 2010 – 2016: Levi9, Novi Sad *(IT outsourcing company)*

**2015 – 2016: Improve Digital**
A publisher ad-monetization platform (the 360 Platform). Built a report delivery pipeline on Hadoop using Python, Hive, Impala, Sqoop, and Oozie — my first hands-on work building a data ingestion pipeline. Also contributed to Phoenix, a set of Java/Spring microservices extending the platform's backend, and built/maintained the Data Ingest, Third Party Integration (e.g. AppNexus), and Reports applications.
Technologies: Java, Spring, PostgreSQL, Hadoop, Python, Hive, Impala, Sqoop, Oozie, AWS S3

**2011 – 2015: TomTom**
A leading name in navigation — in-car devices, infotainment, fleet management, maps, and real-time services like TomTom HD Traffic. Sustained Java backend applications for device, user, and subscription management, and built a new middleware application as the single point of contact between TomTom's mobile apps and the backend, exposed as REST/XML web services. Extended the subscription system to automatically notify a third party about refunded shippable items, replacing manual work. Also owned code quality via SonarQube and CI via Jenkins.
Technologies: Java, Scala, Spring, MySQL, ActiveMQ, Jenkins, SonarQube, PHP, JavaScript

**2010 – 2011: Relatieplanet.nl**
At the time, the biggest and most-visited paid dating site in the Netherlands and Dutch-speaking Belgium. Rebuilt the front-end from ASP/VB to JSP/JSTL and overhauled the backend, migrating roughly 3.5 million user accounts. Implemented content search with Solr and built an image manipulation library on Java 2D for user-uploaded images.
Technologies: Java, JSP/JSTL, Spring, MySQL, Jenkins, Solr, Java 2D

**2013 – 2014: GIA Hungaria Kft** *(Freelance)*
MOL, Hungary's state-owned oil company, modernized its fuel dispensers and sold off the old hardware; independent gas station owners who bought the used dispensers needed a way to connect them to modern cashier systems — which is where this project came in, working from German-only hardware documentation. Built a Java application bridging fuel dispensers and cashier systems via serial port (RXTX) and server sockets, with H2-based state persistence and an HTTP/Restlet maintenance API. Tested using a custom dispenser emulator so the system could be validated without physical hardware.
Technologies: Java, H2 database, RXTX, Restlet

---

## Education

**2012 – 2015** — University of Novi Sad, Faculty of Technical Sciences — Master's in Electrical and Computer Engineering

**2005 – 2012** — University of Novi Sad, Faculty of Technical Sciences — Bachelor's with Honours in Electrical and Computer Engineering

---

## Languages

Hungarian (Native), English (Fluent), Serbian (Fluent), German (B1, certified)

---

## Communication

Mentoring younger colleagues since 2018, alongside leading knowledge-sharing initiatives and technical workshops (Code9, "5 days on Java" at Levi9). Actively involved in hiring at my last two roles (SmartCat, Valcon) — CV review, technical interviews, and structured candidate grading and feedback.
