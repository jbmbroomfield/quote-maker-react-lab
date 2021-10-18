export default (state = [], action) => {
  switch(action.type) {
    case 'ADD_QUOTE':
      return [...state, action.quote]
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    case 'UPVOTE_QUOTE':
      return state.map(quote => upvoteQuote(quote, action.quoteId))
    case 'DOWNVOTE_QUOTE':
      return state.map(quote => downvoteQuote(quote, action.quoteId))
    default:
      return state;
  }
}

const upvoteQuote = (quote, quoteId) => {
  return {
    ...quote,
    votes: quoteId === quote.id ? quote.votes + 1 : quote.votes
  }
}

const downvoteQuote = (quote, quoteId) => {
  return {
    ...quote,
    votes: Math.max(0, quoteId === quote.id ? quote.votes - 1 : quote.votes)
  }
}