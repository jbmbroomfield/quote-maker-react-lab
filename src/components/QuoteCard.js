import React from 'react';
import { upvoteQuote, downvoteQuote } from '../actions/quotes';
import { connect } from 'react-redux';


const QuoteCard = ({ quote, upvoteQuote, downvoteQuote }) => {

  const handleUpvote = quoteId => {
    upvoteQuote(quoteId)
  }

  const handleDownvote = quoteId => {
    downvoteQuote(quoteId)
  }

  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{quote.content}</p>
            <footer>- author <cite title="Source Title">{quote.author}</cite></footer> 
          </blockquote>
        </div>
        <div className="float-right">
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button
              onClick={() => handleUpvote(quote.id)}
              type="button"
              className="btn btn-primary"
            >
              Upvote
            </button>
            <button
              onClick={() => handleDownvote(quote.id)}
              type="button"
              className="btn btn-secondary"
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>
            Votes: { quote.votes }
          </div>
        </div>
      </div>
    </div>
  )
}

  

export default connect(null, {upvoteQuote, downvoteQuote})(QuoteCard);
