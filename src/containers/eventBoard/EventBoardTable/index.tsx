import * as React from 'react';
import { baseConnect } from '@base/features/base-redux-react-connect';
import { ApplicationState } from 'actions/redux';
// import EventBoardTableActions, { eventBoardTableSelector } from 'actions/redux/eventBoardTable';

interface Props {

}

class EventBoardTable extends React.Component<Props> {
	render() {
		return (
			<div className="container">
				EventBoardTable New Container
			</div>
		);
	}
}

export default baseConnect(EventBoardTable,
	(state: ApplicationState) => {
		return {

		};
	},
	{

	}
);
