// There are a massive number of array methods. This makes it difficult to 
// choose which array method to use. 

// To figure out which method to use, ask the question: what do I want? 

// 1. I want to mutate the original array. 
    // Add to original: .push() or .unshift()
    // Remove from original: .pop(), .shift(), .splice()
    // Others: .reverse(), .sort(), .fill()

// 2. I want a new array. 
    // Computed from original: .map()
    // Filtered with condition: .filter()
    // Potion of original: .slice()
    // Combining arrays: .concat()
    // Flattening original: .flat()
    // Flattening and mapping original: .flatMap()

// 3. I want an array index.
    // Index based on element value: .indexOf()
    // Index based on test condition: .findIndex()

// 4. I want to know if an array includes something. 
    // Based on value: .includes()
    // Based on test condition: .some(), every()

// 5. I want to tranform to value. 
    // Transform array to string: .join()
    // Reduce array to one value: .reduce()

// 6. I want an array element. 
    // Find element on test condition: .find()

// 7. I want to loop the array. 
    // Loop array: .forEach()