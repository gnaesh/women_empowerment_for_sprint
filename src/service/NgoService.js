import axios from 'axios';

// Create services for other components in this way. 

const getNgoByIdService = (ngoid) => {
    console.log(`getNgoByIdService`);
    return axios.get(`/getbyngoid/${ngoid}`);
}
const getAllNgoService = () => {
    console.log(`getNgoByIdService`);
    return axios.get(`getallngo`);
}

const getNgoByLocationService = (ngolocation) => {
    console.log(`getNgoByLocationService`);
    return axios.get(`/getngobylocation/${ngolocation}`);
}

const getNgoByMotiveService = (ngomotive) => {
    console.log(`getNgoByLocationService`);
    return axios.get(`/getmgobymotive/${ngomotive}`);
}


// const addEmpService = (emp) => {
//     console.log(`getEmpByIdService`);
//     return axios.post(`/emp/addemp`, emp);
// }

// const updateEmpService = (emp) => {
//     console.log(`getEmpByIdService`);
//     return axios.post(`/emp/updateemp`, emp);
// }

// const deleteEmpService = (eid) => {
//     console.log(`getEmpByIdService`);
//     return axios.post(`/emp/deleteempbyid${eid}`);
// }

// const getEmpByNameService = (firstName) => {
//     console.log(`getEmpByIdService`);
//     return axios.post(`/emp/getbyname/${firstName}`);
// }

export { getNgoByIdService , getAllNgoService, getNgoByLocationService, getNgoByMotiveService};
