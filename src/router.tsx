import { render } from "solid-js/web";
import App from "./App";
import Privacy from "./Pravicy";
import Terms from "./Terms";
import { Router, Route, Routes } from "@solidjs/router";

const Home = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" component={App} /> 
                <Route path="/privacy" component={Privacy} /> 
                <Route path="/terms" component={Terms} /> 
            </Routes>
        </Router>
    )
}
export default Home;
