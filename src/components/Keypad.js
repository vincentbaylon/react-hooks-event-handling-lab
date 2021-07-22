// Code Keypad Component Here
function onChangeEvent(event) {
    console.log('Entering password...')
}

function Keypad() {
    return (
        <>
        <input type="password" onChange={onChangeEvent}></input>
        </>
    )
}

export default Keypad