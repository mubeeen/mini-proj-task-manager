import { Container, Navbar } from 'react-bootstrap';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <Container className="d-flex flex-column min-vh-100">
        <Navbar bg="light" className="mb-4">
          <Navbar.Brand>Task Management System</Navbar.Brand>
        </Navbar>

        <div className="mb-3">
          <TaskList />
        </div>
      </Container>
    </div>
  );
}

export default App;
