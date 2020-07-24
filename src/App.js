import React from 'react';
import './App.css';
import TableRow from './Lifecycle'


      class App extends React.Component{

        state = {
          todos: null
        }
        
        async componentDidMount() {
            this.setState({
              todos: await fetch('http://jsonplaceholder.typicode.com/todos')
              .then(res => res.json ())
              .catch(({message}) => alert("wait a moment"))
            })
        }

        render(){
        const {todos} = this.state

        return(
        <div className="App">
          <h3>TODO LIST</h3>
          {
          todos ? (
            <table className="table">
              <thead>
                {
                  <TableRow data={Object.keys (todos[0])} type= "start"/>
                }

              </thead>
              <tbody>
                {
                  todos.map(
                    (obj, i) => <TableRow data={Object.values(obj)} type="finish" key={i} />
                  )
                }
              </tbody>
              </table>
              
              ):null
          }
        </div>
        ) 
              }
            }       
        
      
export default App;
