var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

class Notes extends React.Component{
  static propTypes: {
    username: React.PropTypes.string.isRequired,
    notes: React.PropTypes.array.isRequired,
    addNote: React.PropTypes.func.isRequired
  }

  render(){
    let notes = this.props.notes;
    return(
      <div>
        <h3>Notes for {this.props.username}</h3>
        <AddNote username={this.props.username} addNote = {this.props.addNote} />
        <NotesList notes={notes} />
      </div>
    )
  }
};

export default Notes;
