import { UserAPI } from '../utils/agent';

export const createUser = async (data) => {
    try{
        const response = await UserAPI.create(data);
        return response.data;
    }catch(error){
        console.log("Error creating user", error);
        throw error;
    }
};