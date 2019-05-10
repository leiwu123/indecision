console.log('App.js is running!');

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
};

const onRemoveAll = () => {
    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option)
};

const appRoot = document.getElementById('app');


const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {/* <p>{app.subtitle && app.subtitle}</p> */}
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>what should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            {/* {
                [99, 98, 97, 'Mike Smith', null, undefined, true]
            }
            {
                [<p key="1">a</p>,<p key="2">b</p>]
            } */}
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot)    
}

render();

// const user = {
//     name: 'Andrew',
//     age: 37,
//     location: 'Philadelphia'
// }
// function getLocation(location) {
//     if (location) {
//         return <p>Location: {location}</p>;
//     } else {
//         return undefined;
//     }
// }

// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1> 
//         {/* do one of two things */}

//         {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//         {/* if true do one thing, else do nothing at all */}

//         {getLocation(user.location)}
//         {/* if else */}
//     </div>
// );

// const appRoot = document.getElementById('app');

// ReactDOM.render(template, appRoot)
