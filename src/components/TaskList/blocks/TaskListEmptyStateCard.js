import emptyTaskIcon from '../../../assets/img/empty-note.png'
import { Card, Image, Button } from 'react-bootstrap'
import { LOAD_DEMO_TASK } from '../../../constant/localStorageKeys'

function TaskListEmptyStateCard({ setTaskList }) {

  if (sessionStorage.getItem(LOAD_DEMO_TASK)) {
    sessionStorage.removeItem(LOAD_DEMO_TASK)
    
  }

  function setMockData() {
    /* TODO:
     idk why need to force raload then only can avoid invalid import data issue.
     This only happend when the user load the mock data twice
    */
    sessionStorage.setItem(LOAD_DEMO_TASK, true)
    window.location.reload()
  }

  return (
    <Card className="text-center">
      <Card.Body>
        <div>
          <h5>List is Empty</h5>
          <div>Click the create button to create new task</div>       
        </div>
      </Card.Body>

    </Card>
  )

}

export default TaskListEmptyStateCard