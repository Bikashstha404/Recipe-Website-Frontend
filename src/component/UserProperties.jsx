export function Age({value}){
    return (
        <><span>Age: {value}</span></>
    )
}

export function Height({value}){
    return (
        <><span>Height: {value}</span></>
    )
}

export default function UserProperties(props){
    const {age, height} = props; // we can write down age and height in the parameter either
    return(
        <>
            <Age value={age}/>
            <br/>
            <Height value ={height}/>
        </>
    )
}