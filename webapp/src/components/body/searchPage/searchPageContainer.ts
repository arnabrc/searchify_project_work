import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchPage from './searchPage';
import { RootState } from '../../reducers/reducers';
import { getSearchifyDetail } from './searchPageActions';

const mapStateToProps = (state: RootState, ownProps: any) => {
    return {
        items: state.searchifyDetailsReducer.items
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        ...bindActionCreators({getSearchifyDetail}, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);