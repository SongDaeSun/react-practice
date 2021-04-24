import React, {Component} from 'react';

class Subject extends Component {
    render(){
      return (
        <header>
          <h1> {this.props.title} </h1>
          {this.props.sub}
        </header>
      );
    }
}

//외부사용 허용
export default Subject;