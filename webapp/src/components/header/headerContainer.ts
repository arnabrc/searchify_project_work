import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './header';
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);