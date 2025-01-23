//largestUniqueSubstring

export default function Javascript() {
  const largestUniqueSubstring = (str) => {
    let uniqueChars = "";
    let longest = "";

    for (let char of str) {
      if (uniqueChars.includes(char)) {
        uniqueChars = uniqueChars.slice(uniqueChars.indexOf(char) + 1);
      }
      uniqueChars += char;
      if (uniqueChars.length > longest.length) {
        longest = uniqueChars;
      }
    }

    return longest;
  };

  const input = "abcgfdhjbbd";
  const output = largestUniqueSubstring(input);
  console.log("Largest unique substring:", output);

  // Even Odd

  let arr = [1, 2, 4, 5, 6, 7, 9];

  const even = arr.filter((num) => num % 2 === 0);
  console.log(even);
  const odd = arr.filter((num) => num % 2 !== 0);
  console.log(odd);

  // Grouped cities as per length

  const cities = ["Pune", "Ahmedabad", "Rajkot", "Mumbai", "Delhi", "Kanpur"];

  const groupedCities = [];
  cities
    .sort((a, b) => b.length - a.length)
    .forEach((city) => {
      const lastGroup = groupedCities[groupedCities.length - 1];
      if (!lastGroup || lastGroup[0].length !== city.length) {
        groupedCities.push([city]);
      } else {
        lastGroup.push(city);
      }
    });

  console.log(groupedCities);

  return (
    <>
      <h1>JS in console</h1>
    </>
  );
}
