/*jshint esversion: 6 */

import React from "react";
//import axios from "axios";
import { SpotifyApiContext, User } from "react-spotify-api";
//const token = "AQCoGSOHwj0dbMoECCeFUIr2L453iImJNogaBGbRnnUC2xRl9wx1uGA2Ju7dJM5lIPTqixguimHD4NoW8KYPMuvCCudUZwPnJ2XlfFVd_sAj9c83cpxFqL8mAFMp5GuQ2K0bng";
//const tokenAPI = "https://accounts.spotify.com/api/token";
//const auth = "https://accounts.spotify.com/authorize?client_id=f252302e8fcd482c926b63358d6377f2&response_type=token&redirect_uri=https://mdflk.csb.app/";

export default class Spotify extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }



  render() {
    return (
      <div>
        <span>Hi!! There </span>
        <SpotifyApiContext.Provider value={token}>
        <User>
  {(user, loading, error) =>
      user ? (
          <ul>
              <li>Name - {user.display_name}</li>
              <li>ID - {user.id}</li>
          </ul>
      ) : null
  }
</User>
</SpotifyApiContext.Provider>
      </div>
    );
  }
}
