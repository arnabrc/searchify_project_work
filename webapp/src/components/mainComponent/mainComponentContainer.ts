import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MainComponent from './mainComponent';
import { RootState } from '..//reducers/reducers';
import { searchAllSearchifyDetails } from '../body/searchPage/searchPageActions';

const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        loading: state.searchifyDetailsReducer.loading,
        userSearch: state.searchifyDetailsReducer.userSearch
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatch, 
        ...bindActionCreators({searchAllSearchifyDetails}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);