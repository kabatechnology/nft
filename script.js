let words = ['New York', 'London', 'Tokyo', 'Paris', 'Los Angeles', 'Beijing', 'Moscow', 
'Sydney', 'Rio de Janeiro', 'Berlin', 'Toronto', 'Madrid', 'Rome', 'Istanbul', 
'Singapore', 'Hong Kong', 'Chicago', 'Mumbai', 'Dubai', 'Seoul', 'Barcelona', 
'Bangkok', 'Buenos Aires', 'Cairo', 'Cape Town', 'Melbourne', 'Amsterdam', 
'Shanghai', 'Vienna', 'Johannesburg', 'Lisbon', 'Mexico City', 'Auckland', 
'Jakarta', 'Athens', 'Budapest', 'Vancouver', 'San Francisco', 'Stockholm', 
'Montreal', 'Dublin', 'Zurich', 'Sao Paulo', 'Milan', 'Manila', 'Tel Aviv', 
'Prague', 'Brussels', 'Copenhagen', 'Warsaw',
    'computer', 'river', 'tree', 'open', 'ai', 'science', 'school', 'book', 
    'library', 'engineer', 'nature', 'beach', 'mountain', 'ocean', 'music', 
    'painting', 'guitar', 'piano', 'bicycle', 'rainbow', 'moon', 'star', 
    'planet', 'universe', 'galaxy', 'mango', 'apple', 'pineapple', 'banana', 
    'grape', 'cherry', 'blueberry', 'kiwi', 'papaya', 'watermelon', 'orange', 
    'coconut', 'avocado', 'peach', 'strawberry', 'dragonfruit', 'durian', 
    'tomato', 'cucumber', 'spinach', 'broccoli', 'cauliflower', 'eggplant', 
    'carrot', 'potato', 'onion'
  ];

const  myList = document.getElementById('myList');


console.log(keccak256(words[2]).toString('hex')) 

for (let i = 0; i < words.length; i++) {
    let hash = keccak256(words[i]).toString('hex')

    let bytes32Array = `["0x${hash}"] `;



    let wordandbytes =words[i] +  " ===> " + bytes32Array ;

    console.log(wordandbytes);

    /*
    let node = document.createElement('li');
    node.appendChild(document.createTextNode(wordandbytes));
    document.querySelector('ul').appendChild(node);

*/


    
  }

