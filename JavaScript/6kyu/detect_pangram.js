function isPangram(string){
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for(let i = 0; i < letters.length; i++) {
      if(!string.toUpperCase().includes(letters[i])) return false;
    }
    return true;
}