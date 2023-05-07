import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../core/firebase-config/firebase.config";

export const getGroupByIDUser = (id) => async (dispatch) => {
    try {
        const groupRef = collection(db, 'Group');
        const groupQuery = query(groupRef, where('groupMember', 'array-contains', `${id}`));
        const groupResult = await getDocs(groupQuery);
        const result = groupResult.docs.map((item,index)=>({...item.data(),id: item.id}))
        return result;
    } catch (err) {
        return false
    }
}