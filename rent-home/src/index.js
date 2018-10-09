// 首先我们需要导入一些组件...
import React from "react";
import ReactDOM from "react-dom";
import Main from "./pager/Main";
import {createStore} from "redux";
import {Provider} from "react-redux";
import reducer from "./config/ReducerConfig";
const store = createStore(reducer);
require('./styles/map.css');
require('./styles/UploadImage.css');

class App extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Provider store={store}>
                <Main/>
            </Provider>
        )

    }
}

ReactDOM.render(<App />, document.getElementById('app'));

