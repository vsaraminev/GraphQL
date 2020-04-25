import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class SongCreate extends Component {
   constructor(props) {
      super(props);

      this.state = {
         title: ''
      };
   }

   onSubmit(event) {
      event.preventDefault();
      this.props.mutate({
         variables: {
            title: this.state.title
         }
      });
   }

   render() {
      return (
         <div>
            <h3>Create a New Song</h3>
            <form onSubmit={this.onSubmit.bind(this)}>
               <label>Song Title:</label>
               <input 
                  type="text" 
                  onChange={event => this.setState({ title: event.target.value })} 
                  value={this.state.title}
               />
            </form>
         </div>
      )
   }
};

const mutation = gql`
   mutation addSong($title: String) {
      addSong(title: $title ) {
         id
         title
      }
   }
`;

export default graphql(mutation)(SongCreate);