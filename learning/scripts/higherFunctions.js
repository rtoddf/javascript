const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for
for(let i=0; i < companies.length; i++) {
    // console.log(companies[i])
}

// forEach
companies.forEach(function(company, index, array) {
    // console.log(company.name)
})

// get 21 and older
// filter
// const canDrink = ages.filter(function(age) {
//     if(age >= 21){
//         return true
//     }
// })

const canDrink = ages.filter(age => age >= 21);
console.log('canDrink: ', canDrink)

// filter retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log('retailCompanies: ', retailCompanies)

//filter companies that started in the 80s
const eightiesCompanies = companies.filter(company => (company.start >= 1980) && (company.start < 1990));
console.log('eightiesCompanies: ', eightiesCompanies)

// filter companies that lasted at least 10 years
const lastedTenYears = companies.filter(company => company.end - company.start >= 10);
console.log('lastedTenYears; ', lastedTenYears)

// map
// create new arrays from current array
//create array of company names
const companyNames = companies.map(company => company.name)
console.log('companyNames: ', companyNames)

// using template syntax, create an array with info as strings
const test = companies.map(company => `${company.name} [${company.start} - ${company.end}]`)
console.log('test: ', test)

// square each item in an array
// maps can be chained
const squared = ages
    .map(age => Math.sqrt(age))
    .map(age => age * 2)
    .map(age => age.toFixed(0))

console.log('squared: ', squared)

// sort
// sort companis by start date
const sortedCompanies = companies.sort((a, b) => (a.start > b.start) ? 1 : -1);
console.log('sortedCompanies: ', sortedCompanies)

// sort ages
// this won't work
// const sortedAges = ages.sort();
const sortedAges = ages.sort((a, b) => a - b);
const sortedAgesDesc = ages.sort((a, b) => b - a);
console.log('sortedAges: ', sortedAges)
console.log('sortedAgesDesc: ', sortedAgesDesc)

// reduce
