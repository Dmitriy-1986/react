import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { connect } from 'react-redux';
import {getAllUsersAction} from '../../redux/action/actionCreators';

class UserPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
           
            email: '',
            password: ''
        }
    }
    // onUserItemClicked = (id) => this.props.history.push('/users/' + id);
    
    onUserItemClicked = (userId) => this.props.history.push('/users/'+ userId)

    renderUsers() {
        const users = [];
       for(const user of this.props.users) {
           users.push(<div onClick={() => this.onUserItemClicked(user._id)} key={user.id}>{user.email}</div>)
       }
        return users;
    }
    // onTryAgainClick = () => {
    //     this.setState({isFetching: true, error: null});
    //     const self = this
    //     axios.get('http://10.3.44.19:8080/api/secret/allUsers')
    //     .then(({data}) => {
    //         self.setState({isFetching: false, users: data.users});
    //         console.log(data);
    //     })
    //     .catch((err) => {self.setState({isFetching: false, error: err.message})});
    // }
    onEmailChanged = (event) => {
        this.setState({email: event.target.value})
    }
    onPassChange = (event) => {
        this.setState({password: event.target.value})
    }
    onAddUserClicked = () => {}


    render() {
        const {email, password} = this.state;
        const {isFetching, error} = this.props;

        if(isFetching) {
             return <CircularProgress color="secondary" />   
        }
        // if(error) {
        //     return (
        //         <React.Fragment>
        //             <p style={{color: 'red'}}>{error}</p>
        //             <button onClick={this.onTryAgainClick}>Try again</button>
        //         </React.Fragment>
        //     )
        // }
        return (
            <div >
                <input onChange={this.onEmailChanged} value={email} />
                <input onChange={this.onPassChange} value={password} />
                <button onClick={this.onAddUserClicked}>Add user</button>
                {error && 
                    (
                        <React.Fragment>
                            <p style={{color: 'red'}}>{error}</p>
                            <button onClick={this.onTryAgainClick}>Try again</button>
                        </React.Fragment>
                    )

                }
                {this.renderUsers()}
            </div>
        )

    }

    componentDidMount() {
       this.props.getAllUsers();
    }
    
    
}

const mapStateToProps =(store) => ({
    users: store.usersReducer.users,
    isFetching: store.usersReducer.isUsersLoading,
    error: store.usersReducer.usersError,
}) 

const mapDispatchToProps = (dispatch) => ({
    getAllUsers: () => dispatch(getAllUsersAction()) // -> rootSaga.js
})

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);























// const myCustomPromis = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hello World');
//         reject(new Error('Error'))
//     }, 2000)
// });
// console.log('111111111111111111111');

// function testPropm() {
//     myCustomPromis()
//     .then((res) => {console.log(res)})
//     .catch((err) => {console.log(err)})
//     .finally(() => {console.log("finaly")});
// }

// testPropm();

// console.log('22222222222222222222');

// async function test() {
//     try{
//         const res = await myCustomPromis();
//         console.log(res);
//     }catch(err) {
//         console.log(err);
//     }finally {
//         console.log('Finally');
//     }
// }

// test();