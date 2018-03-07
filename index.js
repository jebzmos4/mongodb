const { MongoClient } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log(`Unable to connect to db {err}`);
    }
    console.log('Connection to DB successful');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Something went wrong', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })
    // db.collection('Users').insertOne({
    //     name: 'Morfeoluwa Jebutu',
    //     age: 23,
    //     location: 'Lagos'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to add user', err);
    //     }
    //     console.log(b.collection('Users').insertOne({
    //     name: 'Morfeoluwa Jebutu',
    //     age: 23,
    //     location: 'Lagos'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to add user', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })JSON.stringify(result.ops, undefined, 2));
    // })

    // db.collection('Todos').find().toArray().then((result) => {
    //     console.log(result)
    //     console.log(JSON.stringify(result, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    db.collection('Todos').find().count((count, erro) => {
        if (err) {
            return console.log('there is an error', erro);
        }
        console.log(`The number of todos is: ${count}`);
    });

    db.close();
});