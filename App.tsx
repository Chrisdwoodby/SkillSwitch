import React from "react";
import Homepage from './client/Homepage.tsx';

class App extends React.Component {
  constructor(props) {
      super(props)
  }
  render() {
    return (
      <div>
        <Homepage/>
      </div>
    )
  }
}

export default App;