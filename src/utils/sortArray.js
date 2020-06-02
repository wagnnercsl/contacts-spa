function sortArray(array, field) {
    return array.sort((a, b) => {
    
        const stringA = a[field].toLowerCase();
        const stringB = b[field].toLowerCase();
    
        let result = 0;
        if(stringA > stringB) {
          result = 1;
        }
        else if(stringA < stringB) {
          result = -1;
        }
    
        return result;
    });
}

export default sortArray;