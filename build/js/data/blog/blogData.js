const blogData = [
    {
        status: 'published',
        photoName: 'home-loan.png',
        photoAlt: 'Home Loan',
        buttonText: 'Home Loan',
        buttonLink: 'https://www.seb.ee/en/private/loans/home-loan#paragraph38253',
        titleText: 'Home Loan',
        titleLink: 'https://www.seb.ee/en/private/loans/home-loan#paragraph38253',
        paragraph: 'Home loan calculator allowing to calculate maximum loan amount based on your income, financial liabilities, number of borrowers and demendents. Secondly, it allows to calculate monthly payments based on real estate price, down payment, loan period, Euribor term, intrest reate, payment method and loan protection insurance.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'July 2023'
    },
    {
        status: 'published',
        photoName: 'euribor-graphs.png',
        photoAlt: 'Base interest rates',
        buttonText: 'Base interest rates',
        buttonLink: 'https://www.seb.lt/en/base-interest-rates',
        titleText: 'Base interest rates',
        titleLink: 'https://www.seb.lt/en/base-interest-rates',
        paragraph: 'This is a graphic tool to represent Euribor rates history. It allows to select different time periods and different Euribor terms. The data is fetched from SEB API and displayed using Highcharts library. In addition, you can view SOFR USD, STR and base historic interest rates.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'April 2024'
    },
    {
        status: 'published',
        photoName: 'consumer-loan.png',
        photoAlt: 'Consumer Loan',
        buttonText: 'Consumer Loan',
        buttonLink: 'https://www.seb.lt/en/private/loans/consumer-loan#paragraph24605',
        titleText: 'Consumer Loan',
        titleLink: 'https://www.seb.lt/en/private/loans/consumer-loan#paragraph24605',
        paragraph: 'This loan calculator calculates two things. First, it calculates the maximum loan amount based on your income, financial liabilities, number of demendents. Second, it calculates monthly payments, contract fee APRC and total amount to be repaid based on loan amount, loan period, intrest reate and loan protection insurance.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'September 2022'
    },
    {
        status: 'published',
        photoName: 'Leasing.png',
        photoAlt: 'Leasing calculator',
        buttonText: 'Leasing calculator',
        buttonLink: 'https://www.seb.lv/en/private/loans/leasing#paragraph',
        titleText: 'Leasing calculator',
        titleLink: 'https://www.seb.lv/en/private/loans/leasing#paragraph',
        paragraph: 'Calculator offers options to calculate Financial lease, Financial lease without VAT and Operating lease. It calculates monthly payments, agreement fee, APRC and more based on real estate price, down payment, lease period, residual value intrest reate and Euribor period. In addition, you have an option to view payment schedule and add different leasing options for comparison.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'May 2023'
    },
    {
        status: 'published',
        photoName: 'pension-pillar-2-lv.png',
        photoAlt: 'Pension pillar 2',
        buttonText: 'Pension pillar 2',
        buttonLink: 'https://www.seb.lv/en/private/savings-and-investments/pension/2nd-pension-pillar-plans#pensionCalculator',
        titleText: 'Pension pillar 2',
        titleLink: 'https://www.seb.lv/en/private/savings-and-investments/pension/2nd-pension-pillar-plans#pensionCalculator',
        paragraph: 'This calculator allows to estimate your future pension savings and separately see your profit based on your current age, monthly income, current savings in 2nd pillar and monthly contributions. You get recommendations for the best plan for you and alternative plans to choose from.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'June 2024'
    },
    {
        status: 'published',
        photoName: 'return-on-investments.png',
        photoAlt: 'Return on investments',
        buttonText: 'Return on investments',
        buttonLink: 'https://www.seb.lt/en/private/savings-and-investments/robo-advisor#paragraph34084',
        titleText: 'Return on investments',
        titleLink: 'https://www.seb.lt/en/private/savings-and-investments/robo-advisor#paragraph34084',
        paragraph: 'Calculates potential return on investments based on initial investment amount, monthly contributions, investment period and expected annual return. It also shows a diagram on how your investment could grow over time with a detailed year-by-year breakdown of your investment growth.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'June 2024'
    },





    {
        status: 'published',
        photoName: 'service-plans-private.png',
        photoAlt: 'Service Plans Private',
        buttonText: 'Service Plans Private',
        buttonLink: 'https://www.seb.lt/en/private/daily-banking/renewed-service-plans-private-customers#paragraph30508',
        titleText: 'Service Plans Private',
        titleLink: 'https://www.seb.lt/en/private/daily-banking/renewed-service-plans-private-customers#paragraph30508',
        paragraph: 'This tool helps to choose the most suitable service plan based on your banking habits. It takes into account your age, salary range, monthly withdrawals, your traveling habits to recommend the most suitable plan for you.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'March 2024'
    },
    {
        status: 'published',
        photoName: 'service-plans-business.png',
        photoAlt: 'Service Plans Business',
        buttonText: 'Service Plans Business',
        buttonLink: 'https://www.seb.lt/en/business/daily-banking/service-plans-business-0#paragraph30770',
        titleText: 'Service Plans Business',
        titleLink: 'https://www.seb.lt/en/business/daily-banking/service-plans-business-0#paragraph30770',
        paragraph: 'This tool is similar to Private Service Plans calculator, but offers most suitable plans for business entities and takes into consideration a bit different things like monthly number of payments, number of bank accounts and a number of debit cards.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'March 2024'
    },
    {
        status: 'published',
        photoName: 'term-deposit.png',
        photoAlt: 'Term Deposit',
        buttonText: 'Term Deposit',
        buttonLink: 'https://www.seb.ee/en/private/savings-and-investments/savings/term-deposit-privates#termpDeposit_tm',
        titleText: 'Term Deposit',
        titleLink: 'https://www.seb.ee/en/private/savings-and-investments/savings/term-deposit-privates#termpDeposit_tm',
        paragraph: 'Term deposit calculator allows to calculate how much you will earn based on a deposit amount, currency, deposit period and annual interest rate. Interest rate data for different periods is automatically fetched from backend API.',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'September 2024'
    },
    {
        status: 'draft',
        photoName: '1.jpeg',
        photoAlt: 'Design photo',
        buttonText: 'UX/UI',
        buttonLink: '#',
        titleText: 'Light trails on highway',
        titleLink: '#',
        paragraph: '',
        authorPhotoName: 'me.jpeg',
        authorPhotoAlt: 'Authors photo',
        author: 'Rolandas',
        date: 'June 2017'
    },

];

export { blogData };
