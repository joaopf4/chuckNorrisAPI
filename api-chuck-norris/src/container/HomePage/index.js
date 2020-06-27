import React from 'react';
import { connect } from 'react-redux';
import { getAllJokes } from '../../actions/chuckFacts';
//import jokes from '../../reducers/chuckFacts';

export class HomePage extends React.Component {
    componentDidMount(){
        this.props.getAllJokes()
    }


    
    constructor(props){
        super(props)
        this.state = {
            
        }
        //this.props.getAllJokes()
    }

    render(){
        const {categories} = this.props
        return(
        <div>

            <div>
               <p>{categories.value}</p>             
            </div>
            
        </div>
        )
    };
};

const mapStateToProps = state => ({
    jokes: state.chuckFacts.jokes
});

const mapDispatchToProps = dispatch => {
    return {
        getAllJokes: () => dispatch(getAllJokes()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);