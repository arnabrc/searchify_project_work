import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchPage from './searchPage';
import { RootState } from '../../reducers/reducers';

const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        titles: state.searchifyDetailsReducer.titles
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        ...bindActionCreators({}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);