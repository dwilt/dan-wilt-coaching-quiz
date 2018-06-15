import { connect } from 'react-redux';

import { subscribedToMailingListSelector } from 'src/selectors';

import { toggleSubscribedToMailingListAction as onChange } from 'src/store/quiz/quiz.actions';

import SubscribeToMailingListCheckbox from './SubscribeToMailingListCheckbox.component';

export default connect(
    (st) => ({
        checked: subscribedToMailingListSelector(st),
    }),
    {
        onChange,
    }
)(SubscribeToMailingListCheckbox);
