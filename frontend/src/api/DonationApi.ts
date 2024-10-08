import axios from "axios";

export function callApiUpdateDonation() {
  const url: string = `http://www.mhk154.shop:8081/haggle-credit/itemSell/updatedonation`;
  return axios
    .put(url, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((Response) => {
      return;
    })
    .catch((Error) => {
      console.log(Error);
  });
}

export function callApiDonationList() {
  const url: string = `http://www.mhk154.shop:8081/haggle-credit/itemdonation/selectall`;
  return axios
    .get(url)
    .then((Response) => {
      return Response.data;
    })
    .catch((Error) => {
      console.log(Error);
      return [];
    })
}

export function callApiDonationTotal() {
  const url: string = `http://www.mhk154.shop:8081/haggle-credit/itemdonation/selectalldonation`;
  return axios
    .get(url)
    .then((Response) => {
      return Response.data;
    })
    .catch((Error) => {
      console.log(Error);
    })
}

export function callApiParticipantDonation(iNo: number, uNo: number, uaNo: number) {
  const url: string = `http://www.mhk154.shop:8081/haggle-credit/itemdonation/participant?bid=100&iNo=${iNo}&uNo=${uNo}&uaNo=${uaNo}`;
  return axios
    .get(url)
    .then((Response) => {
      return Response.data;
    })
    .catch((Error) => {
      console.log(Error);
    })
}

export function callApiDetailDonation(iNo: number) {
  const url: string = `http://www.mhk154.shop:8081/haggle-credit/itemdonation/selectone?iNo=${iNo}`;
  return axios
    .get(url)
    .then((Response) => {
      return Response.data;
    })
    .catch((Error) => {
      console.log(Error);
    })
}