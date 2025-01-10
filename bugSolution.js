```javascript
const query = {
  field: { $regex: /pattern/i } 
};

const collate = {
  locale: 'en',
  strength: 2 //strength should be adjusted as needed
};

db.collection('myCollection').find(query, { collation: collate }).toArray((err, result) => {
  if (err) throw err;
  console.log(result); 
});
```