export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

const request = (options) => {

    const headers = new Headers({

        'Content-Type': 'application/json',

    })
    
    if(localStorage.getItem(ACCESS_TOKEN)) {

        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))

    }

    const defaults = {headers: headers};
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
    .then(response => 

        response.json().then(json => {

            if(!response.ok) {
                console.log("Not Ok");

                return Promise.reject(json);

            }
            console.log("OK?");

            return json;

        })
    );
};








export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/merry/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

export function getCurrentUser() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/merry/user/me",
        method: 'GET'
    });
    
}

export function getPendingMember() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/member/pending",
        method: 'GET'
    });
}

export function approvedMember(member) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/admin/authorize_user",
        method: 'PUT',
        body: JSON.stringify(member)
    });
}

export function getAllMember() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/member",
        method: 'GET'
    });
}

export function getPendingPartner() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/partner/pending",
        method: 'GET'
    });
}

export function getAllPartner() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/partner",
        method: 'GET'
    });
}

export function getPendingVolunteer() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/volunteer/pending",
        method: 'GET'
    });
}

export function getAllVolunteer() {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/volunteer",
        method: 'GET'
    });
}


export function getSingleMember(memberId) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here"+memberId)
    return request({
        
        url: API_BASE_URL +"/merry/user/member/"+memberId,
        method: 'GET',
        data: JSON.stringify(memberId)
    });
}

export function getSinglePartner(partnerId) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here"+partnerId)
    return request({
        
        url: API_BASE_URL +"/merry/user/partner/"+partnerId,
        method: 'GET',
        data: JSON.stringify(partnerId)
    });
}

export function getSingleVolunteer(volunteerId) {
    if(!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here"+volunteerId)
    return request({
        
        url: API_BASE_URL +"/merry/user/volunteer/"+volunteerId,
        method: 'GET',
        data: JSON.stringify(volunteerId)
    });
}

