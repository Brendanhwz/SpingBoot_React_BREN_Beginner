//202502156 Writing name components

export function FirstComponent() {
    return <h1>First Component</h1>
}

export function SecondComponent() {
    return <h2>Second Components</h2>
}

export function ThirdComponent() {
    return <h3>Third Components</h3>
}

//Writing default export component
function MyComponent (props) {
    return <h1>Main MyComponent Default {props.property}</h1>
}

export default MyComponent