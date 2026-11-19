// Site content for the portfolio. Pages and components render from this file only.
// Author: Dilshad Ali

export const site = {
  "title": "NetSuite Solution Architect and Technical Consultant",
  "roles": [
    "NetSuite Developer",
    "NetSuite Administrator",
    "SuiteScript Engineer",
    "SuiteCommerce Developer",
    "ERP Integration Engineer",
    "Functional Consultant",
    "Finance Systems Consultant",
    "Full-stack Engineer"
  ],
  "pitch": "I build, fix and run NetSuite for growing businesses: configuration first, clean SuiteScript when code is truly needed, and integrations that keep working after go-live.",
  "positioning": "One person, a full NetSuite team: administrator, developer, front-end engineer, solution architect, functional consultant and project manager.",
  "endToEnd": "From a one-line fix to a full implementation, I handle it end to end: NetSuite, every system connected to it, and the people who use it every day.",
  "links": {
    "linkedin": "https://www.linkedin.com/in/dilalipk",
    "github": "https://github.com/dilali-pk",
    "upwork": "https://www.upwork.com/freelancers/~01b9fd4cc496f6fae0"
  },
  "skillsStrip": [
    "OneWorld",
    "SuiteScript 2.1",
    "SuiteQL",
    "RESTlets",
    "REST web services",
    "Map/Reduce",
    "SuiteFlow",
    "SuiteCommerce Advanced",
    "SDF",
    "Advanced PDF/HTML",
    "React in Suitelets",
    "Token based auth",
    "Jest",
    "Node.js",
    "Azure",
    "Power BI"
  ],
  "roles6": [
    {
      "icon": "gear",
      "short": "Administrator",
      "title": "NetSuite Administrator",
      "text": "Features, roles, permissions, forms, preferences, deployment audiences, sandbox and release management, account hygiene."
    },
    {
      "icon": "code",
      "short": "Software engineer",
      "title": "Software Engineer",
      "text": "SuiteScript 2.1, SuiteQL, REST APIs, integrations, Node.js and Python tooling, automated tests, source control."
    },
    {
      "icon": "window",
      "short": "Front-end engineer",
      "title": "Front-End Engineer",
      "text": "React, Bootstrap and Tailwind interfaces inside Suitelets, SuiteCommerce themes and extensions, portals and dashboards."
    },
    {
      "icon": "layers",
      "short": "Solution architect",
      "title": "Solution Architect",
      "text": "End-to-end design across NetSuite and the systems around it, decision records, trade-offs, security, scale and rollback."
    },
    {
      "icon": "clip",
      "short": "Functional consultant",
      "title": "Functional Consultant",
      "text": "Process mapping, fit-gap analysis, acceptance criteria, UAT, training and user guides."
    },
    {
      "icon": "flag",
      "short": "Project manager",
      "title": "Project Manager",
      "text": "Phased plans, status reports, risk tracking, stakeholder updates, cutover and hypercare."
    }
  ],
  "scenarios": [
    {
      "q": "We need something new built.",
      "a": "I design it, build it, test it and hand it over, end to end.",
      "get": [
        "A working, tested solution in your account",
        "User guides for your team",
        "Documentation for future changes"
      ]
    },
    {
      "q": "Someone else built it and they are gone.",
      "a": "I take it over, document it and keep it running and improving.",
      "get": [
        "How it really works, written down",
        "Fixes for what is broken",
        "Changes that do not break what depends on it"
      ]
    },
    {
      "q": "It worked yesterday and it is broken today.",
      "a": "I find the root cause and fix it, usually the same day.",
      "get": [
        "The root cause, with evidence",
        "A fix in configuration or code",
        "A clear note on what changed"
      ]
    },
    {
      "q": "Our numbers do not match.",
      "a": "I trace every figure back to the general ledger and fix the source, not the symptom.",
      "get": [
        "Each figure traced to the ledger",
        "The source fixed",
        "Reports finance can sign off"
      ]
    },
    {
      "q": "We are moving to NetSuite.",
      "a": "I plan and run the migration, data included.",
      "get": [
        "A phased plan from QuickBooks, Sage, spreadsheets or a legacy ERP",
        "Clean, mapped data",
        "Training, cutover and hypercare"
      ]
    },
    {
      "q": "We just need someone on call.",
      "a": "A monthly retainer for administration, fixes and small builds.",
      "get": [
        "Ongoing administration",
        "Fixes and small builds",
        "A senior person who knows your account"
      ]
    },
    {
      "q": "Our team or partner is stuck.",
      "a": "A second opinion, a code or design review, or an extra pair of senior hands.",
      "get": [
        "A code or design review",
        "Architecture advice",
        "Extra senior capacity on your project"
      ]
    }
  ],
  "groups": [
    {
      "key": "run",
      "name": "Run and improve"
    },
    {
      "key": "build",
      "name": "Build"
    },
    {
      "key": "connect",
      "name": "Connect"
    },
    {
      "key": "fix",
      "name": "Fix and advise"
    }
  ],
  "services": [
    {
      "id": "administration",
      "g": "run",
      "icon": "gear",
      "title": "NetSuite administration and optimization",
      "short": "Roles, forms and features set up cleanly, with regular account health reviews.",
      "detail": [
        "Roles and permissions, features and preferences",
        "Custom records, fields and forms",
        "Deployment audiences and permission clean-ups",
        "Sandbox refresh support and account health reviews"
      ]
    },
    {
      "id": "devops",
      "g": "run",
      "icon": "branch",
      "title": "NetSuite DevOps",
      "short": "Source control, automated sandbox deploys and reviewed releases to production.",
      "detail": [
        "SuiteCloud Development Framework (SDF), Git and GitHub",
        "Automated deploys to sandbox, pull-request releases to production",
        "Jest tests with mocked N modules",
        "Deployment status guards and coding standards"
      ]
    },
    {
      "id": "pdf",
      "g": "run",
      "icon": "doc",
      "title": "Advanced PDF/HTML templates and transaction email",
      "short": "Invoices, statements and packing documents that look right for every subsidiary.",
      "detail": [
        "FreeMarker templates for invoices, statements and packing documents",
        "Subsidiary-specific branding and logos",
        "Email attachment behavior that sends PDFs, not HTML"
      ]
    },
    {
      "id": "suitescript",
      "g": "build",
      "icon": "code",
      "title": "SuiteScript 2.1 development",
      "short": "Every script type, light on governance and safe from re-triggering itself.",
      "detail": [
        "User Event, Client, Suitelet, RESTlet, Scheduled, Map/Reduce, Mass Update and Workflow Action scripts",
        "Lightweight lookups and field updates instead of full record loads",
        "Code that never re-triggers itself"
      ]
    },
    {
      "id": "apps",
      "g": "build",
      "icon": "window",
      "title": "Custom apps inside NetSuite",
      "short": "Modern single-page tools in React and Bootstrap, served from Suitelets.",
      "detail": [
        "Dashboards and reporting hubs",
        "Data grids, wizards and admin consoles",
        "Kanban style work queues"
      ]
    },
    {
      "id": "finance",
      "g": "build",
      "icon": "ledger",
      "title": "Accounting and finance automation",
      "short": "Payroll, commission, settlements and journal entries that tie back to the ledger.",
      "detail": [
        "Custom payroll modules",
        "Commission and revenue share engines",
        "Settlements and automatic journal entries",
        "Intercompany flows, reconciliations and month-end reporting"
      ]
    },
    {
      "id": "ai",
      "g": "build",
      "icon": "scan",
      "title": "AI inside NetSuite workflows",
      "short": "Practical AI, such as reading item photos to pre-fill data entry.",
      "detail": [
        "Vision models that read item photos and pre-fill fields",
        "Behind RESTlets with proper queuing and error handling"
      ]
    },
    {
      "id": "integrations",
      "g": "connect",
      "icon": "link",
      "title": "Integrations and APIs",
      "short": "REST, SuiteQL over REST and RESTlets that keep working after go-live.",
      "detail": [
        "NetSuite REST web services, SuiteQL over REST, RESTlets",
        "Token-based authentication, integration records, concurrency planning",
        "Marketplace and connector integrations, order import queues",
        "Idempotent upserts with external ids and duplicate prevention"
      ]
    },
    {
      "id": "commerce",
      "g": "connect",
      "icon": "cart",
      "title": "SuiteCommerce Advanced, web stores and portals",
      "short": "Extensions, themes, My Account changes and secure customer portals.",
      "detail": [
        "SCA extensions and themes (Backbone, Handlebars, Sass)",
        "SuiteScript services and My Account customizations",
        "Secure customer and partner portals",
        "Site Management Tools, local development and staged deployments"
      ]
    },
    {
      "id": "migration",
      "g": "connect",
      "icon": "swap",
      "title": "Data migration and bulk data correction",
      "short": "Item consolidation, serial moves and bulk fixes with a dry run first.",
      "detail": [
        "Item master consolidation and serial and inventory moves",
        "CSV imports and Map/Reduce batch jobs",
        "Dry-run-first corrections with before snapshots",
        "Revert scripts and audit trails"
      ]
    },
    {
      "id": "troubleshooting",
      "g": "fix",
      "icon": "search",
      "title": "Troubleshooting and root-cause investigation",
      "short": "Rescue work on automations that stopped, duplicates and wrong numbers.",
      "detail": [
        "Automations that silently stopped and failed integrations",
        "Duplicate transactions and missing records",
        "Wrong numbers on reports",
        "A root cause with a confidence level"
      ]
    },
    {
      "id": "reporting",
      "g": "fix",
      "icon": "chart",
      "title": "Reporting and analytics",
      "short": "SuiteQL, saved searches and workbooks that reconcile to the ledger.",
      "detail": [
        "SuiteQL, saved searches and workbooks",
        "Location and subsidiary P&L, intercompany analysis",
        "Budget and P&L reviews, reconciliations against the general ledger",
        "Excel and Word deliverables for finance teams"
      ]
    },
    {
      "id": "design",
      "g": "fix",
      "icon": "clip",
      "title": "Solution design, fit-gap and UAT",
      "short": "Business requests turned into clear decisions, tests and guides.",
      "detail": [
        "Fit-gap analysis and written decision records",
        "Acceptance criteria and structured UAT with evidence",
        "User guides with annotated screenshots",
        "Runbooks and handover documents"
      ]
    },
    {
      "id": "takeover",
      "g": "fix",
      "icon": "key",
      "title": "Taking over existing customizations",
      "short": "Systems a previous developer or partner built, documented, fixed and extended.",
      "detail": [
        "Commission engines, payroll modules, integrations, portals and scripts",
        "The code and the data read, and how it really works written down",
        "Broken parts fixed and new features added safely",
        "Even when the original developer is no longer around"
      ]
    }
  ],
  "homeServices": [
    "integrations",
    "suitescript",
    "commerce",
    "finance",
    "takeover",
    "troubleshooting"
  ],
  "cats": [
    "Administration",
    "SuiteScript",
    "Integrations",
    "Commerce",
    "Data and Migration",
    "Accounting and Finance",
    "Reporting",
    "Investigations",
    "Takeover and Support",
    "DevOps"
  ],
  "cases": [
    {
      "slug": "commission-engine",
      "x": "commission",
      "cat": "Accounting and finance",
      "title": "Tiered commission and revenue share engine",
      "hook": "The same sale could pay out two different amounts. Now every system shows one number.",
      "context": "A business that splits every sale between several parties under contract terms, some flat and some tiered by price band.",
      "problem": "The fee and split rules were copied into three separate scripts, and two calculation engines disagreed on which price picks the tier, so the same sale could pay out differently depending on where it was calculated.",
      "did": "Rebuilt the rules as one shared library: a fee waterfall (marketplace, card and handling fees), tier selection by price band, contract term handling and the split between each party, with returns shown apart from sales. Covered the rules with automated tests at every tier boundary and surfaced the tier basis disagreement for finance to settle. The same library feeds journal entries, finance reports and the partner portal statements.",
      "tech": [
        "SuiteScript 2.1 library",
        "Map/Reduce",
        "Journal entries",
        "SuiteQL",
        "Jest"
      ],
      "outcome": "One set of rules, so finance, reports and the portal show the same number for every sale."
    },
    {
      "slug": "marketplace-duplicates",
      "x": "dupes",
      "cat": "Integrations",
      "title": "Marketplace order and customer duplicate prevention",
      "hook": "One order, sent twice, used to become two sales orders and two customers. Now it stays one.",
      "context": "A multi-subsidiary group selling on marketplaces.",
      "problem": "A marketplace integration created duplicate sales orders, and a marketplace connector created duplicate customers.",
      "did": "Traced the full path (producer, consumer, mapping records, sync queue) and found the race conditions. Designed idempotent imports keyed on external ids and a customer match on the marketplace user id within the selling subsidiary. Wrapped the vendor connector instead of editing it, so managed updates cannot undo the fix.",
      "tech": [
        "RESTlets",
        "Map/Reduce",
        "Custom records",
        "REST API",
        "SuiteQL"
      ],
      "outcome": "Duplicates stopped at the source instead of being cleaned up afterwards."
    },
    {
      "slug": "receiving-ai",
      "x": "receiving",
      "cat": "SuiteScript and AI",
      "title": "Warehouse receiving with AI-assisted data entry",
      "hook": "A photo goes in. A filled-in item receipt comes out.",
      "context": "A warehouse receiving and inspecting goods against purchase orders.",
      "problem": "Goods-in, inspection and data entry were manual, and item photos lived outside the ERP.",
      "did": "Built gateway and action RESTlets behind a receiving workspace: goods-in, final inspection and data entry steps, photo capture saved to the File Cabinet, a vision model that reads item photos and pre-fills attributes, and marketplace price lookups. Completing a step creates the item receipt on the purchase order. Added a write queue so parallel users cannot collide.",
      "tech": [
        "RESTlets",
        "N/https",
        "File Cabinet",
        "AI vision API",
        "Item receipts",
        "Saved searches"
      ],
      "outcome": "Faster, more consistent receiving with photos attached to the record."
    },
    {
      "slug": "midnight-orders",
      "x": "midnight",
      "cat": "Root-cause investigation",
      "title": "77 sales orders at midnight",
      "hook": "One night produced 77 single-unit sales orders. The cause was hiding in the clock.",
      "context": "An account taking orders around the clock.",
      "problem": "One night produced 77 single-unit sales orders.",
      "did": "Traced the orders through system notes and script logs to the root cause: server date versus local transaction date between midnight and 2 AM.",
      "tech": [
        "System notes",
        "Script logs",
        "SuiteScript 2.1",
        "Time zones"
      ],
      "outcome": "A proven root cause instead of a guess."
    }
  ],
  "order": [
    {
      "n": "Checkout",
      "what": "The customer pays on the web store. The order and the payment authorisation leave the store.",
      "build": "A webhook receiver and a RESTlet that checks the external ID before anything is created.",
      "t": "Example record: web store order",
      "id": "Order 5521",
      "st": "Paid",
      "f": [
        [
          "Source",
          "Web store"
        ],
        [
          "Payment",
          "Authorised"
        ],
        [
          "Next",
          "Sent to NetSuite"
        ]
      ]
    },
    {
      "n": "Sales order",
      "what": "NetSuite creates the sales order once, on the right subsidiary, with the right tax and pricing.",
      "build": "An idempotent upsert, subsidiary mapping and a user event that validates before save.",
      "t": "Example record: sales order",
      "id": "SO-10482",
      "st": "Pending fulfillment",
      "f": [
        [
          "External ID",
          "5521"
        ],
        [
          "Subsidiary",
          "Mapped from store"
        ],
        [
          "Created",
          "Exactly once"
        ]
      ]
    },
    {
      "n": "Fulfillment",
      "what": "The warehouse picks, packs and ships. Tracking and serial numbers come back to the order.",
      "build": "Fulfillment sync, serial capture and a branded packing slip template.",
      "t": "Example record: item fulfillment",
      "id": "IF-3317",
      "st": "Shipped",
      "f": [
        [
          "Created from",
          "SO-10482"
        ],
        [
          "Tracking",
          "Added to order"
        ],
        [
          "Serials",
          "Recorded"
        ]
      ]
    },
    {
      "n": "Invoice",
      "what": "The order is billed and the payment is applied without anyone keying it in.",
      "build": "Billing rules, an Advanced PDF invoice and automatic payment apply.",
      "t": "Example record: invoice",
      "id": "INV-8890",
      "st": "Paid in full",
      "f": [
        [
          "Created from",
          "SO-10482"
        ],
        [
          "Template",
          "Advanced PDF/HTML"
        ],
        [
          "Payment",
          "Applied"
        ]
      ]
    },
    {
      "n": "Ledger",
      "what": "Revenue, tax and cash post to the general ledger and show up in reporting the same day.",
      "build": "GL checks, a SuiteQL workbook and a reconciliation finance can trust.",
      "t": "Example record: GL impact",
      "id": "INV-8890",
      "st": "Posted",
      "f": [
        [
          "Debit",
          "Cash"
        ],
        [
          "Credit",
          "Revenue"
        ],
        [
          "Credit",
          "Sales tax"
        ]
      ]
    }
  ],
  "mysteries": [
    {
      "t": "Auto-approval that silently died",
      "p": "A 24-hour purchase order auto-approval stopped for one location.",
      "c": "An email sender change inside a workflow, found through workflow history and system notes."
    },
    {
      "t": "The missing RESTlet",
      "p": "A 404 that looked like missing code.",
      "c": "A deployment audience problem. Fixed in configuration, no code change."
    },
    {
      "t": "Payment button gaps",
      "p": "Some subsidiaries got a credit with no payment.",
      "c": "A prepayment button mapped bank accounts for only some subsidiaries."
    },
    {
      "t": "PDF arrives as HTML",
      "p": "Transaction emails attached HTML instead of PDF.",
      "c": "A per-user preference, not the template."
    }
  ],
  "tools": [
    "Script Hub: every script an employee owns",
    "Website re-posting tool",
    "Stock transfer tool",
    "Serial number detail",
    "Buyer data export"
  ],
  "steps": [
    {
      "t": "Discovery",
      "p": "We talk through the problem, I review your account and we agree what success looks like."
    },
    {
      "t": "Proposal",
      "p": "You get a clear plan with options, timeline and cost, in plain language."
    },
    {
      "t": "Build",
      "p": "I build and configure in your sandbox, never directly in your live account."
    },
    {
      "t": "Testing",
      "p": "We test together with real scenarios before anything goes live."
    },
    {
      "t": "Go-live and support",
      "p": "A planned release, then monitoring, training and ongoing support."
    }
  ],
  "receive": [
    "A working, tested solution in your account",
    "A short summary of what changed and why",
    "User guides with screenshots for your team",
    "Technical documentation for future maintenance",
    "A rollback plan for every release",
    "Regular progress updates while the work is under way"
  ],
  "promises": [
    "Nothing changes in your live account without your approval.",
    "Configuration first, custom code only when it is really needed.",
    "Your installed SuiteApps stay safe to upgrade.",
    "Every delivery comes with documentation."
  ],
  "engage": [
    {
      "t": "Hourly support",
      "p": "Quick fixes, questions and small changes."
    },
    {
      "t": "Fixed-scope projects",
      "p": "A defined outcome, timeline and price."
    },
    {
      "t": "Monthly retainer",
      "p": "Ongoing administration and development."
    },
    {
      "t": "Account health review",
      "p": "A short review with a prioritized list of fixes."
    }
  ],
  "faq": [
    {
      "q": "Do you work directly in production?",
      "a": "Only with explicit approval. I design and test in sandbox first."
    },
    {
      "q": "Can you take over code someone else wrote?",
      "a": "Yes, and it is a large part of my work. I read the code and the data, document how it really works, and extend it without breaking what depends on it, even when the original developer is no longer available."
    },
    {
      "q": "Do you only write code?",
      "a": "No. Many problems are solved faster with configuration, a saved search or a workflow, and I will tell you when that is the case."
    },
    {
      "q": "Can you work with my partner or internal team?",
      "a": "Yes, as an extra senior developer, architect or reviewer."
    },
    {
      "q": "Do you only work inside NetSuite?",
      "a": "No. I work across your connected systems, such as your web store, CRM, shipping, payments and Microsoft 365, and I bring in trusted third-party tools when they fit better than custom work."
    },
    {
      "q": "How do you access our systems?",
      "a": "Through user accounts and integration roles that you create and control, starting in sandbox. You can review or remove access at any time."
    },
    {
      "q": "What do I get at the end?",
      "a": "Working changes, tests, documentation and a clear summary of what changed, the evidence, any remaining risk and next steps."
    }
  ],
  "arch": [
    {
      "t": "Account architecture",
      "p": "OneWorld subsidiary structure, chart of accounts, classes, departments and locations, intercompany flows, multi-currency and consolidation."
    },
    {
      "t": "Access design",
      "p": "Roles and permissions built on least privilege and segregation of duties."
    },
    {
      "t": "Integration architecture",
      "p": "Real-time RESTlets and REST web services versus scheduled batches, middleware versus direct connections, queues and retries, idempotent upserts with external ids, error monitoring, concurrency and governance planning."
    },
    {
      "t": "Data architecture",
      "p": "Custom record models, SuiteQL reporting layers, warehouse feeds through SuiteAnalytics Connect, single source of truth design."
    },
    {
      "t": "Application architecture",
      "p": "Single-page apps inside Suitelets, RESTlet back ends, external web apps that work with NetSuite securely."
    },
    {
      "t": "Security architecture",
      "p": "OAuth 2.0 and token-based authentication, dedicated integration roles, signed short-lived links for private files, safe handling of secrets."
    },
    {
      "t": "Cloud architecture",
      "p": "Companion services on Microsoft Azure (App Service, Functions, Static Web Apps, Key Vault) around NetSuite."
    },
    {
      "t": "Release architecture",
      "p": "Sandbox strategy, SDF projects, CI/CD, rollback plans and readiness for the two NetSuite releases each year."
    }
  ],
  "areas": [
    {
      "t": "Financials",
      "i": [
        "General ledger",
        "AP",
        "AR",
        "Bank reconciliation",
        "Fixed assets",
        "Revenue recognition",
        "Budgets",
        "Allocations",
        "Multi-book",
        "Consolidation",
        "Period close"
      ]
    },
    {
      "t": "Order to cash",
      "i": [
        "Quotes",
        "Sales orders",
        "Fulfillment",
        "Invoicing",
        "Returns and RMAs",
        "Credit",
        "Collections",
        "Customer statements"
      ]
    },
    {
      "t": "Procure to pay",
      "i": [
        "Requisitions",
        "Purchase orders",
        "Approvals",
        "Receiving",
        "Vendor bills",
        "Prepayments",
        "Payments"
      ]
    },
    {
      "t": "Inventory and warehouse",
      "i": [
        "Item types",
        "Serial and lot numbers",
        "Bins",
        "Locations",
        "Transfers",
        "Adjustments",
        "Assemblies",
        "Work orders",
        "Advanced Inventory",
        "WMS"
      ]
    },
    {
      "t": "CRM and support",
      "i": [
        "Leads",
        "Opportunities",
        "Campaigns",
        "Cases",
        "Support queues"
      ]
    },
    {
      "t": "E-commerce",
      "i": [
        "SuiteCommerce",
        "SuiteCommerce Advanced",
        "My Account",
        "B2B portals",
        "Marketplace selling"
      ]
    },
    {
      "t": "People",
      "i": [
        "Employees",
        "Time",
        "Custom payroll rules",
        "Approvals"
      ]
    },
    {
      "t": "Reporting",
      "i": [
        "Saved searches",
        "Workbooks",
        "KPI dashboards",
        "Portlets",
        "Financial reports"
      ]
    },
    {
      "t": "Licensed modules, when you have them",
      "i": [
        "SuiteBilling",
        "SuiteProjects",
        "Advanced Manufacturing",
        "Demand Planning",
        "SuiteTax",
        "Electronic Bank Payments"
      ]
    }
  ],
  "finmods": [
    {
      "t": "Payroll",
      "p": "Salaried, hourly and salary plus hourly pay rules, time entry, approval status flow, pay period summaries, admin controls and payroll reporting."
    },
    {
      "t": "Commission and revenue share",
      "p": "Tiered rates by price band, flat or percentage splits between several parties, a fee waterfall before the split, returns shown apart, statements and payout tracking."
    },
    {
      "t": "Settlements",
      "p": "Share for each party, expenses, payments and amount due, with settlement statements and a self-service portal."
    },
    {
      "t": "Journal entry automation",
      "p": "Entries created from transactions, reclassifications, fee recalculations and accruals, with a safety net for any line the automation missed."
    },
    {
      "t": "Intercompany",
      "p": "Sales between subsidiaries, reclassification entries and reporting with intercompany taken out."
    },
    {
      "t": "Reconciliation",
      "p": "Subledger to general ledger, bank, and liability accounts such as amounts owed to partners or sellers."
    },
    {
      "t": "Month-end close support",
      "p": "Recurring entries, location and subsidiary P&L, budget versus actual, variance analysis and review packs."
    },
    {
      "t": "Payables and receivables",
      "p": "Vendor prepayments, bill credits, payment runs, customer statements and collections."
    }
  ],
  "systems": [
    {
      "t": "E-commerce and marketplaces",
      "k": "Commerce",
      "i": [
        "Shopify",
        "BigCommerce",
        "WooCommerce",
        "Amazon",
        "eBay",
        "Walmart"
      ]
    },
    {
      "t": "CRM and marketing",
      "k": "CRM",
      "i": [
        "Salesforce",
        "HubSpot"
      ]
    },
    {
      "t": "Payments and tax",
      "k": "Payments",
      "i": [
        "Stripe",
        "PayPal",
        "Avalara"
      ]
    },
    {
      "t": "Shipping and logistics",
      "k": "Shipping",
      "i": [
        "UPS",
        "FedEx",
        "ShipStation",
        "Third-party warehouses",
        "EDI trading partners"
      ]
    },
    {
      "t": "Microsoft 365",
      "k": "Microsoft 365",
      "i": [
        "Outlook",
        "Teams",
        "SharePoint",
        "Excel",
        "Microsoft Graph"
      ]
    },
    {
      "t": "Work management",
      "k": "Work tools",
      "i": [
        "ClickUp",
        "Jira"
      ]
    },
    {
      "t": "Business intelligence",
      "k": "BI",
      "i": [
        "Power BI",
        "Data warehouses"
      ]
    },
    {
      "t": "AI services",
      "k": "AI",
      "i": [
        "Document reading",
        "Assisted data entry",
        "Smart search"
      ]
    },
    {
      "t": "Middleware",
      "k": "Middleware",
      "i": [
        "Celigo",
        "Boomi",
        "Workato",
        "Light custom Node.js services"
      ]
    }
  ],
  "beyond": [
    "Full-stack web apps: React, TypeScript, Node.js, Express",
    "Python for data work, reconciliation and automation",
    "PostgreSQL, SQL Server, MySQL",
    "Microsoft Azure, GitHub Actions, Docker",
    "Word, Excel and PDF reports from live data",
    "Command line tools, scheduled jobs and browser testing"
  ],
  "etypes": [
    {
      "t": "New implementation",
      "p": "Discovery, design, configuration, data migration, integrations, UAT, training, cutover and hypercare."
    },
    {
      "t": "Migration to NetSuite",
      "p": "From QuickBooks, Sage, spreadsheets or a legacy ERP."
    },
    {
      "t": "Rescue and stabilization",
      "p": "A troubled account or a stalled implementation brought back under control."
    },
    {
      "t": "Account health audit",
      "p": "Scripts, workflows, permissions, performance, unused customizations and license fit."
    },
    {
      "t": "Managed services",
      "p": "Ongoing administration and development on a monthly retainer."
    },
    {
      "t": "Team support",
      "p": "Code and architecture reviews, technical interviews for NetSuite hires, mentoring."
    },
    {
      "t": "Third-party solutions",
      "p": "Choosing, setting up and integrating the right SuiteApp, connector or external tool."
    }
  ],
  "skills": [
    {
      "t": "NetSuite platform",
      "i": [
        "OneWorld multi-subsidiary",
        "Intercompany",
        "Roles and permissions",
        "Custom records and fields",
        "Forms",
        "SuiteFlow",
        "Saved searches",
        "Workbooks",
        "CSV import",
        "Mass Update",
        "Advanced PDF/HTML",
        "File Cabinet",
        "Bundles and SuiteApps",
        "Sandbox management"
      ]
    },
    {
      "t": "SuiteScript",
      "i": [
        "SuiteScript 2.1, all script types",
        "SuiteScript 1.0 and 2.0 for SuiteCommerce",
        "N/search",
        "N/query",
        "N/record",
        "N/https",
        "N/runtime",
        "N/file",
        "N/task",
        "Governance and performance tuning"
      ]
    },
    {
      "t": "Data",
      "i": [
        "SuiteQL",
        "Saved search formulas",
        "REST record API",
        "Metadata catalog",
        "Data modeling",
        "Reconciliation against the ledger"
      ]
    },
    {
      "t": "Commerce",
      "i": [
        "SuiteCommerce Advanced",
        "Extensions",
        "Themes",
        "Backbone",
        "Handlebars",
        "Sass",
        ".ss services",
        "Site Management Tools",
        "gulp tooling"
      ]
    },
    {
      "t": "Front end",
      "i": [
        "React",
        "Bootstrap",
        "Tailwind CSS",
        "Vite",
        "HTML",
        "CSS",
        "JavaScript"
      ]
    },
    {
      "t": "Back end and tooling",
      "i": [
        "Node.js",
        "Express",
        "REST APIs",
        "OAuth and token-based auth",
        "Command line tooling"
      ]
    },
    {
      "t": "DevOps and quality",
      "i": [
        "SDF",
        "Git",
        "GitHub",
        "CI/CD pipelines",
        "Jest",
        "Automated testing",
        "Code reviews",
        "Coding standards"
      ]
    },
    {
      "t": "Cloud and productivity",
      "i": [
        "Microsoft Azure",
        "Microsoft Graph",
        "ClickUp API",
        "Excel",
        "Word"
      ]
    },
    {
      "t": "Also",
      "i": [
        "Python",
        "TypeScript",
        "PostgreSQL",
        "SQL Server",
        "Docker",
        "GitHub Actions",
        "Power BI"
      ]
    },
    {
      "t": "Business processes",
      "i": [
        "Order to cash",
        "Procure to pay",
        "Receiving and inspection",
        "Serial inventory",
        "Settlements",
        "Intercompany sales",
        "Payroll",
        "Commission and revenue share",
        "Journal entry automation",
        "Reconciliation",
        "Month-end close",
        "Marketplace selling",
        "Support cases"
      ]
    }
  ],
  "posts": [
    {
      "slug": "sdf-deploy",
      "tag": "SDF",
      "t": "A full SDF deploy can silently switch off your scheduled scripts",
      "s": "A project deploy can reset a scheduled deployment to not scheduled. Nothing errors, the automation just stops. How to spot it before and after a release."
    },
    {
      "slug": "auth-errors",
      "tag": "Permissions",
      "t": "A 401 or 403 is a permission problem, never feature off",
      "s": "Auth errors from REST and RESTlets point at roles and tokens. Chasing feature settings wastes the day."
    },
    {
      "slug": "feature-check",
      "tag": "Features",
      "t": "Why runtime.isFeatureInEffect returning false proves nothing",
      "s": "A false can come from the context running the check, not the account. Treat a true as proof and a false as a question."
    },
    {
      "slug": "lookup-fields",
      "tag": "Performance",
      "t": "lookupFields and submitFields versus record.load and save: three to ten times cheaper",
      "s": "Loading a whole record to read two fields burns governance. The lighter calls do the same job for a fraction of the cost."
    },
    {
      "slug": "workflow-action",
      "tag": "Workflows",
      "t": "Never save the record inside a Workflow Action Script",
      "s": "The workflow saves the record for you. Saving it again inside the action invites loops and lost changes."
    },
    {
      "slug": "result-caps",
      "tag": "Searches",
      "t": "Search result caps fail silently: aggregate, do not enumerate",
      "s": "When a search hits its result limit, nothing warns you. Summing in the query keeps totals right at any volume."
    },
    {
      "slug": "concurrency",
      "tag": "Integrations",
      "t": "Integration concurrency limits reserve slots, they do not add capacity",
      "s": "Assigning concurrency to one integration takes slots away from everything else. Plan the total before you split it."
    },
    {
      "slug": "restlet-404",
      "tag": "RESTlets",
      "t": "Your RESTlet 404 might be a deployment audience problem",
      "s": "A 404 that looks like missing code is often a role missing from the deployment audience. A configuration fix, not a code fix."
    },
    {
      "slug": "midnight",
      "tag": "Dates",
      "t": "Midnight time zone traps: server date versus transaction date",
      "s": "Between midnight and 2 AM, server time and local transaction dates disagree. One night that produced 77 orders is why I check this first."
    },
    {
      "slug": "swallowed-errors",
      "tag": "Errors",
      "t": "Swallowed errors in afterSubmit: how records silently go missing",
      "s": "A catch block that logs nothing hides every failure. Records go missing and nobody hears about it."
    },
    {
      "slug": "config-first",
      "tag": "Approach",
      "t": "Configuration before code: when a custom script is really worth it",
      "s": "Most requests are solved by a setting, a saved search or a workflow. When a script truly pays for itself, and when it does not."
    },
    {
      "slug": "wrap-not-fork",
      "tag": "SuiteApps",
      "t": "Wrap, do not fork: living safely with SuiteApps",
      "s": "Editing a SuiteApp means the next managed update can undo your fix. Wrapping it keeps both working."
    }
  ],
  "agency": {
    "terms": [
      {
        "i": "key",
        "t": "NDA first"
      },
      {
        "i": "branch",
        "t": "Your tools and repos"
      },
      {
        "i": "flag",
        "t": "Your name on the work"
      },
      {
        "i": "user",
        "t": "The client stays yours"
      }
    ],
    "steps": [
      "NDA signed",
      "Access in your tools",
      "Build in sandbox",
      "Delivered under your name"
    ],
    "take": [
      {
        "i": "code",
        "t": "SuiteScript builds"
      },
      {
        "i": "link",
        "t": "Integrations"
      },
      {
        "i": "cart",
        "t": "SuiteCommerce"
      },
      {
        "i": "key",
        "t": "Rescue and takeovers"
      },
      {
        "i": "search",
        "t": "Code and design reviews"
      },
      {
        "i": "layers",
        "t": "Overflow capacity"
      }
    ],
    "ways": [
      "Per project",
      "Hourly overflow",
      "Monthly capacity block"
    ]
  },
  "bio": [
    "I am a NetSuite solution architect and technical consultant. I work across the whole account: administration, SuiteScript, integrations, web stores, finance systems and reporting. When a request comes in, I look at what NetSuite can already do before I suggest building anything new, and I go by what the account shows rather than by assumptions.",
    "Most of my work has been inside multi-subsidiary businesses that run distribution, refurbishment, marketplace selling and e-commerce on one NetSuite OneWorld account. That means real volume, several subsidiaries, intercompany flows and finance teams who need numbers they can defend.",
    "The range is wide on purpose. In one month I might set up roles and forms, write a Map/Reduce script, fix an integration, extend a SuiteCommerce Advanced store, build a payroll or commission module, or take over a system someone else built and make it safe to change. I also write the user guides and train the people who use what I build.",
    "Many of the people I work with are not technical: controllers, operations leads and owners. I explain the options in plain language, show what each one costs in time and risk, and keep everyone updated until the work is live and settled."
  ]
} as const;

export type Site = typeof site;
export type Case = Site["cases"][number];
export type Service = Site["services"][number];

export const contact = {
  email: "dilalipk@gmail.com",
  fiverr: "https://www.fiverr.com/users/dilali1",
} as const;
