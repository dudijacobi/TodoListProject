import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import classNames from "classnames";
import TodoList from "./components/todoList/todoList";

import "./app.scss";
import ItemPage from "./components/itemPage";

interface AppProps {
  mode: "dark" | "light";
}

function App({ mode }: AppProps) {
  return (
    <Router>
      <div className={classNames("app", mode)}>
        <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/items/:id" component={ItemPage} />
          {/* <Route path="/about" component={About} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
