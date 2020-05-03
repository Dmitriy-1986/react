import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import {apiUrl} from '../../api/baseUrl';
import {connect} from 'react-redux';
import { getUserByIDAction } from '../../redux/action/actionCreators';

class UserProfilePage extends React.Component {

    
   
    render() {
        console.log(this.props)
        const {isFetching, user} = this.props;
        if(isFetching) {
             return <CircularProgress color="secondary" />   
        }
        return <div>{JSON.stringify(user)}</div>

    }

    componentDidMount() {
        const id = this.props.match.params.id;
        this.props.getUserById(id)
    }
    
    
}
const mapStateToProps = (state) => ({
    user: state.usersReducer.user,
    isFetching: state.usersReducer.isUserLoading
})

const mapDispatchToProps = (dispatch) => ({
    getUserById: (id) => dispatch(getUserByIDAction(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage)