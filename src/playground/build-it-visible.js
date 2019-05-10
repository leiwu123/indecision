// const app = {
//     details: '',
//     show: false
// }

// const onToggleText = () => {
//     app.show = !app.show;
//     if (app.show === false) {
//         app.details = '';
//     } else {
//         app.details = 'here I am!';
//     }
//     showDetailsApp();
// }

// const appRoot = document.getElementById('app');

// const showDetailsApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onToggleText}>Show Details</button>
//             <p>{app.details}</p>
//         </div>       
//     )
//     ReactDOM.render(template, appRoot)    
// }

// showDetailsApp();


///////////////////////////////////////////////////////////////////

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibility}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey. These are some details you can now see!</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'))
// }

// render();


class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility,
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));