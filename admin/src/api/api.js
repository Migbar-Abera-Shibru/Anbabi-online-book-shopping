import axios from "axios";
/*
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
*/

const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjc1OGRhZDVhNTc1OGY3YjJjYmE3YSIsImlzQWRtaW4iOnRydWUsImlzU3VwZXJBZG1pbiI6ZmFsc2UsImlzRGVsaXZlcnlNYW4iOmZhbHNlLCJ1c2VyTmFtZSI6ImFkbWluIiwiaWF0IjoxNjU2MTg4NDgzLCJleHAiOjE2NjM5NjQ0ODN9.RKzK2EgD24jDx5u0i2DkpisVcx6sMLE41HPiyu0pei8";

const api = axios.create({
    baseURL: "http://127.0.0.1:3000/api/",
    headers: { token: `Bearer ${TOKEN}` },
});

export default api;
