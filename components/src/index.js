import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard'

const App= ()=>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="John Doe"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane Doe"/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Mr. Hola"/>
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'))