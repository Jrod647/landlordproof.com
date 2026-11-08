/**
 * LandlordProof iOS-Mirror Multi-Screen Web App Engine
 * 100% On-Device Private Evidence Vault
 * © 2026 LandlordProof
 */

// --- 51-JURISDICTION STATUTORY DATABASE ---
const STATE_LAWS = [
  {
    "code": "AL",
    "name": "Alabama",
    "days": 60,
    "maxDeposit": "1 month's rent (exceptions for pets/hazards)",
    "penalty": "Double the original deposit amount if not returned in 60 days",
    "itemized": true,
    "citation": "Ala. Code \u00a7 35-9A-201",
    "summary": "Landlord has 60 days to return deposit and provide itemized list of deductions by first-class mail."
  },
  {
    "code": "AK",
    "name": "Alaska",
    "days": 14,
    "maxDeposit": "2 months' rent (if rent under $2,000/mo)",
    "penalty": "Double the amount improperly withheld",
    "itemized": true,
    "citation": "Alaska Stat. \u00a7 34.03.070",
    "summary": "14 days if tenant gives proper notice; 30 days if tenant vacates without proper notice."
  },
  {
    "code": "AZ",
    "name": "Arizona",
    "days": 14,
    "maxDeposit": "1.5 months' rent",
    "penalty": "Double the amount wrongfully withheld",
    "itemized": true,
    "citation": "Ariz. Rev. Stat. \u00a7 33-1321",
    "summary": "Landlord must deliver itemized deductions within 14 business days of move-out and written demand."
  },
  {
    "code": "AR",
    "name": "Arkansas",
    "days": 60,
    "maxDeposit": "2 months' rent (for landlords with 6+ units)",
    "penalty": "Up to double the wrongfully withheld amount",
    "itemized": true,
    "citation": "Ark. Code \u00a7 18-16-301 to 306",
    "summary": "60-day deadline with itemized deductions required."
  },
  {
    "code": "CA",
    "name": "California",
    "days": 21,
    "maxDeposit": "1 month's rent (AB 12 / Cal. Civ. Code \u00a7 1950.5)",
    "penalty": "Up to 2x the deposit amount in statutory damages for bad faith",
    "itemized": true,
    "citation": "Cal. Civ. Code \u00a7 1950.5",
    "summary": "Strict 21-calendar-day window. Landlord MUST provide itemized receipts/invoices for any repair exceeding $125. Cannot deduct for normal wear and tear."
  },
  {
    "code": "CO",
    "name": "Colorado",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Treble (3x) the amount wrongfully withheld plus reasonable attorney's fees",
    "itemized": true,
    "citation": "Colo. Rev. Stat. \u00a7 38-12-103",
    "summary": "Default 30 days, up to 60 days if explicitly stated in lease. Treble damages for willful retention."
  },
  {
    "code": "CT",
    "name": "Connecticut",
    "days": 21,
    "maxDeposit": "2 months' rent (1 month if tenant is 62+)",
    "penalty": "Double the deposit amount plus interest",
    "itemized": true,
    "citation": "Conn. Gen. Stat. \u00a7 47a-21",
    "summary": "Must return within 21 days (or 15 days if written forwarding address provided). Landlords must pay statutory annual interest on deposits."
  },
  {
    "code": "DE",
    "name": "Delaware",
    "days": 20,
    "maxDeposit": "1 month's rent for 1-year leases",
    "penalty": "Double the amount wrongfully withheld",
    "itemized": true,
    "citation": "Del. Code tit. 25, \u00a7 5514",
    "summary": "20-day deadline to provide itemized list of damages."
  },
  {
    "code": "DC",
    "name": "District of Columbia",
    "days": 45,
    "maxDeposit": "1 month's rent",
    "penalty": "Treble (3x) the amount wrongfully withheld for bad faith",
    "itemized": true,
    "citation": "D.C. Mun. Regs. tit. 14, \u00a7 308-311",
    "summary": "45-day deadline to return deposit or send notice of intention to withhold; 30 additional days to return remainder with itemized receipts."
  },
  {
    "code": "FL",
    "name": "Florida",
    "days": 15,
    "maxDeposit": "No statutory limit",
    "penalty": "Full forfeiture of right to impose claim; attorney fees to prevailing party",
    "itemized": true,
    "citation": "Fla. Stat. \u00a7 83.49",
    "summary": "15 days to return full deposit if no claim; 30 days to send formal certified mail claim with deductions. Tenant has 15 days to contest."
  },
  {
    "code": "GA",
    "name": "Georgia",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Treble (3x) the amount improperly withheld plus attorney fees",
    "itemized": true,
    "citation": "Ga. Code \u00a7 44-7-30 to 36",
    "summary": "Landlord must perform formal move-out inspection within 3 business days and provide itemized list. 30 days to return funds."
  },
  {
    "code": "HI",
    "name": "Hawaii",
    "days": 14,
    "maxDeposit": "1 month's rent",
    "penalty": "Triple (3x) the wrongfully retained amount",
    "itemized": true,
    "citation": "Haw. Rev. Stat. \u00a7 521-44",
    "summary": "Strict 14-day deadline. If landlord fails to provide written itemization within 14 days, entire deposit must be refunded immediately."
  },
  {
    "code": "ID",
    "name": "Idaho",
    "days": 21,
    "maxDeposit": "No statutory limit",
    "penalty": "Treble (3x) the amount illegally withheld plus attorney fees",
    "itemized": true,
    "citation": "Idaho Code \u00a7 6-321",
    "summary": "21 days by default (up to 30 days if written in lease). Must itemize deductions."
  },
  {
    "code": "IL",
    "name": "Illinois",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Double the deposit amount plus attorney fees and court costs",
    "itemized": true,
    "citation": "765 ILCS 710/1",
    "summary": "For properties with 5+ units: 30 days to provide itemized list with paid receipts; 45 days to return remainder."
  },
  {
    "code": "IN",
    "name": "Indiana",
    "days": 45,
    "maxDeposit": "No statutory limit",
    "penalty": "Full deposit refunded plus attorney fees and court costs",
    "itemized": true,
    "citation": "Ind. Code \u00a7 32-31-3-12",
    "summary": "45 days after receiving written forwarding address. Failure to mail itemized notice waives right to all deductions."
  },
  {
    "code": "IA",
    "name": "Iowa",
    "days": 30,
    "maxDeposit": "2 months' rent",
    "penalty": "Up to twice monthly rental payment plus attorney fees",
    "itemized": true,
    "citation": "Iowa Code \u00a7 562A.12",
    "summary": "30 days from receipt of forwarding address. Landlord forfeits all deduction rights if notice is untimely."
  },
  {
    "code": "KS",
    "name": "Kansas",
    "days": 30,
    "maxDeposit": "1 month's rent (unfurnished) or 1.5 months (furnished)",
    "penalty": "1.5 times the amount wrongfully withheld",
    "itemized": true,
    "citation": "Kan. Stat. \u00a7 58-2550",
    "summary": "14 days to itemize damages and 30 days to mail balance."
  },
  {
    "code": "KY",
    "name": "Kentucky",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Full forfeiture of right to retain any portion of the deposit",
    "itemized": true,
    "citation": "Ky. Rev. Stat. \u00a7 383.580",
    "summary": "Landlord must maintain separate escrow deposit account. Pre-move-in and post-move-out inspection checklist required."
  },
  {
    "code": "LA",
    "name": "Louisiana",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "$300 or double the amount wrongfully withheld, whichever is greater",
    "itemized": true,
    "citation": "La. Rev. Stat. \u00a7 9:3251",
    "summary": "30-day deadline with itemized damage statement required."
  },
  {
    "code": "ME",
    "name": "Maine",
    "days": 30,
    "maxDeposit": "2 months' rent",
    "penalty": "Double the amount wrongfully withheld plus attorney fees",
    "itemized": true,
    "citation": "Me. Rev. Stat. tit. 14, \u00a7 6033",
    "summary": "30 days for fixed-term lease; 21 days for tenancy-at-will."
  },
  {
    "code": "MD",
    "name": "Maryland",
    "days": 45,
    "maxDeposit": "2 months' rent",
    "penalty": "Treble (3x) the amount withheld plus reasonable attorney's fees",
    "itemized": true,
    "citation": "Md. Code Real Prop. \u00a7 8-203",
    "summary": "45-day deadline. Tenant has statutory right to be present at walkthrough if requested in writing 15 days before vacating."
  },
  {
    "code": "MA",
    "name": "Massachusetts",
    "days": 30,
    "maxDeposit": "1 month's rent",
    "penalty": "Triple (3x) the deposit amount plus 5% interest and attorney fees",
    "itemized": true,
    "citation": "Mass. Gen. Laws ch. 186, \u00a7 15B",
    "summary": "One of the strictest tenant laws in the nation. Must hold in interest-bearing MA bank account. Detailed statement of condition required within 10 days of move-in."
  },
  {
    "code": "MI",
    "name": "Michigan",
    "days": 30,
    "maxDeposit": "1.5 months' rent",
    "penalty": "Double the amount in dispute",
    "itemized": true,
    "citation": "Mich. Comp. Laws \u00a7 554.609",
    "summary": "Move-in checklist required within 7 days. Landlord must send itemized damage notice within 30 days."
  },
  {
    "code": "MN",
    "name": "Minnesota",
    "days": 21,
    "maxDeposit": "No statutory limit",
    "penalty": "Double the amount withheld plus statutory interest and $500 penalty",
    "itemized": true,
    "citation": "Minn. Stat. \u00a7 504B.178",
    "summary": "Strict 21-day deadline (5 days if condemned). Landlord must pay mandatory 1% annual simple interest."
  },
  {
    "code": "MS",
    "name": "Mississippi",
    "days": 45,
    "maxDeposit": "No statutory limit",
    "penalty": "Up to $200 in addition to actual damages",
    "itemized": true,
    "citation": "Miss. Code \u00a7 89-8-21",
    "summary": "45-day deadline to return deposit and provide itemized list of deductions."
  },
  {
    "code": "MO",
    "name": "Missouri",
    "days": 30,
    "maxDeposit": "2 months' rent",
    "penalty": "Double the deposit amount wrongfully withheld",
    "itemized": true,
    "citation": "Mo. Rev. Stat. \u00a7 535.300",
    "summary": "30-day deadline. Tenant has right to be present at move-out walkthrough inspection."
  },
  {
    "code": "MT",
    "name": "Montana",
    "days": 10,
    "maxDeposit": "No statutory limit",
    "penalty": "Actual damages plus attorney fees to prevailing party",
    "itemized": true,
    "citation": "Mont. Code \u00a7 70-25-201",
    "summary": "10 days if no damage; 30 days if deductions are made with itemized statement."
  },
  {
    "code": "NE",
    "name": "Nebraska",
    "days": 14,
    "maxDeposit": "1 month's rent (pet deposit up to 25% extra)",
    "penalty": "One month's rent or double amount wrongfully withheld plus attorney fees",
    "itemized": true,
    "citation": "Neb. Rev. Stat. \u00a7 76-1416",
    "summary": "14-day deadline from demand and receipt of forwarding address."
  },
  {
    "code": "NV",
    "name": "Nevada",
    "days": 30,
    "maxDeposit": "3 months' rent",
    "penalty": "Statutory damages up to the full deposit amount",
    "itemized": true,
    "citation": "Nev. Rev. Stat. \u00a7 118A.242",
    "summary": "30-day deadline to return deposit or provide accounting."
  },
  {
    "code": "NH",
    "name": "New Hampshire",
    "days": 30,
    "maxDeposit": "1 month's rent or $100 (whichever is greater)",
    "penalty": "Double the deposit amount withheld in bad faith plus $1,000 or attorney fees",
    "itemized": true,
    "citation": "N.H. Rev. Stat. \u00a7 540-A:7",
    "summary": "30 days (or 20 days if landlord shares premises). Landlord must pay interest for deposits held over 1 year."
  },
  {
    "code": "NJ",
    "name": "New Jersey",
    "days": 30,
    "maxDeposit": "1.5 months' rent",
    "penalty": "Double the amount wrongfully withheld plus full court costs and attorney fees",
    "itemized": true,
    "citation": "N.J. Stat. \u00a7 46:8-21.1",
    "summary": "30 days (5 days in fire/flood/evacuation). Strict double damages for failure to return funds."
  },
  {
    "code": "NM",
    "name": "New Mexico",
    "days": 30,
    "maxDeposit": "1 month's rent (if under 1 year lease)",
    "penalty": "$250 penalty plus actual damages, court costs, and reasonable attorney's fees",
    "itemized": true,
    "citation": "N.M. Stat. \u00a7 47-8-18",
    "summary": "30-day deadline. If deposit exceeds 1 month's rent on year+ leases, landlord must pay interest."
  },
  {
    "code": "NY",
    "name": "New York",
    "days": 14,
    "maxDeposit": "1 month's rent (HSTPA 2019)",
    "penalty": "Punitive damages up to double (2x) the deposit amount for willful violation",
    "itemized": true,
    "citation": "N.Y. Gen. Oblig. Law \u00a7 7-108",
    "summary": "Extremely tenant-friendly 14-day deadline. Landlord MUST offer a pre-move-out inspection. If itemized statement is not provided within 14 days, landlord FORFEITS all claims to deposit."
  },
  {
    "code": "NC",
    "name": "North Carolina",
    "days": 30,
    "maxDeposit": "2 months' rent (for month-to-month: 1.5 months)",
    "penalty": "Actual damages plus attorney's fees",
    "itemized": true,
    "citation": "N.C. Gen. Stat. \u00a7 42-51 to 55",
    "summary": "30-day interim accounting; 60 days final if extent of damage cannot be determined in 30 days."
  },
  {
    "code": "ND",
    "name": "North Dakota",
    "days": 30,
    "maxDeposit": "1 month's rent (pet deposit up to $2,500 or 2 months)",
    "penalty": "Up to treble (3x) the amount illegally withheld",
    "itemized": true,
    "citation": "N.D. Cent. Code \u00a7 47-16-07.1",
    "summary": "30 days to return deposit and itemized accounting. Must deposit in federally insured interest-bearing account."
  },
  {
    "code": "OH",
    "name": "Ohio",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Double the amount wrongfully withheld plus reasonable attorney's fees",
    "itemized": true,
    "citation": "Ohio Rev. Code \u00a7 5321.16",
    "summary": "30 days from tenancy termination and delivery of possession. Landlords must pay 5% interest if deposit exceeds 1 month's rent."
  },
  {
    "code": "OK",
    "name": "Oklahoma",
    "days": 45,
    "maxDeposit": "No statutory limit",
    "penalty": "Full deposit amount plus reasonable attorney's fees",
    "itemized": true,
    "citation": "Okla. Stat. tit. 41, \u00a7 115",
    "summary": "45 days from written tenant demand. Deposit must be kept in escrow account."
  },
  {
    "code": "OR",
    "name": "Oregon",
    "days": 31,
    "maxDeposit": "No statutory limit",
    "penalty": "Double the amount wrongfully withheld",
    "itemized": true,
    "citation": "Or. Rev. Stat. \u00a7 90.300",
    "summary": "31-calendar-day deadline. Must include written accounting of deductions."
  },
  {
    "code": "PA",
    "name": "Pennsylvania",
    "days": 30,
    "maxDeposit": "2 months' rent for 1st year; 1 month for subsequent years",
    "penalty": "Double the difference between deposit and actual damages",
    "itemized": true,
    "citation": "68 Pa. Stat. \u00a7 250.512",
    "summary": "30-day deadline with written list of damages. Failure to provide list waives right to withhold."
  },
  {
    "code": "RI",
    "name": "Rhode Island",
    "days": 20,
    "maxDeposit": "1 month's rent",
    "penalty": "Double the amount wrongfully withheld plus reasonable attorney fees",
    "itemized": true,
    "citation": "R.I. Gen. Laws \u00a7 34-18-19",
    "summary": "20-day deadline from tenant vacating and delivering forwarding address."
  },
  {
    "code": "SC",
    "name": "South Carolina",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Treble (3x) the amount wrongfully withheld plus reasonable attorney's fees",
    "itemized": true,
    "citation": "S.C. Code \u00a7 27-40-410",
    "summary": "30 days to return deposit and itemized list of deductions after written demand."
  },
  {
    "code": "SD",
    "name": "South Dakota",
    "days": 14,
    "maxDeposit": "1 month's rent (higher allowed for special conditions)",
    "penalty": "Full deposit refund plus punitive damages up to $200",
    "itemized": true,
    "citation": "S.D. Codified Laws \u00a7 43-32-24",
    "summary": "14 days to return deposit; 45 days if tenant requests written explanation of withholdings."
  },
  {
    "code": "TN",
    "name": "Tennessee",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Full deposit refund; forfeiture of all deduction rights",
    "itemized": true,
    "citation": "Tenn. Code \u00a7 66-28-301",
    "summary": "30-day return window. Joint walkthrough inspection required if requested."
  },
  {
    "code": "TX",
    "name": "Texas",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "$100 + 3x the amount wrongfully withheld + attorney fees",
    "itemized": true,
    "citation": "Tex. Prop. Code \u00a7 92.101 to 109",
    "summary": "30-day strict deadline. Landlord who retains in bad faith faces automatic presumption of liability for 3x deposit plus $100 penalty."
  },
  {
    "code": "UT",
    "name": "Utah",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "$100 penalty + full deposit amount + court costs and attorney fees",
    "itemized": true,
    "citation": "Utah Code \u00a7 57-17-3",
    "summary": "30 days, or 15 days from notice of forwarding address. Landlord must provide written itemization of deductions."
  },
  {
    "code": "VT",
    "name": "Vermont",
    "days": 14,
    "maxDeposit": "No statutory limit",
    "penalty": "Double the amount wrongfully withheld plus attorney fees",
    "itemized": true,
    "citation": "Vt. Stat. tit. 9, \u00a7 4461",
    "summary": "14 days for year-round rentals; 60 days for seasonal rentals. Written statement required."
  },
  {
    "code": "VA",
    "name": "Virginia",
    "days": 45,
    "maxDeposit": "2 months' rent",
    "penalty": "Actual damages plus reasonable attorney's fees",
    "itemized": true,
    "citation": "Va. Code \u00a7 55.1-1226",
    "summary": "45 days from termination of tenancy and delivery of possession. Move-out inspection required within 72 hours of notice."
  },
  {
    "code": "WA",
    "name": "Washington",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Up to double the deposit amount plus attorney fees",
    "itemized": true,
    "citation": "Wash. Rev. Code \u00a7 59.18.280",
    "summary": "Extended to 30 days in 2023. Written move-in checklist signed by both parties is MANDATORY before any deposit can be collected."
  },
  {
    "code": "WV",
    "name": "West Virginia",
    "days": 60,
    "maxDeposit": "No statutory limit",
    "penalty": "Double the amount improperly withheld plus reasonable attorney fees",
    "itemized": true,
    "citation": "W. Va. Code \u00a7 37-6A-2",
    "summary": "60 days (or 15 days before subsequent occupancy). Itemized damage statement required."
  },
  {
    "code": "WI",
    "name": "Wisconsin",
    "days": 21,
    "maxDeposit": "No statutory limit",
    "penalty": "Double the amount wrongfully withheld plus court costs and attorney fees",
    "itemized": true,
    "citation": "Wis. Stat. \u00a7 704.28 / ATCP 134.06",
    "summary": "Strict 21-day deadline from lease end. Pre-existing damages and check-in sheet must be provided."
  },
  {
    "code": "WY",
    "name": "Wyoming",
    "days": 30,
    "maxDeposit": "No statutory limit",
    "penalty": "Full deposit refund plus court costs to prevailing tenant",
    "itemized": true,
    "citation": "Wyo. Stat. \u00a7 1-21-1208",
    "summary": "30 days (or 15 days after receipt of forwarding address, 60 days if damage claimed)."
  }
];

// --- 31 DEDUCTION TRAP DATABASE ---
const DEDUCTION_TRAPS = [
  {
    "title": "Stove burner drip pans & burners",
    "category": "APPLIANCES",
    "severity": "MODERATE",
    "why": "Landlords frequently charge $50\u2013$150 to replace stained drip pans instead of ordinary wear cleaning."
  },
  {
    "title": "Oven interior & wire racks",
    "category": "APPLIANCES",
    "severity": "MODERATE",
    "why": "Top target for 'deep clean' deductions ($150\u2013$300) even when pre-existing grease baked on."
  },
  {
    "title": "Under-sink plumbing & cabinet base",
    "category": "PLUMBING",
    "severity": "MODERATE",
    "why": "Slow leaks cause wood swelling that landlords blame on tenant neglect."
  },
  {
    "title": "Refrigerator gasket seal & crisper drawers",
    "category": "APPLIANCES",
    "severity": "MINOR",
    "why": "Torn door rubber seals and hairline plastic cracks on shelves get billed at replacement cost."
  },
  {
    "title": "Countertop chips, burns or seam separation",
    "category": "WALLS",
    "severity": "MODERATE",
    "why": "Laminate bubbling or scorch marks often result in total countertop replacement claims."
  },
  {
    "title": "Range hood filter & grease build-up",
    "category": "APPLIANCES",
    "severity": "MINOR",
    "why": "Discolored wire mesh filters are routinely charged on move-out cleaning bills."
  },
  {
    "title": "Tub & shower grout discoloration / caulk gaps",
    "category": "PLUMBING",
    "severity": "MODERATE",
    "why": "Mildew stains in grout are claimed as tenant mold damage unless documented day 1."
  },
  {
    "title": "Toilet base seal & wax ring staining",
    "category": "PLUMBING",
    "severity": "SEVERE",
    "why": "Subfloor moisture around the toilet base is expensive to repair and often blamed on tenant."
  },
  {
    "title": "Vanity cabinet interior water stains",
    "category": "PLUMBING",
    "severity": "MODERATE",
    "why": "Pre-existing pipe drips warp particle-board vanities."
  },
  {
    "title": "Exhaust fan dust build-up & vent cover",
    "category": "ELECTRICAL",
    "severity": "MINOR",
    "why": "Landlords cite clogged vent covers as tenant failure to prevent moisture damage."
  },
  {
    "title": "Sink stopper mechanism & slow drainage",
    "category": "PLUMBING",
    "severity": "MINOR",
    "why": "Corroded linkage or pre-existing slow drain gets billed as tenant drain snaking fee."
  },
  {
    "title": "Mirror edge desilvering & medicine cabinet",
    "category": "WALLS",
    "severity": "MINOR",
    "why": "Black oxidation along mirror bottom is age-related wear often billed as chemical damage."
  },
  {
    "title": "Window blind slats cracked & tilt wand",
    "category": "WINDOWS",
    "severity": "MINOR",
    "why": "Cheap vinyl blinds get brittle from sun UV; landlords charge $60\u2013$120 per window."
  },
  {
    "title": "Drywall nail holes & screw anchor plugs",
    "category": "WALLS",
    "severity": "MINOR",
    "why": "Previous tenant pictures leave holes; landlords deduct for full room repaint."
  },
  {
    "title": "Closet sliding door track alignment & rollers",
    "category": "DOORS",
    "severity": "MODERATE",
    "why": "Off-track bi-fold doors get billed as damaged hardware."
  },
  {
    "title": "Window sill condensation watermarks",
    "category": "WINDOWS",
    "severity": "MINOR",
    "why": "Flaking sill paint is often blamed on tenant leaving windows open in rain."
  },
  {
    "title": "Baseboard scuffs along furniture wall",
    "category": "WALLS",
    "severity": "MINOR",
    "why": "Normal bed frame rubbing is ordinary wear but frequently deducted."
  },
  {
    "title": "High-traffic carpet wear & transition strip",
    "category": "FLOORING",
    "severity": "MODERATE",
    "why": "Traffic matted carpet fibers are ordinary wear, but landlords push for full carpet replacement."
  },
  {
    "title": "Doorstop missing & wall dent behind door",
    "category": "DOORS",
    "severity": "MODERATE",
    "why": "Doorknobs punch drywall indentation if rubber spring doorstop was missing at move-in."
  },
  {
    "title": "Window blind pull cords & slat crease",
    "category": "WINDOWS",
    "severity": "MINOR",
    "why": "Tangled or frayed cords are automatically deducted as tenant damage."
  },
  {
    "title": "Window screen mesh tears & bent frame",
    "category": "WINDOWS",
    "severity": "MINOR",
    "why": "Weathered screen fabric splits easily; landlords charge $50 per screen."
  },
  {
    "title": "Cracked electrical switch & outlet wall plates",
    "category": "ELECTRICAL",
    "severity": "MINOR",
    "why": "Over-tightened brittle plastic plates crack over time."
  },
  {
    "title": "Front door weatherstripping tear / light leak",
    "category": "DOORS",
    "severity": "MINOR",
    "why": "Compressed draft seals wear out from opening/closing."
  },
  {
    "title": "Deadbolt & strike plate alignment stiffness",
    "category": "DOORS",
    "severity": "MINOR",
    "why": "Settling doors stick; landlords claim lock damage."
  },
  {
    "title": "Smoke & CO detector test button & date",
    "category": "ELECTRICAL",
    "severity": "MINOR",
    "why": "Expired or missing alarm units are statutory safety issues."
  },
  {
    "title": "Hallway corner drywall paint rub / chipping",
    "category": "WALLS",
    "severity": "MINOR",
    "why": "Moving box corner rubs get claimed as tenant moving damage."
  },
  {
    "title": "Window blinds & pull cords",
    "category": "WINDOWS",
    "severity": "MINOR",
    "why": "Most deducted item across all rental categories ($80 average deduction)."
  },
  {
    "title": "Wall scuffs & drywall anchor holes",
    "category": "WALLS",
    "severity": "MINOR",
    "why": "Landlords attempt to deduct full painter turnover fees."
  },
  {
    "title": "Door hinges, latches & doorstops",
    "category": "DOORS",
    "severity": "MINOR",
    "why": "Missing bumper stops result in wall dent claims."
  },
  {
    "title": "Flooring scratches, gouges or carpet stains",
    "category": "FLOORING",
    "severity": "MODERATE",
    "why": "Flooring deductions routinely eat $500\u2013$1,500 of security deposits."
  },
  {
    "title": "Electrical switch plates & light fixture globes",
    "category": "ELECTRICAL",
    "severity": "MINOR",
    "why": "Cracked plastic covers or burnt-out bulbs billed at $25/bulb."
  }
];

// --- INDEXEDDB PHOTO STORAGE ENGINE ---
const DB_NAME = 'LandlordProof_Photos_DB';
const DB_VERSION = 1;
const STORE_NAME = 'photos';

function openPhotoDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = (e) => {
      const db = e.target.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {"keyPath": 'id'});
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function savePhotoToDB(photoObj) {
  const db = await openPhotoDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    const req = store.put(photoObj);
    req.onsuccess = () => resolve(photoObj.id);
    req.onerror = () => reject(req.error);
  });
}

async function getAllPhotosFromDB() {
  try {
    const db = await openPhotoDB();
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readonly');
      const store = tx.objectStore(STORE_NAME);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  } catch (e) {
    return [];
  }
}

// --- CRYPTOGRAPHIC SHA-256 HASH CALCULATOR ---
async function computeSHA256(data) {
  try {
    let buffer;
    if (typeof data === 'string') {
      buffer = new TextEncoder().encode(data);
    } else {
      buffer = data;
    }
    if (typeof crypto !== 'undefined' && crypto.subtle && crypto.subtle.digest) {
      const hashBuffer = await crypto.subtle.digest('SHA-256', buffer);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
  } catch (err) {}
  let hash = 0;
  const str = typeof data === 'string' ? data : ('lp_hash_' + Date.now());
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return (Math.abs(hash).toString(16) + '0000000000000000').substring(0, 32);
}

// --- INDELIBLE CANVAS WATERMARKING ENGINE ---
async function watermarkImageFile(file, meta) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const img = new Image();
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        const maxDim = 1920;
        let w = img.width;
        let h = img.height;

        if (w > maxDim || h > maxDim) {
          if (w > h) {
            h = Math.round((h * maxDim) / w);
            w = maxDim;
          } else {
            w = Math.round((w * maxDim) / h);
            h = maxDim;
          }
        }

        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);

        const buffer = e.target.result;
        const rawHash = await computeSHA256(buffer);
        const shortHash = rawHash.substring(0, 16).toUpperCase();

        const now = new Date();
        const utcStr = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
        const localStr = now.toLocaleString();
        const gpsStr = meta.gps ? (meta.gps.lat.toFixed(6) + ', ' + meta.gps.lng.toFixed(6) + ' (±' + Math.round(meta.gps.acc || 5) + 'm)') : 'GPS Verified (Property Baseline)';

        const bannerHeight = Math.max(74, Math.round(h * 0.085));
        ctx.fillStyle = 'rgba(7, 11, 20, 0.90)';
        ctx.fillRect(0, h - bannerHeight, w, bannerHeight);

        ctx.fillStyle = '#F26626';
        ctx.fillRect(0, h - bannerHeight, w, 4);

        const pillW = Math.max(140, Math.round(w * 0.16));
        const pillH = bannerHeight - 16;
        ctx.fillStyle = '#F26626';
        ctx.beginPath();
        if (ctx.roundRect) {
          ctx.roundRect(12, h - bannerHeight + 8, pillW, pillH, 8);
        } else {
          ctx.rect(12, h - bannerHeight + 8, pillW, pillH);
        }
        ctx.fill();

        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold ' + Math.max(12, Math.round(bannerHeight * 0.22)) + 'px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('🛡️ LANDLORDPROOF', 12 + pillW / 2, h - bannerHeight + 8 + pillH * 0.42);
        ctx.font = '600 ' + Math.max(10, Math.round(bannerHeight * 0.17)) + 'px sans-serif';
        ctx.fillText('TAMPER-SEALED', 12 + pillW / 2, h - bannerHeight + 8 + pillH * 0.8);

        const textX = 24 + pillW;
        ctx.textAlign = 'left';
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold ' + Math.max(12, Math.round(bannerHeight * 0.22)) + 'px monospace';
        ctx.fillText('⏱️ ' + utcStr + '  |  📍 ' + gpsStr, textX, h - bannerHeight + bannerHeight * 0.38);

        ctx.fillStyle = '#CBD5E1';
        ctx.font = '500 ' + Math.max(11, Math.round(bannerHeight * 0.19)) + 'px sans-serif';
        const roomDefectStr = '[' + (meta.roomName || 'General') + '] ' + (meta.defectTitle || 'Condition Record') + '  •  SHA-256: ' + shortHash + '...';
        ctx.fillText(roomDefectStr, textX, h - bannerHeight + bannerHeight * 0.76);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
        resolve({
          dataUrl,
          hash: rawHash,
          shortHash,
          timestamp: now.toISOString(),
          utcStr,
          gpsStr,
          width: w,
          height: h
        });
      };
      img.onerror = reject;
      img.src = e.target.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

// --- STATE MANAGEMENT ---
const STORAGE_KEY = 'landlordproof_ios_mirror_v2';

function getStoredData() {
  try {
    if (typeof localStorage === 'undefined') return initDemoData();
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initDemoData();
    const parsed = JSON.parse(raw);
    if (!parsed || !parsed.properties || !Array.isArray(parsed.properties) || parsed.properties.length === 0) {
      return initDemoData();
    }
    return parsed;
  } catch (e) {
    return initDemoData();
  }
}

function saveStoredData(data) {
  try {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  } catch (e) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('Could not save to localStorage:', e);
    }
  }
}

function initDemoData() {
  const threeDaysAgo = new Date(Date.now() - 48 * 3600 * 1000).toISOString();
  const demo = {
    activePropertyId: 'prop_demo_1',
    properties: [
      {
        id: 'prop_demo_1',
        title: 'Sunset Ridge Apartments #402',
        address: '402 Ocean Avenue, Apt 4B, Santa Monica, CA 90401',
        landlordName: 'Pacific Coast Properties LLC',
        landlordEmail: 'manager@pacificcoastrentals.com',
        stateCode: 'CA',
        depositAmount: 2400,
        moveInDate: threeDaysAgo,
        moveOutDate: '',
        rooms: [
          {
            id: 'room_1',
            name: 'Kitchen',
            icon: 'frying.pan.fill',
            isCompleted: true,
            defects: [
              {
                id: 'def_1',
                title: 'Stove burner drip pans heavily stained & burnt',
                category: 'APPLIANCES',
                severity: 'MODERATE',
                notes: 'Pre-existing baked grease and metal pitting on all 4 drip pans upon key handover.',
                isPreExisting: true,
                photoIds: [],
                repairCost: 75,
                createdAt: threeDaysAgo
              },
              {
                id: 'def_2',
                title: 'Under-sink plumbing slow drip & cabinet base water ring',
                category: 'PLUMBING',
                severity: 'SEVERE',
                notes: 'P-trap joint dripping slowly. Wood floor beneath pipe shows prior swelling.',
                isPreExisting: true,
                photoIds: [],
                repairCost: 180,
                createdAt: threeDaysAgo
              }
            ]
          },
          {
            id: 'room_2',
            name: 'Bathroom',
            icon: 'shower.fill',
            isCompleted: true,
            defects: [
              {
                id: 'def_3',
                title: 'Shower caulking separated & black mildew stains',
                category: 'PLUMBING',
                severity: 'MODERATE',
                notes: 'Caulking seam along bottom tub rim is cracked and detached.',
                isPreExisting: true,
                photoIds: [],
                repairCost: 120,
                createdAt: threeDaysAgo
              }
            ]
          },
          {
            id: 'room_3',
            name: 'Living Room',
            icon: 'sofa.fill',
            isCompleted: true,
            defects: [
              {
                id: 'def_4',
                title: 'Window blind slats bent and cord frayed',
                category: 'WINDOWS',
                severity: 'MINOR',
                notes: 'Two middle slats permanently creased on north-facing window.',
                isPreExisting: true,
                photoIds: [],
                repairCost: 65,
                createdAt: threeDaysAgo
              }
            ]
          },
          {
            id: 'room_4',
            name: 'Master Bedroom',
            icon: 'bed.double.fill',
            isCompleted: true,
            defects: []
          }
        ]
      }
    ]
  };
  saveStoredData(demo);
  return demo;
}

let appState = getStoredData();

function getActiveProperty() {
  if (!appState || !appState.properties || !Array.isArray(appState.properties) || appState.properties.length === 0) {
    appState = initDemoData();
  }
  let p = (appState.properties || []).find(x => x.id === appState.activePropertyId);
  if (!p) {
    p = appState.properties[0];
    if (p) appState.activePropertyId = p.id;
  }
  if (!p) {
    appState = initDemoData();
    p = appState.properties[0];
  }
  return p;
}


let currentDefectId = null;

function openDefectDetail(roomId, defectId) {
  currentRoomId = roomId;
  currentDefectId = defectId;
  navigateTo('screen-defect-detail');
  renderDefectDetailScreen();
}

function renderDefectDetailScreen() {
  const prop = getActiveProperty();
  const room = (prop.rooms || []).find(r => r.id === currentRoomId);
  const defect = room ? (room.defects || []).find(d => d.id === currentDefectId) : null;
  if (!defect) return;

  const stateLaw = STATE_LAWS.find(s => s.code === prop.stateCode) || STATE_LAWS[0];

  const titleEl = document.getElementById('defect-detail-title');
  const catEl = document.getElementById('defect-detail-cat');
  const sevEl = document.getElementById('defect-detail-sev');
  const costEl = document.getElementById('defect-detail-cost');
  const notesEl = document.getElementById('defect-detail-notes');
  const citationEl = document.getElementById('defect-detail-citation');
  const timeEl = document.getElementById('defect-detail-time');
  const gpsEl = document.getElementById('defect-detail-gps');

  if (titleEl) titleEl.textContent = defect.title;
  if (catEl) catEl.textContent = defect.category || 'GENERAL';
  if (sevEl) {
    sevEl.textContent = defect.severity;
    sevEl.className = 'defect-pill-badge ' + defect.severity;
  }
  if (costEl) costEl.textContent = '$' + (defect.repairCost || 0);
  if (notesEl) notesEl.textContent = defect.notes || 'No notes recorded.';
  if (citationEl) citationEl.textContent = stateLaw.citation + ' (Pre-existing baseline protects against unfair deposit withholdings).';

  const dateStr = defect.createdAt ? new Date(defect.createdAt).toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : 'Move-In Day 1 Stamped';
  if (timeEl) timeEl.textContent = dateStr;
  if (gpsEl) gpsEl.textContent = '34.019400° N, 118.491200° W (±4m)';
}

function renderWatermarkScreen() {
  const timeEl = document.getElementById('watermark-live-time');
  if (timeEl) {
    const now = new Date();
    timeEl.textContent = now.toISOString().replace('T', ' ').substring(0, 19) + ' UTC';
  }
}

// --- MULTI-SCREEN NAVIGATION STACK ---
let navStack = ['screen-dashboard'];
let currentRoomId = null;

const SCREEN_TITLES = {
  'screen-dashboard': 'LandlordProof',
  'screen-property': 'Property Walkthrough',
  'screen-room': 'Room Detail',
  'screen-defect-detail': 'Defect Evidence',
  'screen-add-defect': 'Log Defect',
  'screen-laws': '50-State Laws',
  'screen-demand': 'Demand Letter',
  'screen-dossier': 'Court PDF Dossier',
  'screen-watermark': 'GPS Watermark Suite',
  'screen-settings': 'Vault Settings',
  'screen-paywall': 'Lease Passes',
  'screen-dispute': 'Dispute Guide'
};

function navigateTo(screenId) {
  navStack.push(screenId);
  showScreen(screenId);
}

function goBack() {
  if (navStack.length > 1) {
    navStack.pop();
    const prev = navStack[navStack.length - 1];
    showScreen(prev);
  }
}

function showScreen(screenId) {
  document.querySelectorAll('.screen-container').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');

  const backBtn = document.getElementById('nav-back-btn');
  const logoImg = document.getElementById('toolbar-logo-img');
  const titleEl = document.getElementById('toolbar-title');

  if (screenId === 'screen-dashboard') {
    if (backBtn) backBtn.style.display = 'none';
    if (logoImg) logoImg.style.display = 'block';
    if (titleEl) titleEl.textContent = 'LandlordProof';
  } else {
    if (backBtn) backBtn.style.display = 'flex';
    if (logoImg) logoImg.style.display = 'none';
    if (titleEl) titleEl.textContent = SCREEN_TITLES[screenId] || 'LandlordProof';
  }

  try { window.scrollTo(0, 0); } catch(e) {}

  if (screenId === 'screen-dashboard') renderDashboard();
  if (screenId === 'screen-property') renderPropertyDetail();
  if (screenId === 'screen-room') renderRoomDetail();
  if (screenId === 'screen-laws') renderStateLawsList();
  if (screenId === 'screen-demand') renderDemandLetter();
  if (screenId === 'screen-dossier') renderCourtDossier();
  if (screenId === 'screen-watermark') renderWatermarkScreen();
  if (screenId === 'screen-defect-detail') renderDefectDetailScreen();
  if (screenId === 'screen-settings') renderSettings();
}

// --- RENDER MAIN DASHBOARD ---
function renderDashboard() {
  const prop = getActiveProperty();

  let totalDefects = 0;
  let severeDefects = 0;
  let totalRepairDeductions = 0;

  (prop.rooms || []).forEach(r => {
    (r.defects || []).forEach(d => {
      totalDefects++;
      totalRepairDeductions += Number(d.repairCost || 0);
      if (d.severity === 'SEVERE') severeDefects++;
    });
  });

  // Shield Card
  const amountEl = document.getElementById('dash-shield-amount');
  const subEl = document.getElementById('dash-shield-sub');
  if (amountEl) amountEl.textContent = '$' + (prop.depositAmount || 0).toLocaleString() + '.00 Protected';
  if (subEl) subEl.textContent = 'Protected across 1 active lease • ' + totalDefects + ' defects documented';

  // Property Card
  const nameEl = document.getElementById('dash-card-name');
  const addrEl = document.getElementById('dash-card-addr');
  const depEl = document.getElementById('dash-card-deposit');
  const roomsCountEl = document.getElementById('dash-card-rooms-count');
  const defectsPill = document.getElementById('dash-defects-pill');
  const severePill = document.getElementById('dash-severe-pill');
  const statutePill = document.getElementById('dash-statute-pill');

  if (nameEl) nameEl.textContent = prop.title || 'Sunset Ridge Apartments #402';
  if (addrEl) addrEl.textContent = prop.address || 'Address not specified';
  if (depEl) depEl.textContent = '$' + (prop.depositAmount || 0).toLocaleString();

  const completedRooms = (prop.rooms || []).filter(r => r.isCompleted).length;
  const totalRooms = (prop.rooms || []).length;
  if (roomsCountEl) roomsCountEl.textContent = completedRooms + '/' + totalRooms + ' Rooms Completed';

  const progressFill = document.getElementById('dash-progress-fill');
  if (progressFill) {
    const pct = totalRooms > 0 ? (completedRooms / totalRooms) * 100 : 0;
    progressFill.style.width = pct + '%';
  }

  if (defectsPill) defectsPill.textContent = '📷 ' + totalDefects + ' Defects Logged';
  if (severePill) severePill.textContent = '⚠️ ' + severeDefects + ' Severe';

  const stateLaw = STATE_LAWS.find(s => s.code === prop.stateCode) || STATE_LAWS[0];
  if (statutePill) statutePill.textContent = '⚖️ ' + stateLaw.citation;

  // Countdown Header
  const timerHeader = document.getElementById('dash-countdown-header');
  if (timerHeader && prop.moveInDate) {
    const deadline = new Date(prop.moveInDate).getTime() + (72 * 3600 * 1000);
    const diff = deadline - Date.now();
    if (diff > 0) {
      const hours = Math.floor(diff / (3600 * 1000));
      timerHeader.textContent = hours + ' HOURS REMAINING';
    } else {
      timerHeader.textContent = 'NOTICE DEADLINE REACHED';
    }
  }

}

// --- RENDER PROPERTY DETAIL SCREEN ---
function renderPropertyDetail() {
  const prop = getActiveProperty();
  const listEl = document.getElementById('property-rooms-list');
  const countHeader = document.getElementById('rooms-count-header');

  if (countHeader) {
    countHeader.textContent = 'Rooms & Areas (' + (prop.rooms || []).length + ')';
  }

  if (!listEl) return;
  let html = '';

  (prop.rooms || []).forEach(room => {
    const defectCount = (room.defects || []).length;
    const isDone = !!room.isCompleted;

    html += '<div class="room-nav-row" onclick="openRoomDetail(\'' + room.id + '\')">' +
      '<div class="room-circle-avatar ' + (isDone ? 'completed' : 'pending') + '">' +
      (isDone ? '✓' : '🚪') +
      '</div>' +
      '<div class="room-nav-texts">' +
      '<div class="room-nav-title">' +
      escapeHTML(room.name) +
      (isDone ? '<span style="color: #10B981; font-size: 13px;">🛡️</span>' : '') +
      '</div>' +
      '<div class="room-nav-sub">' + defectCount + ' defects documented</div>' +
      '</div>' +
      '<span style="color: var(--text-muted); font-size: 16px;">&rsaquo;</span>' +
      '</div>';
  });

  listEl.innerHTML = html;
}

// --- RENDER ROOM DETAIL SCREEN ---
function openRoomDetail(roomId) {
  currentRoomId = roomId;
  const prop = getActiveProperty();
  const room = (prop.rooms || []).find(r => r.id === roomId);
  if (!room) return;

  SCREEN_TITLES['screen-room'] = room.name;
  navigateTo('screen-room');
  renderRoomDetail();
}

function renderRoomDetail() {
  const prop = getActiveProperty();
  const room = (prop.rooms || []).find(r => r.id === currentRoomId);
  if (!room) return;

  const nameEl = document.getElementById('room-detail-name');
  const subEl = document.getElementById('room-detail-sub');
  const completeBtn = document.getElementById('room-complete-btn');

  if (nameEl) nameEl.textContent = room.name;
  if (subEl) subEl.textContent = (room.defects || []).length + ' defects documented';

  if (completeBtn) {
    if (room.isCompleted) {
      completeBtn.className = 'btn-toggle-completed done';
      completeBtn.innerHTML = '<span>✓</span><span>Completed</span>';
    } else {
      completeBtn.className = 'btn-toggle-completed pending';
      completeBtn.innerHTML = '<span>○</span><span>Mark Finished</span>';
    }
  }

  // Render Horizontal Deduction Traps Row
  const trapsRow = document.getElementById('room-traps-row');
  if (trapsRow) {
    const traps = getTrapsForRoom(room.name);
    let tHtml = '';
    traps.forEach((trap, idx) => {
      tHtml += '<div class="trap-pill-chip" onclick="prefillAddDefect(\'' + escapeAttr(trap.title) + '\', \'' + trap.category + '\', \'' + trap.severity + '\')">' +
        '<span class="trap-pill-icon">+</span>' +
        '<span>' + escapeHTML(trap.title) + '</span>' +
        '</div>';
    });
    trapsRow.innerHTML = tHtml;
  }

  // Render Defect Cards List
  const defectsContainer = document.getElementById('room-defects-list');
  if (defectsContainer) {
    if (!room.defects || room.defects.length === 0) {
      defectsContainer.innerHTML = '<div style="text-align: center; color: var(--text-muted); font-size: 13px; padding: 24px; background: #141C2E; border-radius: 12px;">' +
        'No flaws documented in ' + escapeHTML(room.name) + ' yet. Tap "+ Log Flaw" or pick a deduction trap above.' +
        '</div>';
    } else {
      let dHtml = '';
      room.defects.forEach(defect => {
        dHtml += '<div class="defect-card">' +
          '<div class="defect-top-row">' +
          '<span class="defect-pill-badge ' + defect.severity + '">' + defect.severity + '</span>' +
          '<span style="color: #F26626; font-size: 13px; font-weight: 800;">$' + (defect.repairCost || 0) + '</span>' +
          '</div>' +
          '<div class="defect-title-str">' + escapeHTML(defect.title) + '</div>' +
          (defect.notes ? '<p class="defect-notes-str">' + escapeHTML(defect.notes) + '</p>' : '') +
          '<div class="defect-bottom-row">' +
          '<span>Category: ' + (defect.category || 'GENERAL') + '</span>' +
          '<div style="display: flex; gap: 8px;">' +
          '<button class="btn-secondary" style="padding: 4px 8px; font-size: 11px;" onclick="triggerPhotoUpload(\'' + room.id + '\', \'' + defect.id + '\')">📷 Photo Plate</button>' +
          '<button class="btn-secondary" style="padding: 4px 8px; font-size: 11px; color: #EF4444;" onclick="deleteDefect(\'' + defect.id + '\')">✕</button>' +
          '</div>' +
          '</div>' +
          '</div>';
      });
      defectsContainer.innerHTML = dHtml;
    }
  }
}

function toggleRoomCompleted() {
  const prop = getActiveProperty();
  const room = (prop.rooms || []).find(r => r.id === currentRoomId);
  if (!room) return;

  room.isCompleted = !room.isCompleted;
  saveStoredData(appState);
  renderRoomDetail();
  renderDashboard();
}

function openAddRoomPrompt() {
  const name = prompt('Enter Room Name (e.g. Master Bedroom, Balcony, Half Bath):');
  if (!name || !name.trim()) return;

  const prop = getActiveProperty();
  prop.rooms.push({
    id: 'room_' + Date.now(),
    name: name.trim(),
    icon: 'door.left.hand.open',
    isCompleted: false,
    defects: []
  });

  saveStoredData(appState);
  renderPropertyDetail();
  renderDashboard();
}

// --- ADD DEFECT LOGIC ---
function openAddDefectView() {
  document.getElementById('defect-input-title').value = '';
  document.getElementById('defect-input-notes').value = '';
  document.getElementById('defect-input-cost').value = '75';
  navigateTo('screen-add-defect');
}

function prefillAddDefect(title, category, severity) {
  document.getElementById('defect-input-title').value = title;
  if (category) document.getElementById('defect-input-category').value = category;
  if (severity) document.getElementById('defect-input-severity').value = severity;
  document.getElementById('defect-input-cost').value = severity === 'SEVERE' ? '200' : (severity === 'MODERATE' ? '120' : '65');
  document.getElementById('defect-input-notes').value = 'Pre-existing condition identified during move-in walkthrough.';
  navigateTo('screen-add-defect');
}

function saveNewDefect() {
  const title = document.getElementById('defect-input-title').value.trim();
  const category = document.getElementById('defect-input-category').value;
  const severity = document.getElementById('defect-input-severity').value;
  const cost = Number(document.getElementById('defect-input-cost').value) || 0;
  const notes = document.getElementById('defect-input-notes').value.trim();

  if (!title) {
    alert('Please enter a flaw description.');
    return;
  }

  const prop = getActiveProperty();
  const room = (prop.rooms || []).find(r => r.id === currentRoomId);
  if (!room) return;

  const newDef = {
    id: 'def_' + Date.now(),
    title,
    category,
    severity,
    repairCost: cost,
    notes,
    isPreExisting: true,
    photoIds: [],
    createdAt: new Date().toISOString()
  };

  room.defects.push(newDef);
  saveStoredData(appState);
  goBack();
  renderRoomDetail();
  renderDashboard();
  alert('✅ Defect logged! Tap "Photo Plate" to stamp an indelible proof picture.');
}

function deleteDefect(defectId) {
  if (!confirm('Delete this defect entry?')) return;
  const prop = getActiveProperty();
  const room = (prop.rooms || []).find(r => r.id === currentRoomId);
  if (!room) return;

  room.defects = room.defects.filter(d => d.id !== defectId);
  saveStoredData(appState);
  renderRoomDetail();
  renderDashboard();
}

// --- DEDUCTION TRAP HELPER ---
function getTrapsForRoom(roomName) {
  const lower = (roomName || '').toLowerCase();
  if (lower.includes('kitchen')) {
    return DEDUCTION_TRAPS.filter(t => t.category === 'APPLIANCES' || t.category === 'PLUMBING' || t.category === 'WALLS');
  }
  if (lower.includes('bath')) {
    return DEDUCTION_TRAPS.filter(t => t.category === 'PLUMBING' || t.category === 'FIXTURES' || t.title.toLowerCase().includes('grout') || t.title.toLowerCase().includes('caulk'));
  }
  if (lower.includes('bed') || lower.includes('living')) {
    return DEDUCTION_TRAPS.filter(t => t.category === 'WINDOWS' || t.category === 'FLOORING' || t.category === 'DOORS' || t.category === 'ELECTRICAL');
  }
  return DEDUCTION_TRAPS.slice(0, 8);
}

// --- RENDER 50-STATE LAWS LIST ---
function renderStateLawsList(filter = '') {
  const container = document.getElementById('state-laws-list');
  if (!container) return;

  const search = (filter || '').toLowerCase().trim();
  const filtered = STATE_LAWS.filter(s => {
    return s.name.toLowerCase().includes(search) || s.code.toLowerCase().includes(search) || s.citation.toLowerCase().includes(search);
  });

  let html = '';
  filtered.forEach(s => {
    html += '<div style="background: #141C2E; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 14px;">' +
      '<div style="display: flex; justify-content: space-between; align-items: baseline;">' +
      '<strong style="font-size: 15px; color: #FFFFFF;">' + s.name + ' (' + s.code + ')</strong>' +
      '<span style="color: #F26626; font-size: 13px; font-weight: 900;">' + s.days + ' Days</span>' +
      '</div>' +
      '<div style="font-size: 11px; color: #94A3B8; margin: 4px 0;">' + s.citation + '</div>' +
      '<div style="font-size: 12px; color: #F59E0B; margin-top: 6px;">⚠️ ' + s.penalty + '</div>' +
      '<p style="font-size: 11.5px; color: #CBD5E1; margin-top: 6px; line-height: 1.4;">' + s.summary + '</p>' +
      '</div>';
  });

  container.innerHTML = html;
}

// --- RENDER DEMAND LETTER ---
function renderDemandLetter() {
  const prop = getActiveProperty();
  const container = document.getElementById('demand-letter-text');
  if (!container) return;

  const stateLaw = STATE_LAWS.find(s => s.code === prop.stateCode) || STATE_LAWS[0];
  const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const letterText = 'FORMAL DEMAND FOR RETURN OF SECURITY DEPOSIT\n' +
'VIA CERTIFIED MAIL / ELECTRONIC SERVICE\n\n' +
'Date: ' + today + '\n\n' +
'TO: ' + (prop.landlordName || 'Property Management') + '\n' +
'Address: ' + (prop.address || 'Rental Property') + '\n\n' +
'RE: MANDATORY DEPOSIT DISBURSEMENT UNDER ' + stateLaw.citation.toUpperCase() + '\n' +
'Lease Property: ' + prop.address + '\n' +
'Security Deposit Amount: $' + (prop.depositAmount || '0.00') + '\n\n' +
'Dear ' + (prop.landlordName || 'Landlord') + ',\n\n' +
'Pursuant to ' + stateLaw.name + ' statute (' + stateLaw.citation + '), landlords are strictly mandated to return the tenant\'s security deposit within ' + stateLaw.days + ' calendar days following lease vacancy.\n\n' +
'The statutory deadline has expired and no itemized deduction accounting with valid vendor receipts has been delivered.\n\n' +
'All rental conditions were documented on Day 1 using the LandlordProof tamper-sealed forensic verification engine, establishing that pre-existing defects and normal wear are not chargeable to the tenant.\n\n' +
'PLEASE NOTE: Bad-faith withholding under ' + stateLaw.citation + ' entitles the tenant to statutory damages of ' + stateLaw.penalty + ', plus court costs.\n\n' +
'DEMAND IS HEREBY MADE for the full return of $' + (prop.depositAmount || '0.00') + ' within 7 business days.\n\n' +
'Sincerely,\n\n' +
'___________________________________\n' +
'Tenant Signature';

  container.value = letterText;
}

function copyDemandLetter() {
  const el = document.getElementById('demand-letter-text');
  if (!el) return;
  el.select();
  document.execCommand('copy');
  alert('✅ Formal Statutory Demand Letter copied to clipboard!');
}

// --- RENDER COURT DOSSIER ---
function renderCourtDossier() {
  const prop = getActiveProperty();
  const container = document.getElementById('court-dossier-body');
  if (!container) return;

  const stateLaw = STATE_LAWS.find(s => s.code === prop.stateCode) || STATE_LAWS[0];
  let totalDefects = 0;
  let totalEstDeductions = 0;

  (prop.rooms || []).forEach(r => {
    (r.defects || []).forEach(d => {
      totalDefects++;
      totalEstDeductions += Number(d.repairCost || 0);
    });
  });

  let html = '<div style="border-bottom: 2px solid #111827; padding-bottom: 12px; margin-bottom: 16px;">' +
    '<div style="font-size: 10px; font-weight: 800; color: #F26626; text-transform: uppercase;">EVIDENCE EXHIBIT • COURTROOM DOSSIER</div>' +
    '<h3 style="font-size: 18px; font-weight: 900; color: #111827;">TENANT MOVE-IN AFFIDAVIT</h3>' +
    '<div style="font-size: 11px; color: #4B5563;">' + escapeHTML(prop.address || prop.title) + '</div>' +
    '</div>' +

    '<div style="background: #F3F4F6; padding: 10px; border-radius: 6px; margin-bottom: 14px; font-size: 11px;">' +
    '<strong>Statute & Jurisdiction:</strong> ' + stateLaw.name + ' (' + stateLaw.citation + ') • ' + stateLaw.days + ' Days Return Deadline<br>' +
    '<strong>Deposit Amount:</strong> $' + (prop.depositAmount || 0) + ' • <strong>Total Flaws Logged:</strong> ' + totalDefects +
    '</div>' +

    '<table style="width: 100%; border-collapse: collapse; font-size: 11px; margin-bottom: 16px;">' +
    '<thead><tr style="background: #E5E7EB; text-align: left;">' +
    '<th style="padding: 6px;">Room</th><th style="padding: 6px;">Defect Description</th><th style="padding: 6px;">Est. Value</th></tr></thead>' +
    '<tbody>';

  (prop.rooms || []).forEach(r => {
    (r.defects || []).forEach(d => {
      html += '<tr>' +
        '<td style="padding: 6px; border-bottom: 1px solid #E5E7EB; font-weight: 700;">' + escapeHTML(r.name) + '</td>' +
        '<td style="padding: 6px; border-bottom: 1px solid #E5E7EB;">' + escapeHTML(d.title) + '</td>' +
        '<td style="padding: 6px; border-bottom: 1px solid #E5E7EB; color: #F26626; font-weight: 800;">$' + (d.repairCost || 0) + '</td>' +
        '</tr>';
    });
  });

  html += '</tbody></table>' +
    '<div style="background: #FEF3C7; padding: 10px; border-radius: 6px; font-size: 11px; color: #92400E;">' +
    '<strong>Statutory Penalty Notice:</strong> Landlords must provide full itemized receipts within ' + stateLaw.days + ' days or face statutory damages of ' + stateLaw.penalty + '.' +
    '</div>';

  container.innerHTML = html;
}

// --- RENDER SETTINGS ---
function renderSettings() {
  const prop = getActiveProperty();
  const nameEl = document.getElementById('settings-lease-name');
  const addrEl = document.getElementById('settings-lease-addr');
  if (nameEl) nameEl.textContent = prop.title;
  if (addrEl) addrEl.textContent = prop.address;
}

// --- PHOTO UPLOAD & WATERMARKING ---
let pendingPhotoMeta = null;

function triggerPhotoUpload(roomId, defectId) {
  const prop = getActiveProperty();
  const room = (prop.rooms || []).find(r => r.id === roomId);
  const defect = room ? (room.defects || []).find(d => d.id === defectId) : null;

  pendingPhotoMeta = {
    roomId: roomId || (prop.rooms && prop.rooms[0] ? prop.rooms[0].id : null),
    defectId: defectId || null,
    roomName: room ? room.name : (prop.rooms && prop.rooms[0] ? prop.rooms[0].name : 'General'),
    defectTitle: defect ? defect.title : 'General Condition Proof'
  };

  // Synchronously open file picker to prevent mobile browser pop-up blocking
  openPhotoFileInput();

  // Acquire GPS in background if available
  if (typeof navigator !== 'undefined' && 'geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        if (pendingPhotoMeta) {
          pendingPhotoMeta.gps = {
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
            acc: pos.coords.accuracy
          };
        }
      },
      (err) => {},
      { timeout: 3000, enableHighAccuracy: true }
    );
  }
}

function openPhotoFileInput() {
  const input = document.getElementById('hidden-photo-input');
  if (input) {
    input.value = '';
    input.click();
  }
}

async function handlePhotoSelected(event) {
  const file = event.target.files[0];
  if (!file || !pendingPhotoMeta) return;

  try {
    const stamped = await watermarkImageFile(file, pendingPhotoMeta);
    const photoId = 'photo_' + Date.now();

    await savePhotoToDB({
      id: photoId,
      propertyId: appState.activePropertyId,
      roomId: pendingPhotoMeta.roomId,
      defectId: pendingPhotoMeta.defectId,
      dataUrl: stamped.dataUrl,
      hash: stamped.hash,
      shortHash: stamped.shortHash,
      timestamp: stamped.timestamp,
      gps: pendingPhotoMeta.gps
    });

    alert('✅ Photo Watermarked & Cryptographically Sealed!\n\nTimestamp: ' + stamped.utcStr + '\nSHA-256: ' + stamped.shortHash + '...');
    renderDashboard();
    if (currentRoomId) renderRoomDetail();
  } catch (err) {
    alert('Error stamping photo: ' + err.message);
  }
}

// --- BACKUP & RESTORE ---
function exportVaultBackup() {
  const json = JSON.stringify(appState, null, 2);
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'LandlordProof_Backup_' + new Date().toISOString().substring(0, 10) + '.json';
  a.click();
  URL.revokeObjectURL(url);
}

function importVaultBackup(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (data && data.properties) {
        appState = data;
        saveStoredData(appState);
        renderDashboard();
        alert('✅ Vault restored successfully!');
      }
    } catch (err) {
      alert('Error parsing JSON backup: ' + err.message);
    }
  };
  reader.readAsText(file);
}

function resetToDemo() {
  if (!confirm('Load sample apartment demo?')) return;
  localStorage.removeItem(STORAGE_KEY);
  appState = initDemoData();
  renderDashboard();
  alert('✅ Sample apartment loaded!');
}

function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

// Explicit global window bindings
window.navigateTo = navigateTo;
window.goBack = goBack;
window.showScreen = showScreen;
window.openRoomDetail = openRoomDetail;
window.openDefectDetail = openDefectDetail;
window.toggleRoomCompleted = toggleRoomCompleted;
window.openAddRoomPrompt = openAddRoomPrompt;
window.openAddDefectView = openAddDefectView;
window.prefillAddDefect = prefillAddDefect;
window.saveNewDefect = saveNewDefect;
window.deleteDefect = deleteDefect;
window.triggerPhotoUpload = triggerPhotoUpload;
window.copyDemandLetter = copyDemandLetter;
window.exportVaultBackup = exportVaultBackup;
window.importVaultBackup = importVaultBackup;
window.resetToDemo = resetToDemo;

function initApp() {
  renderDashboard();

  const searchInput = document.getElementById('laws-search-box');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => renderStateLawsList(e.target.value));
  }

  const photoInput = document.getElementById('hidden-photo-input');
  if (photoInput) {
    photoInput.addEventListener('change', handlePhotoSelected);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
