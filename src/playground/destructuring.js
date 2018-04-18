const book = {
   title: 'Ego is the enemy',
   author: 'Ryan Holiday',
   publisher: {
      name: 'Penguin'
   }
};

const { name: publisherName = "self published"} = book.publisher;

console.log(publisherName);

const [coffee, , price] = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];


console.log(`A medium ${coffee} costs ${price}`);