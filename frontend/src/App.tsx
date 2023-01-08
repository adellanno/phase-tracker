import "./App.css";
import Home from "./components/pages/Home/Home";
import config from './config'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: `http://127.0.0.1:${config.BACKEND_HOST_PORT ? config.BACKEND_HOST_PORT : 8000}/graphql`,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app-container">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
