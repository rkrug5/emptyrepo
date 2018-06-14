import React from 'react';
// import pics from "./src/components/pics.json";
import Card from './Card';


class Images extends React.Component {


  // The render method returns the JSX that should be rendered
  render() {
    return ( <div>
 {this.state.pics.map(pic => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={pic.id}
            // key={friend.id}
            name={pic.name}
            image={pic.src}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
	  </div>);
}
}



export default Images;