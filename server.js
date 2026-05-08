const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static('public'));

     const pets = [
    {id: 1, type: "dog", name: "Diesel"},
    {id: 2, type: "cat", name: "Milo"},
    {id: 3, type: "bird", name:"Sky"}
 ];


app.get('/course', (req, res) =>{
    res.send('CIS 131- Exam 4');
});

app.get('/pets', (req, res) =>{
    res.json(pets); 
});

app.get('/pets/:id', (req, res) => { //come back
    // const pets = [
    //     {id: 1, type: "dog", name: "Diesel"},
    //     {id: 2, type: "cat", name: "Milo"},
    //     {id: 3, type: "bird", name:"Sky"}
    // ];
    let petsId = (i => i.pets.id === id)
    res.json(petsId);
});

app.get('pets/search'), (req, res) => { 
    const pets = [
        {id: 1, type: "dog", name: "Diesel"},
        {id: 2, type: "cat", name: "Milo"},
        {id: 3, type: "bird", name:"Sky"}
        ];
        let queryString = req.query.name;
        res.json(queryString);

}

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
});