let myName: string = 'Vishal Agarwala';
let interests: string[] = ['Crypto','Psychedelics','Digital Nomadism','Film','Music'];

console.log('Name: ' + myName.toUpperCase());
console.log('Career: Full Stack Engineer / Instructor');
console.log('Description: I like turtles');
console.log('');

console.log('My Interests:');
for (let i: number = 0; i < interests.length; i++) {
    console.log('* ' + interests[i]);
}
console.log('');

console.log('My Previous Experience:');
displayPosition('Symmetry Labs', 'VP, Sales', 'Oversaw revenue generation');
displayPosition('PHHHOTO', 'VP, Sales', 'Oversaw revenue generation');
displayPosition('VICE Media', 'Activation Manager', 'Digital marketing for The Creators Project');
console.log('');

console.log('My Skills:');
displaySkill('HTML', false);
displaySkill('CSS', false);
displaySkill('Webflow', true);
displaySkill('Sales', false);
displaySkill('Marketing', false);

/* Functions */

function displayPosition(company: string, title: string, description: string): void {
    console.log('* ' + title + ' at ' + company + ' - ' + description);
}

function displaySkill(skill: string, isCool: boolean): void {
    ( isCool ) ? console.log('* BAM: ' + skill) : console.log('* ' + skill);
}