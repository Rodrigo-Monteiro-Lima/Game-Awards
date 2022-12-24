const baseApiURL= "http://zd-mvw.anonymous.frontend.exp.direct:8080/api/"

export const clientGetGames = async () => {
  const response = await fetch(`${baseApiURL}games`);
  const json = await response.json();
  return json;
};

export const clientSendingVotes = (id:number) => {
  const requestOptions = {
    method: 'PATCH',
  };
  
  fetch(`${baseApiURL}games/${id}/vote`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
};

export const clientGetWinner = async () => {
  const response = await fetch(`${baseApiURL}games`);
  const json = await response.json();
  return json[0];
};