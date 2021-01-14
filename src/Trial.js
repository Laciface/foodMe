import { Component } from "react";

export default class Trial extends Component{

object = {
    color: 'green',
    height: 188,
    weight: 90,
    sex: 'male',
    age: 25,
    sport: 'waterpolo',
    hair: 'brown',
    hp: 100,
    attack: 300,
    defense: 700,
    speed: 250,
    weekness: null,
    1: 'L',
    2: 'A',
    3: 'C',
    4: 'I',
    5: '',
    6: null,
    7: '!',
    8: ''
} 

ObjIter = (obj)=> {
    // for (const [key, value] of Object.entries(obj)){
    //     console.log(`${key}: ${value}`);
    Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`))
    }


//.sort((a, b) => b[0].localeCompare(a[0]))

render(){
    this.ObjIter(this.object)

    return(
        2
    )
}

}
