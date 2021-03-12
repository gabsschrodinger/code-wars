/* Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

    likes [] -- must be "no one likes this"
    likes ["Peter"] -- must be "Peter likes this"
    likes ["Jacob", "Alex"] -- must be "Jacob and Alex like this"
    likes ["Max", "John", "Mark"] -- must be "Max, John and Mark like this"
    likes ["Alex", "Jacob", "Mark", "Max"] -- must be "Alex, Jacob and 2 others like this" */

function likes(names) {
    let nameString = "";
    if(names.length === 0) {
      return "no one likes this";
    } else {
      for(let i = 0; i < names.length; i++) {
        if(i === 0) {
          if(names.length === 1) {
            return `${names[i]} likes this`;
          } else {
            nameString += names[i];
          }
        } else if(names.length > 3 && i == 2) {
          nameString += ` and ${names.length - i} others like this`;
          return nameString;
        } else if (i === (names.length - 1)) {
          nameString += ` and ${names[i]} like this`;
          return nameString;
        } else {
          nameString += `, ${names[i]}`;
        }
      }
    }
  }