import React from 'react';
import Badge from './components/Badge.jsx';
import Layout from "./pages/layout/Layout.jsx"
import Main from "./pages/main/Main.jsx" 

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Badge picture={"https://images.pexels.com/photos/2616007/pexels-photo-2616007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"}
        ></Badge>
        </Layout>
    </React.Fragment>
  );
}

export default App;
 