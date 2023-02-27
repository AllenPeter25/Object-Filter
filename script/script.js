// Objective: Implement a generic object array filter

function filterCollection(...args){
    arr = args[0];
    searchAll = args[2];
    noOfSerachElements = args[1].split(" ").length;
    noOfMatches = 0;
    keys = args.slice(3);
    return arr.filter((element) => {
        searchKeys = args[1].split(" ");
        for(key of keys){
            if(key.split(".").length > 1){
                [key1 , key2] = key.split(".")
                if(element[key1][key2]?.length){
                    for(ele of searchKeys){
                        if(element[key1][key2].toLowerCase().includes(ele.toLowerCase())){
                            searchKeys.splice(searchKeys.indexOf(ele),1)
                            noOfMatches++;
                        }
                    }
                }
                else{
                    for(ele of searchKeys){
                        for(val of element[key1]){
                            if(val[key2].toLowerCase().includes(ele.toLowerCase())){
                                searchKeys.splice(searchKeys.indexOf(ele),1)
                                noOfMatches++;
                            }
                        }
                    }
                }
            }
            else{
                for(ele of searchKeys){
                    if(element[key].toLowerCase().includes(ele.toLowerCase())){
                        searchKeys.splice(searchKeys.indexOf(ele),1)
                        noOfMatches++
                    }
                }
            }
        }
        if(searchAll){
            temp = noOfMatches
            noOfMatches = 0
            return(temp == noOfSerachElements?true:false)
        }
        else{
            temp = noOfMatches
            noOfMatches = 0
            return (temp?true:false)
        }
    })
}

arr =[{
    name: "Fortuner",
    description: "The Toyota Supra (Japanese: トヨタ・スープラ, Hepburn: Toyota Sūpura) is a sports car and grand tourer manufactured by the Toyota Motor Corporation beginning in 1978. The name 'supra' is derived from the Latin prefix, meaning 'above', 'to surpass' or 'go beyond'",
    contentType: [{
        name: 'en_US',
    }],
    locales: {
        name: "Innova",
        description: "Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is one of the largest automobile manufacturers in the world, producing about 10 million vehicles per year."
    } 
},
{
    name: "Fortuner",
    description: "The Toyota Supra (Japanese: トヨタ・スープラ, Hepburn: Toyota Sūpura) is a sports car and grand tourer manufactured by the Toyota Motor Corporation beginning in 1978. The name 'supra' is derived from the Latin prefix, meaning 'above', 'to surpass' or 'go beyond'",
    contentType: [{
        name: 'en_US',
    }],
    locales: {
        name: "Innova",
        description: "Toyota Motor Corporation is a Japanese multinational automotive manufacturer headquartered in Toyota City, Aichi, Japan. It was founded by Kiichiro Toyoda and incorporated on August 28, 1937. Toyota is one of the largest automobile manufacturers in the world, producing about 10 million vehicles per year."
    } 
}]

console.log(filterCollection(arr,'en_US Toyota', true , 'name', 'description', 'contentType.name', 'locales.name', 'locales.description'))