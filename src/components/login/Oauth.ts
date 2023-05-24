const KAKAO_CLIENT_ID = "723304452fed4f3c110678180f09ece6";
const KAKAO_REDIRECT_URI = "http://localhost:3000/oauth/kakao";

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;

const NAVER_CLIENT_ID = "YDmaPr5AwyhBuTHwoUUM";
const NAVER_CLIENT_SECRET = "MDuxZLS3rQ";
const NAVER_STATE = "seoulbomo";
const NAVER_REDIRECT_URI = "http://localhost:300  0/oauth/naver";

export const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${NAVER_STATE}&redirect_uri=${NAVER_REDIRECT_URI}`;
