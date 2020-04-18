import logo from "../images/logo_alchemy.webp" // add school logo to images folder and import here

export const applicationsLive = true // set to false if not currently accepting applications
export const disabledLoanAppFormID = "69140c47-bb03-4a1b-b674-cc136fdea23d" // Hubspot ID for all disabled apply now lead captures
export const nextCohortStartDate = "October 29, 2019"

// ***** BEGIN TERMS AND FAQ INFO *****

export const schoolInfo = {
  // term details section
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APRRange36: "11.42%",
  APRRange60: "12.76%",
  interestOnly: [
    {
      // for multiple examples of interest only, add items to interestOnly array
      programName: "the Program in Professional Software Development",
      APR36: "11.42%",
      financeCharge36: "$2,449.47",
      IOPayment36: "$77.91",
      FullMonthlyPayment36: "$330.67",
      APR60: "12.76%",
      financeCharge60: "$4,230.89",
      IOPayment60: "$95.25",
      FullMonthlyPayment60: "$226.07",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
      programLength: "5", // program length in months
    },
  ],
  immediateRepayment: [
    {
      // for multiple examples of immmediate repayment, add items to immediateRepayment array
      programName: "PROGRAM NAME",
      APR36: "XX.XX%",
      financeCharge36: "$X,XXX.XX",
      FullMonthlyPayment36: "$XXX.XX",
      APR60: "XX.XX%",
      financeCharge60: "$X,XXX.XX",
      FullMonthlyPayment60: "$XXX.XX",
      LoanExampleAmt: "$10,000",
      LoanExampleOFeeAmt: "$400",
      LoanExampleAmtPlusOFee: "$10,400",
    },
  ],
}

export const faq = {
  // faq section
  costOfLiving: true, // true if at least one program has cost of living included
  costOfLivingPrograms: "", // leave as empty string is cost of living availability is the same across all programs
  multCostOfLivingPrograms: false, // true if costOfLivingPrograms string has more than one program
  interestOnly: true, // true if interest-only payments are an option
  immediateRepayment: false, // true if immediate repayment is an option
  multipleLoanLengths: true, // true if 36 and 60 month options are both available
  multipleLoanTypes: false, // true if both IR and IO are available
  multiPrograms: false, // only true if there are multiple programs
  onlinePrograms: false, // true if at least one program is remote/online
  schoolHQState: "WA",
  origFee: 0.05,

  // interest payment FAQ info
  exampleLoanAmount: "$10,000",
  interestRate36: "8.99%",
  interestRate60: "10.99%",
  APR36: "11.42%",
  APR60: "12.76%",
  IOPayment36: "$78.66",
  IOPayment60: "$96.16",

  // max loan amounts by program for faq1
  loanRange: [
    {
      programName: "Program in Professional Software Development",
      maxAmount: "$23,000",
      col: true,
      colAmount: "$10,500",
    },
  ],
}

// ***** END TERMS AND FAQ INFO *****

// ***** BEGIN GENERAL SCHOOL INFO *****

export const schoolLogo = logo // go to header.js if height needs adjustment

export const schoolName = "Alchemy Code Lab"

export const schoolURL = "https://www.alchemycodelab.com/" // update with url of school's website

export const skfURL = "https://alchemycodelab.skills.fund" // update with Skills Fund url

export const headline = "Learn to Code at Alchemy Code Lab" // update headline as appropriate

export const leadContent = {
  header: "Your last step on the path toward changing your career",
  paragraph: `${schoolName} designs its programs to help students launch a career in software development. ${schoolName} partners with Skills Fund to offer tuition${
    faq.costOfLiving ? " and cost of living" : ""
  } financing so more students like you can access their program.`,
}

export const threeStepCardText = {
  step1: "",
  step2: {
    header: "select your program",
    text:
      "Alchemy Code Lab focuses exclusively on its Program in Professional Software Development.",
  },
  step3: `You'll be on your way to an exciting career in tech as part of ${schoolName}'s powerful network.`,
}

export const netlifyFormName = "alchemy_contact"

export const GATracking = "UA-68312423-1"

export const hubspotFormId = "5c3e2a7c-7a99-4b86-9156-c357ce2c5f4f" // create Hubspot form, get form id after publishing

export const selectAProgram = "program_name" // update school name to match form field on Hubspot, *** change to "program_name" if only one program ***"

// ***** END GENERAL SCHOOL INFO *****

// ***** BEGIN LOAN APP AND CALC INFO *****

export const defaultLoanAmount = 10000
export const placeholder = "$10,000"
export const interestRates = {
  ir36: 8.99,
  ir60: 10.99,
}
export const moreThanSixPrograms = false // set to true if there are 7 or more programs in the loan application. True will render a dropdown menu, false will render buttons for each program.

export const programLoanInfo = [
  // update with program names and corresponding loan URLs with market segment code from Master Loan Parameters
  {
    name: "Program in Professional Software Development",
    url: "https://my.skills.fund/application?lenderCode=SKACLPSD20",
    loanInfo: {
      // match loanInfo in first metro below
      maxLoanAmt: 33500,
      loanTerm36: true,
      loanTerm60: true,
      "Interest Only": {
        // interest-only
        k: 8,
        apr36: 11.42,
        apr60: 12.76,
      },
      "Immediate Repayment": null, // immediate repayment
    },
    defaultLoanType: "Interest Only", // leave at 0 for interest-only, set to 1 for immediate repayment
    showMetros: false, // true if there are multiple metros with different tuition amounts for the same program
    showLoanTypes: false, // true if both IR and IO are available
    loanTypes: ["Interest Only"],
    locations: ["Metro 1"],
    metros: [
      // list in same order as locations array above
      {
        location: "Metro 1",
        loanInfo: {
          // // match loanInfo to Program 1 above
          maxLoanAmt: 33500,
          loanTerm36: true,
          loanTerm60: true,
          "Interest Only": {
            k: 8,
            apr36: 11.42,
            apr60: 12.76,
          },
          "Immediate Repayment": null,
        },
      },
    ],
  },
  // {
  // 	name: 'Bootcamp Part Two',
  // 	url: 'https://my.skills.fund/application?lenderCode=SKAL317',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 6750,
  // 		loanTerm36: true,
  // 		loanTerm60: true,
  // 		'Interest Only': {
  // 			k: 4,
  // 			apr36: 11.34,
  // 			apr60: 12.58
  // 		},
  // 		'Immediate Repayment': null
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false,
  // 	showLoanTypes: false,
  // 	loanTypes: ["Interest Only"],
  // 	locations: [ 'Metro 1' ],
  // 	metros: [
  // 		{
  // 			location: 'Metro 1',
  // 			loanInfo: {
  // 				// match loanInfo to Program 2 loanInfo above
  // 				maxLoanAmt: 6750,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 4,
  // 					apr36: 11.34,
  // 					apr60: 12.58
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		}
  // 	]
  // },
  // {
  // 	name: 'Bootcamp Part One & Two',
  // 	url: 'https://my.skills.fund/application?lenderCode=SKAL2317',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 12500,
  // 		loanTerm36: true,
  // 		loanTerm60: true,
  // 		'Interest Only': {
  // 			k: 4,
  // 			apr36: 11.25,
  // 			apr60: 12.55
  // 		},
  // 		'Immediate Repayment': null
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false,
  // 	showLoanTypes: false,
  // 	locations: [ 'Metro A' ],
  // 	metros: [
  // 		{
  // 			location: 'Metro A',
  // 			loanInfo: {
  // 				// match loanInfo to Program 3 loanInfo above
  // 				maxLoanAmt: 12500,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 4,
  // 					apr36: 11.25,
  // 					apr60: 12.55
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		}
  // 	]
  // },
  // {
  // 	name: 'Bootcamp Part Two + Career Track',
  // 	url: 'https://my.skills.fund/application?lenderCode=SKAL3417',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 24750,
  // 		loanTerm36: true,
  // 		loanTerm60: true,
  // 		'Interest Only': {
  // 			k: 6,
  // 			apr36: 11.08,
  // 			apr60: 12.48
  // 		},
  // 		'Immediate Repayment': null
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false,
  // 	showLoanTypes: false,
  // 	locations: [ 'Metro A' ],
  // 	metros: [
  // 		{
  // 			location: 'Metro A',
  // 			loanInfo: {
  // 				// match loanInfo to Program 3 loanInfo above
  // 				maxLoanAmt: 24750,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 6,
  // 					apr36: 11.08,
  // 					apr60: 12.48
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		}
  // 	]
  // },
  // {
  // 	name: 'Bootcamp Part One & Two + Career Track',
  // 	url: 'https://my.skills.fund/application?lenderCode=SKAL23417',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 30500,
  // 		loanTerm36: true,
  // 		loanTerm60: true,
  // 		'Interest Only': {
  // 			k: 7,
  // 			apr36: 11.42,
  // 			apr60: 12.76
  // 		},
  // 		'Immediate Repayment': null
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false,
  // 	showLoanTypes: false,
  // 	locations: [ 'Metro A' ],
  // 	metros: [
  // 		{
  // 			location: 'Metro A',
  // 			loanInfo: {
  // 				// match loanInfo to Program 3 loanInfo above
  // 				maxLoanAmt: 30500,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 7,
  // 					apr36: 11.42,
  // 					apr60: 12.76
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		}
  // 	]
  // },
  // {
  // 	name: 'Career Track',
  // 	url: 'https://my.skills.fund/application?lenderCode=SKAL417',
  // 	loanInfo: {
  // 		// match loanInfo in first metro below
  // 		maxLoanAmt: 18000,
  // 		loanTerm36: true,
  // 		loanTerm60: true,
  // 		'Interest Only': {
  // 			k: 5,
  // 			apr36: 11.16,
  // 			apr60: 12.51
  // 		},
  // 		'Immediate Repayment': null
  // 	},
  // 	defaultLoanType: 'Interest Only', // leave at 0 for interest-only, set to 1 for immediate repayment
  // 	showMetros: false,
  // 	showLoanTypes: false,
  // 	locations: [ 'Metro A' ],
  // 	metros: [
  // 		{
  // 			location: 'Metro A',
  // 			loanInfo: {
  // 				// match loanInfo to Program 3 loanInfo above
  // 				maxLoanAmt: 18000,
  // 				loanTerm36: true,
  // 				loanTerm60: true,
  // 				'Interest Only': {
  // 					k: 5,
  // 					apr36: 11.16,
  // 					apr60: 12.51
  // 				},
  // 				'Immediate Repayment': null
  // 			}
  // 		}
  // 	]
  // }
]

// ***** BEGIN LOAN CALC TEXT INFO *****
export const programMaxText =
  "Choose the loan amount that works best for you. Borrow up to $23,000 for tuition and up to $10,500 for cost of living."

export const paymentTable = {
  headers: ["Program", "Tuition", "Cost of Living", "Max Total"],
  data: [
    {
      name: "Bootcamp Part One",
      tuition: "$3,500",
      col: "$2,250",
      max: "$5,750",
    },
    {
      name: "Bootcamp Part Two",
      tuition: "$4,500",
      col: "$2,250",
      max: "$6,750",
    },
    {
      name: "Career Track",
      tuition: "$12,000",
      col: "$6,000",
      max: "$18,000",
    },
    {
      name: "Bootcamp Part One & Two	",
      tuition: "$8,000",
      col: "$4,500",
      max: "$12,500",
    },
    {
      name: "Bootcamp Part Two + Career Track	",
      tuition: "$16,500",
      col: "8,250",
      max: "$24,750",
    },
    {
      name: "Bootcamp Part One & Two + Career Track	",
      tuition: "$20,000",
      col: "10,500",
      max: "$30,500",
    },
  ],
  show: false,
}

// ***** END LOAN CALC TEXT INFO *****

// ***** Snippets for Netlify *****

// before body Hubspot

// <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/3871135.js"></script>

// before head Crazyegg

// <script type="text/javascript" src="//script.crazyegg.com/pages/scripts/0076/9926.js" async="async"></script>

// before body Yotpo

// <script type="text/javascript"> (function e(){var e=document.createElement("script");e.type="text/javascript",e.async=!0, e.src="//staticw2.yotpo.com/vDnpGV6DFy9oeKaj5UugzYG5TCeQ4gxgEVs9BO3n/widget.js";var t=document.getElementsByTagName("script")[0]; t.parentNode.insertBefore(e,t)})(); </script>
