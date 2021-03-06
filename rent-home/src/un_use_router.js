import React from 'react';
import ReactDOM from 'react-dom';

const About = function () {
    return <h1>about</h1>
};
const Inbox = function () {
    return <h1>Inbox</h1>
};
const Home = function () {
    return <h1>home</h1>
};

class App extends React.Component {

    constructor(){
        super();
        this.state={
            router:""
        }
    }

    getInitialState() {
        return {
            route: window.location.hash.substr(1)
        }
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({
                route: window.location.hash.substr(1)
            });
        })
    }

    render() {
        let Child
        switch (this.state.route) {

            case '/about':
                Child = About;
                break;
            case '/inbox':
                Child = Inbox;
                break;
            default:
                Child = Home;
        }

        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><a href="#/about">About</a></li>
                    <li><a href="#/inbox">Inbox</a></li>
                </ul>
                <Child/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('#app'))