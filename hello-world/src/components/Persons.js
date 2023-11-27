import React from "react";

const persons = [
{
        id: 1,
        name: "Bruce",
        age: 30,
        skill: "React"
    },
    {
        id: 2,
        name: "Clark",
        age: 25,
        skill: "Angular"
    },
    {
        id: 3,
        name: "Diana",
        age: 28,
        skill: "Vue"
    }
]

function Person({person}){
    return <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
}

function Persons() {
    const personList = persons.map(person => <Person key = {person.id} person={person}/>)
    return <div>{personList}</div>
}

export default Persons;