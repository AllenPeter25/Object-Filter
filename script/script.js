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
    name: "Glanza",
    description: "Toyota Glanza is a 5 seater Hatchback with a mileage of 22.35 Kmpl depending upon it's transmission and fuel type. Glanza's 4 cylinder, 1197 cc, K12N can generate 88.50 bhp @ 6000 rpm power and 114 Nm @ 4400 rpm torque. It has a fuel tank capacity of 37 Litres L.",
    contentType: [{
        name: 'en_US',
    }],
    locales: {
        name: "Camry",
        description: "The Toyota Camry Hybrid is a premium executive sedan priced at Rs 41.7 lakh (ex-showroom). As a result, it goes up against the Skoda Superb, and even ventures into the BMW 2 Series Gran Coupe and Mercedes A-Class territory. Yes, this Toyota doesn’t have the same snob value, but remains one of the unique long three-box sedans with its own USPs, like hybrid power, focus on rear-seat comfort, etc. — all of which we will get to in a bit. Camry is Toyota’s only sedan in India and now gets cosmetic updates and new features in its eighth-gen avatar."
    } 
},
{
    name: "Mustang",
    description: "The Ford Mustang has 1 Petrol Engine on offer. The Petrol engine is 4951 cc . It is available with Automatic transmission.Depending upon the variant and fuel type the Mustang has a mileage of 13.0 kmpl & Ground clearance of Mustang is 137mm. The Mustang is a 4 seater 8 cylinder car and has length of 4784mm, width of 2080mm and a wheelbase of 2720mm.",
    contentType: [{
        name: 'en_US',
    }],
    locales: {
        name: "Endeavour",
        description: "The Ford Endeavour 2009-2014 has 2 Diesel Engine on offer. The Diesel engine is 2499 cc and 2953 cc . It is available with Manual & Automatic transmission.Depending upon the variant and fuel type the Endeavour 2009-2014 has a mileage of 11.4 to 13.1 kmpl & Ground clearance of Endeavour 2009-2014 is 210mm. The Endeavour 2009-2014 is a 7 seater 4 cylinder car and has length of 5060mm, width of 1788mm and a wheelbase of 2860mm."
    } 
}]

console.log(filterCollection(arr,'en_US Toyota', true , 'name', 'description', 'contentType.name', 'locales.name', 'locales.description'))