

let CampaignsService =  {
  gethome: function (callback = null){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((json) => { if(callback) callback(json) } )
      .catch((error) => {
        console.error(error);
      });
  }
}

export default CampaignsService;