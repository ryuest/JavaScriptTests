function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    
      var re = (/^(Mr\.|Dr\.|Er\.|Ms\.|Mrs\.)\s?[a-z|A-Z]+$/);
    
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}

function main() {
    const re = regexVar();
    const s = "Mr. Zer";
    const w = "Heil. Zer"
    
    console.log(!!s.match(re));
    console.log(!!w.match(re));
    
}

main()