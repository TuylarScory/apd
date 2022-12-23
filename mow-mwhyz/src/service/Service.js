export const API_BASE_URL = 'http://localhost:8080';
export const ACCESS_TOKEN = 'accessToken';

const request = (options) => {

    const headers = new Headers({

        'Content-Type': 'application/json',

    })

    if (localStorage.getItem(ACCESS_TOKEN)) {

        headers.append('Authorization', 'Bearer ' + localStorage.getItem(ACCESS_TOKEN))

    }

    const defaults = { headers: headers };
    options = Object.assign({}, defaults, options);

    return fetch(options.url, options)
        .then(response =>

            response.json().then(json => {

                if (!response.ok) {

                    return Promise.reject(json);

                }

                return json;

            })
        );
};


//Public - Login
export function login(loginRequest) {
    return request({
        url: API_BASE_URL + "/merry/login",
        method: 'POST',
        body: JSON.stringify(loginRequest)
    });
}

// Private - Current User or User Profile 
export function getCurrentUser() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/merry/user/me",
        method: 'GET'
    });
}


// Private - Arrpoved for user
export function approvedMember(member) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/admin/authorize_user",
        method: 'PUT',
        body: JSON.stringify(member)
    });
}


// Private - Pending Member 
export function getPendingMember() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/member/pending",
        method: 'GET'
    });
}

// Private - All Member 
export function getAllMember() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/member",
        method: 'GET'
    });
}

// Private - Approved Partner
export function getApprovedMember() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({

        url: API_BASE_URL + '/merry/user/member/approved/',
        method: 'GET'
    });
}

// Private - Single Member Profile 
export function getSingleMember(memberId) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here" + memberId)
    return request({

        url: API_BASE_URL + "/merry/user/member/" + memberId,
        method: 'GET',
        data: JSON.stringify(memberId)
    });
}


// Private - Pending Partner
export function getPendingPartner() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/partner/pending",
        method: 'GET'
    });
}

// Private - All Partner
export function getAllPartner() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/partner",
        method: 'GET'
    });
}

// Private - Approved Partner
export function getApprovedPartner() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({

        url: API_BASE_URL + '/merry/user/partner/approved/',
        method: 'GET'
    });
}


// Private - Single Partner
export function getSinglePartner(partnerId) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here" + partnerId)
    return request({

        url: API_BASE_URL + "/merry/user/partner/" + partnerId,
        method: 'GET',
        data: JSON.stringify(partnerId)
    });
}

// Private - Pending Volunteer
export function getPendingVolunteer() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/volunteer/pending",
        method: 'GET'
    });
}

// Private - All Volunteer
export function getAllVolunteer() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/user/volunteer",
        method: 'GET'
    });
}

// Private - Approved Partner
export function getApprovedVolunteer() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({

        url: API_BASE_URL + '/merry/user/volunteer/approved/',
        method: 'GET'
    });
}

// Private - Single Volunteer
export function getSingleVolunteer(volunteerId) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here" + volunteerId)
    return request({

        url: API_BASE_URL + "/merry/user/volunteer/" + volunteerId,
        method: 'GET',
        data: JSON.stringify(volunteerId)
    });
}


// Private - All Meal
export function getAllDishes(dishId) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here" + dishId)

    return request({

        url: API_BASE_URL + '/merry/partner/dish/all/' + dishId,
        method: 'GET',
        data: JSON.stringify(dishId)
    });
}

// Private - Pending Meal
export function getPendingDishes(dishId) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here : " + dishId)
    return request({

        url: API_BASE_URL + '/merry/partner/dish/pending/' + dishId,
        method: 'GET',
        data: JSON.stringify(dishId)
    });
}


//Private - Approve Meal
export function getApprovedDishes(dishId) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here : " + dishId)
    return request({

        url: API_BASE_URL + '/merry/partner/dish/' + dishId + '/approved',
        method: 'GET',
        data: JSON.stringify(dishId)
    });
}

// Private - Single Dish
export function getSingleDishes(did) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here" + did)
    return request({

        url: API_BASE_URL + '/merry/partner/dish/' + did,
        method: 'GET',
        data: JSON.stringify(did)
    });
}

// Private - Single Approve Meal 
export function getSingleApprovedDishes(id) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log("Key is here" + id)
    return request({

        url: API_BASE_URL + '/merry/partner/dish/approved/' + id,
        method: 'GET',
        data: JSON.stringify(id)
    });
}


// Private - Approve Meal 
export function approvedDish(dish) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/admin/authorize_dish",
        method: 'PUT',
        body: JSON.stringify(dish)
    });
}

// Private - Display Image
export function displayImage(id) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log(id)
    return request({
        url: API_BASE_URL + '/merry/image/' + id,
        method: 'GET',
        data: JSON.stringify(id)
    });
}

// Private - Meal Order
export function mealOrder(dish) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log(dish)
    return request({
        url: API_BASE_URL + '/merry/mod/order',
        method: 'POST',
        body: JSON.stringify(dish)
    });

}

// Private - Get User's Meal Order Delivery
export function getUserMOD() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/mod/me",
        method: 'GET'
    });
}

//Private - Get Single User's Meal Order Delivery
export function getSingleMOD(id) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log(id)
    return request({
        url: API_BASE_URL + "/merry/mod/" + id,
        method: 'GET',
        data: JSON.stringify(id)
    });
}

// Private - Status change for volunteer 
export function changeStatus(status) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    return request({
        url: API_BASE_URL + "/merry/mod/change_status",
        method: 'PUT',
        body: JSON.stringify(status)
    });
}

// Private - View Single Meal Order Delivery
export function viewSingleMOD(type, id) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }
    console.log(id)
    return request({
        url: API_BASE_URL + "/merry/mod/" + type + "/" + id,
        method: 'GET',
        data: JSON.stringify(id)
    });
}

// Private - View all MOD for admin
export function viewAllMOD() {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/merry/mod/all",
        method: 'GET',
    });
}

// Private - View MOD status
export function viewMODStatus(status) {
    if (!localStorage.getItem(ACCESS_TOKEN)) {
        return Promise.reject("No access token set.");
    }

    return request({
        url: API_BASE_URL + "/merry/mod/all/" + status,
        method: 'GET',
        data: JSON.stringify(status)
    });
} 