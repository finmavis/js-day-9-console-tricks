console.log("========== Regular ==========")
console.log("===== console.log() =====");
console.log("Hello!");
console.log("\n");

console.log("========== Interpolate ==========")
console.log(`===== console.log("Hello i'm a %s string", "VAR STRING") =====`);
console.log("Hello i'm a %s string", "VAR STRING");
console.log("\n");

console.log("========== Styled ==========")
console.log(`===== console.log("%c I'm styled text", "font-size:20px") =====`);
console.log("%c I'm styled text", "font-size:20px")
console.log("\n");

console.log("========== Warning ==========")
console.log("===== console.warn('OH NOOO!') =====");
console.warn("OH NOOO!");
console.log("\n");

console.log("========== Error ==========")
console.log("===== console.error('DANG') =====");
console.error('DANG');
console.log("\n");

console.log("========== Info ==========")
console.log("===== console.info('Fun Facts') =====");
console.info("Fun Facts");
console.log("\n");

console.log("========== Testing ==========")
console.log("===== console.assert(1 === 2, 'That is wrong') =====");
console.assert(1 === 2, "That is wrong");
console.log("\n");

const p = document.querySelector("p");
console.log("========== Viewing DOM Elements ==========")
console.log("===== console.log(ELEMENT) =====");
console.log("===== console.dir(ELEMENT) =====");
console.log(p)
console.dir(p)
console.log("\n");

console.log("========== Grouping ==========")
console.log("===== console.group('GROUP NAME')");
console.log("===== console.log('TEXT IN HERE')");
console.log("===== console.log('TEXT 2 IN HERE')");
console.log("===== console.groupEnd('GROUP NAME')");
console.log("\n");
console.group('GROP NAME');
console.log('TEXT IN HERE');
console.log('TEXT 2 IN HERE');
console.groupEnd('GROP NAME');
console.group('GROP NAME 2');
console.log('TEXT IN HERE');
console.log('TEXT 2 IN HERE');
console.groupEnd('GROP NAME 2');
console.groupCollapsed('GROP NAME Collapsed');
console.log('TEXT IN HERE');
console.log('TEXT 2 IN HERE');
console.groupEnd('GROP NAME Collapsed');
console.log("\n");

console.log("========== Counting ==========")
console.log("===== console.count('WES') =====");
console.count('WES');
console.count('WES');
console.count('WES');
console.count('STEVE');
console.count('STEVE');
console.log("\n");

console.log("========== Timing ==========")
console.log("===== console.time('Get Document') =====");
console.log("===== document.querySelector('p') =====");
console.log("===== console.timeEnd('Get Document') =====");
console.time("Get Document")
document.querySelector("p");
console.timeEnd("Get Document")
console.log("\n");

const data = [{name: 'BAM', age: 10}, {name: 'Ala', age: 20}];
console.log("========== Table ==========");
console.log("===== console.table('YOUR DATA') =====");
console.table(data);
console.log("\n");

console.time("Fetching Data");
fetch("https://api.github.com/users/finmavis")
    .then(data => data.json())
    .then(data => {
        console.log(data);
        console.timeEnd("Fetching Data");
    });