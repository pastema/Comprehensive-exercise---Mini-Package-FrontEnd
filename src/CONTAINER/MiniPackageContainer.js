import { connect } from 'react-redux'
import MiniPackageWrapper from '../MINIPACKAGE/MiniPackageWrapper';
import MiniPackageResource from '../API/MiniPackageResource';

// const mapStateToProps = state => ({
//   isOnlyActive: state.todoResource.isOnlyActive,
//   todos: state.todoResource.todos.filter(_ => {
//     return state.isOnlyActive
//       ? _.status === 'active'
//       : true
//   })
// });

const mapDispatchToProps =  dispatch => ({
  createPackage: newTodo => {
    const miniPackage = {
      packagenumber: newTodo[0],
      receiver: newTodo[1],
      phonenumber: newTodo[2],
      weight: newTodo[3],
      status: newTodo[4]
    };
    MiniPackageResource.createPackage(miniPackage)
      .then(res => res.json())
      .then(({packageNumber, receiver, phonenumber, status, bookingTime}) => {
        dispatch({
          type: 'ADD_PACKAGE',
          payload: {packageNumber, receiver, phonenumber, status, bookingTime}
        })
      })
  },
  refreshTodos: packages => dispatch({
    type: 'REFRESH_PACKAGES',
    payload: packages
  })
});

export default connect(
  null,
  mapDispatchToProps
)(MiniPackageWrapper)
