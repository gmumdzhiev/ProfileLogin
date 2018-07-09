import React from 'react';
import Me from '../img/me.jpg'
export class Pop extends React.Component {
  render() {
    return (
      <div
        style={{
          zIndex: '100px',
          color: 'white',
          background: 'grey',
          boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.5)',
          padding: '20px 25px',
          display: 'absolute',
          textAlign: 'right',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '5%',
          width: '200px',

        }
        }>

        <img id='me' src={Me} alt='Me.icon'
          style={{
            height: '100px',
            width: '100px',
            padding: '0 7px',
            borderRadius: '210%',
            alignItems: 'left',
            display: 'absolute'
          }}
        />

        Full name: Georgi Mumdzhiev.< br />
        IT Skills: JavaScript & React JS < br />
        IT Skills: JavaScript & React JS. < br />
        Graphic Skills: Adobe Creative Cloud. < br />
        Location : Antwerp, Belgium. < br />
        Email : george.mumdzhiev@gmail.com <br />
        Telephone: +359 / 85 13 61 < br />

      </div >
    );
  }
}
export default Pop 