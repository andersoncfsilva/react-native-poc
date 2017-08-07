

let CampaignsService = {
  gethome: function (callback = null) {
    let param = {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'User-Agent': 'Dinda Android/42',
        'Authorization': 'Basic aW9zX2FwcDo0L0crTDMxNHRZOEJPUWZvOENUaFpRPT0='
      }
    }

    return fetch('https://sqa-dinda-api.edenbrasil.com.br/mobile/home?carousel=true', param)
      .then((response) => response.json())
      .then((json) => { if (callback) callback(json) })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default CampaignsService;