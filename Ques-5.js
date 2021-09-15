// creating list of object employee

const employee = [
    { name: 'Pratyush', age: 22, salary: 2000, dob: '10/5/1998' },
    { name: 'Tanmay Singh', age: 23, salary: 8000, dob: '8/3/1997' },
    { name: 'Ajey Nagar', age: 26, salary: 3000, dob: '3/6/1995' },
    { name: 'Aman Jain', age: 20, salary: 9000, dob: '23/1/2001' },
    { name: 'Abhishek', age: 28, salary: 500, dob: '15/2/1993' },
    { name: 'Ayush', age: 25, salary: 800, dob: '11/9/1996' }
];

// filter all employees with salary greater than 5000

const checkSal = employee.filter((sal) => {
    return sal.salary > 5000;
});
console.log(checkSal);

// group employee on the basis of their age


function groupBy(key) {                                 // groupBy function takes key as argument (eg.age)
    return function group(array) {                  // return another function group, which takes array of objects that we like to sort.
        return array.reduce((acc, obj) => {     // now reducing array using an empty object as the accumulator
            const prop = obj[key];         // obj[key] here will be '24'.
            acc[prop] = acc[prop] || [];   // At this point acc['24'] doesn't yet exist, so it will be an empty array.
            // it checks if acc['24'] exists, and if not, creates it and assigns a value of an empty array.

            acc[prop].push(obj);   // now, we push our object into the right group
            return acc
        }, {});
    };
}
const groupByAge = groupBy('age');
console.log(groupByAge(employee));

// fetch employees with salary less than 1000 and age greater than 20.

const fetchEmp = employee.filter((fetch) => {
    return fetch.salary < 1000 && fetch.age > 20;
});
console.log(fetchEmp);

// Then give them an increment 5 times their salary.

const sal_Inc1 = fetchEmp[0].salary * 5;
const sal_Inc2 = fetchEmp[1].salary * 5;
console.log(sal_Inc1, sal_Inc2);