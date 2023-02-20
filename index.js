// Program to show the required subject per course
// Greenfield High School
let sci = 'Pysics, Chemistry, Biology and Technical Drawing';
let arts = 'Government, Economics, Literature and History';
let soSci = 'Accounting, Commerce, Marketing and Geography ';
let genSub = 'English, Mathematics, ';
let choice = 4 ;

console.log('Welcome to');
console.log('Greenfield High School');
console.log('These are our courses: ');
    console.log('a. Science = 1');
    console.log('b. Social Science = 2');
    console.log('c. Arts = 3');
    
prompt('Enter your subject code: ', choice);
if (choice > 0 && choice < 2 ) {
    console.log('Your subjects as Science student are: ');
    console.log(genSub + sci); 
}
else if (choice > 1 && choice < 3 ) {
    console.log('Your subjects as Social Science student are: ');
    console.log(genSub + soSci); 
}
else if (choice > 2 && choice < 4 ) {
    console.log('Your subjects as Arts student are: ');
    console.log(genSub + arts); 
}

else {
    console.log('Your subjects are: ');
    console.log(genSub); 
}