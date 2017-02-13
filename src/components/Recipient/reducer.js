
const recipients_reducer = (recipients = [], action) => {
  switch (action.type){

  case 'ADD_RECIPIENT':
    return recipients.concat({
      id: action.newID,
      detail: action.detail,
      mailing: action.mailing,
    });

  case 'DEL_RECIPIENT':
    return recipients.filter((recipient)=>{
      return !(recipient.id === action.recipient && recipient.mailing === action.mailing);
    });

  case 'UPDATE_RECIPIENT':
    return recipients.map((r)=>{
      r.detail = (r.id === action.recipient) ? action.detail : r.detail;
      return r;
    });

  default: return recipients;
  }
};

export default recipients_reducer;
