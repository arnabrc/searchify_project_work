import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Footer from './footer';
import { RootState } from '..//reducers/reducers';

const mapStateToProps = (state: RootState, ownProps: any) => {
    return {};
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch, 
        ...bindActionCreators({}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);