import instance from "../api";

export const getDragons = () => instance.get(`/dragons`); 
// export const getOneDragon = (id) => instance.get(`/dragons/${id}`); 
