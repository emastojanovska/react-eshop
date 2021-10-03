import { connect } from 'react-redux';
import { selectIsFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux'
import CollectionOverview from './collection-overview.component'

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer;
 