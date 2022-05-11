
// const Book = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("p", {}, props.year),
//         React.createElement("p", {}, props.price)
//     ])
// }

// const App = () => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {id: "title", className: "paragraph"}, "Hello world"),
//         React.createElement(Book, {name: "Js for beginners", year: 2019, price: 40}),
//         React.createElement(Book, {name: "React for beginners", year: 2020, price: 50}),
//         React.createElement(Book, {name: "Vue for beginners", year: 2021 ,price: 90}),
//     ])
// }

// ReactDOM.render(React.createElement(App), document.getElementById("root"));




const Book = (props) => {
    return (
        React.createElement("div", {id: "title", className: "text"}, [
            React.createElement("h1", {}, props.name),
            React.createElement("p", {}, props.year),
            React.createElement("span", {}, props.price)
        ])
    )
}


const App = () => {
    return (
        React.createElement("div", {}, [
            React.createElement(Book, {name: "Js for beginners", year: 2019, price: "100$"}),
            React.createElement(Book, {name: "Vue for beginners", year: 2020, price: "150$"}),
            React.createElement(Book, {name: "React for beginners", year: 2021, price: "200$"})
        ])
    )
}


ReactDOM.render(React.createElement(App), document.getElementById("root"));



