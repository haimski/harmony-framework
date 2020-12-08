import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
// import EventBoardActions, { eventBoardSelector } from 'actions/redux/eventBoard';

interface Props {

}

class EventBoard extends React.Component<Props> {
	render() {
		return (
			<div>
				EventBoard New Container
			</div>
		);
	}
}

export default baseConnect(EventBoard,
	(state: ApplicationState) => {
		return {

		};
	},
	{

	}
);
