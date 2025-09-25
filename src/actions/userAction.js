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


export const getUsers  = async () => {
    try{
        const response  = await UserAPI.getAll();
        return response.data;
    }catch(error){
        console.log("Error Fetch User", error);
        throw error;
    }

}