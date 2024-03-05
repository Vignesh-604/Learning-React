function customRender(reactElement, container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // domElement.setAttribute("href", reactElement.props.href)
    // domElement.setAttribute("target", reactElement.props.target)

    for (const prop in reactElement.props) {
        if (prop == "children") continue                // in case of other html tags present
        else {
            domElement.setAttribute(prop, reactElement.props[prop])
        }
    }

    container.appendChild(domElement)
}

// How react renders a component from component files - a tag for example
const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: "Click here"
}

const NewAppElement = {
    type: "h1",
    children: "Component in custom react file"
  }

let container = document.querySelector("#root")

customRender(reactElement, container)
customRender(NewAppElement, container)