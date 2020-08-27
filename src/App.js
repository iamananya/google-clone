import React from "react";
import Home from "./pages/Home";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
	return (
		<div className='App'>
			<Router>
				<Switch>
					<Route path='/search'>
						{/* <SearchPage /> */}
						<h1>This is a search Page</h1>
					</Route>
					<Route path='/'>
						<Home />
					</Route>
				</Switch>

				{/* Search results page */}
			</Router>
		</div>
	);
}

export default App;
